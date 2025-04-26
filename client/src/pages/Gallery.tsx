import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image, Info, Users, Shield, User, Upload, Plus } from 'lucide-react';

// Gallery Images
const galleryImages = [
  // Logo Category
  {
    category: "logo",
    src: "/images/rudra-logo.png",
    alt: "Rudra 24 Secure Logo",
    title: "Company Logo",
    description: "Official Rudra 24 Secure logo used across branding materials"
  },
  {
    category: "logo",
    src: "/images/rudra-logo-gold.jpg",
    alt: "Rudra 24 Golden Logo",
    title: "Golden Logo Version",
    description: "Gold variant of the company logo used for special materials"
  },
  {
    category: "logo",
    src: "/images/rudra-text-logo-new.jpg",
    alt: "Rudra 24 Text Logo",
    title: "Text Logo",
    description: "Text-based logo with the company name and branding"
  },
  
  // Operations Category
  {
    category: "operations",
    src: "/images/operations/security-1.jpg",
    alt: "Security Guard Services",
    title: "Security Operations",
    description: "Professional security guards in action protecting assets"
  },
  {
    category: "operations",
    src: "/images/operations/security-2.jpg",
    alt: "Corporate Security",
    title: "Corporate Security",
    description: "Specialized security services for corporate environments"
  },
  {
    category: "operations",
    src: "/images/operations/housekeeping.jpg",
    alt: "Housekeeping Services",
    title: "Housekeeping Services",
    description: "Professional housekeeping and cleaning services"
  },
  {
    category: "operations",
    src: "/images/operations/facility.jpg",
    alt: "Facility Management",
    title: "Facility Management",
    description: "Comprehensive facility management services"
  },
  
  // Team Category
  {
    category: "team",
    src: "/images/team/team-1.jpg",
    alt: "Security Team Members",
    title: "Our Security Team",
    description: "The dedicated security professionals at Rudra 24 Secure"
  },
  {
    category: "team",
    src: "/images/team/training.jpg",
    alt: "Training Session",
    title: "Training Programs",
    description: "Professional training sessions for security personnel"
  },
  {
    category: "team",
    src: "/images/team/housekeeping-team.png",
    alt: "Housekeeping Team",
    title: "Housekeeping Staff",
    description: "Our professional housekeeping team in uniform"
  }
];

// Categories for filtering
const categories = [
  { id: "all", label: "All Images", icon: <Image className="w-4 h-4 mr-2" /> },
  { id: "logo", label: "Company Logos", icon: <Shield className="w-4 h-4 mr-2" /> },
  { id: "operations", label: "Operations", icon: <Info className="w-4 h-4 mr-2" /> },
  { id: "team", label: "Our Team", icon: <Users className="w-4 h-4 mr-2" /> }
];

interface FilePreview {
  file: File;
  preview: string;
}

export default function Gallery() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("logo");
  const [selectedFiles, setSelectedFiles] = useState<FilePreview[]>([]);
  
  // Update document title on mount
  useEffect(() => {
    document.title = "Gallery | Rudra 24 Secure";
  }, []);
  
  // Filter images when category changes
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === activeCategory));
    }
  }, [activeCategory]);
  
  // Handle image click to show in full screen modal
  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };
  
  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
  };
  
  // Toggle upload modal
  const toggleUploadModal = () => {
    setUploadModalOpen(!uploadModalOpen);
    // Clear selected files when closing the modal
    if (!uploadModalOpen === false) {
      setSelectedFiles([]);
    }
  };
  
  // Handle category selection for upload
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };
  
  // Handle file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const fileArray = Array.from(e.target.files);
    const newFiles: FilePreview[] = fileArray.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    
    setSelectedFiles(prevFiles => [...prevFiles, ...newFiles]);
  };
  
  // Remove a file from selection
  const removeFile = (index: number) => {
    const updatedFiles = [...selectedFiles];
    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(updatedFiles[index].preview);
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };
  
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Company Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            View images of our security operations, team members, and company branding
          </p>
        </div>
        
        {/* Admin Controls (simplified for demonstration) */}
        <div className="max-w-3xl mx-auto mb-8">
          <Button 
            variant="default" 
            className="bg-blue-700 hover:bg-blue-800 flex items-center"
            onClick={toggleUploadModal}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add New Image
          </Button>
        </div>
        
        {/* Category Tabs */}
        <div className="mb-10">
          <Tabs defaultValue="all" className="max-w-6xl mx-auto" onValueChange={setActiveCategory}>
            <TabsList className="grid grid-cols-4 mb-8">
              {categories.map(category => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center justify-center">
                  {category.icon}
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map(category => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredImages.map((image, index) => (
                    <Card 
                      key={index} 
                      className="overflow-hidden hover:shadow-lg transition-shadow border border-gray-200"
                    >
                      <div 
                        className="h-64 overflow-hidden cursor-pointer"
                        onClick={() => handleImageClick(image.src)}
                      >
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover object-center"
                          onError={(e) => {
                            // If image fails to load, show a placeholder
                            e.currentTarget.src = "https://via.placeholder.com/400x300?text=Image+Not+Available";
                          }}
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium text-blue-800 text-lg mb-1">{image.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{image.description}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {image.category}
                          </span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-blue-600 hover:text-blue-800 p-0"
                            onClick={() => handleImageClick(image.src)}
                          >
                            View
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        {/* Full Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="max-w-6xl max-h-screen">
              <button 
                className="absolute top-4 right-4 text-white bg-blue-800 rounded-full w-10 h-10 flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
              >
                ✕
              </button>
              <img 
                src={selectedImage} 
                alt="Gallery image" 
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
          </div>
        )}
        
        {/* Image Upload Modal (simplified) */}
        {uploadModalOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={toggleUploadModal}
          >
            <div 
              className="bg-white rounded-lg p-6 w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold text-blue-800 mb-4">Upload Images</h2>
              
              <form className="space-y-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Select Category
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {categories.slice(1).map(cat => (
                      <div 
                        key={cat.id}
                        className={`border rounded-md p-2 cursor-pointer flex flex-col items-center justify-center hover:bg-blue-50 transition-colors 
                          ${selectedCategory === cat.id ? 'bg-blue-100 border-blue-500 border-2' : ''}`}
                        onClick={() => handleCategorySelect(cat.id)}
                      >
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                          {cat.icon}
                        </div>
                        <span className="text-sm">{cat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Upload Multiple Images
                  </label>
                  <div 
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <input 
                      type="file" 
                      multiple 
                      className="hidden" 
                      id="gallery-image-upload" 
                      accept="image/*"
                      onChange={handleFileSelect}
                    />
                    <label htmlFor="gallery-image-upload" className="cursor-pointer block">
                      <Upload className="mx-auto h-12 w-12 text-blue-500 mb-3" />
                      <p className="text-lg font-medium text-gray-700">Drop files here or click to upload</p>
                      <p className="mt-1 text-sm text-gray-500">You can select multiple images at once</p>
                      <p className="mt-4 text-xs text-gray-400">Supported formats: JPG, PNG, GIF</p>
                    </label>
                  </div>
                </div>
                
                {/* Selected Files Preview */}
                <div className="mb-4">
                  <h3 className="text-sm font-bold text-gray-700 mb-2">
                    Selected Files: {selectedFiles.length > 0 ? `(${selectedFiles.length})` : ''}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedFiles.length === 0 ? (
                      <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center text-xs text-gray-500">
                        No files
                      </div>
                    ) : (
                      selectedFiles.map((file, index) => (
                        <div key={index} className="relative w-20 h-20 group">
                          <img 
                            src={file.preview} 
                            alt={`Preview ${index}`}
                            className="w-full h-full object-cover rounded-md border border-gray-300"
                          />
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            ✕
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                  {selectedFiles.length > 0 && (
                    <div className="mt-2 text-right">
                      <button
                        type="button"
                        onClick={() => setSelectedFiles([])}
                        className="text-sm text-red-600 hover:text-red-800"
                      >
                        Clear All
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-end space-x-3">
                  <Button 
                    variant="outline" 
                    onClick={toggleUploadModal}
                  >
                    Cancel
                  </Button>
                  <Button 
                    className="bg-blue-700 hover:bg-blue-800"
                    type="button"
                  >
                    Upload All Images
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
        
        {/* Image Usage Policy */}
        <div className="mt-16 bg-blue-50 rounded-lg p-6 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-blue-800 mb-3">Image Usage Policy</h2>
          <p className="text-gray-700 mb-2">
            All images in this gallery are the property of Rudra 24 Secure Services Pvt. Ltd. 
            These images are protected by copyright law and may not be reproduced, distributed, 
            or used in any form without explicit written permission.
          </p>
          <p className="text-gray-700">
            For permission to use these images, please contact our office at{" "}
            <a href="mailto:Rudra24securegroup@gmail.com" className="text-blue-700 hover:underline">
              Rudra24securegroup@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}