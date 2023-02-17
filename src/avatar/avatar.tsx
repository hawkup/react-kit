import * as AvatarPrimitive from "@radix-ui/react-avatar";

export type AvatarProps = {
  imageSrc: string;
  alt: string;
};

export function Avatar({ imageSrc, alt }: AvatarProps) {
  return (
    <AvatarPrimitive.Root>
      <AvatarPrimitive.Image
        className="h-full w-full object-cover"
        src={imageSrc}
        alt={alt}
      />
      <AvatarPrimitive.Fallback
        className="flex h-full w-full items-center justify-center font-medium text-gray-600"
        delayMs={600}
      >
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}
