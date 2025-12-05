import { useOverlay } from './OverlayContext';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Overlay = () => {
    const { isOpen, imageSrc, title, description, closeOverlay } = useOverlay();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setIsVisible(false), 500); // Wait for fade out
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-background/95 backdrop-blur-md"
                onClick={closeOverlay}
            />

            {/* Content */}
            <div className="relative z-10 max-w-5xl w-full mx-4 p-4 flex flex-col items-center">
                <button
                    onClick={closeOverlay}
                    className="absolute top-0 right-0 p-2 text-foreground/70 hover:text-foreground transition-colors"
                >
                    <X className="w-8 h-8" />
                </button>

                {imageSrc && (
                    <div className={`transition-all duration-700 transform ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'}`}>
                        <img
                            src={imageSrc}
                            alt={title || 'Overlay'}
                            className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
                        />
                    </div>
                )}

                {(title || description) && (
                    <div className={`mt-6 text-center text-foreground transition-all duration-700 delay-100 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        {title && <h3 className="text-3xl font-bold mb-2">{title}</h3>}
                        {description && <p className="text-muted-foreground max-w-2xl text-lg">{description}</p>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Overlay;
