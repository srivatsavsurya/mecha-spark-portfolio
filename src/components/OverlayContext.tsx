import React, { createContext, useContext, useState, ReactNode } from 'react';

interface OverlayContextType {
    isOpen: boolean;
    imageSrc: string | null;
    title: string | null;
    description: string | null;
    openOverlay: (imageSrc: string, title?: string, description?: string) => void;
    closeOverlay: () => void;
}

const OverlayContext = createContext<OverlayContextType | undefined>(undefined);

export const OverlayProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [title, setTitle] = useState<string | null>(null);
    const [description, setDescription] = useState<string | null>(null);

    const openOverlay = (src: string, t?: string, d?: string) => {
        setImageSrc(src);
        setTitle(t || null);
        setDescription(d || null);
        setIsOpen(true);
    };

    const closeOverlay = () => {
        setIsOpen(false);
        // Optional: clear state after animation, but for now immediate is fine
    };

    return (
        <OverlayContext.Provider value={{ isOpen, imageSrc, title, description, openOverlay, closeOverlay }}>
            {children}
        </OverlayContext.Provider>
    );
};

export const useOverlay = () => {
    const context = useContext(OverlayContext);
    if (context === undefined) {
        throw new Error('useOverlay must be used within an OverlayProvider');
    }
    return context;
};
