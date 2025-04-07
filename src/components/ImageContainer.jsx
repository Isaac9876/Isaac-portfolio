import { useState } from 'react';

export const ImageContainer = ({ src, alt, className }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        setHasError(true);
        setIsLoaded(true);
    };

    // Ensure the src path includes the base URL
    const getImagePath = (path) => {
        if (path.startsWith('http')) return path;
        return `/${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
    };

    return (
        <div className={`relative overflow-hidden rounded-2xl ${className}`}>
            <img 
                src={hasError ? `/${import.meta.env.BASE_URL}vite.svg` : getImagePath(src)} 
                alt={alt}
                className={`w-full h-full object-cover transition-all duration-700 hover:scale-105
                          ${isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-lg'}`}
                onLoad={() => setIsLoaded(true)}
                onError={handleError}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
    );

};