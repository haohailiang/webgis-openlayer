import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile'; // 染按特定分辨率的缩放级别组织的网格中提供平铺图像的源 瓦片类型
import OSM from 'ol/source/OSM';

const map = new Map({
  target: 'map', // 挂载的DOM ID
  layers: [
    new TileLayer({
      source: new OSM() // 地图源
    })
  ],
  view: new View({ // 视图
    center: [0, 0],
    zoom: 2
  })
});
