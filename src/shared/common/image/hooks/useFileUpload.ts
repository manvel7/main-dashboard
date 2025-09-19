import { useState } from "react";

export function useFileUpload() {
  const [progress, setProgress] = useState<Record<string, number>>({});
  const [uploading, setUploading] = useState<Record<string, boolean>>({});

  const uploadFile = (file: File) => {
    setUploading((prev) => ({ ...prev, [file.name]: true }));
    setProgress((prev) => ({ ...prev, [file.name]: 0 }));

    // Simulated upload
    const interval = setInterval(() => {
      setProgress((prev) => {
        const current = prev[file.name] || 0;
        if (current >= 100) {
          clearInterval(interval);
          setUploading((u) => ({ ...u, [file.name]: false }));
          return { ...prev, [file.name]: 100 };
        }
        return { ...prev, [file.name]: current + 10 };
      });
    }, 300);
  };

  const removeProgress = (fileName: string) => {
    setProgress((prev) => {
      const copy = { ...prev };
      delete copy[fileName];
      return copy;
    });
    setUploading((prev) => {
      const copy = { ...prev };
      delete copy[fileName];
      return copy;
    });
  };

  return { progress, uploading, uploadFile, removeProgress };
}
