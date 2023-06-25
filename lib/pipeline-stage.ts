import { Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { LamdaStack } from "./lamda-stack";

export class PipelineStage extends Stage{
    constructor(scope: Construct, id: string, props: StageProps){
        super(scope, id, props);
        new LamdaStack(this, 'LamdaStack',{
            stageName: props.stageName
        })
    }
}