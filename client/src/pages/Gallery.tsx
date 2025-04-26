import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud } from 'lucide-react';

// Simple Gallery Images Array
const galleryImages = [
  {
    id: 1,
    src: "/images/operations/security-1.jpg",
    title: "Security Operations",
    category: "operations"
  },
  {
    id: 2,
    src: "/images/operations/security-2.jpg",
    title: "Corporate Security",
    category: "operations"
  },
  {
    id: 3,
    src: "/images/operations/housekeeping.jpg",
    title: "Housekeeping Services",
    category: "operations"
  },
  {
    id: 4,
    src: "/images/operations/facility.jpg",
    title: "Facility Management",
    category: "operations"
  },
  {
    id: 5,
    src: "/images/team/team-1.jpg",
    title: "Security Team",
    category: "team"
  },
  {
    id: 6,
    src: "/images/team/training.jpg",
    title: "Training Programs",
    category: "team"
  },
  {
    id: 7,
    src: "/images/team/housekeeping-team.png",
    title: "Housekeeping Staff",
    category: "team"
  },
  {
    id: 8,
    src: "/images/rudra-logo.png",
    title: "Company Logo",
    category: "logo"
  },
  {
    id: 9,
    src: "/images/rudra-logo-gold.jpg",
    title: "Golden Logo",
    category: "logo"
  }
];

// Simple Category Filter
const categories = [
  { id: "all", name: "All Images" },
  { id: "logo", name: "Logos" },
  { id: "operations", name: "Operations" },
  { id: "team", name: "Team" }
];

export default function Gallery() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [displayedImages, setDisplayedImages] = useState(galleryImages);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadCategory, setUploadCategory] = useState("operations");
  
  // Update images when category changes
  useEffect(() => {
    if (activeCategory === "all") {
      setDisplayedImages(galleryImages);
    } else {
      setDisplayedImages(galleryImages.filter(img => img.category === activeCategory));
    }
  }, [activeCategory]);
  
  // Handle image click
  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };
  
  // Close image preview
  const closePreview = () => {
    setSelectedImage(null);
  };
  
  // Toggle upload form
  const toggleUploadForm = () => {
    setShowUploadForm(!showUploadForm);
    // Clear selected files when closing
    if (showUploadForm) {
      setSelectedFiles([]);
    }
  };
  
  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      setSelectedFiles(newFiles);
    }
  };
  
  // Handle upload submit
  const handleUpload = () => {
    if (selectedFiles.length === 0) return;
    
    // This would typically send files to server
    console.log(`Uploading ${selectedFiles.length} files to category: ${uploadCategory}`);
    
    // In a real application, we would make an API call here
    // For now, just simulate successful upload
    alert(`${selectedFiles.length} images would be uploaded to the ${uploadCategory} category!`);
    
    // Reset form
    setSelectedFiles([]);
    setShowUploadForm(false);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-800">Company Gallery</h1>
        <p className="mt-2 text-gray-600">Browse through images of our operations, team and branding</p>
      </div>
      
      {/* Upload Button */}
      <div className="flex justify-center mb-6">
        <Button 
          className="bg-blue-700 hover:bg-blue-800 text-white flex items-center gap-2"
          onClick={toggleUploadForm}
        >
          <UploadCloud size={18} />
          {showUploadForm ? 'Cancel Upload' : 'Add Images'}
        </Button>
      </div>
      
      {/* Simple Upload Form */}
      {showUploadForm && (
        <div className="max-w-lg mx-auto mb-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-blue-800 mb-4">Upload New Images</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Category
            </label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={uploadCategory}
              onChange={(e) => setUploadCategory(e.target.value)}
            >
              {categories.slice(1).map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Images (Multiple)
            </label>
            <div 
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50"
              onClick={() => fileInputRef.current?.click()}
            >
              <input 
                type="file" 
                multiple 
                className="hidden" 
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">Click to select or drag images here</p>
              <p className="text-xs text-gray-400 mt-1">JPG, PNG, GIF up to 10MB</p>
            </div>
          </div>
          
          {selectedFiles.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Selected {selectedFiles.length} file(s):
              </p>
              <ul className="text-sm text-gray-500 list-disc list-inside">
                {selectedFiles.map((file, index) => (
                  <li key={index} className="truncate">
                    {file.name} ({Math.round(file.size / 1024)} KB)
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex justify-end">
            <Button 
              className="bg-blue-700 hover:bg-blue-800"
              onClick={handleUpload}
              disabled={selectedFiles.length === 0}
            >
              Upload Images
            </Button>
          </div>
        </div>
      )}
      
      {/* Simple Category Filters */}
      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${activeCategory === category.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedImages.map((image) => (
          <Card 
            key={image.id}
            className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => handleImageClick(image.src)}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/300x200?text=Image+Not+Available";
                }}
              />
            </div>
            <CardContent className="p-3">
              <h3 className="font-medium text-blue-700">{image.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{image.category}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Image Preview Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closePreview}
        >
          <div className="relative max-w-4xl max-h-full">
            <button 
              className="absolute -top-10 right-0 text-white text-xl"
              onClick={closePreview}
            >
              ✕ Close
            </button>
            <img 
              src={selectedImage} 
              alt="Preview" 
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
      
      {/* Simple Image Usage Policy */}
      <div className="mt-12 bg-blue-50 p-4 rounded-lg max-w-3xl mx-auto">
        <h2 className="text-lg font-semibold text-blue-800 mb-2">Image Usage Policy</h2>
        <p className="text-sm text-gray-700">
          All images are the property of Rudra 24 Secure Services Pvt. Ltd.
          For permission to use these images, please contact 
          <a href="mailto:Rudra24securegroup@gmail.com" className="text-blue-600 ml-1 hover:underline">
            Rudra24securegroup@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}