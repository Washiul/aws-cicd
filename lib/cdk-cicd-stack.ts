import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
import { PipelineStage } from './pipeline-stage';

export class CdkCicdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const pipeline = new CodePipeline(this, 'Awesome Pipeline Stack', {
      pipelineName: 'AwesomePipeline',
      synth: new ShellStep('Synth',{
        input: CodePipelineSource.gitHub('Washiul/aws-cicd', 'main'),
        commands: [
          'npm ci',
          'npx cdk synth'
        ]
      })
    });

    pipeline.addStage(new PipelineStage(this, 'pipelineTestStage', {
      stageName:'test'
    }));
  }
}
