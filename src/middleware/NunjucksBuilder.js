/* @flow */
import type {MiddlewareBuilderInterface} from "solfegejs-koa/src/domain/model/MiddlewareBuilderInterface"
import nunjucks from "koa-nunjucks-async"

export default class NunjucksBuilder implements MiddlewareBuilderInterface
{
    viewPath:string;
    globals:any;

    constructor(viewPath:string)
    {
        this.viewPath = viewPath;
        this.globals = {};
    }

    addGlobalVariable(name:string, value:*)
    {
        this.globals[name] = value;
    }

    addGlobalVariables(variables:any)
    {
        this.globals = Object.assign({}, this.globals, variables);
    }

    async build():Promise<Array<Function>>
    {
        let middleware = nunjucks(
            this.viewPath,
            {
                ext: ".nunjucks",
                globals: this.globals
            }
        );

        return [middleware];
    }
}
