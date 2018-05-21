/* @flow */
import type {MiddlewareBuilderInterface} from "solfegejs-koa/src/domain/model/MiddlewareBuilderInterface"
import nunjucks from "koa-nunjucks-async"

export default class NunjucksBuilder implements MiddlewareBuilderInterface
{
    viewPath:string;
    variables:any;

    constructor(viewPath:string, variables?:any)
    {
        this.viewPath = viewPath;
        if (variables) {
            this.variables = variables;
        }
    }

    async build():Promise<Array<Function>>
    {
        let globals = {};
        if (typeof this.variables === "object") {
            globals = Object.assign({}, globals, this.variables);
        }

        let middleware = nunjucks(
            this.viewPath,
            {
                ext: ".nunjucks",
                globals: globals
            }
        );

        return [middleware];
    }
}
