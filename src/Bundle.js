/* @flow */
import type {BundleInterface} from "solfegejs-application"

/**
 * Nunjucks templating bundle
 */
export default class Bundle implements BundleInterface
{
    /**
     * Get bundle path
     *
     * @return  {String}        The bundle path
     */
    getPath():string
    {
        return __dirname;
    }
}
