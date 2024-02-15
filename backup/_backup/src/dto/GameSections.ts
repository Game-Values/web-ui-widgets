import { CollectionAbstract } from "~/abstract"
import { Section } from "~/dto/Section"

export class GameSections extends CollectionAbstract<Section, Section> {
    protected get __Model(): typeof Section {
        return Section
    }

    public get active(): Section {
        let { routerClient } = useClients()

        if (routerClient.getRouteParam("gameSection"))
            return useFind<Section>(this, {
                type: routerClient.getRouteParam("gameSection"),
            })!

        return useFirst<Section>(this)!
    }
}
