import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Image, Info, Users, Shield, User } from 'lucide-react';

// Import images from the brochure
const galleryImages = [
  {
    category: "logo",
    src: "/images/rudra-logo.png",
    alt: "Rudra 24 Secure Logo",
    title: "Company Logo"
  },
  {
    category: "logo",
    src: "/images/rudra-logo-gold.jpg",
    alt: "Rudra 24 Golden Logo",
    title: "Golden Logo"
  },
  {
    category: "logo",
    src: "/images/rudra-text-logo-new.jpg",
    alt: "Rudra 24 Text Logo",
    title: "Text Logo"
  },
  {
    category: "operations",
    src: "/images/operations/security-1.jpg",
    alt: "Security Operations",
    title: "Security Guard Services"
  },
  {
    category: "operations",
    src: "/images/operations/security-2.jpg",
    alt: "Corporate Security",
    title: "Corporate Security"
  },
  {
    category: "operations",
    src: "/images/operations/housekeeping.jpg",
    alt: "Housekeeping Services",
    title: "Housekeeping Services"
  },
  {
    category: "operations",
    src: "/images/operations/facility.jpg",
    alt: "Facility Management",
    title: "Facility Management"
  },
  {
    category: "team",
    src: "/images/team/team-1.jpg",
    alt: "Security Team",
    title: "Security Team"
  },
  {
    category: "team",
    src: "/images/team/training.jpg",
    alt: "Training Session",
    title: "Training Session"
  }
];

// Categories for filtering
const categories = [
  { id: "all", label: "All Images", icon: <Image className="w-4 h-4 mr-2" /> },
  { id: "logo", label: "Logos", icon: <Shield className="w-4 h-4 mr-2" /> },
  { id: "operations", label: "Operations", icon: <Info className="w-4 h-4 mr-2" /> },
  { id: "team", label: "Team", icon: <Users className="w-4 h-4 mr-2" /> }
];

export default function Gallery() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
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
  
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Company Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            View images of our security operations, team members, and company branding
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="mb-10">
          <Tabs defaultValue="all" className="max-w-3xl mx-auto" onValueChange={setActiveCategory}>
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
                      className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => handleImageClick(image.src)}
                    >
                      <div className="h-64 overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover object-center"
                          onError={(e) => {
                            // If image fails to load, show a placeholder
                            e.currentTarget.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
                          }}
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium text-blue-800">{image.title}</h3>
                        <p className="text-sm text-gray-500">{image.alt}</p>
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
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="max-w-6xl max-h-screen">
              <button 
                className="absolute top-4 right-4 text-white bg-blue-800 rounded-full w-10 h-10 flex items-center justify-center"
                onClick={closeModal}
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