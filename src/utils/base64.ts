export const toBase64 = async (file: any): Promise<string | void> => {
  if (!file) return;
  return new Promise((resolve: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      resolve(reader.result);
    };
  });
};

export const fromBase64 = (base64: string) => {
  const decoded = fetch(base64)
    .then((res) => res.blob())
    .then((blob) => {
      return blob;
    });
  return decoded;
};
