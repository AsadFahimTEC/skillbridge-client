interface Props {
    title: string;
    value: number;
}

export default function StatsCard({ title, value }: Props) {
    return (
        <div className="rounded-xl p-6 bg-background shadow-md">
            <h3 className="text-sm text-muted-foreground">{title}</h3>
            <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
    );
}