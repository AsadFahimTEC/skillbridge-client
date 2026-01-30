interface TutorCardProps {
  tutor: any;
}

export default function TutorCard({ tutor }: TutorCardProps) {
  return (
    <div className="rounded-xl p-6 bg-background shadow-md border">
      <h2 className="text-lg font-semibold">{tutor.user.name}</h2>
      <p className="text-sm text-muted-foreground">{tutor.user.email}</p>

      <p className="mt-3 text-sm">{tutor.bio}</p>

      <div className="mt-2">
        <span className="font-medium">Price:</span> ৳{tutor.pricePerHr}/hr
      </div>

      <div>
        <span className="font-medium">Rating:</span> {tutor.rating}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {tutor.categories.map((cat: any) => (
          <span
            key={cat.id}
            className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-md"
          >
            {cat.name}
          </span>
        ))}
      </div>
    </div>
  );
}
