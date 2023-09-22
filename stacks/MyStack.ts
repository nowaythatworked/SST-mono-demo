import { StackContext, AstroSite } from "sst/constructs";

export function Astro({ stack }: StackContext) {
  const site = new AstroSite(stack, 'astro-site', {
    path: 'packages/web',
    //buildCommand: 'npm run build',
    //buildOutput: 'dist',
  })

  stack.addOutputs({
    url: site.url,
  });
}
