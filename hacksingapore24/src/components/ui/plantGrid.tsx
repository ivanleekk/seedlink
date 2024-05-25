import PlantStage from "@/components/ui/plantStage";

export type PlantGridProps = {
    plantGrid: {
        stage1: boolean;
        stage2: boolean;
        stage3: boolean;
        stage4: boolean;
        stage5: boolean;
        stage6: boolean;
    }
};

export default function PlantGrid(props: PlantGridProps) {
    // console.log(props.plantGrid)
    return(
        <div className="flex flex-row mx-auto">
            <PlantStage complete={props.plantGrid["stage1"]} stage={1} />
            <PlantStage complete={props.plantGrid["stage2"]} stage={2} />
            <PlantStage complete={props.plantGrid["stage3"]} stage={3} />
            <PlantStage complete={props.plantGrid["stage4"]} stage={4} />
            <PlantStage complete={props.plantGrid["stage5"]} stage={5} />
            <PlantStage complete={props.plantGrid["stage6"]} stage={6} />
        </div>
    )
}