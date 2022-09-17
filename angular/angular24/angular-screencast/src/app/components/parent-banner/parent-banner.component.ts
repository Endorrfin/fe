import {Component, ComponentFactoryResolver, OnInit, ViewContainerRef, ViewChild} from '@angular/core';
import {HostDirective} from "../../directives/host.directive";

@Component({
    selector: 'app-parent-banner',
    templateUrl: './parent-banner.component.html',
    styleUrls: ['./parent-banner.component.scss']
})
export class ParentBannerComponent implements OnInit {

    @ViewChild(HostDirective, {read: ViewContainerRef}) hostView!: ViewContainerRef;

    constructor(
        private cfr: ComponentFactoryResolver,
        private view: ViewContainerRef,
    ) {
    }

    ngOnInit(): void {
    }

    async load() {
        const {BannerDComponent} = await import('../banners/banner-directive/banner-d.component');
        const BannerDComponentFactory = this.cfr.resolveComponentFactory(BannerDComponent);
        // use hostDirective
        this.hostView.createComponent(BannerDComponentFactory);
    }


    async loadComponent() {
        const {BannerCComponent} = await import('../banners/banner-component/banner-c.component');
        const BannerCComponentFactory = this.cfr.resolveComponentFactory(BannerCComponent);
        this.view.createComponent(BannerCComponentFactory);
    }
}
