import { Stack, StackProps } from "aws-cdk-lib";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from "path";

interface LamdaStackProps extends StackProps{
    stageName?: string
}
export class LamdaStack extends Stack{
    constructor(scope: Construct, id: string, props: LamdaStackProps){
        super(scope, id, props);
        new NodejsFunction(this, 'helloLamda', {
            runtime: Runtime.NODEJS_16_X,
            handler: 'handler',
            entry: join(__dirname, '..','services','hello.ts'),
            environment:{
                STAGE: props.stageName!
            }
        })
    }
}