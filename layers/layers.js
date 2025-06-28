var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Pune_Division_bdy_1 = new ol.format.GeoJSON();
var features_Pune_Division_bdy_1 = format_Pune_Division_bdy_1.readFeatures(json_Pune_Division_bdy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pune_Division_bdy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pune_Division_bdy_1.addFeatures(features_Pune_Division_bdy_1);
var lyr_Pune_Division_bdy_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pune_Division_bdy_1, 
                style: style_Pune_Division_bdy_1,
                popuplayertitle: 'Pune_Division_bdy',
                interactive: true,
                title: '<img src="styles/legend/Pune_Division_bdy_1.png" /> Pune_Division_bdy'
            });
var format_PuneDiv_Comp_2 = new ol.format.GeoJSON();
var features_PuneDiv_Comp_2 = format_PuneDiv_Comp_2.readFeatures(json_PuneDiv_Comp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuneDiv_Comp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuneDiv_Comp_2.addFeatures(features_PuneDiv_Comp_2);
var lyr_PuneDiv_Comp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuneDiv_Comp_2, 
                style: style_PuneDiv_Comp_2,
                popuplayertitle: 'PuneDiv_Comp',
                interactive: true,
                title: '<img src="styles/legend/PuneDiv_Comp_2.png" /> PuneDiv_Comp'
            });
var format_Asset_3 = new ol.format.GeoJSON();
var features_Asset_3 = format_Asset_3.readFeatures(json_Asset_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Asset_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Asset_3.addFeatures(features_Asset_3);
var lyr_Asset_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Asset_3, 
                style: style_Asset_3,
                popuplayertitle: 'Asset',
                interactive: true,
    title: 'Asset<br />\
    <img src="styles/legend/Asset_3_0.png" /> Gate<br />\
    <img src="styles/legend/Asset_3_1.png" /> Nursery<br />\
    <img src="styles/legend/Asset_3_2.png" /> Pond<br />\
    <img src="styles/legend/Asset_3_3.png" /> RangeOffice<br />\
    <img src="styles/legend/Asset_3_4.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Pune_Division_bdy_1.setVisible(true);lyr_PuneDiv_Comp_2.setVisible(true);lyr_Asset_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Pune_Division_bdy_1,lyr_PuneDiv_Comp_2,lyr_Asset_3];
lyr_Pune_Division_bdy_1.set('fieldAliases', {'fid': 'fid', 'DISTRICT': 'DISTRICT', 'MFCIRCODE': 'MFCIRCODE', 'MFCIR_NAME': 'MFCIR_NAME', 'SUBCIR_TR': 'SUBCIR_TR', 'MFDIVCODE': 'MFDIVCODE', 'MFDIV_NAME': 'MFDIV_NAME', 'MFDIVHQ_NA': 'MFDIVHQ_NA', 'MFSANC_NAM': 'MFSANC_NAM', 'MF_CATE': 'MF_CATE', 'REMARK': 'REMARK', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PuneDiv_Comp_2.set('fieldAliases', {'fid': 'fid', 'MFCOMPCODE': 'MFCOMPCODE', 'OBJECTID': 'OBJECTID', 'DISTRICT': 'DISTRICT', 'MFCIRCODE': 'MFCIRCODE', 'MFCIR_NAME': 'MFCIR_NAME', 'SUBCIR_TR': 'SUBCIR_TR', 'MFDIVCODE': 'MFDIVCODE', 'MFDIV_NAME': 'MFDIV_NAME', 'MFRNGCODE': 'MFRNGCODE', 'MFRNG_NAME': 'MFRNG_NAME', 'MFRNDCODE': 'MFRNDCODE', 'MFRND_NAME': 'MFRND_NAME', 'MFBEATCODE': 'MFBEATCODE', 'MFBEAT_NAM': 'MFBEAT_NAM', 'MFCOMPCO_1': 'MFCOMPCO_1', 'MFCOMP_TYP': 'MFCOMP_TYP', 'MF_TYPE': 'MF_TYPE', 'MFSANC_NAM': 'MFSANC_NAM', 'MF_CATE': 'MF_CATE', 'MFCOMP_ARE': 'MFCOMP_ARE', 'REMARK': 'REMARK', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Asset_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name of Asset', 'Type': 'Type', 'Date': 'Date', 'Verified': 'Verified', 'UniqueID': 'UniqueID', });
lyr_Pune_Division_bdy_1.set('fieldImages', {'fid': '', 'DISTRICT': 'TextEdit', 'MFCIRCODE': 'TextEdit', 'MFCIR_NAME': 'TextEdit', 'SUBCIR_TR': 'TextEdit', 'MFDIVCODE': 'TextEdit', 'MFDIV_NAME': 'TextEdit', 'MFDIVHQ_NA': 'TextEdit', 'MFSANC_NAM': 'TextEdit', 'MF_CATE': 'TextEdit', 'REMARK': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PuneDiv_Comp_2.set('fieldImages', {'fid': '', 'MFCOMPCODE': 'TextEdit', 'OBJECTID': 'Range', 'DISTRICT': 'TextEdit', 'MFCIRCODE': 'TextEdit', 'MFCIR_NAME': 'TextEdit', 'SUBCIR_TR': 'TextEdit', 'MFDIVCODE': 'TextEdit', 'MFDIV_NAME': 'TextEdit', 'MFRNGCODE': 'TextEdit', 'MFRNG_NAME': 'TextEdit', 'MFRNDCODE': 'TextEdit', 'MFRND_NAME': 'TextEdit', 'MFBEATCODE': 'TextEdit', 'MFBEAT_NAM': 'TextEdit', 'MFCOMPCO_1': 'TextEdit', 'MFCOMP_TYP': 'TextEdit', 'MF_TYPE': 'TextEdit', 'MFSANC_NAM': 'TextEdit', 'MF_CATE': 'TextEdit', 'MFCOMP_ARE': 'TextEdit', 'REMARK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Asset_3.set('fieldImages', {'fid': '', 'id': 'UniqueValues', 'Name': 'TextEdit', 'Type': 'ValueMap', 'Date': 'DateTime', 'Verified': 'CheckBox', 'UniqueID': 'Range', });
lyr_Pune_Division_bdy_1.set('fieldLabels', {'fid': 'no label', 'DISTRICT': 'no label', 'MFCIRCODE': 'no label', 'MFCIR_NAME': 'no label', 'SUBCIR_TR': 'no label', 'MFDIVCODE': 'no label', 'MFDIV_NAME': 'no label', 'MFDIVHQ_NA': 'no label', 'MFSANC_NAM': 'no label', 'MF_CATE': 'no label', 'REMARK': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_PuneDiv_Comp_2.set('fieldLabels', {'fid': 'no label', 'MFCOMPCODE': 'no label', 'OBJECTID': 'no label', 'DISTRICT': 'no label', 'MFCIRCODE': 'no label', 'MFCIR_NAME': 'no label', 'SUBCIR_TR': 'no label', 'MFDIVCODE': 'no label', 'MFDIV_NAME': 'no label', 'MFRNGCODE': 'no label', 'MFRNG_NAME': 'no label', 'MFRNDCODE': 'no label', 'MFRND_NAME': 'no label', 'MFBEATCODE': 'no label', 'MFBEAT_NAM': 'no label', 'MFCOMPCO_1': 'no label', 'MFCOMP_TYP': 'no label', 'MF_TYPE': 'no label', 'MFSANC_NAM': 'no label', 'MF_CATE': 'no label', 'MFCOMP_ARE': 'no label', 'REMARK': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Asset_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'Type': 'no label', 'Date': 'no label', 'Verified': 'no label', 'UniqueID': 'no label', });
lyr_Asset_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});