import {defineAppConfig} from "#app";
import {DigimarketConfig} from "~/schema/options";
import {VSD} from "~/layers/vuetify-strapi-dashboard-v3/schema";
import VuetifyStrapiDashboardConfig = VSD.VuetifyStrapiDashboardConfig;

const Provinces: never[] = [];

export default defineAppConfig({
    vsd: <VuetifyStrapiDashboardConfig>{
        description: "meta description",
        keywords: "meta keywords",
        title: "vuetify strapi dashboard",
        singularTitle: "VSD",
        footerTitle: "VSD",
        systemLogo: '/system-logo.png # top of menu',
        loader: true,
        enable2fa: false,
        splash: true,
        recaptchaKey: 'FROM_GOOGLE',
        loginUrl: '/auth/local',
        showUser: false,
        menu:
            {
                navbar: [
                    {title: 'home', icon: 'home', link: '/', target: '_blank'},
                    {
                        title: 'example', icon: 'add', items: [
                            {title: 'all', permission: "example.find", icon: 'link', link: '/admin/example'},
                            {title: 'new', permission: "example.create", icon: 'link', link: '/admin/example/create'}
                        ]
                    }
                ],
                adminDrawer: [],
                panelDashboard: [],
                footerLinks: [],
                panelDrawer: [],
                panelTopMenu: []
            }
    }
})