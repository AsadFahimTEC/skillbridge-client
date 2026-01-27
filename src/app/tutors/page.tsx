
import { Badge } from "@/components/ui/badge";
import { TutorCard } from "../components/tutors/TutorCard";

const tutors = [
  {
    name: "John Doe",
    skill: "Web Development",
    rating: 4.8,
    pricePerHour: 20,
    image: "/avatars/user1.png",
  },
  {
    name: "Sarah Khan",
    skill: "UI / UX Design",
    rating: 4.9,
    pricePerHour: 25,
    image: "/avatars/user2.png",
  },
  {
    name: "Ahmed Rahman",
    skill: "Data Analysis",
    rating: 4.7,
    pricePerHour: 18,
    image: "/avatars/user3.png",
  },
  {
    name: "Maria Lopez",
    skill: "English Language",
    rating: 4.8,
    pricePerHour: 22,
    image: "/avatars/user4.png",
  },
  {
    name: "David Kim",
    skill: "Career Mentorship",
    rating: 4.9,
    pricePerHour: 30,
    image: "/avatars/user5.png",
  },
];

export default function TutorCardPage() {
  return (
    <main className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-12 max-w-3xl space-y-4">
          <Badge variant="secondary">Tutors</Badge>

          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Featured Tutors & Skills
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg">
            Browse our top-rated tutors across various skills. Learn directly
            from experts and accelerate your growth with personalized guidance.
          </p>
        </div>

        {/* Tutor Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tutors.map((tutor, index) => (
            <TutorCard key={index} {...tutor} />
          ))}
        </div>
      </div>
    </main>
  );
}
