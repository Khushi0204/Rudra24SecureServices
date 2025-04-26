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
  }
];

// Categories for filtering
const categories = [
  { id: "all", label: "All Images", icon: <Image className="w-4 h-4 mr-2" /> },
  { id: "logo", label: "Company Logos", icon: <Shield className="w-4 h-4 mr-2" /> },
  { id: "operations", label: "Operations", icon: <Info className="w-4 h-4 mr-2" /> },
  { id: "team", label: "Our Team", icon: <Users className="w-4 h-4 mr-2" /> }
];

export default function Gallery() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  
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
              className="bg-white rounded-lg p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold text-blue-800 mb-4">Add New Image</h2>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Image Title
                </label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter image title"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Description
                </label>
                <textarea 
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-20"
                  placeholder="Enter image description"
                ></textarea>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Category
                </label>
                <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select category</option>
                  <option value="logo">Logo</option>
                  <option value="operations">Operations</option>
                  <option value="team">Team</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Image File
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50">
                  <Upload className="mx-auto h-8 w-8 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
                </div>
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
                >
                  Upload Image
                </Button>
              </div>
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