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
    <div className="responsive-container page-section">
      <div className="text-center mb-6 animate-slide-up">
        <h1 className="section-title">Company Gallery</h1>
        <p className="section-subtitle">Browse through images of our operations, team and branding</p>
      </div>
      
      {/* Upload Button */}
      <div className="flex justify-center mb-6 animate-fade-in">
        <Button 
          className="bg-blue-700 hover:bg-blue-800 text-white flex items-center gap-2 animate-hover-scale shadow-md"
          onClick={toggleUploadForm}
        >
          <UploadCloud size={18} className={showUploadForm ? "rotate-180 transition-transform duration-300" : "transition-transform duration-300"} />
          {showUploadForm ? 'Cancel Upload' : 'Add Images'}
        </Button>
      </div>
      
      {/* Simple Upload Form */}
      {showUploadForm && (
        <div className="max-w-lg mx-auto mb-8 p-6 bg-white rounded-lg shadow-lg animate-slide-up border border-blue-100">
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
              className="border-2 border-dashed border-blue-300 rounded-lg p-6 text-center cursor-pointer hover:bg-blue-50/30 transition-all duration-300 animate-pulse-slow"
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
              <UploadCloud className="mx-auto h-12 w-12 text-blue-500" />
              <p className="mt-2 text-sm text-gray-600 font-medium">Click to select or drag images here</p>
              <p className="text-xs text-gray-500 mt-1">JPG, PNG, GIF up to 10MB</p>
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
      
      {/* Category Filters with Animation */}
      <div className="flex justify-center flex-wrap gap-3 mb-8 animate-fade-in">
        {categories.map((category, index) => (
          <button
            key={category.id}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm
              ${activeCategory === category.id 
                ? 'bg-blue-700 text-white scale-105 shadow-md' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            onClick={() => setActiveCategory(category.id)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Image Grid with Animation */}
      <div className="image-grid">
        {displayedImages.map((image, index) => (
          <Card 
            key={image.id}
            className="overflow-hidden cursor-pointer animate-hover-scale card-transition animate-fade-in"
            style={{ animationDelay: `${index * 0.05}s` }}
            onClick={() => handleImageClick(image.src)}
          >
            <div className="h-48 sm:h-52 md:h-56 overflow-hidden">
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/300x200?text=Image+Not+Available";
                }}
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-blue-700 text-lg">{image.title}</h3>
              <p className="text-xs text-gray-500 mt-1 bg-gray-100 inline-block px-2 py-0.5 rounded">{image.category}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Enhanced Image Preview Modal with Animation */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closePreview}
        >
          <div className="relative max-w-4xl max-h-full animate-slide-up">
            <button 
              className="absolute -top-12 right-0 text-white text-xl bg-blue-700 hover:bg-blue-800 transition-colors duration-300 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={closePreview}
            >
              ✕
            </button>
            <img 
              src={selectedImage} 
              alt="Preview" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border-2 border-white/10"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
              <p className="text-white text-sm">Click outside the image to close preview</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Enhanced Image Usage Policy */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg max-w-3xl mx-auto shadow-md animate-fade-in">
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