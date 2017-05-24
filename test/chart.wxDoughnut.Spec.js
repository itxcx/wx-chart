/* global module, wx, window: false, document: false, describe, it, assert, wx */
'use strict';

import WxCanvas from '../src/util/wxCanvas'
import WxDoughnut from '../src/charts/doughnut'
import { createWXEnv, initCanvasElement, destoryCanvasElement, getCanvas, getRealCanvas } from './createWXEnv'

describe('WxDoughnut component test', () => {
    let wxDoughnut;
    beforeEach(() => {
        createWXEnv();
        initCanvasElement(350, 600);

    });

    it('Draw an Pie', () => {
        wxDoughnut = new WxDoughnut('myCanvas', {
            'width': 600,
            'height': 350,
            'cutoutPercentage': 0,
            'title': '测试饼图'
        });

        let formatLabel = function(label, value, totalValue) {
            return label + ' (' + (value/totalValue*100).toFixed(2) + '%)';
        };
        wxDoughnut.update([{
            label: '测试3',
            value: 30,
            format:formatLabel
        },{
            label: '测试4',
            value: 32,
            format:formatLabel
        },{
            label: '测试5',
            value: 10,
            format:formatLabel
        },{
            label: '测试',
            value: 100,
            format:formatLabel
        },{
            label: '测试2',
            value: 3,
            format:formatLabel
        }]);
    });

    it('Draw an wxDoughnut', () => {
        wxDoughnut = new WxDoughnut('myCanvas', {
            'width': 600,
            'height': 350,
            'title': '测试多纳圈图'
        });

        wxDoughnut.update([{
            label: '测试',
            value: 100
        },{
            label: '测试2',
            value: 100
        },{
            label: '测试3',
            value: 50
        },{
            label: '测试4',
            value: 30
        },{
            label: '测试5',
            value: 30
        }])
    });

    it('Draw an wxDoughnut with percentage options', () => {
        wxDoughnut = new WxDoughnut('myCanvas', {
            'width': 600,
            'height': 350,
            'cutoutPercentage': 30,
            'title': '测试多纳圈图'
        });

        wxDoughnut.update([{
            label: '测试',
            value: 100,
            percentage: 60
        },{
            label: '测试2',
            value: 100,
            percentage: 70
        },{
            label: '测试3',
            value: 50,
            percentage: 80
        },{
            label: '测试4',
            value: 30,
            percentage: 90
        },{
            label: '测试5',
            value: 30,
            percentage: 100
        }])
    });

    afterEach(() => {
        // wxDoughnut.destroy();
        // destoryCanvasElement();
    })
});