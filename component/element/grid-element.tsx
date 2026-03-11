import { Exemple } from "@/exemple"

export default function Element({ exemple } : { exemple: Exemple }) {
    return (
        <div className="border rounded-lg p-2">
            <div className="font-mono text-lg">
                {exemple.title}
            </div>
            <div className="border"></div>
            <div className="">
                {exemple.description}
            </div>
        </div>
    )
}