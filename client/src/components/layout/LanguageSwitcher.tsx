import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Globe } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  
  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === i18n.language) || languages[0];
  };
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full w-9 h-9 flex items-center justify-center"
        >
          <Globe className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-0">
        <div className="py-2">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-muted ${
                i18n.language === language.code ? 'bg-muted font-medium' : ''
              }`}
              onClick={() => changeLanguage(language.code)}
            >
              <span className="text-base">{language.flag}</span>
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}