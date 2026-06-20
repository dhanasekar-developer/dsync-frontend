export const Avatar = ({ image, name, className }: { name: string, image?: string, className?: string }) => {

    if (image) return <img src={image} alt="" className={`size-7 rounded-full ${className}`} />

    const colors = ["bg-red-500", "bg-blue-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-orange-500", "bg-teal-500", "bg-rose-500",];

    const colorIndex = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;

    return (
        <div className={`size-7 rounded-full ${colors[colorIndex]} flex items-center justify-center text-xs font-bold text-white tracking-wide uppercase cursor-default select-none ${className}`}>
            {name.charAt(0)}
        </div>
    );
}