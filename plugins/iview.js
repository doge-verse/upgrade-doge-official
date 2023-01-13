import Vue from "vue";
import {
    Tooltip,
    Carousel,
    CarouselItem
} from "view-design";
import "view-design/dist/styles/iview.css";

//按需加载
Vue.component("Tooltip", Tooltip);
Vue.component("Carousel", Carousel);
Vue.component("CarouselItem", CarouselItem);
