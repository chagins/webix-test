/**
 * @license
 * Webix SpreadSheet v.10.2.6
 * This software is covered by Webix Trial License.
 * Usage without proper license is prohibited.
 * (c) XB Software Ltd.
 */

!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t()
    : 'function' == typeof define && define.amd
      ? define(t)
      : t();
})(0, function () {
  'use strict';
  (webix.i18n.spreadsheet = {
    labels: {
      common: 'Common',
      currency: 'Currency',
      number: 'Number',
      percent: 'Percent',
      date: 'Date',
      string: 'Text',
      'custom-format': 'Custom',
      'decimal-places': 'Decimal places',
      separator: 'Group separator',
      negative: 'Negative number',
      'currency-symbol': 'Сurrency',
      'date-format': 'Date format',
      'format-docs': 'How to create a format',
      'undo-redo': 'Undo/Redo',
      font: 'Font',
      text: 'Text',
      cell: 'Cell',
      align: 'Align',
      format: 'Number',
      column: 'Column',
      borders: 'Borders',
      px: 'px',
      apply: 'Apply',
      cancel: 'Cancel',
      save: 'Save',
      sheet: 'Sheet',
      'conditional-format': 'Conditional Format',
      'conditional-common': 'Common',
      'conditional-text': 'Text',
      condition: 'Condition',
      'conditional-style': 'Style',
      'conditional-operator': 'Operator',
      'conditional-between': 'between',
      'conditional-not-equal': 'not equal',
      range: 'Range',
      'range-title': 'Named ranges',
      'range-name': 'Name',
      'range-cells': 'Range',
      'range-scope': 'Scope',
      'range-global': 'Book',
      'image-or': 'or',
      'image-title': 'Add image',
      'image-upload': 'Select file for upload',
      'image-url': 'URL (e.g. http://*)',
      'sparkline-title': 'Add sparkline',
      'sparkline-type': 'Type',
      'sparkline-range': 'Range',
      'sparkline-color': 'Color',
      'sparkline-positive': 'Positive',
      'sparkline-negative': 'Negative',
      'format-title': 'Set format',
      'format-pattern': 'Format pattern',
      'dropdown-empty': 'Empty cells',
      'dropdown-empty-option': 'Empty option',
      'dropdown-title': 'Add dropdown',
      'dropdown-range': 'Range',
      ok: 'OK',
      'import-title': 'Import',
      'import-not-support': 'Sorry, your browser does not support import',
      'export-title': 'Export',
      'export-name': 'Name of xslx file',
      'export-all-sheets': 'Export all sheets',
      'link-title': 'Add Link',
      'link-name': 'Text',
      'link-url': 'URL',
      image: 'Image',
      'add-image-cell': 'Add to cell',
      'add-image-top': 'Add above cells',
      graph: 'Graph',
      'add-sparkline': 'Add to cell',
      'add-chart': 'Add above cells',
      display: 'Display',
      value: 'Value',
      'range-remove-confirm': 'Are you sure you want to remove the range permanently?',
      'sheet-remove-confirm': 'Are you sure you want to remove the sheet permanently?',
      'merge-cell-confirm': 'Only the left top value will remain after merging. Continue?',
      'error-range': 'The range is incorrect!',
      'error-link': 'The link is incorrect!',
      print: 'Print',
      'print-title': 'Before you print..',
      'print-settings': 'General settings',
      'print-paper': 'Paper size',
      'print-layout': 'Layout',
      sheets: 'Sheets:',
      selection: 'Selected cells',
      borderless: 'Hide gridlines',
      'sheet-names': 'Show sheet names',
      'skip-rows': 'Skip empty rows',
      margin: 'Hide margins',
      'page-letter': 'Letter',
      'page-a4': 'A4 (210x297mm)',
      'page-a3': 'A3 (297x420mm)',
      'page-width': 'Page width',
      'page-actual': 'Actual Size',
      'page-portrait': 'Portrait',
      'page-landscape': 'Landscape',
      'external-ui': 'External UI',
      'print-borders': 'Show print borders',
      comment: 'Comment',
      width: 'Width',
      height: 'Height',
      'fit-content': 'Fit to content',
      'default-size': 'Reset to default',
      'edit-view': 'Edit',
      'remove-view': 'Remove',
      'chart-edit': 'Edit chart',
      'chart-common': 'Common',
      'chart-series': 'Series',
      'chart-extras': 'Extras',
      'export-view': 'Download',
      'export-view-pdf': 'PDF document',
      'export-view-png': 'PNG image',
      'export-view-excel': 'Excel file',
      'line-chart': 'Line',
      'area-chart': 'Area',
      'bar-chart': 'Bar',
      'donut-chart': 'Donut',
      'pie-chart': 'Pie',
      'radar-chart': 'Radar',
      'spline-chart': 'Spline',
      'splinearea-chart': 'Spline Area',
      'scatter-chart': 'Scatter',
      'chart-scale': 'Scale',
      'chart-x-axis': 'X axis',
      'chart-y-axis': 'Y axis',
      'chart-lines': 'Lines',
      'chart-scale-color': 'Scale color',
      'chart-xAxis-title': 'Title',
      'chart-yAxis-title': 'Title',
      'chart-col-xAxis': 'Use left column as xAxis',
      'chart-col-yAxis': 'Use left column as yAxis',
      'chart-row-xAxis': 'Use top row as xAxis',
      'chart-row-yAxis': 'Use top row as yAxis',
      'chart-xAxis-range': 'Range',
      'chart-yAxis-origin': 'Origin',
      'chart-yAxis-start': 'Start',
      'chart-yAxis-end': 'End',
      'chart-yAxis-step': 'Step',
      'chart-yAxis-note': '* Set all the following parameters to see the effect',
      'chart-legend': 'Legend',
      'chart-row-legend': 'Use top row as legend',
      'chart-col-legend': 'Use left column as legend',
      'chart-legend-range': 'Legend range',
      'chart-legend-align': 'Align',
      'chart-legend-left': 'Left',
      'chart-legend-right': 'Right',
      'chart-legend-center': 'Center',
      'chart-legend-valign': 'Vertical align',
      'chart-legend-top': 'Top',
      'chart-legend-middle': 'Middle',
      'chart-legend-bottom': 'Bottom',
      'chart-item': 'Data',
      'stacked-chart': 'Stacked',
      'horizontal-chart': 'Horizontal',
      'chart-range': 'Range',
      'chart-series-color': 'Color',
      'add-line': 'Add line',
      'chart-type': 'Type',
      'chart-tooltip': 'Tooltips',
      'chart-label': 'Labels',
      'chart-data-from': 'Data series from',
      'chart-columns': 'columns',
      'chart-rows': 'rows',
      'chart-markers': 'Markers',
      'chart-markers-square': 'Square',
      'chart-markers-triangle': 'Triangle',
      'chart-markers-diamond': 'Diamond',
      'chart-markers-round': 'Round',
      'chart-pie-3d': '3D',
      'chart-radar-circle': 'Circled lines',
    },
    tooltips: {
      color: 'Font color',
      background: 'Background color',
      'font-family': 'Font family',
      'font-size': 'Font size',
      'text-align': 'Horizontal align',
      'vertical-align': 'Vertical align',
      borders: 'Borders',
      'borders-no': 'Clear borders',
      'borders-left': 'Left border',
      'borders-top': 'Top border',
      'borders-right': 'Right border',
      'borders-bottom': 'Bottom border',
      'borders-all': 'All borders',
      'borders-outer': 'Outer borders',
      'borders-top-bottom': 'Top and bottom borders',
      'borders-color': 'Border color',
      'align-left': 'Left align',
      'align-center': 'Center align',
      'align-right': 'Right align',
      'align-top': 'Top align',
      'align-middle': 'Middle align',
      'align-bottom': 'Bottom align',
      span: 'Merge',
      wrap: 'Text wrap',
      undo: 'Undo',
      redo: 'Redo',
      format: 'Number format',
      'increase-decimals': 'Increase decimal places',
      'decrease-decimals': 'Decrease decimal places',
      'font-weight': 'Bold',
      'font-style': 'Italic',
      underline: 'Underline',
      strike: 'Strike',
      'hide-gridlines': 'Hide/show gridlines',
      'hide-headers': 'Hide/show headers',
      'show-formulas': 'Hide/show formulas',
      'print-borders': 'Hide/show print borders',
      'create-filter': 'Create/remove filters',
      'freeze-columns': 'Freeze/unfreeze columns',
      'add-range': 'Set name for the selected range',
      conditional: 'Conditional formatting',
      'add-sheet': 'Add Sheet',
      'lock-cell': 'Lock/unlock cell',
      clear: 'Clear',
      'add-link': 'Add link',
      row: 'Rows',
      column: 'Columns',
      sheet: 'Sheet',
      'add-image': 'Image',
      'add-sparkline': 'Graph',
      'add-comment': 'Comment',
      'increase-indent': 'Increase indent',
      'decrease-indent': 'Decrease indent',
      scale: 'Scale',
      'show-sheet': 'Show sheet',
    },
    menus: {
      'remove-sheet': 'Remove sheet',
      'rename-sheet': 'Rename sheet',
      'hide-sheet': 'Hide sheet',
      file: 'File',
      new: 'New',
      'new-sheet': 'New sheet',
      'excel-import': 'Import from Excel',
      'excel-export': 'Export to Excel',
      sheet: 'Sheets',
      'copy-sheet': 'Copy to new sheet',
      edit: 'Edit',
      undo: 'Undo',
      redo: 'Redo',
      columns: 'Columns',
      'insert-column': 'Insert column',
      'delete-column': 'Delete column',
      'show-column': 'Show column',
      'hide-column': 'Hide column',
      'resize-column': 'Resize column',
      rows: 'Rows',
      'insert-row': 'Insert row',
      'delete-row': 'Delete row',
      'show-row': 'Show row',
      'hide-row': 'Hide row',
      'resize-row': 'Resize row',
      insert: 'Insert',
      'conditional-format': 'Conditional format',
      common: 'common',
      text: 'text',
      clear: 'Clear',
      'clear-value': 'Values',
      'clear-style': 'Styles',
      'clear-conditional-formats': 'Conditional formats',
      'clear-dropdown-editors': 'Dropdowns and filters',
      'clear-comments': 'Comments',
      'clear-all': 'All',
      image: 'Image',
      'add-image-cell': 'Add to cell',
      'add-image-top': 'Add above cells',
      graph: 'Graph',
      'add-sparkline': 'Add to cell',
      'add-chart': 'Add above cells',
      data: 'Data',
      'add-link': 'Add link',
      'add-range': 'Named ranges',
      sort: 'Sort',
      'sort-asc': 'Sort A to Z',
      'sort-desc': 'Sort Z to A',
      view: 'View',
      'freeze-columns': 'Freeze/unfreeze columns',
      'freeze-rows': 'Freeze/unfreeze rows',
      'hide-gridlines': 'Hide/show gridlines',
      'hide-headers': 'Hide/show headers',
      'show-formulas': 'Hide/show formulas',
      'create-filter': 'Create/remove filters',
      'add-dropdown': 'Add dropdown',
      'lock-cell': 'Lock/unlock cell',
      print: 'Print',
      'print-borders': 'Hide/show print borders',
      'add-comment': 'Comment',
      cut: 'Cut',
      copy: 'Copy',
      paste: 'Paste',
      'special-paste': 'Special paste',
      'paste-values': 'Values',
      'paste-formulas': 'Formulas',
      'paste-styles': 'Styles',
      'paste-conditions': 'Conditional formats',
    },
    table: {
      'math-error': '#ERROR!',
      'math-ref-error': '#REF!',
      'format-error': 'INCORRECT FORMAT',
    },
    liveEditor: { edit: 'Edit:' },
    formats: {
      dateFormat: 'mm/dd/yyyy',
      timeFormat: 'hh:mm AM/PM',
      longDateFormat: 'dd mmmm yyyy',
      fullDateFormat: 'mm/dd/yyyy hh:mm AM/PM',
      parseDateTime: '%m/%d/%Y %G:%i:%s',
      parseDate: '%m/%d/%Y',
      currencies: ['{obj} €', '¥{obj}', 'R$ {obj}', '{obj} rub.'],
    },
  }),
    webix.protoUI(
      {
        name: 'ssheet-align',
        $cssName: 'richselect',
        $init: function (e) {
          e.options = {
            view: 'datasuggest',
            body: {
              view: 'ssheet-icons',
              tooltip: { template: '#tooltip#' },
              xCount: 3,
              yCount: 1,
            },
            data: e.data,
          };
        },
      },
      webix.ui.richselect
    ),
    webix.protoUI(
      {
        name: 'ssheet-borders-suggest',
        defaults: { width: 300 },
        $init: function (e) {
          var t = webix.skin.$name;
          e.body = {
            margin: 6,
            cols: [
              {
                view: 'ssheet-icons',
                scroll: !1,
                select: !0,
                xCount: 4,
                yCount: 2,
                tooltip: {
                  template: function (e) {
                    return webix.i18n.spreadsheet.tooltips['borders-' + e.id];
                  },
                },
                on: {
                  onAfterSelect: function () {
                    this.getParentView().getParentView().updateMasterValue(!0);
                  },
                },
                template: function (e) {
                  return (
                    "<span class='" +
                    ('webix_ssheet_button_icon webix_ssheet_icon ssi-borders-' + e.value) +
                    "'></span>"
                  );
                },
                data: e.data,
              },
              { view: 'ssheet-separator' },
              {
                rows: [
                  {
                    view: 'ssheet-color',
                    css: e.css,
                    name: e.name,
                    width: 68,
                    value: 'contrast' == t || 'dark' == t ? '#ffffff' : '#000000',
                    tooltip: webix.i18n.spreadsheet.tooltips['borders-color'],
                    title: "<span class='webix_icon wxi-pencil'></span>",
                    on: {
                      onChange: function () {
                        this.getParentView().getParentView().getParentView().updateMasterValue(!1);
                      },
                    },
                  },
                  {
                    view: 'richselect',
                    css: 'webix_ssheet_border_type',
                    value: 'thin',
                    suggest: {
                      fitMaster: !1,
                      width: 130,
                      css: 'webix_ssheet_suggest',
                      body: {
                        template:
                          "<div class='webix_ssheet_border webix_ssheet_border_#id#'></div>",
                      },
                      data: [
                        { id: 'thin' },
                        { id: 'medium' },
                        { id: 'thick' },
                        { id: 'dashed' },
                        { id: 'dotted' },
                        { id: 'double' },
                      ],
                    },
                  },
                  {},
                ],
              },
            ],
          };
        },
        updateMasterValue: function (e) {
          var t = this.getValue();
          webix.$$(this.config.master).setValue(t, 'user'), e && this.hide();
        },
        setValue: function (e) {
          e[0] && this.getList().select(e[0]),
            e[1] && this.getColorView().setValue(e[1]),
            e[2] && this.getTypeView().setValue(e[2]);
        },
        getValue: function () {
          return [
            this.getList().getSelectedId(),
            this.getColorView().getValue() || '',
            this.getTypeView().getValue() || '',
          ];
        },
        getList: function () {
          return this.getBody().getChildViews()[0];
        },
        getColorView: function () {
          return this.getBody().getChildViews()[2].getChildViews()[0];
        },
        getTypeView: function () {
          return this.getBody().getChildViews()[2].getChildViews()[1];
        },
        getItemText: function () {
          return "<span class='webix_ssheet_button_icon webix_ssheet_icon ssi-borders-all'>";
        },
      },
      webix.ui.suggest
    ),
    webix.protoUI(
      {
        name: 'ssheet-borders',
        $cssName: 'richselect',
        $init: function (e) {
          (e.options = { view: 'ssheet-borders-suggest', fitMaster: !1, data: e.data }),
            this.$ready.push(
              webix.bind(function () {
                this.getPopup().config.master = this.config.id;
              }, this)
            );
        },
        setValue: function (e, t) {
          if (webix.isArray(e)) {
            (this.config.value && e[0] == this.config.value[0] && e[1] == this.config.value[1]) ||
              this.getPopup().setValue(e);
            var n = this.config.value;
            (this.config.value = e)[0] && this.callEvent('onChange', [this.getValue(), n, t]);
          }
          return e;
        },
        getValue: function () {
          return this.getPopup().getValue().join(',');
        },
        getList: function () {
          return this.getPopup().getBody().getChildViews()[0];
        },
        getColorView: function () {
          return this.getPopup().getBody().getChildViews()[1].getChildViews()[0];
        },
      },
      webix.ui.richselect
    ),
    webix.protoUI(
      {
        $cssName: 'colorboard',
        name: 'ssheet-colorboard',
        defaults: {
          height: 196,
          width: 244,
          css: 'webix_ssheet_colorboard',
          palette: [
            [
              '#000000',
              '#434343',
              '#666666',
              '#999999',
              '#b7b7b7',
              '#cccccc',
              '#d9d9d9',
              '#efefef',
              '#f3f3f3',
              '#ffffff',
            ],
            [
              '#980000',
              '#ff0000',
              '#ff9900',
              '#ffff00',
              '#00ff00',
              '#00ffff',
              '#4a86e8',
              '#0000ff',
              '#9900ff',
              '#ff00ff',
            ],
            [
              '#e6b8af',
              '#f4cccc',
              '#fce5cd',
              '#fff2cc',
              '#d9ead3',
              '#d0e0e3',
              '#c9daf8',
              '#cfe2f3',
              '#d9d2e9',
              '#ead1dc',
            ],
            [
              '#dd7e6b',
              '#ea9999',
              '#f9cb9c',
              '#ffe599',
              '#b6d7a8',
              '#a2c4c9',
              '#a4c2f4',
              '#9fc5e8',
              '#b4a7d6',
              '#d5a6bd',
            ],
            [
              '#cc4125',
              '#e06666',
              '#f6b26b',
              '#ffd966',
              '#93c47d',
              '#76a5af',
              '#6d9eeb',
              '#6fa8dc',
              '#8e7cc3',
              '#c27ba0',
            ],
            [
              '#a61c00',
              '#cc0000',
              '#e69138',
              '#f1c232',
              '#6aa84f',
              '#45818e',
              '#3c78d8',
              '#3d85c6',
              '#674ea7',
              '#a64d79',
            ],
            [
              '#85200c',
              '#990000',
              '#b45f06',
              '#bf9000',
              '#38761d',
              '#134f5c',
              '#1155cc',
              '#0b5394',
              '#351c75',
              '#741b47',
            ],
            [
              '#5b0f00',
              '#660000',
              '#783f04',
              '#7f6000',
              '#274e13',
              '#0c343d',
              '#1c4587',
              '#073763',
              '#20124d',
              '#4c1130',
            ],
          ],
        },
        $init: function () {
          this.attachEvent('onSelect', function (e) {
            this.getParentView().setMasterValue({ value: e }, !1, 'user');
          });
        },
      },
      webix.ui.colorboard
    ),
    webix.protoUI(
      {
        $cssName: 'richselect',
        name: 'ssheet-color',
        defaults: {
          css: 'webix_ssheet_color',
          icon: 'wxi-menu-down',
          suggest: { borderless: !0, body: { view: 'ssheet-colorboard' } },
        },
        $init: function () {
          this.$view.className += ' webix_ssheet_color';
        },
        $renderInput: function (i, e, t) {
          var o = this.renderColor.call(this);
          return (
            (e = e.replace(/([^>]>)(.*)(<\/div)/, function (e, t, n, r) {
              return t + i.title + o + r;
            })),
            webix.ui.colorpicker.prototype.$renderInput.call(this, i, e, t)
          );
        },
        $setValue: function (e) {
          (e = e || ''), (this.getColorNode().style.backgroundColor = e);
        },
        renderColor: function () {
          return (
            "<div class='webix_ssheet_cp_color' style='background-color:" +
            this.config.value +
            ";'> </div>"
          );
        },
        getColorNode: function () {
          return this.$view.firstChild.firstChild.childNodes[1];
        },
        $renderIcon: function () {
          return webix.ui.text.prototype.$renderIcon.apply(this, arguments);
        },
      },
      webix.ui.colorpicker
    );
  var e = (function Ra(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  })(function (e, t) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n,
      o = function (e, t) {
        return (o =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          })(e, t);
      },
      b = function () {
        return (b =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
    (function (e, t) {
      function n() {
        this.constructor = e;
      }
      o(e, t),
        (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
    })(
      function pt() {
        return (null !== n && n.apply(this, arguments)) || this;
      },
      (n = Array)
    );
    var O,
      a = { 1: '#ERROR', 2: '#ERROR', 3: '#REF!', 4: '#SPILL!' };
    function I(e, t, n) {
      return n + 64 * t + 64 * e * 4096;
    }
    function z(e) {
      return [e < 2147483648 ? e >> 18 : (e / 262144) & 16777215, (e >> 6) & 4095, 63 & e];
    }
    function T(e) {
      return e < 2147483648 ? e >> 18 : (e / 262144) & 16777215;
    }
    function s(e) {
      return (e >> 6) & 4095;
    }
    function _(e) {
      return 63 & e;
    }
    function l(e, t, n) {
      for (
        var r = z(e), i = r[0], o = r[1], a = z(t), s = a[0] - i, l = a[1] - o, u = 0;
        u <= s;
        u++
      )
        for (var c = 0; c <= l; c++) n(e + 64 * c + 4096 * u * 64);
    }
    function u(e, t, n, r) {
      for (var i = 0, o = 0; o < n; o++)
        for (var a = 0; a < t; a++) r(e + 64 * a + 4096 * o * 64, i), i++;
    }
    function N(e, t) {
      for (
        var n, r, i, o, a, s, l, u, c = e.code, f = e.source, h = '', d = c.length, v = 0;
        v < d;
        v += 3
      )
        switch (c[v]) {
          case 5:
            var g = void 0;
            9 === c[v + 6] && (g = t.pageName(_(c[v + 7]))),
              (h += C(g || e.source.substr(c[v + 1], c[v + 2])) + '!');
            break;
          case 7:
            (o = (n = z(c[v + 4]))[0]),
              (s = n[1]),
              (u = n[2]),
              t.z !== u && 5 !== c[v - 3] && (h += C(t.pageName(u)) + '!'),
              (h += y(o, s, c[v + 5]));
            break;
          case 4:
            h += f.substr(c[v + 1], c[v + 2]).toUpperCase();
            break;
          case 8:
            (o = (r = z(c[v + 4]))[0]),
              (s = r[1]),
              (u = r[2]),
              (a = (i = z(c[v + 7]))[0]),
              (l = i[1]),
              t.z !== u && 5 !== c[v - 3] && (h += C(t.pageName(u)) + '!'),
              (h += y(o, s, c[v + 5])),
              (h += ':'),
              (h += y(a, l, c[v + 8]));
            break;
          case 9:
            break;
          case 2:
            h += '{{' + f.substr(c[v + 1], c[v + 2]) + '}}';
            break;
          case 3:
            h += '#REF!';
            break;
          case 1:
            h += '"' + f.substr(c[v + 1], c[v + 2]) + '"';
            break;
          case 13:
            h += '{';
            var p = c[v + 1],
              m = c[v + 2];
            v += 3;
            for (var w = 0; w < m; w++) {
              for (var b = 0; b < p; b++) {
                0 < b && (h += ',');
                var x = c[v];
                1 === x
                  ? (h += '"' + f.substr(c[v + 1], c[v + 2]) + '"')
                  : 11 === x && (h += f.substr(c[v + 1], c[v + 2])),
                  (v += 3);
              }
              w < m - 1 && (h += ';');
            }
            (v -= 3), (h += '}');
            break;
          default:
            h += f.substr(c[v + 1], c[v + 2]);
        }
      return h;
    }
    function y(e, t, n) {
      var r = '';
      2 & n && (r += '$');
      var i = '';
      for (t += 1; 0 < t; ) {
        var o = t % 26;
        0 === o && (o = 26), (i = String.fromCharCode(64 + o) + i), (t = (t - o) / 26);
      }
      return (r += i), 1 & n && (r += '$'), r + (e + 1);
    }
    function C(e) {
      return -1 !== e.indexOf(' ') ? "'" + e + "'" : e;
    }
    function P(e) {
      var t = e.charCodeAt(0);
      return 48 <= t && t <= 57;
    }
    function F(e, t) {
      for (var n; t++, 48 <= (n = e.charCodeAt(t)) && n <= 57; );
      return t;
    }
    function U(e, t) {
      for (; '"' !== e[++t]; );
      return t;
    }
    function B(e) {
      return ' ' === e || '\t' === e || '\n' === e || '\r' === e;
    }
    function L(e, t) {
      for (; B(e[++t]); );
      return t;
    }
    function H(e, t) {
      if ('<' === e[t]) {
        var n = e[t + 1];
        ('>' !== n && '=' !== n) || t++;
      } else '>' === e[t] && '=' === e[t + 1] && t++;
      return t + 1;
    }
    function j(e, t, n) {
      for (var r = e.length, i = !0, o = t, a = !1, s = !1, l = !1, u = 0; o < r; o++) {
        var c = e[o];
        if ("'" !== c) {
          if (!a) {
            l = !0;
            var f = c.charCodeAt(0);
            if ((h = f) <= 122 ? 65 <= h || 35 === h || 36 === h || 46 === h : 191 < h) {
              f <= 122 ? 97 <= f && (s = !0) : (i = !1), 1 == u && u++;
              continue;
            }
            if (P(c)) {
              0 == u && u++;
              continue;
            }
            break;
          }
        } else {
          if (l) break;
          if (a) {
            o++;
            break;
          }
          a = !0;
        }
      }
      var h,
        d,
        v,
        g,
        p = e[o],
        m = t,
        w = o - t;
      return (
        a && ((w -= 1 + ("'" === e[o - 1] ? 1 : 0)) < 0 && (w = 0), m++, (n = 5)),
        0 === n &&
          (':' === p && i
            ? 1 !== u
              ? (n = 3)
              : ((n = 8), s && (O = !0))
            : '!' === p
              ? (n = '#' === e[m] ? 3 : 5)
              : '(' === p
                ? ((d = m), (v = w), (g = e.substr(d, v)).toUpperCase() !== g && (O = !0), (n = 4))
                : '}' === p && '}' === e[o - 1]
                  ? (n = 2)
                  : 1 === u && i
                    ? ((n = 7), s && (O = !0))
                    : (n = 6)),
        [m, w, o, n]
      );
    }
    function W(e, t, n) {
      for (var r = 0, i = 0, o = 1, a = 1, s = 0, l = !1, u = t.length - 1; 0 <= u; u--) {
        var c = t[u].charCodeAt(0);
        36 !== c
          ? c < 58
            ? ((i += (c - 48) * o), (o *= 10))
            : (l || ((r = i), (l = !(i = 0)), (a += o = 1)),
              (i += (c - (96 < c ? 96 : 64)) * o),
              (o *= 26))
          : (s += a);
      }
      4095 < i ? e.push(3, 0, 0) : e.push(9, I(r - 1, i - 1, n), s);
    }
    function r(e, t) {
      var n,
        r,
        i = [];
      O = !1;
      for (var o, a = -1, s = -1, l = 0, u = 0; u < e.length; u++) {
        var c = e[u];
        if (-1 < s)
          if ('}' == c) {
            var f = (i[s + 2] += 1),
              h = (i[s + 1] = l / f);
            h - Math.round(h) != 0 && i.push(3, 0, 0), (s = -1);
          } else if ('"' === c) {
            var d = U(e, u);
            u++, i.push(1, u, d - u), l++, (u = d);
          } else if ('-' === c) {
            var v = F(e, u + 1);
            i.push(11, u, v - u), l++, (u = v - 1);
          } else if (P(c)) {
            var g = F(e, u);
            i.push(11, u, g - u), l++, (u = g - 1);
          } else
            ' ' === c || '\t' === c || ',' === c || (';' === c ? (i[s + 2] += 1) : i.push(3, 0, 0));
        else if ('"' != c) {
          if (!(-1 < a))
            if ('{' != c)
              if (
                "'" == c ||
                ((o = c.charCodeAt(0)) <= 122 ? 65 <= o || 35 === o || 36 === o : 191 < o)
              ) {
                var p = void 0,
                  m = j(e, u, 0),
                  w = ((I = m[0]), (z = m[1]), m[2]),
                  b = m[3],
                  x = i.length;
                if ((7 !== b && 8 !== b) || 5 !== i[i.length - 3]) (p = t.z), i.push(b, I, z);
                else {
                  var _ = "'" === e[I - 2] ? 1 : 0,
                    y = i[x - 2],
                    C = i[x - 1];
                  void 0 === (p = t.page(e.substr(y, C))) && (i.push(3, 0, 0), (p = 0)),
                    i.push(b, I - C - 2 * _ - 1, z + C + 2 * _ + 1);
                }
                if (((u = w - 1), 6 === b)) t.name(i, e, t);
                else if (8 === b) {
                  var S = i.length;
                  if (
                    (W(i, e.substr(I, z), p),
                    (I = (n = j(e, u + 2, 0))[0]),
                    (z = n[1]),
                    (w = n[2]),
                    5 === (b = n[3]) &&
                      ((I = (r = j(e, w + 1, 0))[0]), (z = r[1]), (w = r[2]), (b = r[3])),
                    7 !== b)
                  ) {
                    i[S - 3] = 7;
                    continue;
                  }
                  W(i, e.substr(I, z), p);
                  var $ = i[S + 1],
                    E = i[S + 4];
                  (E < $ || T($) > T(E)) && ((i[S + 1] = E), (i[S + 4] = $)),
                    (i[S - 1] += z + 1),
                    (u = w - 1);
                } else 7 === b ? W(i, e.substr(I, z), p) : (3 !== b && 5 !== b) || u++;
              } else if (B(c)) {
                var k = L(e, u);
                i.push(12, u, k - u), (u = k - 1);
              } else if (P(c)) {
                var V = F(e, u);
                i.push(11, u, V - u), (u = V - 1);
              } else {
                var A = H(e, u);
                i.push(10, u, A - u), (u = A - 1);
              }
            else {
              if ('{' == e[u + 1]) {
                var M = j(e, u + 2, 2),
                  I = M[0],
                  z = M[1],
                  D = M[2];
                i.push(2, I, z), (u = D + 2 - 1);
                continue;
              }
              (s = i.length), (l = 0), i.push(13, 0, 0);
            }
        } else a = -1 < a ? (i.push(1, a + 1, u - a - 1), -1) : u;
      }
      var R = { code: i, source: e, exec: null, broken: 0, triggers: null };
      return O && (R.source = N(R, t)), R;
    }
    function c(e) {
      return '            '.substr(0, 10 - e.length);
    }
    var x = ['>', '<', '=', '+'];
    function i(e, t) {
      var n = (function (e, t) {
        for (
          var n = e.code, r = e.source, i = '', o = 0, a = [], s = n.length, l = 0;
          l < s;
          l += 3
        )
          switch (n[l]) {
            case 4:
              i += 'ctx.m["' + r.substr(n[l + 1], n[l + 2]).toUpperCase() + '"]';
              break;
            case 1:
              i += '"' + r.substr(n[l + 1], n[l + 2]) + '"';
              break;
            case 2:
              i += 'ctx.p("' + r.substr(n[l + 1], n[l + 2]) + '")';
              break;
            case 6:
            case 7:
              var u = void 0,
                c = void 0;
              if (
                (10 === n[l - 3] ? (u = l - 3) : 12 === n[l - 3] && 10 === n[l - 6] && (u = l - 6),
                10 === n[l + 6] ? (c = l + 6) : 12 === n[l + 6] && 10 === n[l + 9] && (c = l + 9),
                u || c)
              ) {
                var f = u ? r[n[u + 1]] : null,
                  h = c ? r[n[c + 1]] : null;
                if ('&' == f || '&' == h) {
                  i += '(ctx.v(' + n[l + 4] + ') === null ? "" : ctx.v(' + n[l + 4] + '))';
                  break;
                }
                if (-1 != x.indexOf(f) || -1 != x.indexOf(h)) {
                  i += '(ctx.v(' + n[l + 4] + ') === null ? 0 : ctx.v(' + n[l + 4] + '))';
                  break;
                }
              }
              i += 'ctx.v(' + n[l + 4] + ')';
              break;
            case 8:
              i += 'ctx.r(' + n[l + 4] + ', ' + n[l + 7] + ')';
              break;
            case 10:
              if (1 === n[l + 2])
                '&' === (d = r[n[l + 1]])
                  ? (i += '+""+')
                  : t && '+' == d
                    ? (i += '*1+1*')
                    : '=' === d
                      ? (i += '==')
                      : ';' === d
                        ? (i += ',')
                        : '{' === d
                          ? (i += '[')
                          : '}' === d
                            ? (i += ']')
                            : '%' === d
                              ? n[l + 3] && 10 !== n[l + 3]
                                ? (i += t ? '/0+' : d)
                                : (i += ('/' == a[o] ? '*' : '/') + '100')
                              : ('(' == d ? (o++, a.push('+')) : ')' == d && (o--, a.pop()),
                                (i += d)),
                  ('+' != d && '-' != d && '*' != d && '/' != d && '&' != d) || (a[o] = d);
              else if (2 === n[l + 2]) {
                var d;
                i += '<>' === (d = r.substr(n[l + 1], n[l + 2])) ? '!=' : d;
              } else i += r.substr(n[l + 1], n[l + 2]);
              break;
            case 11:
              i += r.substr(n[l + 1], n[l + 2]);
              break;
            case 3:
              return '';
            case 9:
            case 5:
            case 12:
              break;
            case 13:
              i += 'ctx.a([';
              for (
                var v = n[l + 1], g = n[l + 2], p = (l += 3) + v * g * 3, m = !1;
                l < p;
                l += 3
              ) {
                m && (i += ',');
                var w = n[l];
                if (11 === w) i += r.substr(n[l + 1], n[l + 2]);
                else if (1 === w) i += '"' + r.substr(n[l + 1], n[l + 2]) + '"';
                else if (3 === w) return (e.broken = 3), '';
                m = !0;
              }
              (l -= 3), (i += '],' + v + ', ' + g + ')');
          }
        return i;
      })(e, t);
      if (!n) return (e.broken = 3), void (e.exec = null);
      try {
        e.exec = new Function('ctx', 'return ' + n);
      } catch (t) {
        (e.broken = 1), (e.exec = null);
      }
    }
    var h = '#DIV/0!',
      d = '#VALUE!',
      f = '#NUM!',
      v = '#N/A';
    function g(e) {
      var t = new Date(e.getFullYear(), 0, 0),
        n = e.valueOf() - t.valueOf() + 60 * (t.getTimezoneOffset() - e.getTimezoneOffset()) * 1e3;
      return Math.floor(n / 864e5);
    }
    function p(e) {
      var t = new Date(Math.round(86400 * (e - 25569) * 1e3));
      return new Date(t.getTime() + 6e4 * t.getTimezoneOffset());
    }
    function m(e) {
      return 25569 + (e.getTime() - 6e4 * e.getTimezoneOffset()) / 864e5;
    }
    function w(e) {
      return !((!e && 0 !== e) || ((e *= 1), isNaN(e))) && e;
    }
    function S(e) {
      if (1 === e.length) {
        var t = e[0];
        return 'object' == typeof t ? t : [t];
      }
      for (var n = [], r = 0; r < e.length; r++) n = n.concat(e[r]);
      return n;
    }
    function $(e) {
      return !e && 0 !== e;
    }
    function E(e) {
      return 'string' == typeof e ? 'TRUE' === e : !!e;
    }
    function k(e) {
      var t = 'string' == typeof e ? new Date(e) : p(e);
      if (t.getTime()) return t;
      throw e + ' is invalid date';
    }
    function V(e) {
      var t = w(e);
      if ('number' != typeof t) throw e + ' is not a number';
      return t;
    }
    function A(e, t, n, r, i) {
      var o = w(e);
      o < 0 && 8 == i && (t = null);
      var a,
        s = t ? w(t) : null;
      if ('number' != typeof o || 'boolean' == typeof s) throw d;
      if ((o < n && (o = n), r < o && (o = r), s < -1)) throw f;
      s && (s = Math.floor(+s));
      var l = e < 0 && 16 === i ? 'FF' : '';
      if (
        ((a = r < 2147483648 ? ((o >>> 0) & (r - n)).toString(i) : (o >>> 0).toString(i)),
        s && a.length > s)
      )
        throw f;
      return (l + a).padStart(s, '0').toUpperCase();
    }
    function M(e) {
      return 0 < e ? Math.floor(e) : Math.ceil(e);
    }
    function D(e) {
      return e < 0 ? Math.floor(e) : Math.ceil(e);
    }
    function R() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      for (var n = 0, r = S(e), i = 0; i < r.length; i++) {
        var o = w(r[i]);
        'number' == typeof o && (n += o);
      }
      return n;
    }
    function q() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      for (var n = 0, r = 0, i = S(e), o = 0; o < i.length; o++) {
        var a = w(i[o]);
        'number' == typeof a && ((n += a), r++);
      }
      return r ? n / r : 0;
    }
    function X() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      for (var n = S(e), r = 0, i = 0, o = 0; o < n.length; o++) {
        var a = n[o],
          s = w(n[o]);
        'number' == typeof s ? ((r += s), i++) : (!0 === a && r++, (a || !1 === a) && i++);
      }
      return i ? r / i : 0;
    }
    function G() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      for (var n = 0, r = S(e), i = 0; i < r.length; i++) {
        'number' == typeof w(r[i]) && n++;
      }
      return n;
    }
    function Y() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      for (var n = 0, r = S(e), i = 0; i < r.length; i++) r[i] && 1 * r[i] != 0 && n++;
      return n;
    }
    function K() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      for (var n = -1 / 0, r = S(e), i = 0; i < r.length; i++) {
        var o = w(r[i]);
        'number' == typeof o && n < o && (n = o);
      }
      return n === -1 / 0 ? 0 : n;
    }
    function Z() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      for (var n = 1 / 0, r = S(e), i = 0; i < r.length; i++) {
        var o = w(r[i]);
        'number' == typeof o && o < n && (n = o);
      }
      return n === 1 / 0 ? 0 : n;
    }
    function Q() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      for (var n = !1, r = 1, i = S(e), o = 0; o < i.length; o++) {
        var a = w(i[o]);
        'number' == typeof a && ((n = !0), (r *= a));
      }
      return n ? r : null;
    }
    function J(e, t, n) {
      for (
        var r = S(e), i = t ? 0 : -1, o = n ? X.apply(void 0, e) : q.apply(void 0, e), a = 0, s = 0;
        s < r.length;
        s++
      ) {
        var l = r[s],
          u = w(r[s]);
        if ('number' != typeof u) {
          if (!n || ('boolean' != typeof l && !l)) continue;
          u = !0 === l ? 1 : 0;
        }
        i++, (a += Math.pow(u - o, 2));
      }
      return i ? a / i : 0;
    }
    function ee() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return J(e, !1, !1);
    }
    function te() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return J(e, !1, !0);
    }
    function ne() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return J(e, !0, !1);
    }
    function re() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return J(e, !0, !0);
    }
    function ie() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return Math.sqrt(ee.apply(void 0, e));
    }
    function oe() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return Math.sqrt(ne.apply(void 0, e));
    }
    function ae(e, t) {
      var n = w(e),
        r = w(t);
      if ('number' == typeof n && 'number' == typeof r) return Math.pow(n, r);
    }
    var se = {
        M: 1e3,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
      },
      le = [];
    function ue(e) {
      var t = w(e);
      if ('number' == typeof t && -1 < t) {
        var n = Math.floor(t);
        return 0 === n || 1 === n ? 1 : (0 < le[n] || (le[n] = ue(n - 1) * n), le[n]);
      }
    }
    function ce(e, t) {
      var n = w(e),
        r = w(t);
      if ('number' == typeof n && 'number' == typeof r) return ue(n) / (ue(r) * ue(n - r));
    }
    var fe = [
      '',
      'C',
      'CC',
      'CCC',
      'CD',
      'D',
      'DC',
      'DCC',
      'DCCC',
      'CM',
      '',
      'X',
      'XX',
      'XXX',
      'XL',
      'L',
      'LX',
      'LXX',
      'LXXX',
      'XC',
      '',
      'I',
      'II',
      'III',
      'IV',
      'V',
      'VI',
      'VII',
      'VIII',
      'IX',
    ];
    function he(e, t, n) {
      void 0 === n && (n = 'i');
      var r = w(e),
        i = w(t);
      if ('number' != typeof r && 'number' != typeof i) throw f;
      var o = '',
        a = '';
      return (
        e && (o = e.toString()),
        t && 1 !== t ? (a = t + n) : 1 === t && (a = n),
        0 < t ? (o ? o + '+' : '') + a : o + a
      );
    }
    function de(e, t) {
      return void 0 === t && (t = null), A(e, t, -512, 511, 2);
    }
    function ve(e, t) {
      return void 0 === t && (t = null), A(e, t, -274877906944, 274877906943, 16);
    }
    function ge(e, t) {
      return void 0 === t && (t = null), A(e, t, -536870912, 536870911, 8);
    }
    var pe = [
      -1.3026537197817094, 0.6419697923564902, 0.019476473204185836, -0.00956151478680863,
      -0.000946595344482036, 0.000366839497852761, 42523324806907e-18, -20278578112534e-18,
      -1624290004647e-18, 130365583558e-17,
    ];
    function me(e) {
      for (
        var t,
          n = e < 0,
          r = 0,
          i = 0,
          o = 2 / (2 + (e = Math.abs(e))),
          a = 4 * o - 2,
          s = pe.length - 1;
        0 < s;
        s--
      )
        (t = a * r - i + pe[s]), (i = r), (r = t);
      var l = o * Math.exp(-e * e + 0.5 * (pe[0] + a * r) - i);
      return n ? l - 1 : 1 - l;
    }
    function we(e, t) {
      var n = w(e),
        r = w(t);
      if ('number' == typeof n) return 'number' == typeof r ? me(r) - me(n) : me(n);
      throw d;
    }
    var be = [
        0.9999999999998099, 676.5203681218851, -1259.1392167224028, 771.3234287776531,
        -176.6150291621406, 12.507343278686905, -0.13857109526572012, 9984369578019572e-21,
        1.5056327351493116e-7,
      ],
      xe = Math.pow(2, 39);
    function _e(e) {
      if ('string' != typeof e) throw d;
      if (
        0 <= ['i', '+i', '1i', '+1i', '-i', '-1i', 'j', '+j', '1j', '+1j', '-j', '-1j'].indexOf(e)
      )
        return 0;
      var t = e.indexOf('+'),
        n = e.indexOf('-');
      0 === t && (t = e.indexOf('+', 1)), 0 === n && (n = e.indexOf('-', 1));
      var r = e.substring(e.length - 1, e.length),
        i = 'i' === r || 'j' === r;
      if (0 <= t || 0 <= n) {
        if (!i) throw f;
        if (0 <= t) {
          if (isNaN(+e.substring(0, t)) || isNaN(+e.substring(t + 1, e.length - 1))) throw f;
          return Number(e.substring(0, t));
        }
        if (isNaN(+e.substring(0, n)) || isNaN(+e.substring(n + 1, e.length - 1))) throw f;
        return Number(e.substring(0, n));
      }
      if (i) {
        if (isNaN(+e.substring(0, e.length - 1))) throw f;
        return 0;
      }
      if (isNaN(+e)) throw f;
      return +e;
    }
    function ye(e) {
      if ('string' != typeof e) throw d;
      if (0 <= ['i', 'j'].indexOf(e)) return 1;
      var t = (e = e
          .replace('+i', '+1i')
          .replace('-i', '-1i')
          .replace('+j', '+1j')
          .replace('-j', '-1j')).indexOf('+'),
        n = e.indexOf('-');
      0 === t && (t = e.indexOf('+', 1)), 0 === n && (n = e.indexOf('-', 1));
      var r = e.substring(e.length - 1, e.length),
        i = 'i' === r || 'j' === r;
      if (0 <= t || 0 <= n) {
        if (!i) throw f;
        if (0 <= t) {
          if (isNaN(+e.substring(0, t)) || isNaN(+e.substring(t + 1, e.length - 1))) throw f;
          return Number(e.substring(t + 1, e.length - 1));
        }
        if (isNaN(+e.substring(0, n)) || isNaN(+e.substring(n + 1, e.length - 1))) throw f;
        return -Number(e.substring(n + 1, e.length - 1));
      }
      if (i) {
        var o = +e.substring(0, e.length - 1);
        if (isNaN(o)) throw f;
        return o;
      }
      if (isNaN(+e)) throw f;
      return 0;
    }
    function Ce(e) {
      var t = +_e(e),
        n = +ye(e);
      return he(Math.cos(t) * Math.cosh(n), -Math.sin(t) * Math.sinh(n));
    }
    function Se(e) {
      var t = +_e(e),
        n = +ye(e);
      return he(
        (Math.cos(n) * (Math.exp(t) + Math.exp(-t))) / 2,
        (Math.sin(n) * (Math.exp(t) - Math.exp(-t))) / 2
      );
    }
    function $e(e, t) {
      var n = +_e(e),
        r = +ye(e),
        i = +_e(t),
        o = +ye(t),
        a = Math.pow(i, 2) + Math.pow(o, 2);
      return he((n * i + r * o) / a, (r * i - n * o) / a);
    }
    function Ee(e) {
      var t = +_e(e),
        n = +ye(e);
      return he(Math.sin(t) * Math.cosh(n), Math.cos(t) * Math.sinh(n));
    }
    function ke(e) {
      var t = +_e(e),
        n = +ye(e);
      return he(
        (Math.cos(n) * (Math.exp(t) - Math.exp(-t))) / 2,
        (Math.sin(n) * (Math.exp(t) + Math.exp(-t))) / 2
      );
    }
    var Ve = Math.pow(2, 29);
    function Ae(e, t, n) {
      var r = w(t);
      if ('number' != typeof r || t < 0 || 1 < t || (n && (0 === t || 1 === t))) throw d;
      var i = S(e).sort(function (e, t) {
        return e - t;
      });
      n &&
        (i = (function () {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
          var r = Array(e),
            i = 0;
          for (t = 0; t < n; t++)
            for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
          return r;
        })([0], i));
      var o = (i.length + (n ? 0 : -1)) * r,
        a = Math.floor(o);
      if (void 0 === i[a + 1]) return i[a];
      var s = i[a + 1] - i[a];
      return i[a] + s * (o - a);
    }
    function Me(e, t, n) {
      var r = w(t);
      if ('number' != typeof r) throw d;
      switch (r) {
        case 0:
          if (n) throw d;
          return Z.apply(void 0, e);
        case 1:
          return Ae(e, 0.25, n);
        case 2:
          return Ae(e, 0.5, n);
        case 3:
          return Ae(e, 0.75, n);
        case 4:
          if (n) throw d;
          return K.apply(void 0, e);
        default:
          throw f;
      }
    }
    function Ie(e, t, n, r) {
      var i = V(e),
        o = V(t),
        a = V(n);
      if (1 == t) return 1 / a;
      var s = Math.exp(-Math.pow(i / a, o));
      return r ? 1 - s : (o / Math.pow(a, o)) * Math.pow(i, o - 1) * s;
    }
    function ze(e, t, n, r) {
      void 0 === r && (r = !1);
      var i = V(e),
        o = V(t),
        a = V(n),
        s = function (e, t, n) {
          return ce(t, e) * Math.pow(n, e) * Math.pow(1 - n, t - e);
        };
      if (!r) return s(i, o, a);
      for (var l = 0, u = 0; u < i + 1; u++) l += s(u, o, a);
      return l;
    }
    function De(e, t, n) {
      var r = e.filter(function (e) {
          return 'number' == typeof e;
        }),
        i = t.filter(function (e) {
          return 'number' == typeof e;
        });
      if (r.length !== i.length) throw v;
      var o = r.length;
      if (0 === o) throw h;
      for (
        var a =
            r.reduce(function (e, t) {
              return e + t;
            }, 0) / o,
          s =
            i.reduce(function (e, t) {
              return e + t;
            }, 0) / o,
          l = 0,
          u = 0;
        u < o;
        u++
      )
        l += (r[u] - a) * (i[u] - s);
      return l / (n ? o - 1 : o);
    }
    function Re(e, t) {
      return De(e, t, !1);
    }
    var Oe = {
        ABS: function (e) {
          var t = w(e);
          if ('number' == typeof t) return Math.abs(t);
        },
        ACOS: function (e) {
          var t = w(e);
          if ('number' == typeof t) return Math.acos(t);
        },
        ACOSH: function (e) {
          var t = w(e);
          if ('number' == typeof t) return Math.acosh(t);
        },
        ACOT: function (e) {
          var t = w(e);
          if ('number' == typeof t) return Math.atan(1 / t);
        },
        ACOTH: function (e) {
          var t = w(e);
          if ('number' == typeof t) return 0.5 * Math.log((t + 1) / (t - 1));
        },
        ADD: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r) return n + r;
        },
        ARABIC: function (e) {
          if (!w(e) && /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test('' + e)) {
            var t = 0;
            return (
              ('' + e).replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, function (e) {
                return (t += se[e]), e;
              }),
              +t
            );
          }
        },
        ASIN: function (e) {
          var t = w(e);
          if ('number' == typeof t) return Math.asin(t);
        },
        ASINH: function (e) {
          var t = w(e);
          if ('number' == typeof t) return Math.asinh(t);
        },
        ATAN: function (e) {
          var t = w(e);
          if ('number' == typeof t) return Math.atan(t);
        },
        ATAN2: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r) return Math.atan2(r, n);
        },
        ATANH: function (e) {
          var t = w(e);
          if ('number' == typeof t) return Math.log((1 + t) / (1 - t)) / 2;
        },
        AVEDEV: function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          var n = S(e).filter(function (e) {
              return 'number' == typeof e;
            }),
            r = n.length;
          if (0 === r) throw h;
          var i =
            n.reduce(function (e, t) {
              return e + t;
            }, 0) / r;
          return (
            n.reduce(function (e, t) {
              return e + Math.abs(t - i);
            }, 0) / r
          );
        },
        AVERAGE: q,
        AVERAGEA: X,
        BASE: function (e, t, n) {
          void 0 === n && (n = 0);
          var r = w(e),
            i = w(t),
            o = w(n);
          if ('number' == typeof r && 'number' == typeof i && 'number' == typeof o) {
            var a = r.toString(i);
            return new Array(Math.max(o + 1 - a.length, 0)).join('0') + a.toUpperCase();
          }
        },
        BINOMDIST: ze,
        'BINOM.INV': function (e, t, n) {
          for (var r = V(e), i = V(t), o = V(n), a = 0; a <= r; a++)
            if (ze(a, r, i, !0) >= o) return a;
        },
        'BINOM.DIST.RANGE': function (e, t, n, r) {
          var i = V(e),
            o = V(t),
            a = V(n),
            s = w(r);
          'number' != typeof s && (s = a);
          for (var l = 0, u = a; u <= s; u++)
            l += ce(i, u) * Math.pow(o, u) * Math.pow(1 - o, i - u);
          return l;
        },
        'BINOM.DIST': ze,
        BITAND: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r) return n & r;
          throw d;
        },
        BITLSHIFT: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r) return 0 < r ? n << r : n >> -r;
          throw d;
        },
        BITOR: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r) return n | r;
          throw d;
        },
        BITRSHIFT: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r) return 0 < r ? n >> r : n << -r;
          throw d;
        },
        BITXOR: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r) return n ^ r;
          throw d;
        },
        CEILING: function (e, t, n) {
          void 0 === t && (t = 1), void 0 === n && (n = 0);
          var r = w(e),
            i = w(t),
            o = w(n);
          if ('number' == typeof r && 'number' == typeof i && 'number' == typeof o)
            return 0 === i
              ? 0
              : ((i = Math.abs(i)),
                0 <= r
                  ? Math.ceil(r / i) * i
                  : 0 === n
                    ? -1 * Math.floor(Math.abs(r) / i) * i
                    : -1 * Math.ceil(Math.abs(r) / i) * i);
        },
        COMBIN: ce,
        COMBINA: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r)
            return 0 === n && 0 === r ? 1 : ce(n + r - 1, n - 1);
        },
        COMPLEX: he,
        CORREL: function (e, t) {
          if (e.length !== t.length) throw v;
          for (
            var n = e.filter(function (e) {
                return 'number' == typeof e;
              }),
              r = t.filter(function (e) {
                return 'number' == typeof e;
              }),
              i = n.length,
              o =
                n.reduce(function (e, t) {
                  return e + t;
                }, 0) / i,
              a =
                r.reduce(function (e, t) {
                  return e + t;
                }, 0) / i,
              s = 0,
              l = 0,
              u = 0,
              c = 0;
            c < i;
            c++
          )
            (s += (n[c] - o) * (r[c] - a)),
              (l += Math.pow(n[c] - o, 2)),
              (u += Math.pow(r[c] - a, 2));
          var f = Math.sqrt(l * u);
          if (!f) throw h;
          return s / f;
        },
        COS: function (e) {
          var t = w(e);
          if ('number' == typeof t) return Math.cos(t);
        },
        COSH: function (e) {
          var t = w(e);
          if ('number' == typeof t) return Math.cosh(t);
        },
        COT: function (e) {
          var t = w(e);
          if ('number' == typeof t) return 1 / Math.tan(t);
        },
        COTH: function (e) {
          var t = w(e);
          if ('number' == typeof t) {
            var n = Math.exp(2 * t);
            return (n + 1) / (n - 1);
          }
        },
        COUNT: G,
        COUNTA: Y,
        COUNTBLANK: function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n = 0, r = S(e), i = 0; i < r.length; i++) 0 === r[i] || r[i] || n++;
          return n;
        },
        COVAR: Re,
        'COVARIANCE.P': Re,
        'COVARIANCE.S': function (e, t) {
          return De(e, t, !0);
        },
        CSC: function (e) {
          var t = w(e);
          if ('number' == typeof t) return 1 / Math.sin(t);
        },
        CSCH: function (e) {
          var t = w(e);
          if ('number' == typeof t) return 2 / (Math.exp(t) - Math.exp(-t));
        },
        DEC2BIN: de,
        DEC2HEX: ve,
        DEC2OCT: ge,
        DECIMAL: function (e, t) {
          var n = w(e),
            r = w(t);
          if (
            !('' + n).match('/[2-9]/') &&
            'number' == typeof n &&
            'number' == typeof r &&
            1 < r &&
            r < 37
          )
            return parseInt('' + n, r);
        },
        DEGREES: function (e) {
          var t = w(e);
          if ('number' == typeof t) return (180 * t) / Math.PI;
        },
        DELTA: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n || 'number' == typeof n) return +(n === r);
          throw d;
        },
        DEVSQ: function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          var n = S(e),
            r = [];
          n.forEach(function (e) {
            'number' == typeof e && r.push(e);
          });
          var i =
            r.reduce(function (e, t) {
              return e + t;
            }, 0) / r.length;
          return r.reduce(function (e, t) {
            return e + Math.pow(t - i, 2);
          }, 0);
        },
        DIVIDE: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r && 0 !== r) return n / r;
        },
        EQ: function (e, t) {
          return typeof e == typeof t && e == t;
        },
        ERF: we,
        ERFC: function (e, t) {
          var n = w(e);
          if ('number' == typeof n) return 1 - we(n, t);
          throw d;
        },
        EVEN: function (e) {
          var t = w(e);
          if ('number' == typeof t) {
            var n = D(t);
            return n % 2 ? n + Math.sign(t) : n;
          }
        },
        EXP: function (e) {
          var t = w(e);
          if ('number' == typeof t) return Math.exp(t);
          throw d;
        },
        FACT: ue,
        FACTDOUBLE: function o(e) {
          var t = w(e);
          if ('number' == typeof t) {
            var n = Math.floor(t);
            return n <= 0 ? 1 : n * o(n - 2);
          }
        },
        FISHER: function (e) {
          var t = w(e);
          if ('number' == typeof t && -1 < t && t < 1) return 0.5 * Math.log((1 + t) / (1 - t));
          throw d;
        },
        FISHERINV: function (e) {
          var t = w(e);
          if ('number' != typeof t) throw d;
          var n = Math.exp(2 * t);
          return (n - 1) / (n + 1);
        },
        FLOOR: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r) {
            var i = Math.abs(r);
            return 0 <= n ? Math.floor(n / i) * i : -1 * Math.ceil(Math.abs(n) / i) * i;
          }
        },
        GAMMA: function o(e) {
          var t = w(e);
          if ('number' != typeof t) throw d;
          if (Number.isInteger(t) && t <= 0) throw f;
          if (t < 0.5) return Math.PI / (Math.sin(Math.PI * t) * o(1 - t));
          t -= 1;
          for (var n = be[0], r = 1; r < 9; r++) n += be[r] / (t + r);
          var i = t + 7 + 0.5;
          return Math.sqrt(2 * Math.PI) * Math.pow(i, t + 0.5) * Math.exp(-i) * n;
        },
        GCD: function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          var n = S(e),
            r = n.length;
          if (!r) return 1;
          for (var i = n[0], o = 1; 'number' != typeof i; ) {
            if (((i = n[o]), o > n.length))
              throw 'The arguments should contain at least one numeric value';
            o++;
          }
          for (var a = i < 0 ? -i : i; o < r; o++) {
            var s = w(n[o]);
            if ('number' == typeof s) {
              for (var l = s < 0 ? -s : s; a && l; ) l < a ? (a %= l) : (l %= a);
              a += l;
            }
          }
          return a;
        },
        GEOMEAN: function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          var n = S(e);
          if (
            n.some(function (e) {
              return !Number.isFinite(e) || e <= 0;
            })
          )
            throw f;
          return Math.pow(
            n.reduce(function (e, t) {
              return t * e;
            }, 1),
            1 / n.length
          );
        },
        GESTEP: function (e, t) {
          void 0 === t && (t = 0);
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r) return +(t <= e);
          throw d;
        },
        GT: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r) return r < n;
        },
        GTE: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r) return r <= n;
        },
        HARMEAN: function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          var n = S(e);
          if (
            n.some(function (e) {
              return !Number.isFinite(e) || e <= 0;
            })
          )
            throw f;
          var r = n.reduce(function (e, t) {
            return e + 1 / t;
          }, 0);
          return 1 / ((1 / n.length) * r);
        },
        HEX2BIN: function (e, t) {
          return de(parseInt(e.toString(), 16), t);
        },
        HEX2DEC: function (e, t) {
          var n = parseInt(e.toString(), 16);
          if (!Number.isFinite(n)) throw d;
          var r = xe < n;
          r && (n = -(n - 2 * xe));
          var i = t ? w(t) : null,
            o = n.toString();
          return (r ? '-' : '') + (i ? o.padStart(i, '0') : o);
        },
        HEX2OCT: function (e, t) {
          void 0 === t && (t = null);
          var n = parseInt(e.toString(), 16);
          return xe < n && (n ^= xe), ge(n, t);
        },
        IMABS: function (e) {
          var t = _e(e),
            n = ye(e);
          if (!Number.isFinite(+t) || !Number.isFinite(+n)) throw d;
          return Math.sqrt(Math.pow(+t, 2) + Math.pow(+n, 2));
        },
        IMAGINARY: ye,
        IMCONJUGATE: function (e) {
          return he(+_e(e), -+ye(e));
        },
        IMCOS: Ce,
        IMCOSH: Se,
        IMCOT: function (e) {
          return $e(Ce(e), Ee(e));
        },
        IMCSC: function (e) {
          return $e('1', Ee(e));
        },
        IMCSCH: function (e) {
          return $e('1', ke(e));
        },
        IMDIV: $e,
        IMEXP: function (e) {
          var t = +_e(e),
            n = +ye(e),
            r = Math.exp(t);
          return he(r * Math.cos(n), r * Math.sin(t));
        },
        IMLN: function (e) {
          var t = +_e(e),
            n = +ye(e);
          return he(Math.log(Math.sqrt(t * t + n * n)), Math.atan(n / t));
        },
        IMPOWER: function (e, t) {
          var n = w(t);
          if ('number' != typeof n) throw d;
          var r = +_e(e),
            i = +ye(e),
            o = Math.sqrt(r * r + i * i),
            a = Math.pow(o, n),
            s = Math.atan(i / r);
          return he(a * Math.cos(n * s), a * Math.sin(n * s));
        },
        IMPRODUCT: function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          if (0 === e.length) throw d;
          for (var n = e[0], r = 0, i = e.slice(1); r < i.length; r++) {
            var o = i[r];
            (a = n.toString()),
              (s = o.toString()),
              void 0,
              (l = +_e(a)),
              (u = +ye(a)),
              (c = +_e(s)),
              (f = +ye(s)),
              (n = he(l * c - u * f, l * f + u * c));
          }
          var a, s, l, u, c, f;
          return n.toString();
        },
        IMREAL: _e,
        IMSEC: function (e) {
          return $e('1', Ce(e));
        },
        IMSECH: function (e) {
          return $e('1', Se(e));
        },
        IMSIN: Ee,
        IMSINH: ke,
        IMSQRT: function (e) {
          var t = +_e(e),
            n = +ye(e),
            r = Math.sqrt(Math.sqrt(t * t + n * n)),
            i = Math.atan(n / t) / 2;
          return he(r * Math.cos(i), r * Math.sin(i));
        },
        IMSUB: function (e, t) {
          var n = +_e(e),
            r = +ye(e);
          return he(n - +_e(t), r - +ye(t));
        },
        IMSUM: function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          if (0 === e.length) throw d;
          for (var n = e[0], r = 0, i = e.slice(1); r < i.length; r++) {
            var o = i[r];
            (a = n.toString()),
              (s = o.toString()),
              void 0,
              (l = +_e(a)),
              (u = +ye(a)),
              (n = he(l + +_e(s), u + +ye(s)));
          }
          var a, s, l, u;
          return n.toString();
        },
        IMTAN: function (e) {
          return $e(Ee(e), Ce(e));
        },
        INT: function (e) {
          var t = w(e);
          if ('number' == typeof t) return Math.floor(t);
        },
        LARGE: function (e, t) {
          var n = w(t),
            r = e.sort(function (e, t) {
              return e - t;
            });
          if (
            'number' == typeof n &&
            !e.some(function (e) {
              return 'number' != typeof w(e);
            })
          )
            return r[r.length - n];
          throw d;
        },
        LN: function (e) {
          var t = w(e);
          if ('number' == typeof t) return Math.log(t);
        },
        LOG: function (e, t) {
          void 0 === t && (t = 10);
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r) return Math.log(n) / Math.log(r);
        },
        LOG10: function (e) {
          var t = w(e);
          if ('number' == typeof t) return Math.log(t) / Math.log(10);
        },
        LT: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r) return n < r;
        },
        LTE: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r) return n <= r;
        },
        MAX: K,
        MEDIAN: function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          var n = S(e);
          n.sort(function (e, t) {
            return e - t;
          });
          var r = Math.floor(n.length / 2);
          return n.length % 2 ? n[r] : (n[r - 1] + n[r]) / 2;
        },
        MIN: Z,
        MINUS: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r) return n - r;
        },
        MOD: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r && 0 !== r) {
            var i = Math.abs(n % r);
            return 0 < t ? i : -i;
          }
        },
        MROUND: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r && -1 < n * r)
            return Math.round(n / r) * r;
        },
        MULTINOMIAL: function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n = S(e), r = 0, i = 1, o = 0; o < n.length; o++) {
            var a = w(n[o]);
            'number' == typeof a && ((r += a), (i *= ue(n[o])));
          }
          return ue(r) / i;
        },
        MULTIPLY: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r) return n * r;
        },
        NE: function (e, t) {
          return typeof e != typeof t || e != t;
        },
        OCT2BIN: function (e, t) {
          void 0 === t && (t = null);
          var n = parseInt(e.toString(), 8);
          return n & Ve && (n = -(2 * Ve - n)), de(n, t);
        },
        OCT2DEC: function (e, t) {
          void 0 === t && (t = null);
          var n = t ? w(t) : null,
            r = parseInt(e.toString(), 8);
          if ((r & Ve && (r = -(2 * Ve - r)), !Number.isFinite(r) || 'boolean' == typeof n))
            throw d;
          return r.toString().padStart(n || 0, '0');
        },
        OCT2HEX: function (e, t) {
          void 0 === t && (t = null);
          var n = parseInt(e.toString(), 8);
          return n & Ve && (n = -(2 * Ve - n)), ve(n, t);
        },
        ODD: function (e) {
          var t = w(e);
          if ('number' == typeof t) {
            var n = D(t);
            return n % 2 ? n : n + Math.sign(t);
          }
        },
        PERCENTILE: Ae,
        'PERCENTILE.INC': Ae,
        'PERCENTILE.EXC': function (e, t) {
          return Ae(e, t, !0);
        },
        PERMUT: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r) return ue(n) / ue(n - r);
          throw d;
        },
        PI: function () {
          return Math.PI;
        },
        POW: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r) return ae(e, t);
        },
        POWER: ae,
        PRODUCT: Q,
        QUARTILE: Me,
        'QUARTILE.INC': Me,
        'QUARTILE.EXC': function (e, t) {
          return Me(e, t, !0);
        },
        QUOTIENT: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r) return M(n / r);
        },
        RADIANS: function (e) {
          var t = w(e);
          if ('number' == typeof t) return (t * Math.PI) / 180;
        },
        RAND: function () {
          return Math.random();
        },
        RANDBETWEEN: function (e, t) {
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r)
            return n + Math.ceil((r - n + 1) * Math.random()) - 1;
        },
        ROMAN: function (e) {
          var t = w(e);
          if ('number' == typeof t) {
            for (var n = String(t).split(''), r = '', i = 3; i--; )
              r = (fe[+n.pop() + 10 * i] || '') + r;
            return new Array(+n.join('') + 1).join('M') + r;
          }
        },
        ROUND: function (e, t) {
          var n = w(e),
            r = w(t) || 0;
          if ('number' == typeof n && 'number' == typeof r) return parseFloat(n.toFixed(r));
        },
        ROUNDDOWN: function (e, t) {
          var n = w(e),
            r = w(t) || 0;
          if ('number' == typeof n && 'number' == typeof r)
            return Math.floor(n * Math.pow(10, r)) / Math.pow(10, r);
        },
        ROUNDUP: function (e, t) {
          var n = w(e),
            r = w(t) || 0;
          if ('number' == typeof n && 'number' == typeof r)
            return Math.ceil(n * Math.pow(10, r)) / Math.pow(10, r);
        },
        SEC: function (e) {
          var t = w(e);
          if ('number' == typeof t) return 1 / Math.cos(t);
        },
        SECH: function (e) {
          var t = w(e);
          if ('number' == typeof t) return 2 / (Math.exp(t) + Math.exp(-t));
        },
        SIGN: function (e) {
          var t = w(e);
          if ('number' == typeof t) return 0 === t ? 0 : t / Math.abs(t);
          throw d;
        },
        SIN: function (e) {
          var t = w(e);
          if ('number' == typeof t) return Math.sin(t);
        },
        SINH: function (e) {
          var t = w(e);
          if ('number' == typeof t) return Math.sinh(t);
        },
        SMALL: function (e, t) {
          var n = w(t),
            r = e.sort(function (e, t) {
              return e - t;
            });
          if (
            'number' == typeof n &&
            !e.some(function (e) {
              return 'number' != typeof w(e);
            })
          )
            return r[n - 1];
          throw d;
        },
        SQRT: function (e) {
          var t = w(e);
          if ('number' == typeof t && 0 <= t) return Math.sqrt(t);
        },
        SQRTPI: function (e) {
          var t = w(e);
          if ('number' == typeof t && -1 < t) return Math.sqrt(t * Math.PI);
        },
        STDEV: ie,
        'STDEV.S': ie,
        'STDEV.P': oe,
        STDEVA: function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return Math.sqrt(te.apply(void 0, e));
        },
        STDEVP: oe,
        STDEVPA: function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return Math.sqrt(re.apply(void 0, e));
        },
        STEYX: function (e, t) {
          if (e.length !== t.length) throw v;
          var n = e.filter(function (e) {
              return 'number' == typeof e;
            }),
            r = t.filter(function (e) {
              return 'number' == typeof e;
            }),
            i = n.length;
          if (2 === i) throw h;
          for (
            var o =
                n.reduce(function (e, t) {
                  return e + t;
                }, 0) / i,
              a =
                r.reduce(function (e, t) {
                  return e + t;
                }, 0) / i,
              s = 0,
              l = 0,
              u = 0,
              c = 0;
            c < i;
            c++
          )
            (s += (n[c] - o) * (r[c] - a)),
              (l += Math.pow(n[c] - o, 2)),
              (u += Math.pow(r[c] - a, 2));
          if (2 === u) throw h;
          return Math.sqrt((l - Math.pow(s, 2) / u) / (i - 2));
        },
        SUBTOTAL: function (e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          var r = w(e),
            i = S(t);
          if ('number' == typeof r)
            switch (r) {
              case 1:
              case 101:
                return q.apply(void 0, i);
              case 102:
              case 2:
                return G.apply(void 0, i);
              case 103:
              case 3:
                return Y.apply(void 0, i);
              case 104:
              case 4:
                return K.apply(void 0, i);
              case 105:
              case 5:
                return Z.apply(void 0, i);
              case 106:
              case 6:
                return Q.apply(void 0, i);
              case 107:
              case 7:
              case 110:
              case 10:
                return;
              case 108:
              case 8:
                return oe.apply(void 0, i);
              case 109:
              case 9:
                return R.apply(void 0, i);
              case 111:
              case 11:
                return ne.apply(void 0, i);
            }
        },
        SUM: R,
        SUMPRODUCT: function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          var n = e[0].length;
          for (var r in e) if (e[r].length !== n) return;
          var i = 0;
          for (r = 0; r < e[0].length; r++) {
            var o = !1,
              a = 1;
            for (var s in e) {
              var l = w(e[s][r]);
              'number' == typeof l && ((a *= l), (o = !0));
            }
            o && (i += a);
          }
          return i;
        },
        SUMSQ: function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n = 0, r = S(e), i = 0; i < r.length; i++) {
            var o = w(r[i]);
            'number' == typeof o && (n += Math.pow(o, 2));
          }
          return n;
        },
        SUMX2MY2: function (e, t) {
          if (
            !e.find(function (e) {
              return 'number' != typeof w(e);
            }) &&
            !t.find(function (e) {
              return 'number' != typeof w(e);
            })
          ) {
            for (var n = 0, r = 0; r < e.length; r++) n += e[r] * e[r] - t[r] * t[r];
            return n;
          }
        },
        SUMX2PY2: function (e, t) {
          if (
            !e.find(function (e) {
              return 'number' != typeof w(e);
            }) &&
            !t.find(function (e) {
              return 'number' != typeof w(e);
            })
          ) {
            for (var n = 0, r = 0; r < e.length; r++) n += e[r] * e[r] + t[r] * t[r];
            return n;
          }
        },
        SUMXMY2: function (e, t) {
          if (
            !e.find(function (e) {
              return 'number' != typeof w(e);
            }) &&
            !t.find(function (e) {
              return 'number' != typeof w(e);
            })
          ) {
            for (var n = 0, r = 0; r < e.length; r++) n += Math.pow(e[r] - t[r], 2);
            return n;
          }
        },
        TAN: function (e) {
          var t = w(e);
          if ('number' == typeof t) return Math.tan(t);
        },
        TANH: function (e) {
          var t = w(e);
          if ('number' == typeof t) return Math.tanh(t);
        },
        TRUNC: function (e) {
          var t = w(e);
          if ('number' == typeof t) return M(t);
        },
        VAR: ee,
        'VAR.S': ee,
        'VAR.P': ne,
        VARA: te,
        VARP: ne,
        VARPA: re,
        WEIBULL: Ie,
        'WEIBULL.DIST': Ie,
      },
      Te = /[\0-\x1F]/g,
      Ne = Object.freeze({
        __proto__: null,
        CONCATENATE: function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return S(e).join('');
        },
        LEFT: function (e, t) {
          return $(e) ? '' : e.toString().substring(0, t);
        },
        MID: function (e, t, n) {
          return $(e) ? '' : e.toString().substring(t, t + n);
        },
        RIGHT: function (e, t) {
          return $(e) ? '' : e.toString().substring(e.length - t);
        },
        LOWER: function (e) {
          return $(e) ? '' : e.toString().toLowerCase();
        },
        UPPER: function (e) {
          return $(e) ? '' : e.toString().toUpperCase();
        },
        PROPER: function (e) {
          if ($(e)) return '';
          var t = e.toString().toLowerCase().split(' ');
          for (var n in ((e = ''), t))
            e += (e ? ' ' : '') + t[n].substring(0, 1).toUpperCase() + t[n].substring(1);
          return e;
        },
        TRIM: function (e) {
          return $(e) ? '' : e.toString().trim();
        },
        LEN: function (e) {
          return $(e) ? 0 : e.toString().length;
        },
        CHAR: function (e) {
          var t = w(e);
          if ('number' == typeof t) return String.fromCharCode(t);
        },
        CLEAN: function (e) {
          return void 0 === e && (e = ''), ('' + e).replace(Te, '');
        },
        CODE: function (e) {
          return void 0 === e && (e = ''), ('' + e).charCodeAt(0);
        },
        EXACT: function (e, t) {
          return e === t;
        },
        FIND: function (e, t, n) {
          void 0 === n && (n = 0);
          var r = w(n);
          if ('number' == typeof r && t) return ('' + t).indexOf('' + e, r - 1) + 1;
          throw 'index cannot be string';
        },
        FIXED: function (e, t, n) {
          void 0 === t && (t = 2), void 0 === n && (n = !1);
          var r = w(e),
            i = w(t);
          if ('number' == typeof r && 'number' == typeof i) {
            var o = r.toFixed(i);
            if (E(n)) return '' + o;
            var a = ('' + o).split('.'),
              s = a[0],
              l = a[1];
            return s.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + l;
          }
        },
        NUMBERVALUE: function (e, t, n) {
          if (
            (void 0 === t && (t = '.'),
            void 0 === n && (n = ','),
            'string' == typeof e && 'string' == typeof t && 'string' == typeof n)
          )
            return Number(e.replace(t, '.').replace(n, ''));
        },
        REGEXEXTRACT: function (e, t) {
          if ('string' == typeof e && 'string' == typeof t) {
            var n = e.match(new RegExp(t));
            return n ? n[1 < n.length ? n.length - 1 : 0] : null;
          }
        },
        REGEXMATCH: function (e, t) {
          if ('string' == typeof e && 'string' == typeof t) return !!e.match(new RegExp(t));
        },
        REGEXREPLACE: function (e, t, n) {
          if ('string' == typeof e && 'string' == typeof t) return e.replace(new RegExp(t), '' + n);
        },
        REPT: function (e, t) {
          var n = w(t);
          if ('number' == typeof n) return new Array(n + 1).join('' + e);
        },
        SEARCH: function (e, t, n) {
          void 0 === n && (n = 0);
          var r = w(n);
          if ('number' == typeof r) {
            var i = ('' + t).toLowerCase().indexOf(('' + e).toLowerCase(), r - 1) + 1;
            if (0 !== i) return i;
            throw 'not found';
          }
        },
        SUBSTITUTE: function (e, t, n, r) {
          if (!e || !t || (!n && '' !== n)) return '' + e;
          if (void 0 === r) return ('' + e).replace(new RegExp('' + t, 'g'), '' + n);
          for (var i = 0, o = 0; 0 < ('' + e).indexOf('' + t, i); )
            if (((i = ('' + e).indexOf('' + t, i + 1)), ++o === r))
              return ('' + e).substring(0, i) + n + ('' + e).substring(i + ('' + t).length);
        },
        T: function (e) {
          return 'string' == typeof e && 'TRUE' !== e && 'FALSE' !== e ? '' + e : '';
        },
        JOIN: function (t) {
          for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          var r = [];
          return (
            e.forEach(function (e) {
              'object' == typeof e ? r.push(e.join('' + t)) : r.push(e);
            }),
            r.join('' + t)
          );
        },
        REPLACE: function (e, t, n, r) {
          var i = w(t),
            o = w(n);
          if ('number' == typeof i && 'number' == typeof o) {
            var a = e.toString(),
              s = r.toString();
            return a.replace(a.substr(i - 1, o), s);
          }
        },
        ARRAYTOTEXT: function (e, t) {
          return t
            ? '{' +
                e
                  .map(function (e) {
                    return 'string' == typeof e ? '"' + e + '"' : e;
                  })
                  .join('; ') +
                '}'
            : e.join('; ');
        },
      });
    function Pe(e) {
      return void 0 === e ? null : e;
    }
    function Fe(n, e, t, r) {
      void 0 === t && (t = 0);
      var i = -1;
      if (0 === t) i = e.indexOf(n);
      else {
        var o = 'string' == typeof n ? '' : (-1 / 0) * t;
        1 === t
          ? e.forEach(function (e, t) {
              e <= n && o < e && ((o = e), (i = t));
            })
          : -1 === t &&
            e.forEach(function (e, t) {
              n <= e && e < o && ((o = e), (i = t));
            });
      }
      return i + 1;
    }
    var Ue = {
        LOOKUP: function (e, t, n) {
          var r = Fe(e, t, 1);
          if (0 === r) throw '#N/A';
          return (n || t)[r - 1];
        },
        HLOOKUP: function (e, t, n, r) {
          var i = !0;
          void 0 !== r && (i = E(r));
          var o = t.$width ? t.$width : t.length,
            a = Fe(e, t.slice(0, o), i ? 1 : 0);
          if (0 === a) throw '#N/A';
          return Pe(t[o * ((n || 1) - 1) + a - 1]);
        },
        VLOOKUP: function (e, t, n, r) {
          var i = !0;
          void 0 !== r && (i = E(r));
          var o,
            a = t.$width ? t.$width : 1,
            s = t.length / a;
          if (1 === s) o = t;
          else {
            o = [];
            for (var l = 0; l < s; l++) o.push(t[a * l]);
          }
          var u = n,
            c = Fe(e, o, i ? 1 : 0);
          if (0 === c) throw '#N/A';
          return Pe(t[a * (c - 1) + (u || 1) - 1]);
        },
        XLOOKUP: function (e, t, n, r, i, o) {
          var a = Fe(e, t, i);
          if (0 !== a) return (n || t)[a - 1];
          if (void 0 !== r) return r;
          throw '#N/A';
        },
        INDEX: function (e, t, n) {
          var r = t,
            i = n;
          return Pe(e[(e.$width ? e.$width : 1) * (r - 1) + (i || 1) - 1]);
        },
        MATCH: function (e, t, n) {
          var r = n;
          void 0 === n && (r = 1);
          var i = Fe(e, t, r);
          if (0 === i) throw '#N/A';
          return i;
        },
        XMATCH: function (e, t, n, r) {
          var i = Fe(e, t, n);
          if (0 === i) throw '#N/A';
          return i;
        },
      },
      Be = [
        [],
        [1, 2, 3, 4, 5, 6, 7],
        [7, 1, 2, 3, 4, 5, 6],
        [6, 0, 1, 2, 3, 4, 5],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [7, 1, 2, 3, 4, 5, 6],
        [6, 7, 1, 2, 3, 4, 5],
        [5, 6, 7, 1, 2, 3, 4],
        [4, 5, 6, 7, 1, 2, 3],
        [3, 4, 5, 6, 7, 1, 2],
        [2, 3, 4, 5, 6, 7, 1],
        [1, 2, 3, 4, 5, 6, 7],
      ],
      Le = [
        void 0,
        0,
        1,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        1,
        2,
        3,
        4,
        5,
        6,
        0,
      ],
      He = [
        [],
        [6, 0],
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
        void 0,
        void 0,
        void 0,
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 5],
        [6, 6],
      ];
    function je(e, t) {
      var n = k(e),
        r = k(t);
      if (n && r) return Math.round((n.getTime() - r.getTime()) / 864e5);
    }
    function We(e) {
      var t = k(e);
      if (t) {
        t.setHours(0, 0, 0), t.setDate(t.getDate() + 4 - (t.getDay() || 7));
        var n = new Date(t.getFullYear(), 0, 1);
        return Math.ceil(((t.getTime() - n.getTime()) / 864e5 + 1) / 7);
      }
    }
    function qe(e, t, n, r) {
      var i = k(e),
        o = k(t);
      if (i && o) {
        for (var a = void 0 === n ? He[1] : He[n], s = r || [], l = 0; l < s.length; l++) {
          if ((g = p(s[l])) instanceof Error) throw 'The ' + s[l] + ' is not a  number';
          s[l] = g;
        }
        var u = (o.getTime() - i.getTime()) / 864e5 + 1,
          c = Math.round(u),
          f = i;
        for (l = 0; l < u; l++) {
          var h = 0 < new Date().getTimezoneOffset() ? f.getUTCDay() : f.getDay(),
            d = !1;
          (h !== a[0] && h !== a[1]) || (d = !0);
          for (var v = 0; v < s.length; v++) {
            var g;
            if (
              (g = s[v]).getDate() === f.getDate() &&
              g.getMonth() === f.getMonth() &&
              g.getFullYear() === f.getFullYear()
            ) {
              d = !0;
              break;
            }
          }
          d && c--, f.setDate(f.getDate() + 1);
        }
        return c;
      }
    }
    function Xe(e, t, n, r) {
      var i = k(e),
        o = w(t);
      if (i && 'number' == typeof o) {
        for (var a = void 0 === n ? He[1] : He[n], s = r || [], l = 0; l < s.length; l++) {
          if ((h = p(s[l])) instanceof Error) throw 'The ' + s[l] + ' is not a  number';
          s[l] = h;
        }
        for (var u = 0; u < o; ) {
          i.setDate(i.getDate() + 1);
          var c = i.getDay();
          if (c !== a[0] && c !== a[1]) {
            for (var f = 0; f < s.length; f++) {
              var h;
              if (
                (h = s[f]).getDate() === i.getDate() &&
                h.getMonth() === i.getMonth() &&
                h.getFullYear() === i.getFullYear()
              ) {
                u--;
                break;
              }
            }
            u++;
          }
        }
        return m(i);
      }
    }
    function Ge(e) {
      return 1 === new Date(e, 1, 29).getMonth();
    }
    function Ye(e, t, n) {
      void 0 === n && (n = 0);
      var r = k(e),
        i = k(t);
      if (r && i) {
        var o = r.getDate(),
          a = r.getMonth() + 1,
          s = r.getFullYear(),
          l = i.getDate(),
          u = i.getMonth() + 1,
          c = i.getFullYear(),
          f = 365,
          h = c - s + 1,
          d =
            (new Date(c + 1, 0, 1).getTime() - new Date(s, 0, 1).getTime()) /
            1e3 /
            60 /
            60 /
            24 /
            h;
        switch (n) {
          case 0:
            return (
              31 === o && 31 === l
                ? (l = o = 30)
                : 31 === o
                  ? (o = 30)
                  : 30 === o && 31 === l && (l = 30),
              (l + 30 * u + 360 * c - (o + 30 * a + 360 * s)) / 360
            );
          case 1:
            return s === c || (s + 1 === c && (u < a || (a === u && l <= o)))
              ? (((s === c && Ge(s)) ||
                  (function (e, t) {
                    var n = e.getFullYear(),
                      r = new Date(n, 2, 1);
                    if (Ge(n) && e < r && r <= t) return !0;
                    var i = t.getFullYear(),
                      o = new Date(i, 2, 1);
                    return Ge(i) && o <= t && e < o;
                  })(r, i) ||
                  (1 === u && 29 === l)) &&
                  (f = 366),
                je(i.toDateString(), r.toDateString()) / f)
              : je(i.toDateString(), r.toDateString()) / d;
          case 2:
            return je(i.toDateString(), r.toDateString()) / 360;
          case 3:
            return je(i.toDateString(), r.toDateString()) / 365;
          case 4:
            return (l + 30 * u + 360 * c - (o + 30 * a + 360 * s)) / 360;
        }
      }
    }
    var Ke = {
        DATE: function (e, t, n) {
          return m(new Date(e, t - 1, n));
        },
        TIME: function (e, t, n) {
          var r = m(new Date(1900, 0, 1, e, t, n, 0));
          return r - Math.trunc(r);
        },
        DAY: function (e) {
          return p(e).getDate();
        },
        MONTH: function (e) {
          return p(e).getMonth() + 1;
        },
        YEAR: function (e) {
          return p(e).getFullYear();
        },
        HOUR: function (e) {
          return p(e).getHours();
        },
        MINUTE: function (e) {
          return p(e).getMinutes();
        },
        SECOND: function (e) {
          return p(e).getSeconds();
        },
        NOW: function () {
          return m(new Date());
        },
        DATEDIF: function (e, t, n) {
          var r = n.toLowerCase();
          if ('d' === r) return t - e;
          var i = p(e),
            o = p(t);
          switch (r) {
            case 'y':
              return o.getFullYear() - i.getFullYear();
            case 'm':
              return (s = 12 * (o.getFullYear() - i.getFullYear())) + o.getMonth() - i.getMonth();
            case 'd':
              return Math.floor(t - e);
            case 'md':
              if ((l = o.getDate() - i.getDate()) < 0) {
                var a = new Date(i.getFullYear(), i.getMonth() + 1, 0).getDate();
                return o.getDate() + a - i.getDate();
              }
              return l;
            case 'ym':
              var s;
              return (s = o.getMonth() - i.getMonth()) < 0 ? 12 + s : s;
            case 'yd':
              var l;
              return (l = g(o) - g(i)) < 0 ? 365 + l : l;
          }
        },
        DATEVALUE: function (e) {
          if ('string' == typeof e) return m(new Date(new Date(e).toDateString()));
        },
        DAYS: je,
        DAYS360: function (e, t, n) {
          void 0 === n && (n = 0);
          var r = k(e),
            i = k(t);
          if (r && i) {
            var o = r.getMonth(),
              a = i.getMonth(),
              s = void 0,
              l = void 0;
            if (E(n))
              (s = 31 === r.getDate() ? 30 : r.getDate()),
                (l = 31 === i.getDate() ? 30 : i.getDate());
            else {
              var u = new Date(r.getFullYear(), o + 1, 0).getDate(),
                c = new Date(i.getFullYear(), a + 1, 0).getDate();
              (s = r.getDate() === u ? 30 : r.getDate()),
                (l = i.getDate() === c ? (s < 30 ? (a++, 1) : 30) : i.getDate());
            }
            return 360 * (i.getFullYear() - r.getFullYear()) + 30 * (a - o) + (l - s);
          }
        },
        EDATE: function (e, t) {
          var n = k(e),
            r = w(t);
          if (n && 'number' == typeof r) return n.setMonth(n.getMonth() + r), m(n);
        },
        EOMONTH: function (e, t) {
          var n = k(e),
            r = w(t);
          if (n && 'number' == typeof r)
            return m(new Date(n.getFullYear(), n.getMonth() + r + 1, 0));
        },
        ISOWEEKNUM: We,
        NETWORKDAYS: function (e, t, n) {
          return qe(e, t, 1, n);
        },
        'NETWORKDAYS.INTL': qe,
        TIMEVALUE: function (e) {
          if ('string' == typeof e) {
            var t = e.split(' '),
              n = t[1],
              r = t[0].split(':'),
              i = new Date();
            return (
              i.setHours(+r[0]),
              n && 'PM' === n.toUpperCase() && i.setHours(i.getHours() + 12),
              i.setMinutes(+r[1]),
              r[2] && i.setSeconds(+r[2]),
              (3600 * i.getHours() + 60 * i.getMinutes() + i.getSeconds()) / 86400
            );
          }
        },
        WEEKNUM: function (e, t) {
          void 0 === t && (t = 1);
          var n = k(e);
          if (21 === t) return We(t);
          var r = Le[t],
            i = new Date(n.getFullYear(), 0, 1),
            o = i.getDay() < r ? 1 : 0,
            a = i.getTime() - 24 * Math.abs(i.getDay() - r) * 60 * 60 * 1e3;
          return Math.floor((n.getTime() - a) / 864e5 / 7 + 1) + o;
        },
        WEEKDAY: function (e, t) {
          void 0 === t && (t = 1);
          var n = k(e).getDay();
          return Be[t][n];
        },
        WORKDAY: function (e, t, n) {
          return Xe(e, t, 1, n);
        },
        'WORKDAY.INTL': Xe,
        YEARFRAC: Ye,
      },
      Ze = Object.freeze({
        __proto__: null,
        IF: function (e, t, n) {
          return e ? t : n;
        },
        AND: function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n = 0; n < e.length; n++) if (!E(e[n])) return !1;
          return !0;
        },
        NOT: function (e) {
          return !E(e);
        },
        OR: function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n = 0; n < e.length; n++) if (e[n]) return !0;
          return !1;
        },
        CHOOSE: function (e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          var r = w(e);
          if (1 < t.length && 'number' == typeof r) {
            if (t.length < r)
              throw 'the index number is greater than the length of the array of values';
            if (r <= 0) throw 'index cannot be less than or equal to 0';
            return t[--r];
          }
        },
        FALSE: function () {
          return !1;
        },
        TRUE: function () {
          return !0;
        },
      }),
      Qe = Object.freeze({
        __proto__: null,
        ISBLANK: function (e) {
          return $(e);
        },
        ISBINARY: function (e) {
          return /^[01]{1,10}$/.test('' + e);
        },
        ISEVEN: function (e) {
          var t = w(e);
          return 'number' == typeof t && t % 2 == 0;
        },
        ISODD: function (e) {
          var t = w(e);
          return 'number' == typeof t && t % 2 != 0;
        },
        ISNONTEXT: function (e) {
          return 'string' != typeof e;
        },
        ISNUMBER: function (e) {
          return 'number' == typeof w(e);
        },
        ISTEXT: function (e) {
          return 'string' == typeof e;
        },
        N: function (e) {
          var t = w(e);
          if ('number' == typeof t) return t;
          var n = new Date(e);
          return n.getTime() ? m(n) : 'TRUE' === e || !0 === e ? 1 : 0;
        },
      });
    function Je(e, t, n, r, i) {
      void 0 === r && (r = 0), void 0 === i && (i = 0);
      var o,
        a = V(e),
        s = V(t),
        l = V(n),
        u = V(r);
      if (0 === a) o = (l + u) / s;
      else {
        var c = Math.pow(1 + a, s);
        (o = (a * (l * c + u)) / (c - 1)), 1 === i && (o /= 1 + a);
      }
      return -o;
    }
    function et(e, t, n, r, i) {
      void 0 === r && (r = 0), void 0 === i && (i = 0);
      var o,
        a = V(e),
        s = V(t),
        l = V(n),
        u = V(r);
      if (0 !== a) {
        var c = Math.pow(1 + a, s);
        return (
          (o = u * c + (l * (c - 1)) / a), 1 === i && (o = u * c + (l * (1 + a) * (c - 1)) / a), -o
        );
      }
      o = u + l * s;
    }
    function tt(e, t, n, r, i, o) {
      void 0 === i && (i = 0), void 0 === o && (o = 0);
      var a = V(e),
        s = V(n),
        l = V(t),
        u = V(r),
        c = Je(a, s, u, V(i), o);
      return (
        (1 === l
          ? 1 === o
            ? 0
            : -u
          : 1 === o
            ? et(a, l - 2, c, u, 1) - c
            : et(a, l - 1, c, u, 0)) * a
      );
    }
    var nt = Object.freeze({
        __proto__: null,
        ACCRINT: function (e, t, n, r, i, o, a) {
          void 0 === i && (i = 0), void 0 === a && (a = 0);
          var s = k(e),
            l = k(n),
            u = V(r),
            c = V(i),
            f = V(o),
            h = V(a);
          if (1 !== f) throw 'This function is only supported with frequency 1';
          if (-1 === [0, 1, 2, 3, 4].indexOf(h))
            throw 'Basis is ' + a + ". It's should be 0, 1, 2, 3 or 4";
          if (l <= s) throw 'Settlement canot be before or equal to issue';
          return c * u * Ye(e, n, h);
        },
        PMT: Je,
        FV: et,
        DB: function (e, t, n, r, i) {
          void 0 === i && (i = 12);
          var o = V(e),
            a = V(t),
            s = V(n),
            l = V(r),
            u = V(i);
          if (o < 0 || a < 0 || s < 0 || l < 0) throw 'Parameters cannot be negative';
          if (-1 === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].indexOf(u))
            throw 'Month is ' + i + ". It's should be beetwen 1 and 12";
          if (s < l) throw 'Period cannot be greater than life';
          if (o <= a) return 0;
          for (
            var c = +(1 - Math.pow(a / o, 1 / s)).toFixed(3),
              f = (o * c * u) / 12,
              h = f,
              d = 0,
              v = r === s ? s - 1 : r,
              g = 2;
            g <= v;
            g++
          )
            h += d = (o - h) * c;
          return 1 === r ? f : r === s ? (o - h) * c : d;
        },
        DDB: function (e, t, n, r, i) {
          void 0 === i && (i = 2);
          var o = V(e),
            a = V(t),
            s = V(n),
            l = V(r),
            u = V(i);
          if (o < 0 || a < 0 || s < 0 || l < 0 || u < 0) throw 'Parameters cannot be negative';
          if (s < l) throw 'Period cannot be greater than life';
          if (o <= a) return 0;
          for (var c = 0, f = 0, h = 1; h <= r; h++)
            c += f = Math.min((u / s) * (o - c), o - a - c);
          return f;
        },
        DOLLAR: function (e, t) {
          void 0 === t && (t = 2);
          var n = w(e),
            r = w(t);
          if ('number' == typeof n && 'number' == typeof r) {
            if (0 <= r) return '$' + n.toFixed(r);
            var i = Math.pow(10, -r);
            return '$' + Math.trunc(n / i) * i;
          }
        },
        DOLLARDE: function (e, t) {
          var n = V(e),
            r = V(t);
          if (r < 0) throw 'Fraction cannot be negative';
          if (0 <= r && r < 1) throw 'Fraction cannot be zero';
          r = parseInt('' + r, 10);
          var i = parseInt('' + e, 10);
          i += ((n % 1) * Math.pow(10, Math.ceil(Math.log(r) / Math.LN10))) / r;
          var o = Math.pow(10, Math.ceil(Math.log(r) / Math.LN2) + 1);
          return Math.round(i * o) / o;
        },
        DOLLARFR: function (e, t) {
          var n = V(e),
            r = V(t);
          if (r < 0) throw 'Fraction cannot be negative';
          if (0 <= r && r < 1) throw 'Fraction cannot be zero';
          return (
            (r = parseInt('' + r, 10)),
            parseInt('' + e, 10) + (n % 1) * Math.pow(10, -Math.ceil(Math.log(r) / Math.LN10)) * r
          );
        },
        EFFECT: function (e, t) {
          var n = V(e),
            r = V(t);
          if (n <= 0) throw 'Rate cannot be less than or equal to zero';
          if (r < 1) throw 'Periods cannot be less than 1';
          return (r = parseInt('' + r, 10)), Math.pow(1 + n / r, r) - 1;
        },
        FVSCHEDULE: function (e, t) {
          for (
            var n = V(e),
              r = t.map(function (e) {
                return V(e);
              }),
              i = r.length,
              o = n,
              a = 0;
            a < i;
            a++
          )
            o *= 1 + r[a];
          return o;
        },
        IRR: function (e, t) {
          void 0 === t && (t = 0);
          for (
            var n = S(e).map(function (e) {
                return V(e);
              }),
              r = V(t),
              i = function (e, t, n) {
                for (var r = n + 1, i = e[0], o = 1; o < e.length; o++)
                  i += e[o] / Math.pow(r, (t[o] - t[0]) / 365);
                return i;
              },
              o = function (e, t, n) {
                for (var r = n + 1, i = 0, o = 1; o < e.length; o++) {
                  var a = (t[o] - t[0]) / 365;
                  i -= (a * e[o]) / Math.pow(r, a + 1);
                }
                return i;
              },
              a = [],
              s = !1,
              l = !1,
              u = 0;
            u < n.length;
            u++
          )
            (a[u] = 0 === u ? 0 : a[u - 1] + 365), 0 < n[u] && (s = !0), n[u] < 0 && (l = !0);
          if (!s || !l)
            throw 'Values should contain at least one positive value and one negative value';
          for (
            var c, f, h, d = (r = void 0 === t ? 0.1 : r);
            (c = d - (h = i(n, a, d)) / o(n, a, d)),
              (f = Math.abs(c - d)),
              (d = c),
              1e-10 < f && 1e-10 < Math.abs(h);

          );
          return d;
        },
        IPMT: tt,
        ISPMT: function (e, t, n, r) {
          var i = V(e),
            o = V(t),
            a = V(n);
          return V(r) * i * (o / a - 1);
        },
        NPV: function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (
            var n = S(e).map(function (e) {
                return V(e);
              }),
              r = V(n[0]),
              i = 0,
              o = 1;
            o < n.length;
            o++
          )
            i += n[o] / Math.pow(1 + r, o);
          return i;
        },
        NOMINAL: function (e, t) {
          var n = V(e),
            r = V(t);
          if (n <= 0) throw 'Rate cannot be less then or equal to zero';
          if (r < 1) throw 'Periods cannot be less then 1';
          return (r = parseInt('' + r, 10)), (Math.pow(n + 1, 1 / r) - 1) * r;
        },
        NPER: function (e, t, n, r, i) {
          void 0 === r && (r = 0), void 0 === i && (i = 0);
          var o = V(e),
            a = V(t),
            s = V(n),
            l = V(r),
            u = V(i),
            c = a * (1 + o * u) - l * o,
            f = s * o + a * (1 + o * u);
          return Math.log(c / f) / Math.log(1 + o);
        },
        PDURATION: function (e, t, n) {
          var r = V(e),
            i = V(t),
            o = V(n);
          if (r <= 0) throw 'Rate cannot be less then or equal to zero';
          return (Math.log(o) - Math.log(i)) / Math.log(1 + r);
        },
        PPMT: function (e, t, n, r, i, o) {
          void 0 === i && (i = 0), void 0 === o && (o = 0);
          var a = V(e),
            s = V(t),
            l = V(n),
            u = V(r),
            c = V(i),
            f = V(o);
          return Je(a, l, u, c, f) - tt(a, s, l, u, c, f);
        },
        PV: function (e, t, n, r, i) {
          void 0 === r && (r = 0), void 0 === i && (i = 0);
          var o = V(e),
            a = V(t),
            s = V(n),
            l = V(r),
            u = V(i);
          return 0 === o
            ? -s * a - l
            : (((1 - Math.pow(1 + o, a)) / o) * s * (1 + o * u) - l) / Math.pow(1 + o, a);
        },
        SYD: function (e, t, n, r) {
          var i = V(e),
            o = V(t),
            a = V(n);
          return ((i - o) * (a - V(r) + 1) * 2) / (a * (a + 1));
        },
        TBILLPRICE: function (e, t, n) {
          var r = k(e),
            i = k(t),
            o = V(n);
          if ('number' == typeof o && r < i)
            return 100 * (1 - (o * Math.round((i.getTime() - r.getTime()) / 864e5)) / 360);
        },
        TBILLYIELD: function (e, t, n) {
          var r = k(e),
            i = k(t),
            o = V(n);
          if ('number' == typeof o && r < i)
            return (((100 - o) / o) * 360) / Math.round((i.getTime() - r.getTime()) / 864e5);
        },
      }),
      rt = {
        number: Oe,
        string: Ne,
        date: Ke,
        other: Ze,
        information: Qe,
        financial: nt,
        lookup: Ue,
      },
      it = b(b(b(b(b(b(b({}, Oe), Ne), Ke), Ze), Qe), nt), Ue);
    function ot(e, t, n, r, i, o) {
      var a = z(e),
        s = a[0],
        l = a[1],
        u = a[2],
        c = z(r),
        f = c[0],
        h = c[1];
      return !(u !== c[2] || f + i <= s || s + t <= f || h + o <= l || l + n <= h);
    }
    var at = Math.pow(10, 8);
    function st(e) {
      if (e.keys) return Array.from(e.keys());
      var n = [];
      return (
        e.forEach(function (e, t) {
          return n.push(t);
        }),
        n
      );
    }
    function lt(e) {
      if (e.values) return e.values();
      var n = [];
      e.forEach(function (e, t) {
        return n.push(t);
      });
      var t = 0;
      return {
        add: function (e) {
          n.push(e);
        },
        next: function () {
          var e = n[t];
          return { done: ++t > n.length, value: e };
        },
      };
    }
    var ut = (function () {
        function e(e) {
          var f = this;
          (e = e || { get: null, set: null, strict: !1 }) &&
            ((this._getter = e.get), (this._setter = e.set), (this._strict = e.strict)),
            (this._parser = r),
            (this._printer = i),
            (this._parseContext = {
              name: function () {},
              pageName: function () {
                return '';
              },
              pageObj: function () {
                return null;
              },
              page: function () {
                return 0;
              },
              z: 0,
            }),
            (this.$count = 0),
            (this._data = new Map()),
            (this._triggers = new Map()),
            (this._holders = {}),
            (this._context = {
              a: function (e, t, n) {
                return (e.$width = t), (e.$height = n), e;
              },
              v: function (e) {
                if (-1 === e) throw new Error();
                var t = f._getter(e);
                return void 0 === t ? null : t;
              },
              r: function (e, t) {
                var n = z(e),
                  r = n[0],
                  i = n[1],
                  o = z(t),
                  a = o[0] - r,
                  s = o[1] - i + 1,
                  l = [];
                (l.$width = s), (l.$height = a + 1);
                for (var u = 0; u <= a; u++)
                  for (var c = 0; c < s; c++) l[u * s + c] = f._getter(e + 64 * c + 4096 * u * 64);
                return l;
              },
              m: it,
              e: function (e) {
                throw e;
              },
              p: function (e) {
                return f.getPlaceholder(e);
              },
            });
        }
        return (
          (e.prototype.getTriggerList = function (e) {
            return this._triggers.get(e);
          }),
          (e.prototype.setValue = function (e, t, n, r) {
            '' === t && (t = null),
              this._removeTriggers(e, null),
              this._setter(e, t, n) && (r || this.trigger(e));
          }),
          (e.prototype.clean = function (e) {
            this._removeTriggers(e, null);
          }),
          (e.prototype.getValue = function (e) {
            return this._getter(e);
          }),
          (e.prototype.getMeta = function () {
            return this._meta;
          }),
          (e.prototype.setMeta = function (e) {
            this._meta = b(b({}, this._meta), e);
          }),
          (e.prototype.setPlaceholder = function (n, e) {
            var r = this;
            '*' === n
              ? Object.entries(e).forEach(function (e) {
                  return r.setPlaceholder(e[0], e[1]);
                })
              : (null === e ? delete this._holders[n] : (this._holders[n] = e),
                this.each(function (e, t) {
                  (function (e, t, n) {
                    for (var r = 0; r < e.length; r += 3)
                      if (2 === e[r] && t.substr(e[r + 1], e[r + 2]) == n) return !0;
                    return !1;
                  })(t.code, t.source, n) && r.setMath(e, t.source, r._parseContext);
                }));
          }),
          (e.prototype.getPlaceholder = function (e) {
            if ('*' === e) return this._holders;
            var t = this._holders[e];
            return void 0 === t ? null : t;
          }),
          (e.prototype.setMath = function (e, t, n, r) {
            var i = this._generate(t, n),
              o = this._setMathAt(e, i);
            r || this._execAndTrigger(o);
          }),
          (e.prototype.refresh = function (e) {
            this._execAndTrigger(e);
          }),
          (e.prototype.getMath = function (e) {
            return this._data.get(e);
          }),
          (e.prototype.trigger = function (e, t) {
            var n = this._triggers.get(e);
            if (n) {
              var r = !t;
              t || (t = new Set());
              for (var i = 0; i < n.length; i++) t.add(n[i]);
              r && this.triggerSet(t);
            }
            return null;
          }),
          (e.prototype.triggerSet = function (t) {
            for (var n = this, e = new Map(); t.size; ) {
              var r = lt(t),
                i = !1;
              e: for (var o = r.next(); !o.done; o = r.next()) {
                var a = this._data.get(o.value),
                  s = e.get(o.value);
                if (!s || (1 == s && (s = this._check_for_loops(o.value, a.triggers, e)), 2 != s)) {
                  var l = a.triggers;
                  if (l) for (var u = 0; u < l.length; u++) if (t.has(l[u])) continue e;
                  this._execAndTrigger(o.value, t),
                    s || e.set(o.value, 1),
                    t['delete'](o.value),
                    (i = !0);
                }
              }
              if (!i)
                return void t.forEach(function (e) {
                  return n._errorAndTrigger(e, t);
                });
            }
          }),
          (e.prototype.getStats = function () {
            return { math: this._data.size, trigger: this._triggers.size };
          }),
          (e.prototype._check_for_loops = function (e, t, n) {
            var i = new Set();
            t.forEach(function (e) {
              return i.add(e);
            });
            for (var o = lt(i), r = o.next(); !r.done; r = o.next()) {
              if (r.value == e) return n.set(e, 2), 2;
              var a = n.get(r.value);
              if (a && 1 < a) return n.set(e, a), a;
              var s = this._data.get(r.value);
              s &&
                s.triggers &&
                s.triggers.forEach(function (e) {
                  return (t = i), (n = e), void ((r = o).add ? t.has(n) || r.add(n) : t.add(n));
                  var t, n, r;
                });
            }
            return n.set(e, 3), 3;
          }),
          (e.prototype._setMathAt = function (e, t) {
            if (this._removeTriggers(e, t)) {
              if (t.triggers)
                if (-1 === t.triggers.indexOf(e) && 3 !== t.broken)
                  for (var n = 0; n < t.triggers.length; n++) {
                    var r = t.triggers[n],
                      i = this._triggers.get(r);
                    void 0 === i && ((i = []), this._triggers.set(r, i)), i.push(e);
                  }
                else t = b(b({}, t), { broken: 3 });
              return this._data.set(e, t), e;
            }
          }),
          (e.prototype._removeTriggers = function (t, e) {
            var n = this._data.get(t);
            if (!n) return !0;
            if (n === e) return !1;
            n.$width && this._clearArea(t, !1);
            var r = n.triggers;
            if (r && 3 !== n.broken)
              for (var i = 0; i < r.length; i++) {
                var o = r[i],
                  a = this._triggers.get(o);
                if (a) {
                  var s = a.filter(function (e) {
                    return e !== t;
                  });
                  s.length ? this._triggers.set(o, s) : this._triggers['delete'](o);
                }
              }
            return this._data['delete'](t), !0;
          }),
          (e.prototype.parse = function (e, t) {
            return this._parser(e, t || this._parseContext);
          }),
          (e.prototype.exec = function (e, t) {
            var n = this._generate(e, t);
            return this._exec(n);
          }),
          (e.prototype.each = function (t) {
            var n = this;
            st(this._data).forEach(function (e) {
              return t(e, n._data.get(e));
            });
          }),
          (e.prototype.setLogger = function (e) {
            this._err_handler = e;
          }),
          (e.prototype._setErr = function (e, t) {
            return (e.broken = 2), t && this._err_handler && this._err_handler(t), a[e.broken];
          }),
          (e.prototype._exec = function (e) {
            if (0 < e.broken && 2 !== e.broken) return a[e.broken];
            try {
              var t = e.exec(this._context);
              return (
                (e.broken = 0),
                'number' == typeof t ? (isFinite(t) ? Math.round(t * at) / at : this._setErr(e)) : t
              );
            } catch (t) {
              return this._setErr(e, t);
            }
          }),
          (e.prototype.toString = function (e, t) {
            return N(e, t || this._parseContext);
          }),
          (e.prototype.regenerate = function (o, a, s) {
            var l = this;
            (s = b({}, s || this._parseContext)),
              st(this._data).forEach(function (e) {
                var t = !1,
                  n = l._data.get(e),
                  r = _(e);
                if (a && r === o) l._removeTriggers(e, null);
                else {
                  for (var i = 0; i < n.code.length; i += 3)
                    if (9 === n.code[i] && _(n.code[i + 1]) === o) {
                      t = !0;
                      break;
                    }
                  t &&
                    ((s.z = r),
                    a
                      ? l.setMath(e, n.source, s)
                      : ((n.source = N(n, s)), (n.code = l._parser(n.source, s).code)));
                }
              });
          }),
          (e.prototype.recalculate = function (n, r) {
            var i = this;
            r = b({}, r || this._parseContext);
            var o = new Set();
            this.each(function (e) {
              if (n) {
                var t = i._data.get(e);
                if (t.broken && 2 !== t.broken) return (r.z = _(e)), void i.setMath(e, t.source, r);
              }
              o.add(e);
            }),
              this.triggerSet(o);
          }),
          (e.prototype._generate = function (e, t, n) {
            var s = n || this._parser(e, t || this._parseContext);
            return (
              this._printer(s, this._strict),
              (s.triggers = (function (e) {
                for (var t = [], n = s.code, r = n.length, i = 0; i < r; i += 3)
                  switch (n[i]) {
                    case 7:
                    case 6:
                      var o = n[i + 4];
                      t.push(o);
                      break;
                    case 8:
                      l(n[i + 4], n[i + 7], function (e) {
                        return t.push(e);
                      });
                  }
                if (10 < t.length) {
                  var a = new Set();
                  t = t.filter(function (e) {
                    return !a.has(e) && (a.add(e), !0);
                  });
                }
                return t.length ? t : null;
              })()),
              s
            );
          }),
          (e.prototype._execAndTrigger = function (e, t) {
            this.$count += 1;
            var n = this._data.get(e);
            if (n) {
              var r = this._exec(n);
              if (Array.isArray(r) && 63 !== _(e)) return void this._complexSetter(e, r, t);
              this._setter(e, r, 2) && this.trigger(e, t);
            }
          }),
          (e.prototype._complexSetter = function (n, r, i) {
            var o = this,
              e = r.$width,
              t = r.$height,
              a = this._data.get(n);
            (a.$width = e), (a.$height = t);
            try {
              u(n, e, t, function (e, t) {
                o._setter(e, r[t], 2, 0 === t ? null : n) && o.trigger(e, i);
              });
            } catch (r) {
              this._clearArea(n, !0);
            }
          }),
          (e.prototype._clearArea = function (n, r) {
            var i = this,
              e = this._data.get(n),
              t = e.$width,
              o = e.$height;
            u(n, t, o, function (e, t) {
              0 === t && r
                ? i._setter(e, a[4], 1) && i.trigger(e)
                : (r ? i._setter(e, null, 3, n) : i._setter(e, null, 3, -1)) && i.trigger(e);
            });
          }),
          (e.prototype._errorAndTrigger = function (e, t) {
            var n = this._data.get(e),
              r = this._setErr(n);
            this._setter(e, r, 2) && this.trigger(e, t);
          }),
          (e.prototype.debug = function (e, t) {
            void 0 === t && (t = !1);
            var n = (function (e) {
              for (var t = e.code, n = e.source, r = '', i = t.length, o = 0; o < i; o += 3) {
                var a = t[o],
                  s = void 0;
                switch (a) {
                  case 4:
                    s = 'method';
                    break;
                  case 1:
                    s = 'text';
                    break;
                  case 5:
                    s = 'page';
                    break;
                  case 2:
                    s = 'holder';
                    break;
                  case 6:
                    s = 'name';
                    break;
                  case 7:
                    s = 'arg';
                    break;
                  case 8:
                    s = 'range';
                    break;
                  case 9:
                    s = 'data';
                    break;
                  case 10:
                    s = 'op';
                    break;
                  case 11:
                    s = 'number';
                    break;
                  case 3:
                    s = 'error';
                    break;
                  case 12:
                    s = 'extra';
                    break;
                  case 13:
                    s = 'arr';
                }
                r +=
                  9 === a
                    ? '            ' + t[o + 1] + '.' + t[o + 2] + '\n'
                    : 13 === a
                      ? '[' + s + ']' + c(s) + t[o + 1] + ' x ' + t[o + 2] + '\n'
                      : '[' + s + ']' + c(s) + n.substr(t[o + 1], t[o + 2]) + '\n';
              }
              return r;
            })(this.parse(e));
            if (t) return n;
            console.log(n);
          }),
          (e.prototype.transpose = function (e, u, c, f) {
            var h = this;
            f = f || this._parseContext;
            var t = z(e),
              d = t[0],
              v = t[1],
              g = t[2],
              p = new Map(),
              m = new Map(),
              w = new Set();
            st(this._data).forEach(function (e) {
              var t = z(e),
                n = t[0],
                r = t[1],
                i = t[2],
                o = h._data.get(e),
                a = i === f.z ? f : b(b({}, f), { z: i }),
                s = h._transpose(o, d, v, u, c, f, a),
                l = e;
              if (
                (i === g &&
                  (v <= r || d <= n) &&
                  (l = I(d <= n ? n + u : n, v <= r ? r + c : r, i)),
                o !== s || e !== l)
              ) {
                if (
                  (m.set(e, s),
                  i === g && ((c < 0 && v <= r && r < v - c) || (u < 0 && d <= n && n < d - u)))
                )
                  return;
                p.set(l, s), o.broken !== s.broken && w.add(l);
              }
            }),
              st(p).forEach(function (e) {
                return h._setMathAt(e, p.get(e));
              }),
              Array.from(m.keys()).forEach(function (e) {
                p.has(e) || h._removeTriggers(e, null);
              }),
              0 < u && this._triggerRow(d, u, w),
              0 < c && this._triggerColumn(v, c, w),
              u < 0 && this._triggerColumn(d - 1, 2, w),
              c < 0 && this._triggerColumn(v - 1, 2, w),
              this.triggerSet(w);
          }),
          (e.prototype._triggerColumn = function (n, e, r) {
            var i = this,
              o = e ? n + e : n;
            st(this._triggers).forEach(function (e) {
              var t = s(e);
              n <= t && t < o && i.trigger(e, r);
            });
          }),
          (e.prototype._triggerRow = function (n, e, r) {
            var i = this,
              o = e ? n + e : n;
            st(this._triggers).forEach(function (e) {
              var t = T(e);
              n <= t && t < o && i.trigger(e, r);
            });
          }),
          (e.prototype.moveMath = function (e, t, n, r, i, o, a) {
            return (
              'string' == typeof e && (e = this.parse(e, o)),
              this._moveMath(e, t, n, r, i, a || o).source
            );
          }),
          (e.prototype._moveMath = function (e, t, n, r, i, o) {
            for (var a = e.code, s = 0; s < a.length; s += 3)
              if (7 === a[s]) {
                var l = z(a[s + 4]),
                  u = l[0],
                  c = l[1];
                ot(i.id, i.h, i.w, a[s + 4], 1, 1) && ((u += t), (c += n), (a[s + 4] = I(u, c, r))),
                  (s += 3);
              } else if (8 === a[s]) {
                var f = z(a[s + 4]),
                  h = f[0],
                  d = f[1],
                  v = z(a[s + 7]),
                  g = v[0],
                  p = v[1];
                ot(i.id, i.h, i.w, a[s + 4], g - h + 1, p - d + 1) &&
                  ((h += t),
                  (d += n),
                  (g += t),
                  (p += n),
                  (a[s + 4] = I(h, d, r)),
                  (a[s + 7] = I(g, p, r))),
                  (s += 6);
              }
            var m = { code: a, broken: e.broken, source: e.source, triggers: null, exec: null };
            return (m = this._parser(N(m, o), o)), this._generate(m.source, o, m);
          }),
          (e.prototype.transposeMath = function (e, t, n, r) {
            return (
              'string' == typeof e && (e = this.parse(e, r)),
              (r = r || this._parseContext),
              this._transpose(e, -1, -1, t, n, r, r).source
            );
          }),
          (e.prototype._transpose = function (e, t, n, r, i, o, a) {
            for (var s = !0, l = e.code, u = !(t < 0 || n < 0), c = 0; c < l.length; c += 3)
              if (7 === l[c]) {
                var f = z(l[c + 4]),
                  h = f[0],
                  d = f[1],
                  v = f[2];
                if (o.z !== v) continue;
                var g = l[c + 5];
                if (!u && 3 == g) continue;
                (u || 0 == (1 & g)) &&
                  0 !== r &&
                  t <= h &&
                  (s && ((l = [].concat(l)), (s = !1)), ((h += r) < t || h < 0) && (l[c] = 3)),
                  (u || 0 == (2 & g)) &&
                    0 !== i &&
                    n <= d &&
                    (s && ((l = [].concat(l)), (s = !1)), ((d += i) < n || d < 0) && (l[c] = 3)),
                  s || (l[c + 4] = I(h, d, v)),
                  (c += 3);
              } else if (8 === l[c]) {
                var p = l[c + 5],
                  m = l[c + 8];
                if (!u && 3 === p && 3 === m) continue;
                var w = z(l[c + 4]),
                  b = w[0],
                  x = w[1],
                  _ = ((v = w[2]), z(l[c + 7])),
                  y = _[0],
                  C = _[1];
                if (o.z !== v) continue;
                0 !== r &&
                  ((u || 0 == (1 & p)) &&
                    (0 < r ? t <= b : t < b) &&
                    (s && ((l = [].concat(l)), (s = !1)), (b += r) < 0 && (l[c] = 3)),
                  (u || 0 == (1 & m)) &&
                    t <= y &&
                    (s && ((l = [].concat(l)), (s = !1)), (y += r) < b && (l[c] = 3))),
                  0 !== i &&
                    ((u || 0 == (2 & p)) &&
                      (0 < i ? n <= x : n < x) &&
                      (s && ((l = [].concat(l)), (s = !1)), (x += i) < 0 && (l[c] = 3)),
                    (u || 0 == (2 & m)) &&
                      n <= C &&
                      (s && ((l = [].concat(l)), (s = !1)), (C += i) < x && (l[c] = 3))),
                  s || ((l[c + 4] = I(b, x, v)), (l[c + 7] = I(y, C, v))),
                  (c += 6);
              }
            if (s) return e;
            var S = { code: l, broken: e.broken, source: e.source, triggers: null, exec: null };
            return (S = this._parser(N(S, a), a)), this._generate(S.source, a, S);
          }),
          e
        );
      })(),
      ct = (function () {
        function e(e, t, n) {
          (this._id = e),
            (this._store = t),
            (this._meta = {}),
            (this._parseContext = b(b({}, n), { z: e })),
            this.reset(),
            (this._parseMode = !1);
        }
        return (
          (e.prototype.reset = function () {
            (this._data = []), (this._rows = []), (this._cols = []), (this._spans = []);
          }),
          (e.prototype.getMeta = function () {
            return this._meta;
          }),
          (e.prototype.setMeta = function (e) {
            this._meta = b(b({}, this._meta), e);
          }),
          (e.prototype.getID = function () {
            return this._id;
          }),
          (e.prototype.cellID = function (e, t) {
            return I(e, t, this._id);
          }),
          (e.prototype.getSize = function () {
            var e = this._data.length,
              t = 0;
            return (
              this._data.forEach(function (e) {
                e && e.length > t && (t = e.length);
              }),
              [e, t]
            );
          }),
          (e.prototype.getContext = function () {
            return this._parseContext;
          }),
          (e.prototype.addRow = function (e, t) {
            this._data.splice.apply(this._data, ft(e, t)),
              this._store.transpose(I(e, 0, this._id), t, 0, this._parseContext),
              this._rows.splice.apply(this._rows, ft(e, t)),
              this._recalculateSpans(e, t, 0);
          }),
          (e.prototype.removeRow = function (e, t) {
            return (
              this._data.splice(e, t),
              this._store.transpose(I(e, 0, this._id), -t, 0, this._parseContext),
              this._rows.splice(e, t),
              this._recalculateSpans(e, -t, 0)
            );
          }),
          (e.prototype.addColumn = function (e, t) {
            var n = ft(e, t);
            this._data.forEach(function (e) {
              e && e.splice.apply(e, n);
            }),
              this._store.transpose(I(0, e, this._id), 0, t, this._parseContext),
              this._cols.splice.apply(this._cols, ft(e, t)),
              this._recalculateSpans(e, 0, t);
          }),
          (e.prototype.removeColumn = function (t, n) {
            this._data.forEach(function (e) {
              e && e.splice(t, n);
            }),
              this._store.transpose(I(0, t, this._id), 0, -n, this._parseContext),
              this._cols.splice(t, n),
              this._recalculateSpans(t, 0, -n);
          }),
          (e.prototype.setCell = function (e, t, n) {
            var r = this._data[e];
            r || (r = this._data[e] = []);
            var i = r[t];
            (r[t] = i ? b(b(b({}, i), n), { value: i.value }) : n),
              void 0 !== n.value && this.setValue(e, t, n.value);
          }),
          (e.prototype.clearCell = function (e, t) {
            var n = this._data[e];
            n && n[t] && ((n[t] = null), this._store.setValue(I(e, t, this._id), ''));
          }),
          (e.prototype.setValue = function (e, t, n, r) {
            var i = I(e, t, this._id);
            'string' == typeof n && 1 < n.length && '=' === n[0]
              ? this._store.setMath(i, n.substr(1), this._parseContext)
              : this._store.setValue(i, n, r);
          }),
          (e.prototype.getCell = function (e, t, n) {
            var r = this._data[e],
              i = r ? r[t] : null;
            return (
              i ||
                !n ||
                (r || (r = this._data[e] = []), (i = r[t]) || (i = r[t] = { value: null })),
              i
            );
          }),
          (e.prototype.getValue = function (e, t, n) {
            if (n) {
              var r = this._store.getMath(I(e, t, this._id));
              if (r) return '=' + r.source;
            }
            var i = this.getCell(e, t, !1);
            return i ? i.value : null;
          }),
          (e.prototype.getRange = function (e, t, n, r) {
            for (var i = [], o = e; o <= n; o++)
              for (var a = t; a <= r; a++) i.push(this.getValue(o, a, !1));
            return i;
          }),
          (e.prototype.getCellRange = function (e, t, n, r) {
            for (var i = [], o = e; o <= n; o++)
              for (var a = t; a <= r; a++) i.push(this.getCell(o, a));
            return i;
          }),
          (e.prototype.eachCell = function (r) {
            this._data.forEach(function (e, n) {
              e &&
                e.forEach(function (e, t) {
                  e && r(n, t, e);
                });
            });
          }),
          (e.prototype.serialize = function (i) {
            var o = this,
              a = [];
            return (
              this.eachCell(function (e, t, n) {
                if (((n = b({}, n)), i)) {
                  var r = o._store.getMath(I(e, t, o.getID()));
                  r && (n.value = '=' + r.source);
                }
                a.push([e, t, n]);
              }),
              a
            );
          }),
          (e.prototype.parse = function (e, t) {
            var n = this;
            this.reset(),
              this._store.each(function (e) {
                _(e) === n._id && n._store.clean(e);
              }),
              this.parseBlock(e, t, !0);
          }),
          (e.prototype.parseBlock = function (e, l, u) {
            var c = this,
              f = new Set();
            (this._parseMode = !0),
              e.forEach(function (e) {
                var t = e[0],
                  n = e[1],
                  r = e[2],
                  i = I(t, n, c._id);
                u || c._store.clean(i);
                var o = c._data[t];
                o || (o = c._data[t] = []);
                var a = (r = o[n] = b({}, r)).value;
                if (a)
                  if ('string' == typeof a && 1 < a.length && '=' === a[0]) {
                    var s = a.substr(1);
                    c._store.setMath(i, s, c.getContext(), !0), f.add(i);
                  } else
                    l &&
                      ((r.value = null), c._store.setValue(i, a, null, !0), c._store.trigger(i, f));
              }),
              this._store.triggerSet(f),
              (this._parseMode = !1);
          }),
          (e.prototype.throwError = function (e) {
            if (!this._parseMode) throw e;
          }),
          (e.prototype.setRowMeta = function (e, t) {
            var n = this._rows[e] || {};
            this._rows[e] = n ? b(b({}, n), t) : t;
          }),
          (e.prototype.getRowMeta = function (e, t) {
            var n = this._rows[e];
            if (!t || n) return n || null;
            var r = {};
            return (this._rows[e] = r);
          }),
          (e.prototype.setColumnMeta = function (e, t) {
            var n = this._cols[e] || {};
            this._cols[e] = n ? b(b({}, n), t) : t;
          }),
          (e.prototype.getColumnMeta = function (e, t) {
            var n = this._cols[e];
            if (!t || n) return n || null;
            var r = {};
            return (this._cols[e] = r);
          }),
          (e.prototype.sort = function (e, t, i, n) {
            void 0 === i && (i = 0), void 0 === n && (n = 'asc');
            for (
              var r = z(e),
                o = r[0],
                a = r[1],
                s = z(t),
                l = s[0],
                u = s[1],
                c = 'asc' === n,
                f = [],
                h = [],
                d = o;
              d <= l;
              d++
            ) {
              for (var v = [], g = a; g <= u; g++) {
                var p = this._store.getMath(this.cellID(d, g));
                v.push({ value: this.getValue(d, g), row: d, math: p || null });
              }
              f.push(v);
            }
            for (
              f.sort(function (e, t) {
                var n = e[i].value,
                  r = t[i].value;
                return ('string' == typeof n && 'string' == typeof r) ||
                  ('number' == typeof n && 'number' == typeof r)
                  ? n < r
                    ? c
                      ? -1
                      : 1
                    : r < n
                      ? c
                        ? 1
                        : -1
                      : 0
                  : 'number' == typeof n
                    ? -1
                    : 1;
              }),
                d = o;
              d <= l;
              d++
            )
              for (g = a; g <= u; g++) {
                var m = f[d - o][g - a];
                if (m.math) {
                  var w = m.row - d,
                    b = this._store.transposeMath(m.math, -w, 0, this._parseContext);
                  m.value = '=' + b;
                }
                h.push([d, g, { value: m.value }]);
              }
            this.parseBlock(h);
          }),
          (e.prototype.addSpan = function (t, e, n) {
            var r;
            if (1 < e || 1 < n) {
              for (var i = 0; i <= this._spans.length - 1; i++) {
                var o = this._spans[i];
                ot(t, e, n, o.id, o.info.width, o.info.height) && this._spans.splice(i, 1);
              }
              this._spans.push({ id: t, info: { width: e, height: n } });
            } else
              -1 !==
                (r = this._spans.findIndex(function (e) {
                  return e.id === t;
                })) && this._spans.splice(r, 1);
          }),
          (e.prototype.getSpan = function (t) {
            return (
              this._spans.find(function (e) {
                return e.id === t;
              }) || null
            );
          }),
          (e.prototype.getSpans = function () {
            return this._spans;
          }),
          (e.prototype._recalculateSpans = function (e, t, n) {
            var r, i;
            if (this._spans.length)
              for (var o = this._spans.length - 1; 0 <= o; o--) {
                var a = this._spans[o],
                  s = a.info,
                  l = s.height,
                  u = s.width,
                  c = z(a.id),
                  f = c[0],
                  h = c[1];
                t && ((f = (r = this._adjustSpan(f, l, e, t))[0]), (l = r[1])),
                  n && ((h = (i = this._adjustSpan(h, u, e, n))[0]), (u = i[1])),
                  u < 1 || l < 1 || u + l <= 2
                    ? this._spans.splice(o, 1)
                    : ((a.id = I(f, h, this._id)), (a.info.height = l), (a.info.width = u));
              }
          }),
          (e.prototype._adjustSpan = function (e, t, n, r) {
            var i = e + t;
            if (r < 0) {
              var o = n + (r = -r);
              e < n
                ? n <= i && (t -= Math.min(r, e + t - n))
                : e < o
                  ? ((t -= o - e), (e = r - (o - e)))
                  : (e -= r);
            } else n <= e ? (e += r) : n <= i && (t += r);
            return [e, t];
          }),
          e
        );
      })();
    function ft(e, t) {
      for (var n = [e, 0], r = 0; r < t; r++) n.push(null);
      return n;
    }
    var ht = (function () {
        function e(e, t, n) {
          (this._ranges = new Map()),
            (this._counter = 1),
            (this._rangeOrder = []),
            (this._store = e),
            (this._page = t),
            (this._pageGetter = n);
        }
        return (
          (e.prototype.get = function (e) {
            return this._store.getMath(this._ranges.get(e));
          }),
          (e.prototype.toId = function (e) {
            return this._ranges.get(e);
          }),
          (e.prototype.add = function (e, t) {
            var n = this._ranges.get(e) || this._next_id();
            this._store.setMath(n, t, this._page.getContext()),
              this._ranges.set(e, n),
              this._refresh(e);
          }),
          (e.prototype.remove = function (e) {
            this._ranges['delete'](e), (this._counter = 1), this._refresh(e);
          }),
          (e.prototype.serialize = function () {
            var t = this;
            return Array.from(this._ranges.keys()).map(function (e) {
              return [e, t.get(e).source];
            });
          }),
          (e.prototype.parse = function (e) {
            var t = this;
            e.forEach(function (e) {
              return t.add(e[0], e[1]);
            });
          }),
          (e.prototype._refresh = function (r) {
            var i = this,
              e = r.indexOf('!'),
              o = '';
            -1 !== e && ((o = r.substr(0, e)), (r = r.substr(e + 1))),
              this._store.each(function (e, t) {
                if (
                  (function (e, t, n, r) {
                    for (var i = 0; i < e.length; i += 3)
                      if (6 === e[i]) {
                        if ('' !== n) {
                          if (5 === e[i - 3] && t.substr(e[i - 2], e[i - 1]) !== n) continue;
                          return !0;
                        }
                        if (t.substr(e[i + 1], e[i + 2]) === r) return !0;
                      }
                    return !1;
                  })(t.code, t.source, o, r)
                ) {
                  var n = _(e);
                  i._store.setMath(e, t.source, i._pageGetter(n).getContext());
                }
              });
          }),
          (e.prototype._next_id = function () {
            for (; this._rangeOrder[this._counter]; ) this._counter++;
            return (this._rangeOrder[this._counter] = !0), I(this._counter, 0, this._page.getID());
          }),
          (e.prototype.renamePage = function (r, i) {
            var o = this;
            (r += '!'),
              i && (i += '!'),
              this._ranges.forEach(function (e, t, n) {
                0 === t.indexOf(r) &&
                  (i ? n.set(t.replace(r, i), e) : o._store.clean(e), n['delete'](t));
              });
          }),
          e
        );
      })(),
      dt = (function () {
        function e(e, t) {
          (this._store = e), (this._pageGetter = t);
        }
        return (
          (e.prototype.copy = function (e, t) {
            t || (t = e);
            var n = this._serialize(e, t);
            return this._store.setMeta({ $clipboard: n }), n;
          }),
          (e.prototype.paste = function (e, t, n, r, i) {
            var o;
            if (
              (void 0 === i && (i = this._updateCurrentCell),
              (r = r || 0),
              null === (o = n = n || this._store.getMeta().$clipboard) || void 0 === o
                ? void 0
                : o.data.length)
            ) {
              var a = z(e),
                s = a[0],
                l = a[1],
                u = a[2],
                c = z(t),
                f = c[0],
                h = c[1],
                d = this._pageGetter(u),
                v = z(n.from || 0),
                g = v[0],
                p = v[1],
                m = n.data,
                w = [],
                b = s - g,
                x = l - p;
              if (0 === r)
                for (var _ = m[0].length - 1, y = 0; y <= m.length - 1; y++)
                  for (var C = 0; C <= _; C++) {
                    var S = m[y][C],
                      $ = s + y,
                      E = l + C;
                    (k = this._updateCell($, E, u, S, b, x, i)) && w.push(k);
                  }
              if (1 === r)
                for (y = s; y <= f; y++)
                  for (C = l; C <= h; C++)
                    (E = C - l),
                      (S = m[($ = y - s)][E]),
                      (k = this._updateCell(y, C, u, S, b, x, i)) && w.push(k);
              if (2 === r)
                for ($ = 0, y = s; y <= f; y++) {
                  for (E = 0, $ === m.length && ($ = 0), C = l; C <= h; C++) {
                    E === m[0].length && (E = 0), (S = m[$][E]);
                    var k,
                      V = y - (g + $),
                      A = C - (p + E);
                    (k = this._updateCell(y, C, u, S, V, A, i)) && w.push(k), E++;
                  }
                  $++;
                }
              d.parseBlock(w);
            }
          }),
          (e.prototype.clean = function (e, t, n) {
            n = n || 255;
            for (
              var r = z(e),
                i = r[0],
                o = r[1],
                a = r[2],
                s = z(t),
                l = s[0],
                u = s[1],
                c = this._pageGetter(a),
                f = [],
                h = [],
                d = i;
              d <= l;
              d++
            )
              for (var v = o; v <= u; v++) {
                var g = c.getCell(d, v),
                  p = I(d, v, a),
                  m = 255 === n ? {} : b({}, g);
                if (1 & n) {
                  var w = this._store.getTriggerList(p);
                  w && h.push.apply(h, w), delete m.value;
                }
                f.push([d, v, m]);
              }
            c.parseBlock(f), this._refreshRelatedFormulas(h);
          }),
          (e.prototype._refreshRelatedFormulas = function (e) {
            var t = this;
            vt(e).forEach(function (e) {
              return t._store.refresh(e);
            });
          }),
          (e.prototype._serialize = function (e, t) {
            for (
              var n = z(e),
                r = n[0],
                i = n[1],
                o = n[2],
                a = z(t),
                s = a[0],
                l = a[1],
                u = this._pageGetter(o),
                c = { from: e, data: [] },
                f = r;
              f <= s;
              f++
            ) {
              for (var h = [], d = i; d <= l; d++) {
                var v = u.getCell(f, d),
                  g = this._store.getMath(I(f, d, o)),
                  p = void 0;
                g && (p = g.source);
                var m = [v ? b({}, v) : null];
                p && m.push(p), h.push(m);
              }
              c.data.push(h);
            }
            return c;
          }),
          (e.prototype.reset = function () {
            this._store.setMeta({ $clipboard: null });
          }),
          (e.prototype.move = function (e, t) {
            for (
              var n = t || this._store.getMeta().$clipboard,
                r = n.data,
                i = n.from,
                o = z(i),
                a = o[0],
                s = o[1],
                l = o[2],
                u = r.length,
                c = r[0].length,
                f = z(e),
                h = f[0],
                d = f[1],
                v = f[2],
                g = [],
                p = [],
                m = this._pageGetter(v),
                w = { id: i, h: u, w: c },
                b = 0;
              b < u;
              b++
            )
              for (var x = 0; x < c; x++) {
                var _ = r[b][x],
                  y = _[0],
                  C = _[1],
                  S = I(a + b, s + x, l),
                  $ = this._store.getTriggerList(S);
                if ($) {
                  var E = this._getTriggersOutsideCutRange($, i, u, c);
                  E.length && g.push.apply(g, E);
                }
                var k = h + b,
                  V = d + x;
                if (y) {
                  if (C) {
                    var A = this._pageGetter(l).getContext(),
                      M = this._store.moveMath(C, h - a, d - s, v, w, A, m.getContext());
                    y.value = '=' + M;
                  }
                  p.push([k, V, y]);
                } else p.push([k, V, {}]);
              }
            m.parseBlock(p), this._updateRelatedFormulas(g, h - a, d - s, v, w);
          }),
          (e.prototype._updateRelatedFormulas = function (e, o, a, s, l) {
            var u = this;
            vt(e).forEach(function (e) {
              var t = z(e)[2],
                n = u._store.getMath(e),
                r = u._pageGetter(t).getContext(),
                i = u._store.moveMath(n, o, a, s, l, r);
              u._store.setMath(e, i, r);
            });
          }),
          (e.prototype._getTriggersOutsideCutRange = function (e, t, n, r) {
            var i = [];
            return (
              e.forEach(function (e) {
                ot(t, n, r, e, 1, 1) || i.push(e);
              }),
              i
            );
          }),
          (e.prototype._updateCell = function (e, t, n, r, i, o, a) {
            var s = r[0],
              l = r[1],
              u = this._pageGetter(n),
              c = s ? b({}, s) : { value: null };
            c.formula = l ? '=' + this._store.transposeMath(l, i, o) : null;
            var f = a(u.getCell(e, t) || {}, c);
            return f ? [e, t, f] : null;
          }),
          (e.prototype._updateCurrentCell = function (e, t) {
            return t.formula && (t.value = t.formula), t;
          }),
          (e.prototype.fromCSV = function (e, t, n) {
            return (
              void 0 === t && (t = '\n'),
              void 0 === n && (n = '\t'),
              {
                data: e.split(t).map(function (e) {
                  return e.split(n).map(function (e) {
                    return [{ value: e }];
                  });
                }),
              }
            );
          }),
          e
        );
      })();
    function vt(e) {
      var t = new Set(e);
      return Array.from(t);
    }
    var gt = (function () {
      function e(e) {
        var d = this;
        (this._cfg = e || { strict: !1 }),
          (this._pages = []),
          (this._pageNames = []),
          (this._pageName2ID = new Map()),
          (this._pCounter = 0),
          (this._parseContext = {
            page: function (e) {
              return d._pageName2ID.get(e);
            },
            pageName: function (e) {
              return d._pageNames[e];
            },
            pageObj: function (e) {
              return d._pages[e];
            },
            name: function (e, t, n) {
              var r,
                i = e.length,
                o = t.substr(e[i - 2], e[i - 1]);
              if (5 === e[i - 6]) {
                var a = t.substr(e[i - 5], e[i - 4]);
                r = d._ranges.toId(a + '!' + o) || d._ranges.toId(o);
              } else r = d._ranges.toId(n.pageName(n.z) + '!' + o) || d._ranges.toId(o);
              e.push(9, r || -1, 0);
            },
            z: 0,
          });
        var v = (this._store = new ut(
            b(b({}, this._cfg), {
              get: function (e) {
                var t = z(e),
                  n = t[0],
                  r = t[1],
                  i = t[2];
                return d._pages[i].getValue(n, r);
              },
              set: function (e, t, n, r) {
                var i = z(e),
                  o = i[0],
                  a = i[1],
                  s = i[2],
                  l = d._pages[s].getCell(o, a, !0),
                  u = r
                    ? null
                    : 'number' == typeof l.spill
                      ? l.spill
                      : t || 0 === t
                        ? l.source
                        : null;
                if (3 === n) {
                  if (0 <= r && ((l.spill = r), l.source !== r)) return !1;
                  l.source = r = null;
                } else if (null === t && !r && l.source) return !1;
                r &&
                  e !== r &&
                  l.source !== r &&
                  (l.value || 0 === l.value || ('number' == typeof l.source && l.source !== r)) &&
                  d._pages[s].throwError('spill error'),
                  l.source !== r && (l.source = r);
                var c = 2 === n || 3 === n;
                if (
                  ((null == n || c) && (n = l.$format || 0),
                  (l.$format = n),
                  'string' == typeof t && 1 != n && t)
                ) {
                  var f = parseFloat(t);
                  c && (f = f.toString()), f == t && (t = parseFloat(t));
                }
                var h = l.value !== t;
                return h && (l.value = t), 'number' == typeof u && v.triggerSet(new Set([u])), h;
              },
            })
          )),
          t = (this._pages[63] = new ct(63, this._store, this._parseContext));
        (this._ranges = new ht(this._store, t, this.getPage.bind(this))),
          (this._cm = new dt(this._store, this.getPage.bind(this)));
      }
      return (
        (e.prototype.addPage = function (e) {
          for (; this._pages[this._pCounter]; ) this._pCounter++;
          var t = this._pCounter,
            n = new ct(t, this._store, this._parseContext);
          return this._pageName2ID.set(e, t), (this._pages[t] = n), (this._pageNames[t] = e), n;
        }),
        (e.prototype.renamePage = function (e, t) {
          if (e !== t) {
            var n = this._pageName2ID.get(e);
            this._pageName2ID['delete'](e),
              this._pageName2ID.set(t, n),
              (this._pageNames[n] = t),
              this._ranges.renamePage(e, t);
            var r = this._pages[n].getContext();
            this._store.regenerate(n, !1, r);
          }
        }),
        (e.prototype.removePage = function (e) {
          var t = this._pageName2ID.get(e),
            n = this._pages[t].getContext();
          this._pageName2ID['delete'](e),
            (this._pages[t] = this._pageNames[t] = null),
            (this._pCounter = 0),
            this._ranges.renamePage(e, null),
            this._store.regenerate(t, !0, n);
        }),
        (e.prototype.getPage = function (e) {
          return 'string' == typeof e && (e = this._pageName2ID.get(e)), this._pages[e];
        }),
        (e.prototype.getRanges = function () {
          return this._ranges;
        }),
        (e.prototype.getStore = function () {
          return this._store;
        }),
        (e.prototype.find = function (o, e) {
          var a = e.firstOnly,
            t = e.resultsLimit,
            s = void 0 === t ? 100 : t,
            l = [];
          return (
            this._pages.forEach(function (e, i) {
              e.eachCell(function (e, t, n) {
                var r = n.value;
                o(r) &&
                  ((a && 0 === l.length) || (!a && l.length < s)) &&
                  l.push({ id: I(e, t, i), value: r });
              });
            }),
            l
          );
        }),
        (e.prototype.getCopyManager = function () {
          return this._cm;
        }),
        e
      );
    })();
    (t.CLEAN_MODE_ALL = 255),
      (t.CLEAN_MODE_DATA = 1),
      (t.D_COMMON = 0),
      (t.D_STRING = 1),
      (t.DataPage = ct),
      (t.DataStore = gt),
      (t.PASTE_MODE_OVERLAP = 0),
      (t.PASTE_MODE_RANGE = 1),
      (t.PASTE_MODE_REPEAT = 2),
      (t.Store = ut),
      (t.T_ARG = 7),
      (t.T_DATA = 9),
      (t.T_ERROR = 3),
      (t.T_METHOD = 4),
      (t.T_NAME = 6),
      (t.T_NUMBER = 11),
      (t.T_OPERATOR = 10),
      (t.T_PAGE = 5),
      (t.T_PLACEHOLDER = 2),
      (t.T_RANGE = 8),
      (t.T_SPACE = 12),
      (t.T_TEXT = 1),
      (t.addMethod = function (e, t) {
        it[e] = t;
      }),
      (t.column = s),
      (t.fromId = z),
      (t.methodGroups = rt),
      (t.methods = it),
      (t.page = _),
      (t.row = T),
      (t.str2id = function (e) {
        var t = [];
        return W(t, e, 0), t[1];
      }),
      (t.str2pos = function (e) {
        var t = [];
        return W(t, e, 0), z(t[1]).slice(0, 2);
      }),
      (t.str2range = function (e) {
        var t = [];
        e.split(':').map(function (e) {
          return W(t, e, 0);
        });
        var n = z(t[1]),
          r = n[0],
          i = n[1],
          o = z(t[4]);
        return [r, i, o[0], o[1]];
      }),
      (t.toId = I);
  });
  !(function Oa(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
      ? e['default']
      : e;
  })(e);
  e.CLEAN_MODE_ALL, e.CLEAN_MODE_DATA, e.D_COMMON, e.D_STRING, e.DataPage;
  var t = e.DataStore,
    i =
      (e.PASTE_MODE_OVERLAP,
      e.PASTE_MODE_RANGE,
      e.PASTE_MODE_REPEAT,
      e.Store,
      e.T_ARG,
      e.T_DATA,
      e.T_ERROR,
      e.T_METHOD,
      e.T_NAME,
      e.T_NUMBER,
      e.T_OPERATOR,
      e.T_PAGE,
      e.T_PLACEHOLDER,
      e.T_RANGE,
      e.T_SPACE,
      e.T_TEXT,
      e.addMethod),
    n = (e.column, e.fromId, e.methodGroups, e.methods);
  e.page, e.row, e.str2id, e.str2pos, e.str2range, e.toId;
  function o(e, t, n, r) {
    (t = t.toUpperCase()),
      i(t, n),
      e.$$('liveEditor') &&
        [
          webix.$$(e.$$('liveEditor').config.suggest).getList(),
          webix.$$(e.$$('formulaButton').config.popup).getBody(),
        ].forEach(function (e) {
          e.exists(t) || (e.add({ id: t, value: t }), r && e.sort('value', 'asc', 'string'));
        });
  }
  function x(e) {
    var t = new Date(Math.round(86400 * (e - 25569) * 1e3));
    return new Date(t.getTime() + 6e4 * t.getTimezoneOffset());
  }
  function r(e) {
    return (25569 + (e.getTime() - 6e4 * e.getTimezoneOffset()) / 864e5).toString();
  }
  var a = Object.freeze({
    init: function Ta(c) {
      var n = {
          IMAGE: function (e) {
            return '<img class="webix_ssheet_cimage" src="'.concat(webix.template.escape(e), '">');
          },
          HYPERLINK: function (e, t) {
            var n,
              r = webix.template.escape;
            return (
              (n =
                '#' == e[0]
                  ? 'href="javascript:void(0);" class="webix_ssheet_ref" data-ref="'.concat(
                      r(e.substr(1)),
                      '"'
                    )
                  : 'target="blank" href="'.concat(r(e), '"')),
              '<a '.concat(n, '>').concat(r(t || e), '</a>')
            );
          },
          SPARKLINE: function (e, t, n, r) {
            var i = { type: t, color: n, negativeColor: r, paddingX: 2, paddingY: 2 };
            'donut' == t
              ? webix.extend(i, { type: 'pie', donut: 1 }, !0)
              : 'barH' == t && webix.extend(i, { type: 'bar', horizontal: 1 }, !0);
            for (var o = 0; o < e.length; o++) e[o] = e[o] || 0;
            var a = c.$$('cells').config,
              s = 'pie' == i.type || 'radar' == t,
              l = s ? 100 : a.columnWidth,
              u = s ? 100 : a.rowHeight;
            return webix.Sparklines.getTemplate(i)(e, { width: l, height: u });
          },
        },
        r = Object.keys(n);
      r.forEach(function (e, t) {
        return o(c, e, n[e], t == r.length - 1);
      });
    },
    addMath: o,
    getJsDateFromExcel: x,
    getExcelDateFromJs: r,
  });
  function s(e) {
    return (!e && 0 !== e) || e instanceof Date || isNaN(e) || (e = x(e)), e;
  }
  function l(e) {
    return e && e instanceof Date && (e = r(e)), e;
  }
  function p(e) {
    return (p =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          })(e);
  }
  function u(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  }
  function c(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function f(e, t, n) {
    return t && c(e.prototype, t), n && c(e, n), e;
  }
  function $(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  function h(e, t) {
    if ('function' != typeof t && null !== t)
      throw new TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      t && v(e, t);
  }
  function d(e) {
    return (d = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function v(e, t) {
    return (v =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function g(e, t) {
    return !t || ('object' != typeof t && 'function' != typeof t)
      ? (function n(e) {
          if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        })(e)
      : t;
  }
  function T(e, t) {
    return (
      (function n(e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function u(e, t) {
        var n = [],
          r = !0,
          i = !1,
          o = undefined;
        try {
          for (
            var a, s = e[Symbol.iterator]();
            !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t);
            r = !0
          );
        } catch (l) {
          (i = !0), (o = l);
        } finally {
          try {
            r || null == s['return'] || s['return']();
          } finally {
            if (i) throw o;
          }
        }
        return n;
      })(e, t) ||
      (function r() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      })()
    );
  }
  function m(e) {
    return (
      (function r(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
      })(e) ||
      (function t(e) {
        if (
          Symbol.iterator in Object(e) ||
          '[object Arguments]' === Object.prototype.toString.call(e)
        )
          return Array.from(e);
      })(e) ||
      (function n() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      })()
    );
  }
  webix.protoUI(
    {
      $cssName: 'datepicker',
      name: 'ssheet-datepicker',
      getValue: function () {
        return l(webix.ui.datepicker.prototype.getValue.apply(this)) || '';
      },
      $prepareValue: function (e) {
        return (e = s(e)), webix.ui.datepicker.prototype.$prepareValue.apply(this, [e]);
      },
    },
    webix.ui.datepicker
  ),
    webix.protoUI(
      {
        $cssName: 'daterangepicker',
        name: 'ssheet-daterangepicker',
        getValue: function () {
          var e = webix.ui.datepicker.prototype.getValue.apply(this);
          return e && (((e = webix.copy(e)).start = l(e.start)), (e.end = l(e.end))), e || '';
        },
        $prepareValue: function (e) {
          return (
            e ? e.start || e.end || (e = { start: e }) : (e = { start: null, end: null }),
            (e.start = s(e.start)),
            (e.end = s(e.end)),
            webix.ui.daterangepicker.prototype.$prepareValue.apply(this, [e])
          );
        },
      },
      webix.ui.daterangepicker
    ),
    webix.protoUI(
      {
        $cssName: 'window',
        name: 'ssheet-dialog',
        $init: function (e) {
          (this.$view.className += ' webix_ssheet_dialog'),
            (this.config.buttons = e.buttons),
            (this.config.close = !0);
        },
        getBodyConfig: function (e) {
          e.borderless = !0;
          var t = this.getFormElements(e);
          return {
            view: 'form',
            css: 'webix_ssheet_form',
            padding: webix.skin.$active.layoutPadding.form,
            elements: t,
          };
        },
        getFormElements: function (e) {
          var t;
          return (
            webix.isArray(e) ? (t = e) : (t = []).push(e),
            this.config.buttons &&
              (t.push({ height: 1 }),
              t.push({
                margin: 10,
                cols: [
                  {},
                  {
                    view: 'button',
                    css: 'ssheet_cancel_button',
                    label: webix.i18n.spreadsheet.labels.cancel,
                    autowidth: !0,
                    click: function () {
                      this.getTopParentView().callEvent('onCancelClick', []);
                    },
                  },
                  {
                    view: 'button',
                    label: webix.i18n.spreadsheet.labels.save,
                    hotkey: 'enter',
                    autowidth: !0,
                    click: function () {
                      this.getTopParentView().callEvent('onSaveClick', []);
                    },
                  },
                ],
              })),
            t
          );
        },
        body_setter: function (e) {
          return (
            'object' == p(e) &&
              (webix.isUndefined(e.padding) && (e.padding = webix.skin.$active.layoutPadding.form),
              'form' == e.view && e.elements
                ? ((e.elements = this.getFormElements(e.elements)),
                  e.css || (e.css = 'webix_ssheet_form'))
                : (e = this.getBodyConfig(e))),
            webix.ui.window.prototype.body_setter.call(this, e)
          );
        },
        defaults: { move: !0, head: 'Dialog', buttons: !0, close: !0, autofocus: !1, width: 350 },
      },
      webix.ui.window,
      webix.IdSpace
    ),
    webix.protoUI(
      {
        $cssName: 'datatable',
        name: 'ssheet-dialog-table',
        $init: function (e) {
          e.headerRowHeight || (e.headerRowHeight = 34),
            (this.$view.className += ' webix_ssheet_dialog_table');
        },
      },
      webix.ui.datatable
    ),
    webix.protoUI(
      {
        name: 'ssheet-suggest-labels',
        defaults: { fitMaster: !1, padding: 0, borderless: !0 },
        $init: function () {
          this.$view.className += ' webix_ssheet_suggest';
        },
        getItemText: function (e) {
          return this.getList().getItem(e).value;
        },
      },
      webix.ui.suggest
    ),
    webix.protoUI(
      {
        name: 'ssheet-form-suggest',
        defaults: { padding: 0, borderless: !0 },
        $init: function () {
          this.$view.className += ' webix_ssheet_suggest';
        },
      },
      webix.ui.suggest
    ),
    webix.protoUI(
      {
        $cssName: 'colorpicker',
        name: 'ssheet-colorpicker',
        $init: function () {
          this.$view.className += ' webix_ssheet_colorpicker';
        },
        defaults: { suggest: { borderless: !0, body: { view: 'ssheet-colorboard' } } },
      },
      webix.ui.colorpicker
    ),
    webix.protoUI(
      {
        name: 'formlate',
        setValue: function (e) {
          return this.setHTML(e);
        },
        getValue: function () {
          return '';
        },
      },
      webix.ui.template
    ),
    webix.protoUI(
      {
        name: 'ssheet-icons',
        $cssName: 'dataview',
        $init: function () {
          this.$view.className += ' webix_ssheet_dataview';
        },
        defaults: {
          borderless: !0,
          template: "<span class='webix_ssheet_button_icon #css#' ></span>",
          type: { width: 36, height: 36 },
        },
      },
      webix.ui.dataview
    ),
    webix.protoUI(
      { name: 'ssheet-suggest', defaults: { padding: 0, css: 'webix_ssheet_suggest' } },
      webix.ui.contextmenu
    );
  var N = {
    value: null,
    set: function (e, t) {
      this.value ? e.call(t) : (this.start(), e.call(t), this.end());
    },
    start: function () {
      this.value = webix.uid();
    },
    end: function () {
      this.value = null;
    },
  };
  function w(e, t, n) {
    var r,
      i = e.config.save;
    if (i) {
      if ('all' == t) {
        if (!i.all) return;
        (n = { data: e.serialize({ sheets: !0 }) }), (r = i.all);
      } else r = 'string' == typeof i ? i + '/' + t : i[t];
      if ((r = webix.proxy.$parse(r))) {
        if ('function' == typeof r) return r(t, n);
        if (r.$proxy && r.save) return r.save(e, n, null, null);
        var o = webix.ajax();
        'all' === t && o.headers({ 'Content-type': 'application/json' }), o.post(r, n);
      }
    }
  }
  var b = Object.freeze({
      init: function Na(s) {
        for (
          var l,
            t = [
              { name: 'onSheetAdd', type: 'insert' },
              { name: 'onSheetRemove', type: 'remove' },
              { name: 'onSheetRename', type: 'rename' },
              { name: 'onSheetStateChange', type: 'state' },
              { name: 'onCellChange' },
              { name: 'onStyleChange' },
              { name: 'onAction' },
              { name: 'onRowOperation' },
              { name: 'onColumnOperation' },
              { name: 'onAfterConditionSet' },
              { name: 'onAfterRangeSet' },
              { name: 'onAfterSpan' },
              { name: 'onAfterSplit' },
              { name: 'onAfterFilter', view: 'cells' },
              { name: 'onRowResize', view: 'cells' },
              { name: 'onColumnResize', view: 'cells' },
            ],
            e = function (e) {
              var a = t[e];
              (a.view ? s.$$(a.view) : s).attachEvent(a.name, function (e, t, n, r) {
                if (!s._loading_data) {
                  var i;
                  if (a.type) i = 'rename' == a.type ? [a.type, t, e] : [a.type, e];
                  else {
                    var o = s.getActiveSheet();
                    'onAction' == a.name && t.page && t.page != o
                      ? (o = t.page)
                      : 'onCellChange' == a.name && r != o && (o = r),
                      (i = ['update', o]);
                  }
                  clearTimeout(l),
                    (l = webix.delay(function () {
                      return s.callEvent('onChange', i);
                    }));
                }
              });
            },
            n = 0;
          n < t.length;
          n++
        )
          e(n);
        s.attachEvent('onChange', function () {
          w(s, 'all');
        });
      },
      save: w,
    }),
    _ = {},
    y = {},
    C = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function S(e) {
    var t = C.length,
      n = Math.floor(--e / t);
    return 0 < n ? S(n) + C[e % t] : C[e % t];
  }
  function E(e) {
    for (var t = Object.keys(y).length + 1; t <= e; t++) {
      var n = S(t);
      (_[n] = t), (y[t] = n);
    }
  }
  function k(e) {
    for (var t, n = 0; n < e.length; n++)
      if (e.charCodeAt(n) < 59) {
        t = n;
        break;
      }
    var r = e.substr(0, t);
    return [1 * e.substr(t), _[r]];
  }
  function V(e, t, n) {
    var r = e.indexOf('!'),
      i = n || '';
    -1 !== r &&
      ("'" === (i = e.substr(0, r))[0] && (i = i.substr(1, i.length - 2)), (e = e.substr(r + 1)));
    var o = e.split(':');
    if (2 != o.length) {
      if (!t) return null;
      var a = t.ranges.getCode(e, i);
      if (!a && !(a = t.ranges.getCode(e, !0))) return null;
      var s = a.split('!');
      (s[0] != n || t.getActiveSheet()) && (i = s[0].replace(/'/g, '')),
        (o = (a = s[1]).split(':'));
    }
    var l = k(o[0]),
      u = k(o[1]);
    if (l[0] && l[1] && u[0] && u[1]) return [l[0], l[1], u[0], u[1], i];
  }
  function A(e) {
    return -1 == e.indexOf(' ') ? e : "'".concat(e, "'");
  }
  function M(e, t, n, r, i) {
    return (i ? A(i) + '!' : '') + y[t] + e + ':' + y[r] + n;
  }
  function I(e, t) {
    if ('object' === p(e)) return e;
    var n = V(e, t);
    return { start: { row: n[0], column: n[1] }, end: { row: n[2], column: n[3] }, sheet: n[4] };
  }
  function z(e, t, n, r) {
    for (var i = I(e), o = i.start.row; o <= i.end.row; o++)
      for (var a = i.start.column; a <= i.end.column; a++) n(t, { row: o, column: a }, r);
  }
  function D(e) {
    if ('string' == typeof e) {
      var t = e.split(':');
      if (2 == t.length) {
        for (var n = 0; n < t.length; n++) {
          if (!O(t[n].split('!').pop())) return;
        }
        return !0;
      }
    }
  }
  var R = /^[A-Z]+[0-9]+$/;
  function O(e) {
    return R.test(e);
  }
  function P(e, t, n, r) {
    var i = !1;
    if (D(e)) {
      var o = T(V(e), 5),
        a = o[0],
        s = o[1],
        l = o[2],
        u = o[3],
        c = o[4];
      if (l < a) {
        var f = [l, a];
        (a = f[0]), (l = f[1]);
      }
      if (u < s) {
        var h = [u, s];
        (s = h[0]), (u = h[1]);
      }
      if ('row' === t && r.row <= l) {
        if ((((n < 0 && r.row < a) || (0 < n && r.row <= a)) && (a += n), (l += n) < a)) return '';
        i = !0;
      } else if ('column' === t && r.column <= u) {
        if ((((n < 0 && r.column < s) || (0 < n && r.column <= s)) && (s += n), (u += n) < s))
          return '';
        i = !0;
      }
      i && (e = M(a, s, l, u, c));
    }
    return e;
  }
  var F = { width: 38, margin: 7, paddingY: 1, sectorPadding: 5, sectorMargin: 0 },
    U = {
      color: '#666666',
      background: '#ffffff',
      'font-family': "'PT Sans', Tahoma",
      'font-size': '15',
      'text-align': 'left',
      'vertical-align': 'middle',
      'white-space': 'nowrap',
    },
    B = {
      material: "'Roboto', sans-serif",
      mini: "'Roboto', sans-serif",
      flat: "'PT Sans', Tahoma",
      compact: "'PT Sans', Tahoma",
      contrast: "'PT Sans', Tahoma",
      willow: "'Open Sans', sans-serif",
      dark: "'Open Sans', sans-serif",
    };
  var L = [
      'color',
      'background',
      'text-align',
      'font-family',
      'font-size',
      'font-style',
      'underline',
      'font-weight',
      'vertical-align',
      'wrap',
      'borders',
      'format',
      'border-right',
      'border-bottom',
      'border-left',
      'border-top',
      'strike',
      'indent',
    ],
    H = {
      format: function () {
        return '';
      },
      'text-align': {
        left: function () {
          return 'justify-content:flex-start;';
        },
        center: function () {
          return 'justify-content:center;text-align:center;';
        },
        right: function () {
          return 'justify-content:flex-end;text-align:right;';
        },
      },
      'vertical-align': {
        top: function () {
          return 'align-items:flex-start;';
        },
        middle: function () {
          return 'align-items:center;';
        },
        bottom: function () {
          return 'align-items:flex-end;';
        },
      },
      wrap: {
        wrap: function () {
          return 'white-space: normal !important;';
        },
      },
      'border-left': function (e, t) {
        return j('border-left', e, t);
      },
      'border-top': function (e, t) {
        return j('border-top', e, t);
      },
      'border-right': function (e, t) {
        return j('border-right', e, t);
      },
      'border-bottom': function (e, t) {
        return j('border-bottom', e, t);
      },
      'font-weight': function (e) {
        return 'bold' != e['font-weight']
          ? ''
          : 'font-weight:' +
              ("'Roboto', sans-serif" == (e['font-family'] || U['font-family']) ? 500 : 700) +
              ';';
      },
      underline: function (e) {
        var t = 'underline' == e.underline ? 'underline' : '';
        if (t) {
          var n = 'strike' == e.strike ? 'line-through' : '';
          return 'text-decoration: '.concat(t, ' ').concat(n, ';');
        }
        return '';
      },
      strike: function (e) {
        return 'underline' != e.underline && 'strike' == e.strike
          ? 'text-decoration: line-through;'
          : '';
      },
      indent: function (e, t) {
        var n = 1 * e.indent;
        if (0 < n) {
          var r = 'right' == e['text-align'] ? 'right' : 'left';
          return { innerCss: 'margin-'.concat(r, ':').concat((8 * n + 12) * t, 'px;') };
        }
      },
      'font-size': function (e, t) {
        var n = e['font-size'];
        return 1 != t && (n = e['font-size'].replace('px', '') * t + 'px'), 'font-size:' + n + ';';
      },
    };
  function j(e, t, n) {
    var r = t[e];
    if (r) {
      var i = T(r.split(','), 2),
        o = i[0],
        a = i[1],
        s = 1;
      return (
        'medium' == (a = a || 'thin') ? (s = 2) : ('thick' != a && 'double' != a) || (s = 3),
        (s = s * n + 'px'),
        -1 != ['thin', 'medium', 'thick'].indexOf(a) && (a = 'solid'),
        ''.concat(e, ': ').concat(s, ' ').concat(a, ' ').concat(o, ' !important;')
      );
    }
    return '';
  }
  var W,
    q = {
      'border-left': function (e, t, n) {
        return e.column == t.start.column || 'no' == n;
      },
      'border-right': function (e, t, n) {
        return e.column == t.end.column || 'all' == n || 'no' == n;
      },
      'border-top': function (e, t, n) {
        return e.row == t.start.row || 'no' == n;
      },
      'border-bottom': function (e, t, n) {
        return e.row == t.end.row || 'all' == n || 'no' == n;
      },
    },
    X = {
      borders: function (e, t, n, r) {
        var i = e.$$('cells').getSelectArea(),
          o = (n = n.split(','))[0],
          a = n[1],
          s = n[2],
          l = ['border-left', 'border-right', 'border-bottom', 'border-top'];
        'top-bottom' == o
          ? (l = ['border-top', 'border-bottom'])
          : 'no' != o && 'all' != o && 'outer' != o && (l = ['border-' + o]);
        for (var u = 0; u < l.length; u++) {
          var c = l[u];
          if (
            !0 ===
              e.callEvent('onAction', [
                'check-borders',
                { row: r.row, column: r.column, area: i, type: o, mode: c },
              ]) ||
            q[c](r, i, o)
          )
            t = te(e, t, c, 'no' == o ? '' : ''.concat(a, ',').concat(s), r);
        }
        return t;
      },
    };
  function G(e) {
    (e._styles = {}), (e._styles_cache = {}), (e._styles_max = 1);
    var t = '.wss_' + e.$index;
    webix.html.removeStyle(t);
  }
  function Y(e) {
    var t = {};
    Q(e, t), G(e), ee(e, t, !0);
  }
  function K(e, t) {
    var n = e._mPage.getCell(t.row - 1, t.column - 1),
      r = e.$$('cells').getSpan(t.row, t.column);
    if (r && r[0] == t.row && r[1] == t.column)
      for (var i = r[5].split(' '), o = 0; o < i.length; o++) {
        var a = e._styles[i[o]];
        if (a) return a;
      }
    return n && n.style ? e._styles[n.style] : null;
  }
  function Z(e, t, n) {
    var r = e._mPage.getCell(t - 1, n - 1);
    return (r && r.format) || '';
  }
  function Q(e, t) {
    var n = [];
    for (var r in e._styles_cache) n.push([e._styles_cache[r].id, r]);
    t.styles = n;
  }
  function J(e, t, n) {
    var r = {
      props: ue(
        L.map(function () {
          return '';
        }).join(';')
      ),
    };
    if (n) for (var i in n.props) r.props[i] = n.props[i];
    for (var o in t) r.props[o] = t[o];
    r.text = le(r);
    var a = e._styles_cache[r.text];
    return a || (se(e, r), r);
  }
  function ee(e, t, n) {
    if (t.styles)
      for (var r = 0; r < t.styles.length; r++) {
        var i = t.styles[r];
        se(e, { id: i[0], text: i[1], props: ue(i[1]) }, !0);
      }
    if (!n)
      for (var o = 0; o < t.data.length; o++) {
        var a = T(t.data[o], 4),
          s = a[0],
          l = a[1],
          u = a[3];
        u && ne(e, s, l, e._styles[u]);
      }
  }
  function te(e, t, n, r, i) {
    if (X[n]) return X[n](e, t, r, i);
    if (t && t.props[n] == r) return t;
    var o = { text: '', id: 0, props: t ? webix.copy(t.props) : {} };
    (o.props[n] = r), (o.text = le(o));
    var a = e._styles_cache[o.text];
    return a || (se(e, o), o);
  }
  function ne(e, t, n, r) {
    var i = e._mPage.getCell(t - 1, n - 1, !0);
    (i.style = r && r.id), (i.format = r && r.props.format);
  }
  function re(e, t, n) {
    return ae(e, t, n, K(e, t));
  }
  function ie(e, t, n) {
    z(t, e, ae, n);
  }
  function oe(e, t, n, r) {
    (W.innerHTML = t),
      (W.style.width = r ? r + 'px' : 'auto'),
      (W.className = 'webix_table_cell webix_cell ' + n),
      e._table.$view.appendChild(W);
    var i = Math.max(0, W.offsetWidth + 1),
      o = Math.max(0, W.offsetHeight + 1);
    return e._table.$view.removeChild(W), (W.innerHTML = ''), { width: i, height: o };
  }
  function ae(i, o, a, s, l) {
    i.callEvent('onBeforeStyleChange', [o.row, o.column, a, s]) &&
      N.set(function () {
        var e = (a && a.props.format) || null,
          t = (s && s.props.format) || null,
          n = e != t;
        if (!n || (n && i.callEvent('onBeforeFormatChange', [o.row, o.column, e, t]))) {
          ne(i, o.row, o.column, a),
            i.callEvent('onStyleChange', [o.row, o.column, a, s]),
            n && i.callEvent('onFormatChange', [o.row, o.column, e, t]),
            i.saveCell(o.row, o.column);
          var r = i.getSelectedId();
          !l &&
            r &&
            r.row == o.row &&
            r.column == o.column &&
            i.callEvent('onCommand', [{ id: 'toolbar-update' }]);
        }
      });
  }
  function se(e, t, n) {
    for (e._styles_cache[t.text] = t; !t.id || e._styles[t.id]; ) t.id = 'wss' + e._styles_max++;
    e._styles[t.id] = t;
    var r = (function s(e, t) {
        var n = '',
          r = '';
        for (var i in t)
          if (t[i])
            if (H[i]) {
              if (H[i][t[i]]) n += H[i][t[i]](t);
              else if ('function' == typeof H[i]) {
                var o = H[i](t, e._zoom);
                'object' == p(o) ? ((n += o.css || ''), (r += o.innerCss || '')) : (n += o);
              }
            } else n += i + ':' + t[i] + ';';
        return { css: n, innerCss: r };
      })(e, t.props),
      i = r.css,
      o = r.innerCss,
      a = '.wss_' + e.$index;
    webix.html.addStyle(a + ' .' + t.id + '{' + i + '}', a),
      webix.html.addStyle(a + ' .' + t.id + ' div:first-child{' + o + '}', a),
      n || w(e, 'styles', { name: t.id, text: t.text, page: e.getActiveSheet() });
  }
  function le(e) {
    for (var t = [], n = 0; n < L.length; n++) t.push(e.props[L[n]]);
    return t.join(';');
  }
  function ue(e) {
    for (var t = e.split(';'), n = {}, r = 0; r < L.length; r++) n[L[r]] = t[r];
    return n;
  }
  function ce(e, t) {
    N.set(function () {
      z(t, e, function (e, t) {
        K(e, t) && re(e, t, null);
      });
    });
  }
  function fe(e) {
    var t = e.serialize();
    (t.styles = he(t)), G(e), ee(e, t);
  }
  function he(e) {
    for (var t = e.data, n = e.styles, r = {}, i = 0; i < t.length; i++) {
      var o = t[i][3];
      o && (r[o] = 1);
    }
    for (var a = [], s = 0; s < n.length; s++) {
      r[n[s][0]] && a.push(n[s]);
    }
    return a;
  }
  var de = Object.freeze({
    style_names: L,
    init: function Pa(a) {
      a.attachEvent('onStyleSet', function (e, t) {
        return (function o(n, r, i) {
          N.set(function () {
            n.eachSelectedCell(function (e) {
              var t = n.$$('cells').getSpan(e.row, e.column);
              (!t || (t && t[0] == e.row && t[1] == e.column)) &&
                (function s(e, t, n, r) {
                  var i = K(e, t);
                  if ('indent' == n) {
                    var o = 1 * ((i && i.props[n]) || 0);
                    if (!o && -1 == r) return;
                    r += o;
                  }
                  var a = te(e, i, n, r, t);
                  a && a != i && ae(e, t, a, i, !0);
                })(n, e, r, i);
            });
          }),
            n.refresh();
        })(a, e, t);
      }),
        a.attachEvent('onDataParse', function (e) {
          return ee(a, e);
        }),
        a.attachEvent('onDataSerialize', function (e) {
          return Q(a, e);
        }),
        a.attachEvent('onReset', function () {
          return G(a);
        }),
        a.attachEvent('onUndo', function (e, t, n, r) {
          'style' == e &&
            (function i(e, t, n, r) {
              re(e, { row: t, column: n }, r);
            })(a, t, n, r);
        }),
        G(a),
        W ||
          (W = webix.html.create(
            'DIV',
            { style: 'visibility:hidden; position:absolute; top:0px; left:0px; height:auto;' },
            ''
          ));
    },
    zoomStyles: Y,
    getStyle: K,
    getFormat: Z,
    addStyle: J,
    setStyle: re,
    setRangeStyle: ie,
    getTextSize: oe,
    styleToText: le,
    styleFromText: ue,
    clearRangeStyle: ce,
    compactStyles: fe,
    removeUnusedStyles: he,
  });
  function ve(e, t) {
    return e[ge(e, t)];
  }
  function ge(e, t) {
    for (var n = -1, r = 0; n < 0 && r < e.length; r++) t(e[r]) && (n = r);
    return n;
  }
  function pe(e, t, n, r) {
    for (var i = 0; i < e.length; i++) {
      var o = e[i];
      o[0] > n && (n = o[0]), o[1] > r && (r = o[1]);
    }
    if (t)
      for (var a = 0; a < t.length; a++) {
        var s = t[a][0] + t[a][3] - 1,
          l = t[a][1] + t[a][2] - 1;
        n < s && (n = s), r < l && (r = l);
      }
    return [1 * n, 1 * r];
  }
  var me,
    we,
    be,
    xe,
    _e = {},
    ye = [],
    Ce = { common: 1 };
  function Se() {
    var n = webix.i18n.spreadsheet.formats;
    for (var e in ((ye = (ye = (ye = [webix.i18n.price]).concat(webix.copy(n.currencies))).map(
      function (e) {
        var t = (function n(e) {
          return webix.template(e)('');
        })(e);
        return { format: e, id: t, value: t.trim() };
      }
    )),
    (be = {}),
    (me = 0),
    (xe = {}),
    (we = {}),
    (_e = {
      price: {
        getFormat: function (e, t) {
          return (t.css = 'webix_ssheet_format_price'), webix.i18n.priceFormat(e);
        },
        values: webix.extend(
          {
            zeros: webix.i18n.priceSettings.decimalSize,
            symbol: webix.i18n.price.replace('{obj}', '').trim(),
            separator: 1,
            negative: 1,
            type: 'price',
          },
          $e('price')
        ),
      },
      int: {
        getFormat: function (e, t) {
          return (t.css = 'webix_ssheet_format_int'), webix.i18n.numberFormat(e);
        },
        values: webix.extend(
          { zeros: webix.i18n.decimalSize, separator: 1, negative: 1, type: 'int' },
          $e('int')
        ),
      },
      percent: {
        getFormat: function (e, t) {
          return (t.css = 'webix_ssheet_format_percent'), Math.round(100 * e) + '%';
        },
        values: webix.extend(
          { zeros: 0, separator: 0, negative: 1, type: 'percent' },
          $e('percent')
        ),
      },
      date: {
        getFormat: function (e, t) {
          return (t.css = 'webix_ssheet_format_date'), ze(n.dateFormat, $e('date'))(e);
        },
        values: { type: 'date', date: n.dateFormat },
      },
      string: {
        getFormat: function (e, t) {
          return (t.css = 'webix_ssheet_format_text'), e;
        },
        values: { type: 'string' },
      },
    })))
      (Ce[e] = 1), (xe[e] = He(Le(e, _e[e].values))), (we[xe[e]] = e);
  }
  function $e(e) {
    return 'price' == e
      ? {
          groupSign: webix.i18n.priceSettings.groupDelimiter,
          decimalSign: webix.i18n.priceSettings.decimalDelimiter,
        }
      : { groupSign: webix.i18n.groupDelimiter, decimalSign: webix.i18n.decimalDelimiter };
  }
  function Ee(e) {
    return _e[e] ? _e[e].getFormat : _e[e];
  }
  function ke(e, t) {
    return t ? He(je({ values: _e[e].values, format: xe[e] }), !0) : xe[e];
  }
  function Ve(e, t) {
    if (we[e]) return we[e];
    var n = 'object' == p(t) ? 'fmt' + me : t;
    return (
      me++,
      (be[n] = e),
      'string' == typeof t &&
        (t = (function b(t) {
          var e = webix.i18n.spreadsheet.formats,
            n = [e.dateFormat, e.timeFormat, e.fullDateFormat, e.longDateFormat],
            r = { format: t, type: 'custom' };
          if (
            ve(n, function (e) {
              return e == t;
            })
          )
            webix.extend(r, { type: 'date', date: t }, !0);
          else {
            var i,
              o = t.split(';'),
              a = T(o, 2),
              s = a[0],
              l = a[1];
            if (s && l)
              if (0 == s.indexOf('[>=0]') && 0 == l.indexOf('[<0]'))
                if (
                  ((s = s.replace('[>=0]', '')),
                  0 == (l = l.replace('[<0]', '')).indexOf('[red]') &&
                    ((l = l.replace('[red]', '')), (i = !0)),
                  '-' == l[0]
                    ? ((l = l.substring(1)), (r.negative = i ? 2 : 1))
                    : i &&
                      ('(' == l[0] && ')' == l[l.length - 1]
                        ? ((r.negative = 4), (l = l.substring(1, l.length - 1)))
                        : (r.negative = 3)),
                  r.negative && s == l)
                ) {
                  var u = 'int',
                    c = -1 != s.indexOf('[$');
                  if ('%' == s[s.length - 1]) (s = s.substring(0, s.length - 1)), (u = 'percent');
                  else
                    for (var f = 0; f < ye.length; f++) {
                      var h = ye[f].id,
                        d = void 0;
                      if (
                        (c
                          ? -1 != s.indexOf('[$'.concat(h, ']')) &&
                            ((s = s.replace('[$'.concat(h, ']'), '')), (d = !0))
                          : -1 != s.indexOf(h) && ((s = s.replace(h, '')), (d = !0)),
                        d)
                      ) {
                        (u = 'price'), (r.symbol = h);
                        break;
                      }
                    }
                  var v = $e(u);
                  0 == s.indexOf('#' + v.groupSign) &&
                    ((s = s.replace('#' + v.groupSign, '')), (r.separator = 1));
                  var g = s.split(v.decimalSign),
                    p = T(g, 2),
                    m = p[0],
                    w = p[1];
                  (m && '0' != m) ||
                    (w && !/^[0]+$/.test(w)) ||
                    ((r.type = u), (r.delimiters = v), (r.zeros = w ? w.length : 0));
                }
          }
          return r;
        })(e)),
      webix.extend(t, $e('custom')),
      (_e[n] = {
        getFormat: ze(e, { decimalSign: t.decimalSign, groupSign: t.groupSign }),
        values: t,
      }),
      (xe[n] = e),
      (we[e] = n)
    );
  }
  function Ae(e, t, n, r, i) {
    i || (i = { format: r, type: 'custom' });
    var o = e.getStyle(t, n),
      a = J(e, { format: Ve(r, i) }, o);
    e.setStyle(t, n, a);
  }
  function Me(e, t, n) {
    var r = J(e, { format: '' }, e.getStyle(t, n));
    e.setStyle(t, n, r);
  }
  function Ie(e) {
    var t = e.match(/.*\[[><=].*/g),
      n = e.split(';');
    return (
      t ||
        (1 < n.length &&
          ((n[0] = (2 < n.length ? '[>0]' : '[>=0]') + n[0]),
          (n[1] = '[<0]' + n[1]),
          n[2] && (n[2] = '[=0]' + n[2]))),
      n
    );
  }
  function ze(e, t) {
    for (
      var n,
        r = webix.i18n.spreadsheet.table['format-error'],
        i = Ie(e),
        o = [
          'var spaces = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";',
        ],
        a = 0;
      a < i.length;
      a++
    ) {
      var s = qe(i[a]);
      o.push(De(s.condition, s.color.toLowerCase(), s.symbol, s.fmt, a, 0 < i.length, t));
    }
    try {
      n = new Function(
        'val',
        'extra',
        'try{ '.concat(o.join('\n'), ' return val; } catch(err) { return "').concat(r, '"; }')
      );
    } catch (l) {
      n = function () {
        return r;
      };
    }
    return n;
  }
  function De(e, t, n, r, i, o, a) {
    var s = '';
    return (
      e &&
        ((s += i ? 'else if' : 'if'),
        '=' === e[0] && (e = '=' + e),
        (s += '(val' + e + '){'),
        o && (s += 'val = Math.abs(val);')),
      t && (s += 'extra.css = "webix_ssheet_format_' + t + '";'),
      (s += (function b(e, t, n) {
        if (!e) return 'return val;';
        var r,
          i,
          o,
          a,
          s,
          l = 'return ""',
          u = '',
          c = 1,
          f = [],
          h = 'date';
        if (n) {
          var d = ve(ye, function (e) {
            return e.id == n;
          });
          (s = 'left'),
            d &&
              (s = ge(d.format.split('{obj}'), function (e) {
                return e;
              })
                ? 'right'
                : 'left');
        }
        for (var v = 0; v < e.length; v++) {
          var g = Xe(e[v - 1]) && Xe(e[v + 1]);
          if ('"' != e[v]) {
            if (webix.isUndefined(r))
              if (('%' == e[v] && (c *= 100), /[a-zA-Z]/.test(e[v]))) {
                var p = Pe(e.substr(v), h);
                if (p) {
                  if (o || a) return 'throw "unexpected number placeholder";';
                  f.push(p.format), (l += '/*date*/'), (h = p.type), (v += p.length - 1);
                  continue;
                }
                l += '+"'.concat(e[v], '"');
              } else if (e[v] === t.decimalSign && g) u += t.decimalSign;
              else if ('@' == e[v]) {
                if (o || f.length) return 'throw "unexpected number placeholder";';
                a || ((l += '+fmt'), (a = !0)), (u += e[v]);
              } else if (Xe(e[v])) {
                if (a || f.length) return 'throw "unexpected text placeholder";';
                o ||
                  ('left' == s && (l += '+"'.concat(n, '"')),
                  (l += '+fmt'),
                  'right' == s && (l += '+"'.concat(n, '"')),
                  (o = !0)),
                  (u += e[v]);
              } else e[v] === t.groupSign && g ? (i = !0) : (l += '+"'.concat(e[v], '"'));
          } else
            r = webix.isUndefined(r)
              ? v
              : ((l += '+"'.concat(e.substr(r + 1, v - r - 1), '"')), undefined);
        }
        if (f.length) {
          -1 != f.indexOf('%A') &&
            (f = f.map(function (e) {
              switch (e) {
                case '%G':
                  return '%g';
                case '%H':
                  return '%h';
                default:
                  return e;
              }
            }));
          for (var m = 0; m < f.length; m++)
            l = l.replace('/*date*/', '+dateParts['.concat(m, ']'));
        }
        return '\n\t\t'
          .concat(
            f.length
              ? 'val = ('
                  .concat(x, ')(val); var dateParts = webix.Date.dateToStr("')
                  .concat(f.join(';'), '")(val).split(";");')
              : '',
            '\n\t\t'
          )
          .concat(
            u
              ? ''.concat(
                  (function w(e, t, n, r) {
                    var i = 'if(/^@+$/.test("'.concat(
                        e,
                        '") || isNaN(val)){ var fmt = val; }else {'
                      ),
                      o = n.decimalSign,
                      a = T(Ge(e, o), 2),
                      s = a[0],
                      l = a[1];
                    l = (l || '').split('').reverse().join('');
                    var u = s.indexOf('0');
                    0 <= u && (u = s.length - u);
                    var c = s.indexOf('?');
                    0 <= c && (c = s.length - c);
                    var f = l.indexOf('0');
                    0 <= f && (f = l.length - f);
                    var h = l.indexOf('?');
                    0 <= h && (h = l.length - h);
                    var d = l.length;
                    return (
                      (i += '\n\tval = val*'
                        .concat(r, ';\n\tvar parts = val.toFixed(')
                        .concat(
                          d,
                          ').split(".");\n\tvar left = parts[0];\n\tvar lsize = left.length; \n\tvar right = parts[1] || "";\n\tif (left.length < '
                        )
                        .concat(u, ') left = "0000000000".substr(0, ')
                        .concat(u, ' - left.length)+left;\n\tif (left.length < ')
                        .concat(c, ') left = spaces.substr(0, 6*(')
                        .concat(c, ' - left.length))+left;\n\tif (')
                        .concat(
                          t,
                          ') {\n\t\tvar buf = [];\n\t\tvar start = 3;\n\t\twhile (lsize > start) { buf.push(left.substr(left.length-start,3)); start+=3; }\n\t\tvar last = left.substr(0,left.length-start+3);\n\t\tif (last !== "-")\n\t\t\tbuf.push(last);\n\t\telse\n\t\t\tbuf.push("-"+buf.pop());\n\n\t\tleft = buf.reverse().join("'
                        )
                        .concat(
                          n.groupSign,
                          '");\n\t}\n\tif (right){\n\t\tvar zpoint = right.length-1;\n\t\twhile (zpoint >= '
                        )
                        .concat(
                          f,
                          '){\n\t\t\tif (right[zpoint] !== "0"){\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\tzpoint--;\n\t\t}\n\n\t\tif (zpoint <= right.length)\n\t\t\tright = right.substr(0, zpoint+1);\n\n\t\tif (right.length < '
                        )
                        .concat(h, '){\n\t\t\tright += spaces.substr(0, 6*(')
                        .concat(h, ' - right.length));\n\t\t}\n\t}\n\tvar fmt = left+(right?"')
                        .concat(o, '":"")+right;\n\t')) + '}\n'
                    );
                  })(u, i, t, c),
                  ';'
                )
              : '',
            '\n\t\t'
          )
          .concat(l, ';');
      })(r, a, n)) + (e ? '}' : '')
    );
  }
  var Re = {
      yy: '%y',
      yyyy: '%Y',
      m: '%n',
      mm: '%m',
      mmm: '%M',
      mmmm: '%F',
      mmmmm: '%F',
      d: '%j',
      dd: '%d',
      ddd: '%D',
      dddd: '%l',
    },
    Oe = { h: '%G', hh: '%H', m: '%i', mm: '%i', s: '%s', ss: '%s', 'AM/PM': '%A' },
    Te = Object.keys(Re).sort(function (e, t) {
      return t.length - e.length;
    }),
    Ne = Object.keys(Oe).sort(function (e, t) {
      return t.length - e.length;
    });
  function Pe(e, t) {
    var n = [
      { name: 'date', order: Te, types: Re },
      { name: 'time', order: Ne, types: Oe },
    ];
    /^m{1,2}(?!m)/.test(e) && 'date' != t && n.reverse();
    for (var r = 0; r < n.length; r++)
      for (var i = n[r], o = 0; o < i.order.length; o++)
        if (0 == e.indexOf(i.order[o]))
          return { format: i.types[i.order[o]], length: i.order[o].length, type: i.name };
  }
  function Fe(t, n, e, r) {
    var i = (function u(e, t, n) {
      {
        if (t && n) {
          if ('object' !== p(t) || 'object' !== p(n)) return [{ row: t, column: n }];
          for (var r = [], i = t.row; i <= n.row; i++)
            for (var o = t.column; o <= n.column; o++) r.push({ row: i, column: o });
          return r;
        }
        return e.getSelectedId(!0);
      }
    })(t, e, r);
    if (0 != i.length) {
      var o = t._mPage.getCell(i[0].row - 1, i[0].column - 1),
        a = o && o.format,
        s = o && o.value ? o.value.toString() : '';
      if (webix.rules.isNumber(s) || a) {
        N.set(function () {
          for (var e = 0; e < i.length; e++) Ue(t, n, i[e]);
        }),
          t.refresh();
        var l = Ke(t, i[0].row, i[0].column) || 'common';
        (l = Be(l) ? 'custom' : l),
          t.callEvent('onCommand', [{ id: 'toolbar-update', name: 'format', value: l }]);
      }
    }
  }
  function Ue(e, t, n) {
    var r,
      i = e._mPage.getCell(n.row - 1, n.column - 1),
      o = i && i.format,
      a = i && i.value ? i.value.toString() : '';
    o
      ? (((r = webix.copy({ values: _e[o].values, format: ke(o) })).format = (function s(e, t, n) {
          for (var r = je(e), i = 0; i < r.length; i++) {
            if (r[i].decimals)
              0 < t
                ? (r[i].right.placeholders += Array(t + 1).join('0'))
                : (r[i].right.placeholders = r[i].right.placeholders.slice(0, t));
            else {
              var o = !r[i].left.text && !r[i].right.text,
                a = !r[i].left.placeholders && !r[i].right.placeholders;
              t < 0 && o && a && webix.rules.isNumber(n) && -1 < n.indexOf('.')
                ? ((r[i].left.placeholders = '0'),
                  (r[i].right.placeholders = Array(n.split('.')[1].length).join(
                    Array(t + 1).join('0')
                  )))
                : 0 < t &&
                  (r[i].left.placeholders || o) &&
                  ((r[i].left.placeholders = r[i].left.placeholders || '0'),
                  (r[i].right.placeholders = Array(t + 1).join('0')),
                  (r[i].decimals = !0));
            }
            r[i].decimals = 0 < r[i].right.placeholders.length;
          }
          return He(r);
        })(r, t, a)),
        r.values &&
          r.values.hasOwnProperty('zeros') &&
          (r.values.zeros = Math.max(r.values.zeros + t, 0)))
      : ((r = {
          values: {
            negative: 1,
            zeros:
              webix.rules.isNumber(a) && a.split('.')[1]
                ? Math.max(a.split('.')[1].length + t, 0)
                : Math.max(t, 0),
            separator: 0,
            type: 'int',
          },
        }).format = He(Le(r.values.type, r.values)));
    Ae(e, n.row, n.column, r.format, r.values);
  }
  function Be(e) {
    return !Ce[e];
  }
  function Le(e, t) {
    if ('string' == e) return [{ left: { text: '@' } }];
    if (t.date) return [{ left: { text: t.date } }];
    var n = [
      { condition: '>=0', left: { text: '' }, right: { text: '' } },
      { condition: '<0', left: { text: '' }, right: { text: '' } },
    ];
    if (
      (webix.extend(n, $e(e)),
      (n[0].right.placeholders = n[1].right.placeholders =
        t.zeros ? Array(t.zeros + 1).join('0') : ''),
      (n[0].separator = n[1].separator = t.separator && 'percent' != e),
      (n[0].left.placeholders = n[1].left.placeholders =
        n[0].separator ? '#' + n.groupSign + '0' : '0'),
      (n[0].decimals = n[1].decimals = !!t.zeros),
      (n[1].color = 1 != t.negative ? 'red' : ''),
      (n[1].left.text += t.negative < 3 ? '-' : ''),
      4 == t.negative && (n[1].left.text += '('),
      'percent' === e)
    )
      n[0].right.text = n[1].right.text += '%';
    else if ('price' === e) {
      var r = t.symbol,
        i = ge(
          ve(ye, function (e) {
            return e.id == r;
          }).format.split('{obj}'),
          function (e) {
            return e;
          }
        )
          ? 'right'
          : 'left';
      n[0][i].symbol = n[1][i].symbol = r;
    }
    return 4 == t.negative && (n[1].right.text += ')'), n;
  }
  function He(e, t) {
    for (var n = '', r = 0; r < e.length; r++) {
      if (
        (e[r].condition && (n += '[' + e[r].condition + ']'),
        e[r].color && (n += '[' + e[r].color + ']'),
        e[r].left)
      ) {
        if (e[r].left.text) n += e[r].left.text;
        if ((e[r].left.symbol && (n += '[$' + e[r].left.symbol + ']'), e[r].left.placeholders)) {
          var i = e[r].left.placeholders;
          n += t ? i.replace(e.groupSign, ',') : i;
        }
      }
      if ((e[r].decimals && (n += t ? '.' : e.decimalSign), e[r].right))
        if (
          (e[r].right.placeholders && (n += e[r].right.placeholders),
          e[r].right.symbol && (n += '[$' + e[r].right.symbol + ']'),
          e[r].right.text)
        )
          n += e[r].right.text;
      r != e.length - 1 && (n += ';');
    }
    return n;
  }
  function je(u) {
    for (
      var c = u.format.split(';'),
        f = [],
        e = function (e) {
          var t = qe(c[e]);
          f[e] = { color: t.color, condition: t.condition, left: {}, right: {} };
          var n = t.fmt;
          (f.groupSign = u.values.groupSign),
            (f.decimalSign = u.values.decimalSign),
            -1 < n.indexOf(f.groupSign) && (f[e].separator = !0);
          var r = Ge(n, f.decimalSign),
            i = r[0],
            o = r[1] || '';
          r[1] && (f[e].decimals = !0),
            (i = We(i, 'left', f.groupSign)),
            (o = We(o, 'right', f.groupSign)),
            (f[e].left = { text: i.leftText, placeholders: i.placeholders }),
            (f[e].right = { text: i.rightText + o.rightText, placeholders: o.placeholders });
          var a = t.symbol;
          if (a) {
            var s = ve(ye, function (e) {
                return e.id == a;
              }),
              l = 'left';
            s &&
              (l = ge(s.format.split('{obj}'), function (e) {
                return e;
              })
                ? 'right'
                : 'left'),
              (f[e][l].symbol = a);
          }
        },
        t = 0;
      t < c.length;
      t++
    )
      e(t);
    return f;
  }
  function We(e, t, n) {
    var r;
    'left' == t && (r = (r = e.match(/[#?0]/)) ? r.index : Infinity);
    for (var i = '', o = '', a = '', s = 0; s < e.length; s++)
      if (Xe(e[s])) a += e[s];
      else {
        if (e[s] == n && Xe(e[s + 1]) && Xe(e[s - 1])) {
          a += e[s];
          continue;
        }
        if ('left' == t && s < r) {
          i += e[s];
          continue;
        }
        o += e[s];
      }
    return { leftText: i, rightText: o, placeholders: a };
  }
  function qe(e) {
    var t = '',
      n = '',
      r = '',
      i = e.indexOf('[');
    if (-1 != i && e[1].match(/[><=]/)) {
      var o = e.indexOf(']');
      (n = e.substr(i + 1, o - i - 1)), (e = e.substr(o + 1));
    }
    if (-1 != (i = e.indexOf('[$'))) {
      var a = i + e.substr(i).indexOf(']');
      (r = e.substr(i + 2, a - i - 2)), (e = e.substr(0, i) + e.substr(a + 1));
    }
    if (-1 != (i = e.indexOf('['))) {
      var s = e.indexOf(']');
      (t = e.substr(i + 1, s - i - 1)), (e = e.substr(s + 1));
    }
    return { condition: n, color: t, symbol: r, fmt: e };
  }
  function Xe(e) {
    return '0' === e || '#' === e || '?' === e;
  }
  function Ge(e, t) {
    var n = e.match('[#?0][/' + t + '][#?0]');
    return n ? [e.substring(0, n.index + 1), e.substring(n.index + 2)] : [e];
  }
  function Ye(e, t, n) {
    if ((e = e && e.fmt ? e.fmt : ke(e))) {
      var r,
        i = qe(Ie(e)[0]).fmt;
      if (i)
        for (var o = 0; o < i.length; o++)
          if (('"' == i[o] && (r = !r), !r)) {
            if ('date' == t && /[a-zA-Z]/.test(i)) {
              var a = Pe(i.substr(o), 'date');
              if (a) {
                if (!n) return !0;
                if ('time' == a.type) return !0;
              }
            }
            if ('string' == t && '@' == i[o]) return !0;
          }
    }
  }
  function Ke(e, t, n) {
    var r = e._mPage.getCell(t - 1, n - 1);
    return (r && r.format) || null;
  }
  function Ze(e) {
    return e < -99974430.925 || 100025569.125 < e;
  }
  function Qe(e, t, n) {
    var r = Ke(e, t, n),
      i = webix.i18n.spreadsheet.formats,
      o = Ye(r, 'date', !0);
    return webix.Date.dateToStr(i[o ? 'parseDateTime' : 'parseDate']);
  }
  function Je(e, t) {
    var n,
      r = t[3];
    if (r) {
      var i = ve(e.styles, function (e) {
        return e[0] == r;
      });
      if (i) {
        var o = ue((i = i[1])).format;
        o &&
          (e.formats &&
            (n = ve(e.formats, function (e) {
              return e[0] == o;
            })),
          (n = n ? n[1] : ke(o)));
      }
    }
    return n;
  }
  var et = Object.freeze({
    init: function Fa(e) {
      e.attachEvent('onDataParse', function (e) {
        return (function i(e, t) {
          var n,
            r = t.formats;
          if (r) for (n = 0; n < r.length; n++) Ve(r[n][1], r[n][0]);
        })(0, e);
      }),
        e.attachEvent('onDataSerialize', function (e, t) {
          return (function i(e, t) {
            var n = [];
            for (var r in xe) Ce[r] || n.push([r, xe[r]]);
            t.formats = n;
          })(0, e);
        });
    },
    get formatHelpers() {
      return _e;
    },
    get currencies() {
      return ye;
    },
    get formatsCount() {
      return me;
    },
    get formatCache() {
      return we;
    },
    setDefaultFormats: Se,
    getDelimiters: $e,
    getFormat: Ee,
    getFormatSource: ke,
    addFormat: Ae,
    removeFormat: Me,
    format2code: ze,
    changeAreaDecimals: Fe,
    changeCellDecimals: Ue,
    isCustom: Be,
    formToValues: Le,
    serializeFormat: He,
    checkFormat: Ye,
    getFormatName: Ke,
    isDateInvalid: Ze,
    getDateEditFormat: Qe,
    getFormatFromData: Je,
  });
  function tt(e) {
    var t = e.charCodeAt(0);
    return t <= 122 ? 65 <= t || 35 == t || 36 == t || 46 == t : 191 < t;
  }
  function nt(e, t) {
    for (var n = e.length, r = n - 1; 0 <= r; r--) {
      if (!tt(e[r])) {
        if (t && rt(e[r])) continue;
        return n;
      }
      n = r;
    }
  }
  function rt(e) {
    var t = e.charCodeAt(0);
    return 48 <= t && t <= 57;
  }
  function it(e, t) {
    var n,
      r = '',
      i = !1;
    for (n = t; n < e.length; n++) {
      var o = e[n];
      if ("'" !== o) {
        if (!i)
          if ('!' == o) {
            if ('#' == e[t]) continue;
            "'" === (r = e.substr(t, n - t))[0] && (r = r.substr(1, r.length - 2)), (t = n + 1);
          } else if (!tt(o) && !rt(o)) return [e.substr(t, n - t), n, t, r];
      } else i = !i;
    }
    return [e.substr(t), n, t, r];
  }
  var ot = /^[A-Z$]+[0-9]+$/;
  function at(e) {
    for (var t = 0, n = 0, r = 1, i = 1, o = 0, a = !1, s = e.length - 1; 0 <= s; s--) {
      var l = e[s].charCodeAt(0);
      36 !== l
        ? l < 58
          ? ((n += (l - 48) * r), (r *= 10))
          : (a || ((t = n), (a = !(n = 0)), (i += r = 1)), (n += (l - 64) * r), (r *= 26))
        : (o += i);
    }
    return [t, n, o];
  }
  function st(e, t, n, r) {
    for (
      var i, o = t.getActiveSheet(), a = [], s = 0, l = !1, u = !1, c = '=' === e[c] ? 1 : 0;
      c < e.length;
      c++
    ) {
      var f = e[c];
      if ('"' == f) l = !l;
      else if (!l)
        if ('{' == f && '{' == e[c + 1]) u = !0;
        else if ('}' == f && '}' == e[c + 1]) u = !1;
        else if (!u) {
          var h = "'" === f;
          if (h || tt(f)) {
            var d = T(it(e, c), 4),
              v = d[0],
              g = d[1],
              p = d[3],
              m = g - 1;
            if ('(' !== e[m + 1])
              if (((i = v), ot.test(i)))
                (p && p != o && !n) || (lt(a, e, c, s, p ? [p, v, h] : v), (s = m + 1));
              else if (n) lt(a, e, c, s, p ? [p, v, h] : v), (s = m + 1);
              else {
                var w = t.ranges.getCode(v, p || r);
                if ((w || (w = t.ranges.getCode(v, !0)), w)) {
                  var b = w.split('!');
                  b[0] == o && (lt(a, e, c, s, [p, v, h, b[1]]), (s = m + 1));
                }
              }
            c = m;
          }
        }
    }
    return s != e.length && a.push(e.substr(s)), a;
  }
  function lt(e, t, n, r, i) {
    0 !== n && e.push(t.substr(r, n - r)), e.push(i);
  }
  function ut(e, t, n) {
    var r = Je(t, n),
      i = { value: n[2], fmt: r ? { fmt: r } : null, type: n[4] };
    return dt(e, i), i;
  }
  function ct(e, t, n) {
    (n = r(n)),
      (t.value = n),
      e._loading_data || e._page_value_set || e.setCellValue(t.row, t.col, n);
  }
  function ft(e) {
    var t = e ? 'number' : null;
    return Ye(e, 'string') ? (t = 'string') : Ye(e, 'date') && (t = 'date'), t;
  }
  function ht(e, t, n, r) {
    var i = (r = r ? e._mData.getPage(r) : e._mPage).getCell(t - 1, n - 1);
    return (i && i.type) || null;
  }
  function dt(e, t, n) {
    var r = !(t.row && t.col);
    e._setType = !0;
    var i,
      o = 'string' == typeof t.value && '=' == t.value[0],
      a =
        (!n || t.fmt == ke('date')) && (!e._loading_data || e._page_value_set || 'date' == t.type);
    r ||
      (i =
        o && !t.fmt
          ? (function c(e, t) {
              for (var n, r = 0, i = st(t, e), o = 0; o < i.length; o++)
                if (o % 2 == 0) {
                  var a = i[o].match(/(([a-zA-Z]*\()|\))(?=(?:[^"]|"[^"]*")*$)/g);
                  a &&
                    a.forEach(function (e) {
                      -1 < e.indexOf('(')
                        ? (r++,
                          n ||
                            /^(SUM|AVERAGE|MAX|MIN|INT|ROUND|ROUNDDOWN|ROUNDUP|TRUNC)?\($/gi.test(
                              e
                            ) ||
                            (n = r))
                        : --r < n && (n = null);
                    });
                } else if (!n) {
                  if (webix.isArray(i[o]))
                    if (/^[A-Za-z]+$/.test(i[o][1])) i[o] = i[o][3].split(':')[0];
                    else {
                      if (i[o][0] != e.getActiveSheet()) continue;
                      i[o] = i[o][1];
                    }
                  var s = at(i[o]),
                    l = Ke(e, s[0], s[1]);
                  if (l) return { fmt: ke(l) };
                }
            })(e, t.value)
          : null);
    var s = ft(t.fmt || i),
      l = (function f(e, t, n, r, i, o) {
        var a = 'string';
        if (!webix.isUndefined(t.value))
          if (r)
            (a = 'number'),
              /^=(now|date|time)\(/i.test(t.value)
                ? (a = 'date')
                : /^=(sparkline|image)\(/i.test(t.value) && (a = 'string');
          else if (isNaN(t.value)) {
            if ('string' != i && n) {
              var s = webix.Date.strToDate(webix.i18n.spreadsheet.formats.parseDateTime)(t.value);
              '' == s ||
                isNaN(s) ||
                (o
                  ? ct(e, t, s)
                  : e.ignoreUndo(function () {
                      return ct(e, t, s);
                    }),
                (a = 'date'));
            }
          } else a = 'number';
        return a;
      })(e, t, a, o, s, n);
    if (
      ((t.type = (function h(e, t, n, r, i) {
        return (
          (e = e || t),
          'string' == t ? (e = 'string') : n && (e = n),
          'date' == e && !r && Ze(i) && (e = 'number'),
          e
        );
      })(t.type, l, s, o, t.value)),
      !r)
    ) {
      var u = e._mPage.getCell(t.row - 1, t.col - 1, !0);
      (u.$format = 'string' == s ? 1 : 0),
        (function d(e, t, n, r, i) {
          var o = t.row,
            a = t.col,
            s = 'string' == typeof t.value,
            l = s && '=' == t.value[0],
            u = e.getCellEditor(o, a);
          e._loading_data ||
            e._page_value_set ||
            'number' !== t.type ||
            !s ||
            l ||
            '' === t.value ||
            e.setCellValue(o, a, 1 * t.value);
          if (i) e.setFormat(o, a, i.fmt);
          else if ('date' == t.type) {
            if ('date' != r) {
              var c = l && 0 == t.value.toUpperCase().indexOf('=TIME('),
                f = webix.i18n.spreadsheet.formats,
                h = c ? f.timeFormat : f.dateFormat;
              e.setFormat(o, a, h);
            }
            l || u || e.setCellEditor(o, a, { editor: 'excel_date' });
          } else 'string' != r && 'string' == t.type && 'string' != n && e.setFormat(o, a, '@');
          ('date' != t.type || l) && u && 'excel_date' == u.editor && e.setCellEditor(o, a, null);
        })(e, t, l, s, i),
        (u.type = t.type);
    }
    delete e._setType;
  }
  webix.protoUI(
    {
      name: 'suggest-formula',
      defaults: {
        fitMaster: !1,
        width: 200,
        filter: function (e, t) {
          var n = webix.$$(this.config.master),
            r = n.getInputNode().selectionStart,
            i = n.getValue();
          if ('=' === i.charAt(0)) {
            var o = i.substring(0, r),
              a = o.substring(nt(o, !0)),
              s = i.charAt(r);
            return (
              !a || (r !== i.length && (tt(s) || /^[0-9]/.test(s))) || (t = a),
              0 === e.value.toString().toLowerCase().indexOf(t.toLowerCase())
            );
          }
        },
      },
      $init: function () {
        var l = this;
        this.attachEvent('onBeforeShow', function (e) {
          if (e.tagName) {
            var t = webix.$$(l.config.master),
              n = t.getValue();
            if (!n || '=' !== n.charAt(0)) return !1;
            var r = webix.html.offset(e),
              i = t.getInputNode().selectionStart,
              o = webix.html.getTextSize(n.substring(0, i), 'webix_ssheet_formula').width,
              a = r.y + r.height,
              s = r.x + o;
            return webix.ui.popup.prototype.show.apply(l, [{ x: s, y: a }]), !1;
          }
        });
      },
      setMasterValue: function (e, t) {
        var n = e.id ? this.getItemText(e.id) : e.text || e.value;
        webix.$$(this.config.master).setValueHere(n),
          t || this.hide(!0),
          this.callEvent('onValueSuggest', [e, n]);
      },
      $enterKey: function () {
        if (this.isVisible()) return webix.ui.suggest.prototype.$enterKey.apply(this, arguments);
      },
    },
    webix.ui.suggest
  );
  var vt = Object.freeze({
    init: function Ua(r) {
      r.attachEvent('onCellChange', function (e, t, n, r) {
        if (r == this.getActiveSheet() && !this._setType) {
          var i = Ke(this, e, t);
          dt(this, { row: e, col: t, value: n, fmt: i ? { fmt: ke(i) } : null });
        }
      }),
        r.attachEvent('onBeforeFormatChange', function (e, t, n) {
          this._setType ||
            dt(this, { row: e, col: t, value: r.getCellValue(e, t), fmt: { fmt: ke(n) } }, !0);
        }),
        r.attachEvent('onAction', function (e, t) {
          'dropdown' == e &&
            t.newValue &&
            'excel_date' == t.newValue.editor &&
            'date' != ft(Ke(this, t.row, t.column)) &&
            this.setFormat(t.row, t.column, webix.i18n.spreadsheet.formats.dateFormat);
        });
    },
    loadCell: ut,
    getType: ht,
  });
  function gt(e) {
    return {
      view: 'ssheet-suggest',
      css: 'webix_ssheet_suggest',
      autowidth: !0,
      template: function (e) {
        var t = '';
        return (
          e.icon &&
            (t +=
              "<span class='webix_ssheet_button_icon webix_ssheet_icon ssi-" +
              e.icon +
              "'></span> "),
          (t += e.value || webix.i18n.spreadsheet.menus[e.id] || e.id)
        );
      },
      data: e,
      on: {
        onItemClick: function (e) {
          var t = this.config.master;
          if (t) {
            var n = webix.$$(t).getTopParentView(),
              r = [this.getItem(e)];
            if (webix.$$(t).config.area) {
              var i = n.$$('cells').getSelectArea();
              i && (r = r.concat([i.start, i.end]));
            }
            n.callEvent('onCommand', r);
          }
        },
      },
    };
  }
  function pt(e, t, n) {
    return (n = n ? e._mData.getPage(n) : e._mPage)
      .serialize(t)
      .map(function (e) {
        var t = e[2].value;
        return null === t && (t = ''), [++e[0], ++e[1], t, e[2].style || '', e[2].type];
      })
      .filter(function (e) {
        return e[2] || 0 === e[2] || e[3];
      });
  }
  webix.protoUI(
    {
      name: 'live-editor',
      $cssName: 'texthighlight',
      $init: function (e) {
        var r = this,
          o = this.getTopParentView();
        (e.suggest = {
          width: 250,
          view: 'suggest-formula',
          data: e.suggestData,
          template: function (e) {
            return e.pos ? e.id : e.value;
          },
          body: {
            template: function (e) {
              return 0 == e.id.indexOf('$range_')
                ? '<span class="webix_ssheet_left">'
                    .concat(e.value, '</span><span class="webix_ssheet_range webix_ssheet_right">')
                    .concat(e.pos, '</span>')
                : e.value;
            },
          },
          on: {
            onBeforeShow: function () {
              var t = this,
                n = this.getList(),
                e = n.find(function (e) {
                  return 0 == e.id.indexOf('$range_');
                });
              e &&
                e.forEach(function (e) {
                  return n.remove(e.id);
                });
              var r = o.ranges.serialize(o.getActiveSheet()).map(function (e) {
                  return { id: '$range_' + e[0], value: e[0], pos: e[1], global: e[2] };
                }),
                i = r.filter(function (e) {
                  return !e.global;
                });
              r
                .filter(function (e) {
                  return e.global;
                })
                .forEach(function (t) {
                  i.find(function (e) {
                    return e.value == t.value;
                  }) || i.push(t);
                }),
                i.forEach(function (e) {
                  return n.add(e);
                }),
                n.filter(function (e) {
                  return t.config.filter.apply(t, [e, t.getMasterValue()]);
                }),
                n.sort('value', 'asc', 'string');
            },
          },
        }),
          (e.highlight = this.highlight),
          (this._highlightedCells = {}),
          (this.$view.className += ' webix_ssheet_formula'),
          this.attachEvent('onKeyPress', function (e, t) {
            if ((delete r._update_range, 13 == e)) {
              if (300 < new Date() - (r._last_value_set || 0)) {
                var n = r.config.activeCell;
                r.showActiveSheet(!0), r.updateCellValue(n), r.getInputNode().blur();
              }
              webix.html.preventEvent(t);
            } else
              27 == e &&
                (r.showActiveSheet(),
                webix.delay(function () {
                  var e = o.getSelectedId(),
                    t = r.getCellValue(e.row, e.column);
                  r.getValue() == t ? o.$$('cells').refresh(e.row) : r.setValue(t),
                    delete o.$handleSelection,
                    webix.UIManager.setFocus(o.$$('cells'));
                }));
          }),
          this.attachEvent('onAfterRender', function () {
            var t = this;
            webix.eventRemove(this.keydownEv),
              (this.keydownEv = webix.event(this.getInputNode(), 'keydown', function (e) {
                t.endEdit(e);
              }));
          });
      },
      highlight: function (e) {
        var t = '',
          n = this.getTopParentView(),
          r = webix.template.escape;
        for (var i in this._highlightedCells) {
          var o = this._highlightedCells[i];
          this.changeCellCss(o[0], o[1], o[2], !0);
        }
        if (((this._highlightedCells = {}), e && '=' == e[0]))
          for (
            var a = st(e, n, null, this._activeMath), s = n.getActiveSheet(), l = 1, u = 0;
            u < a.length;
            u++
          )
            if (u % 2 == 0) t += r(a[u]);
            else {
              var c = webix.isArray(a[u]),
                f = c ? this.prepareSheet(a[u][0], a[u][2]) : '',
                h = this._activeMath,
                d = !(c || (h && h != s)),
                v = at(c ? a[u][1] : a[u]),
                g = c ? f + a[u][1] : a[u],
                p = c && !nt(a[u][1]);
              if (p || d || (c && a[u][0] == s)) {
                var m = void 0;
                if ((':' == a[u + 1] && a[u + 2]) || p) {
                  var w = void 0,
                    b = void 0;
                  if (p) {
                    var x = a[u][3].split(':');
                    (v = at(x[0])), (w = at(x[1]));
                  } else
                    (w = at(webix.isArray(a[u + 2]) ? a[u + 2][1] : a[u + 2])),
                      (b = webix.isArray(a[u + 2]) ? f + a[u + 2][1] : a[u + 2]),
                      (u += 2);
                  (m = this.setColor(v[0], v[1], w[0], w[1], l)),
                    (t += '<span class="webix_ssheet_highlight_color_'
                      .concat(m || l, '">')
                      .concat(p ? g : g + ':' + b, '</span>'));
                } else {
                  if (a[u - 1] && ':' == a[u - 1][a[u - 1].length - 1]) {
                    t += g;
                    continue;
                  }
                  (m = this.setColor(v[0], v[1], v[0], v[1], l)),
                    (t += '<span class="webix_ssheet_highlight_color_'
                      .concat(m || l, '">')
                      .concat(g, '</span>'));
                }
                m || (l += 7 == l ? -6 : 1);
              } else t += g;
            }
        else t = r(e);
        return (
          n.$$('cells').refresh(),
          document.activeElement == this.getInputNode() && this.paintValue(),
          t
        );
      },
      showActiveSheet: function (e) {
        var t = this.getTopParentView(),
          n = t._table;
        if (this._activeMath) {
          if (this._activeMath != t.getActiveSheet()) {
            var r = this.config.activeCell;
            this.define({ activeCell: null }),
              t.showSheet(this._activeMath),
              webix.delay(function () {
                n.select(r.row + (e ? 1 : 0), r.column);
              });
          }
          delete this._activeMath;
        } else
          e &&
            webix.delay(function () {
              n.moveSelection('down');
            });
      },
      changeCellCss: function (e, t, n, r) {
        for (var i = 'webix_ssheet_highlight_background_'.concat(n), o = e.start; o <= e.end; o++)
          for (var a = t.start; a <= t.end; a++)
            this.getTopParentView().$$('cells')[r ? 'removeCellCss' : 'addCellCss'](o, a, i, !0);
      },
      endEdit: function (e) {
        9 == (e.which || e.keyCode) &&
          (webix.html.preventEvent(e),
          this.getInputNode().blur(),
          this.updateCellValue(),
          this.getTopParentView()._table.moveSelection(e.shiftKey ? 'left' : 'right'));
      },
      paintValue: function () {
        var e = this.getTopParentView();
        if (!this._activeMath || this._activeMath == e.getActiveSheet()) {
          var t = this.config.activeCell,
            n = e._table.getItemNode(t);
          t &&
            n &&
            (n.innerHTML = '<div>'.concat(webix.template.escape(this.getValue()), '</div>'));
        }
      },
      updateCellValue: function (e) {
        var t = this.getValue(),
          n = this.getTopParentView();
        (e = e || this.config.activeCell)
          ? t !== n.getCellValue(e.row, e.column) &&
            ((this.config.value = t), n.setCellValue(e.row, e.column, t), n.refresh())
          : this.setValue('');
        delete n.$handleSelection;
      },
      $setValueHere: function (e) {
        this.setValueHere(e);
      },
      setValueHere: function (e) {
        this._last_value_set = new Date();
        var t = this.getValue();
        if (t && '=' === t.charAt(0)) {
          var n = this.getInputNode().selectionStart,
            r = t.substring(0, n),
            i = t.substring(n);
          '(' == r[r.length - 1] && (r = r.substring(0, r.length - 1)),
            (r = r.substring(0, nt(r, !0)));
          var o = 0 == e.indexOf('$range_');
          o && (e = e.substr(7)),
            (r += e + (o || '(' == i[0] ? '' : '(')),
            this.setValue(r + i),
            this.getInputNode().setSelectionRange(r.length, r.length);
        }
      },
      expectOperator: function (e) {
        var t = this.getValue();
        if ('=' == t[0]) {
          for (var n = e ? t.length : this.getInputNode().selectionStart; ' ' == t[n - 1]; ) n--;
          return t[n - 1] && t[n - 1].match(/[+&\-/*=(:,]/);
        }
      },
      setRange: function (e, t) {
        var n,
          r,
          i = this.getInputNode().selectionStart,
          o = this.getValue();
        t && (t = this._update_range && i == this._update_range.pos + this._update_range.len);
        var a = t ? this._update_range.pos : i;
        (n = o.substring(0, a) + e),
          (r = o.substring(i)),
          (this._update_range = { pos: a, len: e.length }),
          this.setValue(n + r);
      },
      prepareSheet: function (e, t) {
        return e
          ? ((webix.isUndefined(t) ? -1 != e.indexOf(' ') : t) ? "'".concat(e, "'") : e) + '!'
          : '';
      },
      prepareArea: function (e, t) {
        return { start: Math.min(e, t), end: Math.max(e, t) };
      },
      setColor: function (e, t, n, r, i) {
        var o = this.prepareArea(e, n),
          a = this.prepareArea(t, r),
          s = [o.start, o.end, a.start, a.end].join(','),
          l = this._highlightedCells[s];
        if (l) return l[2];
        (this._highlightedCells[s] = [o, a, i]), this.changeCellCss(o, a, i);
      },
      getCellValue: function (e, t) {
        var n = this.getTopParentView(),
          r = n.getCellValue(e, t);
        'date' == ht(n, e, t) && '=' != r[0] && (r = Qe(n, e, t)(x(r)));
        return r;
      },
    },
    webix.ui.texthighlight
  ),
    webix.protoUI(
      {
        name: 'ssheet-separator',
        defaults: { css: 'webix_ssheet_toolbar_spacer', template: ' ', width: 1, borderless: !0 },
      },
      webix.ui.view
    ),
    webix.protoUI(
      {
        name: 'sheets',
        defaults: {
          layout: 'x',
          borderless: !0,
          css: 'ssheet_list_sheets',
          select: !0,
          drag: 'order',
          dragscroll: 'x',
          scroll: !1,
        },
      },
      webix.EditAbility,
      webix.ui.list
    ),
    webix.protoUI(
      {
        $cssName: 'toggle',
        name: 'ssheet-toggle',
        toggle: function () {
          var e = this.getValue();
          e && e != this.config.offValue
            ? (this.config.value = this.config.offValue || !1)
            : (this.config.value = this.config.onValue || !0);
          var t = this.getValue();
          this.$setValue(t), this.callEvent('onChange', [t, e, 'user']);
        },
        $setValue: function (e) {
          e == this.config.offValue ? (e = !1) : e == this.config.onValue && (e = !0),
            webix.ui.toggle.prototype.$setValue.call(this, e);
        },
        getValue: function () {
          var e = this.config,
            t = e.value;
          return t && t != e.offValue ? e.onValue || !0 : e.offValue || !1;
        },
        defaults: {
          template: function (e, t) {
            var n = !0 === e.value || e.value == e.onValue ? ' webix_pressed' : '',
              r = t.$renderInput(e, t);
            return (
              "<div class='webix_el_box" +
              n +
              "' style='width:" +
              e.awidth +
              'px; height:' +
              e.aheight +
              "px'>" +
              r +
              '</div>'
            );
          },
        },
      },
      webix.ui.toggle
    ),
    webix.protoUI(
      {
        name: 'ssheet-toggle-silent',
        $cssName: 'toggle',
        $allowsClear: !1,
        setValue: function () {
          this.blockEvent(),
            webix.ui.toggle.prototype.setValue.apply(this, arguments),
            this.unblockEvent();
        },
      },
      webix.ui.toggle
    ),
    webix.protoUI(
      {
        name: 'ssheet-bar-title',
        defaults: { borderless: !0 },
        $init: function () {
          this.$view.className += ' webix_ssheet_subbar_title';
        },
      },
      webix.ui.template
    ),
    webix.protoUI(
      {
        name: 'ssheet-button',
        $cssName: 'button',
        defaults: { type: 'htmlbutton', width: 40 },
        $init: function (e) {
          var t = e.arrow ? ' webix_ssheet_button_menu' : '',
            n = e.label ? '' : ' webix_ssheet_icon_only';
          if (((this.$view.className += ' webix_ssheet_button' + t + n), e.label || e.icon)) {
            var r = e.icon || e.name,
              i = e.label || '';
            if (e.arrow)
              i +=
                "<span class='webix_ssheet_button_icon webix_ssheet_icon_arrow webix_icon wxi-menu-down' style='right:" +
                webix.skin.$active.inputSpacing / 2 +
                "px;'></span>";
            (e.label =
              "<span class='webix_ssheet_button_icon webix_ssheet_icon ssi-" +
              r +
              "'></span> " +
              i),
              (e.tooltip = webix.i18n.spreadsheet.tooltips[e.name] || '');
          }
          e.options && !e.popup && (e.popup = gt(e.options));
        },
      },
      webix.ui.button
    ),
    webix.protoUI(
      {
        name: 'ssheet-button-icon-top',
        $cssName: 'button',
        defaults: { type: 'htmlbutton', width: 70, height: 70 },
        $init: function (e) {
          if (((this.$view.className += ' ssheet_button_icon_top'), e.label)) {
            var t = e.icon || e.name || '',
              n = e.label;
            (e.label =
              "<span class='webix_ssheet_button_icon webix_ssheet_icon ssi-" +
              t +
              "'></span><br/>"),
              (e.label += "<span class='ssheet_button_icon_top_text'>" + n + '</span>'),
              e.arrow &&
                (e.label +=
                  "<br/><span class='ssheet_button_icon_top_arrow webix_icon wxi-menu-down'></span>"),
              (e.tooltip = webix.i18n.spreadsheet.tooltips[e.name] || '');
          }
          e.options && !e.popup && (e.popup = gt(e.options));
        },
      },
      webix.ui.button
    ),
    webix.protoUI(
      {
        name: 'multicheckbox',
        defaults: { padding: 0, type: 'clean', borderless: !0, elementsConfig: { labelWidth: 0 } },
        $init: function (e) {
          (e.rows = [{ height: 1e-6 }]),
            this.$ready.push(function () {
              this._initOnChange();
            });
        },
        _initOnChange: function () {
          this.attachEvent('onChange', function (e) {
            var t = this.$eventSource.config.name;
            if ((this.blockEvent(), '$all' == t)) {
              for (var n in this.elements) this.elements[n].setValue(e);
              e || this._getCheckboxes()[0].setValue(1);
            } else {
              var r = this.getValue(!0);
              if (
                webix.isArray(r) &&
                (!r.length ||
                  !ve(r, function (e) {
                    return !e.$hiddenSheet;
                  }))
              )
                ve(this._getCheckboxes(), function (e) {
                  return !e.config.$hiddenSheet;
                }).setValue(1);
              this.elements.$all.setValue(!0 === this.getValue(!0) ? 1 : 0);
            }
            this.unblockEvent();
          });
        },
        setValue: function (e) {
          if (((this.elements = {}), (this._count = e.length), 1 < e.length)) {
            var t = [],
              n = [];
            e.forEach(function (e) {
              var t = '<span class="webix_icon wxi-eye'.concat(
                e.hidden ? '-slash' : '',
                '"></span>'
              );
              n.push({
                view: 'checkbox',
                labelRight: t + e.name,
                name: e.name,
                value: e.active,
                $hiddenSheet: e.hidden,
              });
            });
            var r = n.length * webix.skin.$active.inputHeight,
              i = 400 < r;
            t.push({ view: 'scrollview', body: { rows: n }, scroll: i, height: i ? 400 : r }),
              t.push({ template: "<div class='ss_sep_line'></div>", height: 10 }),
              t.push({
                view: 'checkbox',
                labelRight: webix.i18n.spreadsheet.labels['export-all-sheets'],
                name: '$all',
                value: 0,
              }),
              webix.ui(t, this);
          } else 1 < this.getChildViews().length && webix.ui([{ height: 1e-6 }], this);
        },
        getValue: function (e) {
          for (var t = this._getCheckboxes(), n = [], r = 0; r < t.length; r++)
            if (t[r].getValue()) {
              var i = t[r].config;
              n.push(e ? i : i.name);
            }
          return n.length == this._count || n;
        },
        _getCheckboxes: function () {
          var e = this.queryView('scrollview');
          return e ? e.getBody().getChildViews() : [];
        },
      },
      webix.ui.form
    ),
    webix.protoUI(
      {
        name: 'formlist',
        defaults: { paddingY: 5, height: 120 },
        $init: function (e) {
          var t = this;
          e.cols = [
            { css: 'webix_inp_label', template: e.label, width: e.labelWidth, borderless: !0 },
            {
              view: 'list',
              data: e.data,
              css: e.css,
              template: e.template,
              select: !0,
              scroll: !1,
              borderless: !0,
              on: {
                onSelectChange: function () {
                  t.getParentView().callEvent('onChange', []);
                },
              },
            },
          ];
        },
        setValue: function (e) {
          this.getChildViews()[1].select(e);
        },
        getValue: function () {
          return this.getChildViews()[1].getSelectedId();
        },
        refresh: function () {
          this.getChildViews()[1].refresh();
        },
        focus: function () {},
      },
      webix.ui.layout
    ),
    webix.protoUI(
      {
        name: 'ssheet-ui',
        defaults: {
          move: !0,
          css: 'webix_shadow_none webix_ssheet_ui',
          head: !1,
          resize: !0,
          toFront: !0,
          minWidth: 50,
          minHeight: 200,
          escHide: !1,
          autofit: !1,
        },
        $init: function () {
          this.$view.setAttribute('webixignore', '1'),
            this.$ready.push(function () {
              webix.UIManager.addHotKey('delete', webix.bind(this._removeView, this)),
                webix.UIManager.addHotKey('backspace', webix.bind(this._removeView, this)),
                this.getMenu();
            }),
            this.attachEvent('onDestruct', function () {
              webix.eventRemove(this._clickEv), this._menu.destructor();
            });
        },
        move_setter: function (e) {
          return e && webix.DragControl.addDrag(this.$view, this), e;
        },
        $dragPos: function (e, t) {
          return this.callEvent('onViewMove', [e, t]), e;
        },
        $dragCreate: function (e, t) {
          var n = t.target;
          if (
            n.getAttribute &&
            !n.getAttribute('webix_disable_drag') &&
            !n.getAttribute('webixignore')
          ) {
            this.getMenu().hide();
            var r = webix.html.offset(e),
              i = webix.html.pos(t),
              o = webix.html.offset(e.parentNode),
              a = webix.$$(this.config.master).getScrollState();
            return (
              (webix.DragControl.top = r.y - i.y - o.y),
              (webix.DragControl.left = r.x - i.x - o.x + a.x),
              webix.toNode(this.$view)
            );
          }
        },
        $dragDestroy: function (e, t) {
          var n = (this.config.left = parseInt(t.style.left, 10)),
            r = (this.config.top = parseInt(t.style.top, 10));
          (webix.DragControl.top = webix.DragControl.left = 0),
            this.callEvent('onViewMoveEnd', [n, r]);
        },
        getMenu: function () {
          var t = this,
            e = webix.i18n.spreadsheet.labels;
          if (!this._menu) {
            var n = [
              {
                value: e['export-view'],
                submenu: [
                  { id: 'pdf', value: e['export-view-pdf'] },
                  { id: 'png', value: e['export-view-png'] },
                  { id: 'excel', value: e['export-view-excel'] },
                ],
              },
            ];
            webix.$$(this.config.master).getTopParentView().config.readonly ||
              (n = [{ id: 'edit', value: e['edit-view'] }].concat(m(n), [
                { id: 'del', value: e['remove-view'] },
              ])),
              (this._menu = webix.ui({
                view: 'contextmenu',
                submenuConfig: { externalUI: this.config.id },
                data: n,
                on: {
                  onMenuItemClick: function (e) {
                    return t._menuActions(e);
                  },
                  onBeforeShow: function () {
                    return t._toggleExcel();
                  },
                },
              }));
            var r = webix.html.create('span', {
              class: 'webix_ssheet_view_menu webix_icon wxi-dots',
            });
            (this._clickEv = webix.event(r, 'click', function () {
              t._menu.isVisible() ? t._menu.hide() : t._menu.show(r);
            })),
              this.$view.firstChild.appendChild(r);
          }
          return this._menu;
        },
        _menuActions: function (e) {
          switch (e) {
            case 'del':
              this.callEvent('onViewRemove', []);
              break;
            case 'edit':
              this.callEvent('onViewEdit', []);
              break;
            case 'pdf':
              webix.toPDF(this.getBody(), { display: 'image' });
              break;
            case 'png':
              webix.toPNG(this.getBody());
              break;
            case 'excel':
              webix.toExcel(this.getBody(), { header: !1 });
          }
        },
        _toggleExcel: function () {
          var e = this.getBody();
          e.data && e.data.pull
            ? this._menu.showMenuItem('excel')
            : this._menu.hideMenuItem('excel');
        },
        _removeView: function (e) {
          e && e.getTopParentView() == this && this.callEvent('onViewRemove', []);
        },
      },
      webix.ui.window
    ),
    webix.protoUI(
      {
        name: 'ssheet-series',
        $init: function (e) {
          var t = this;
          (this.hidden = {}),
            (e.rows = [
              {
                view: 'scrollview',
                borderless: !0,
                body: {
                  view: 'accordion',
                  css: 'webix_ssheet_accordion',
                  margin: webix.skin.$active.layoutMargin.form,
                  multi: !0,
                  type: 'clean',
                  rows: [this.getSectionConfig()],
                },
                on: {
                  onAfterScroll: function () {
                    webix.callEvent('onClick', []);
                  },
                },
              },
              {
                view: 'button',
                label: webix.i18n.spreadsheet.labels['add-line'],
                click: function () {
                  t.addSection();
                },
              },
            ]);
        },
        getSectionConfig: function (e) {
          var t = this,
            r = this,
            i = webix.i18n.spreadsheet.labels,
            o = "<span class='webix_icon webix_ssheet_series_icon wxi-trash'></span>",
            n = webix.skin.$active.dataPadding - 2;
          return {
            view: 'accordionitem',
            header: ''
              .concat(i['chart-item'], ' ')
              .concat(e ? e + 1 : 1, ' ')
              .concat(o),
            body: {
              view: 'form',
              padding: n,
              elementsConfig: { labelWidth: 180 },
              on: {
                onChange: function () {
                  t.callEvent('onChange', []);
                },
              },
              elements: [
                {
                  view: 'text',
                  label: i['chart-range'],
                  name: 'range',
                  range: !0,
                  on: {
                    onChange: function (e, t) {
                      var n = e.toUpperCase();
                      e != n && (this.blockEvent(), this.setValue(n), this.unblockEvent()),
                        r.callEvent('onRangeChange', [n, t]);
                    },
                  },
                },
                {
                  view: 'ssheet-colorpicker',
                  label: i['chart-series-color'],
                  name: 'color',
                  hidden: this.hidden.color,
                },
                { view: 'checkbox', label: i['chart-tooltip'], name: 'tooltip' },
                {
                  view: 'checkbox',
                  label: i['chart-label'],
                  name: 'label',
                  hidden: this.hidden.label,
                },
                {
                  view: 'richselect',
                  label: i['chart-markers'],
                  value: 'square',
                  name: 'marker',
                  hidden: this.hidden.marker,
                  suggest: {
                    view: 'ssheet-form-suggest',
                    data: [
                      { id: 'square', value: i['chart-markers-square'] },
                      { id: 'triangle', value: i['chart-markers-triangle'] },
                      { id: 'diamond', value: i['chart-markers-diamond'] },
                      { id: 'round', value: i['chart-markers-round'] },
                    ],
                  },
                },
              ],
            },
            onClick: {
              'wxi-trash': function () {
                var e = this.getParentView();
                e.removeView(this);
                for (var t = e.getChildViews(), n = 0; n < t.length; n++)
                  t[n].define({
                    header: ''
                      .concat(i['chart-item'], ' ')
                      .concat(n + 1, ' ')
                      .concat(o),
                  }),
                    t[n].refresh();
                return r.callEvent('onChange', []), !1;
              },
            },
          };
        },
        addSection: function () {
          var e = this.getLayout(),
            t = e.getChildViews().length,
            n = e.addView(this.getSectionConfig(t));
          webix.$$(n).queryView({ name: 'range' }).focus();
        },
        setValue: function (e) {
          e = e || [];
          var t = this.getLayout().getChildViews(),
            n = t.length;
          if (n > e.length)
            for (var r = n; r > e.length; r--) this.getLayout().removeView(t[r - 1]);
          else if (e.length > n) for (var i = e.length; n < i; i--) this.addSection();
          for (var o = 0; o < t.length; o++) {
            var a = t[o].getChildViews()[0],
              s = a.queryView({ name: 'range' });
            s.blockEvent(), a.setValues(e[o]), s.unblockEvent();
          }
        },
        setSubValue: function (e, t) {
          e.blockEvent(), e.setValue(t), e.unblockEvent();
        },
        getLayout: function () {
          return this.queryView('scrollview').getBody();
        },
        hideSubviews: function (e, t) {
          (this.hidden[e] = !t),
            this.queryView({ name: e }, 'all').forEach(function (e) {
              t ? e.show() : e.hide();
            });
        },
        getValue: function () {
          var t = [];
          return (
            this.getLayout()
              .getChildViews()
              .forEach(function (e) {
                t.push(e.getChildViews()[0].getValues());
              }),
            t
          );
        },
      },
      webix.ui.layout
    ),
    webix.protoUI(
      {
        name: 'ssheet-toolbar-scrollview',
        $getSize: function () {
          var e = webix.ui.scrollview.prototype.$getSize.apply(this, arguments),
            t = this.getBody().$getSize(0, 0),
            n = 0;
          return (
            this.config.scroll
              ? (n = webix.env.scrollSize)
              : (this.$view.style['overflow-x'] = 'hidden'),
            (e[2] = e[3] = t[2] + n),
            e
          );
        },
        $setSize: function (e, t) {
          var n = this,
            r = this.getBody().$getSize(0, 0),
            i = this.config.scroll,
            o = e < r[0] && 'x';
          if (o != i)
            return (
              this.define({ scroll: o }),
              webix.delay(function () {
                n.resize();
              })
            );
          webix.ui.scrollview.prototype.$setSize.apply(this, [e, t]);
        },
      },
      webix.ui.scrollview
    );
  var mt = Object.freeze({
      init: function Ba(o) {
        o.attachEvent('onDataParse', function (e) {
          return (function r(e, t) {
            var n = t.table || { frozenColumns: 0, frozenRows: 0 };
            (e._frozenColumns = e._frozenRows = 0),
              n &&
                (webix.isUndefined(n.frozenColumns) || e.freezeColumns(n.frozenColumns),
                webix.isUndefined(n.frozenRows) || e.freezeRows(n.frozenRows)),
              t.sizes && e.$$('cells').define('fixedRowHeight', !1);
          })(o, e);
        }),
          o.attachEvent('onDataSerialize', function (e, t) {
            return (function a(e, t, n) {
              var r = !n || !1 !== n.math,
                i = e.$$('cells').getState(),
                o = i.ids.concat(i.hidden);
              o.splice(o.indexOf('rowId'), 1),
                (t.data = pt(e, r)),
                webix.extend(t.table, {
                  frozenColumns: e._frozenColumns || 0,
                  frozenRows: e._frozenRows || 0,
                });
            })(o, e, t);
          }),
          o.attachEvent('onUndo', function (e, t, n, r) {
            'value' == e &&
              (function i(e, t, n, r) {
                e.setCellValue(t, n, r);
              })(o, t, n, r);
          });
      },
      getSheetData: pt,
    }),
    wt = ['rename-sheet', 'remove-sheet', 'copy-sheet', 'hide-sheet'],
    bt = {
      'remove-sheet': function (e) {
        return (function t(e) {
          e.confirm({ text: webix.i18n.spreadsheet.labels['sheet-remove-confirm'] }).then(
            function () {
              zt(e, e._activeSheet);
            }
          );
        })(e);
      },
      'rename-sheet': function (e) {
        return At(e);
      },
      'new-sheet': function (e) {
        return Vt(e);
      },
      'copy-sheet': function (e) {
        return (function t(e) {
          Vt(e, e.serialize());
        })(e);
      },
      'hide-sheet': function (e) {
        return Et(e, e._activeSheet, 'hidden');
      },
    };
  function xt(t) {
    t.attachEvent('onComponentInit', function () {
      return (function e(t) {
        Tt(t),
          t.attachEvent('onAfterSheetShow', function (e) {
            return (function n(e, t) {
              e.$$('sheets') && (e.$$('sheets').select(t), e.$$('sheets').showItem(t));
            })(t, e);
          }),
          t.attachEvent('onCommand', function (e) {
            bt[e.id] && bt[e.id](this);
          }),
          t.$$('sheets') &&
            (t.$$('sheets').data.attachEvent('onStoreUpdated', function () {
              $t(t), St(t);
            }),
            t.$$('sheets').attachEvent(
              'onAfterRender',
              webix.once(function () {
                webix.delay(function () {
                  return $t(t);
                });
              })
            ),
            t.$$('sheets').attachEvent('onAfterScroll', function () {
              return St(t);
            }),
            t.$$('sheets').attachEvent('onAfterDrop', function (e) {
              return (function o(e, t, n) {
                for (var r in e._sheets)
                  if (e._sheets[r].name == t) {
                    var i = e._sheets.splice(r, 1);
                    e._sheets.splice(n, 0, i[0]);
                    break;
                  }
              })(t, e.start, e.index);
            }),
            t.$$('sheets').attachEvent('onAfterEditStop', function (e) {
              return Dt(t, e.old, e.value);
            }));
      })(t);
    });
  }
  var _t = [0.5, 0.75, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2, 3, 4];
  function yt(r) {
    var e = webix.i18n.spreadsheet.tooltips,
      t = r.config.readonly,
      n = r.config.sheetTabWidth,
      i = 'auto' == n ? r.defaults.sheetTabWidth : n,
      o = {
        view: 'toolbar',
        id: 'bottom-toolbar',
        css: 'webix_ssheet_bottom_toolbar webix_layout_toolbar',
        paddingY: 0,
        height: 34,
        elements: [
          {
            hidden: t,
            padding: { top: 2, bottom: 2, left: 4 },
            cols: [
              {
                view: 'icon',
                icon: 'wxi-plus',
                width: 30,
                id: 'add-sheet',
                click: function () {
                  return Vt(r);
                },
                tooltip: webix.i18n.spreadsheet.tooltips['add-sheet'],
              },
              {
                view: 'icon',
                icon: 'wxi-dots',
                width: 30,
                id: 'show-sheet',
                popup: (function a(n) {
                  return {
                    view: 'popup',
                    css: 'webix_ssheet_suggest',
                    width: 125,
                    body: {
                      view: 'list',
                      select: !0,
                      css: 'webix_ssheet_show_list',
                      template: "<span class='webix_icon wxi-#icon#'></span>#id#",
                      on: {
                        onAfterSelect: function (e) {
                          Et(n, e, 'visible'), n.showSheet(e), this.getParentView().hide();
                        },
                      },
                      maxHeight: 200,
                      autoheight: !0,
                    },
                    on: {
                      onShow: function () {
                        this.getBody().showItem(n.getActiveSheet());
                      },
                      onBeforeShow: function () {
                        var e = n._sheets
                            .filter(function (e) {
                              return 'veryHidden' != e.state;
                            })
                            .map(function (e) {
                              return {
                                id: e.name,
                                icon: 'hidden' == e.state ? 'eye-slash' : 'eye',
                              };
                            }),
                          t = this.getBody();
                        t.clearAll(), t.parse(e), t.select(n.getActiveSheet());
                      },
                    },
                  };
                })(r),
                tooltip: webix.i18n.spreadsheet.tooltips['show-sheet'],
              },
            ],
          },
          {
            id: 'sheets',
            view: 'sheets',
            maxWidth: 5 * i,
            minWidth: i,
            editable: !t,
            editaction: 'dblclick',
            editor: 'text',
            editValue: 'value',
            type: {
              width: n,
              height: 32,
              template: function (e) {
                return (
                  "<div style='" +
                  (t ? 'width: 100%;padding-right:9px;' : 'width:calc(100% - 20px);') +
                  "'>" +
                  e.value +
                  '</div>' +
                  (t
                    ? ''
                    : "<div class='webix_input_icon wxi-menu-down webix_ssheet_sheet_arrow'></div>")
                );
              },
              css: 'ssheet_order_sheets',
            },
            onClick: {
              webix_ssheet_sheet_arrow: function (e, t) {
                !(function o(t, e, n) {
                  t.$sheetMenu ||
                    ((t.$sheetMenu = webix.ui(
                      (function i(e) {
                        for (var t = [], n = 0; n < wt.length; n++)
                          t.push({
                            id: wt[n],
                            value: webix.i18n.spreadsheet.menus[wt[n]] || wt[n],
                          });
                        var r = { view: 'ssheet-suggest', data: t };
                        return e.callEvent('onViewInit', ['sheet-menu', r]), r;
                      })(t)
                    )),
                    t._destroy_with_me.push(t.$sheetMenu),
                    t.$sheetMenu.attachEvent('onItemClick', function (e) {
                      return (function n(e, t) {
                        e.$sheetMenu.data.getMark(t, 'webix_disabled') ||
                          (bt[t] ? bt[t](e) : e.callEvent('onCommand', [{ id: t }]));
                      })(t, e);
                    }));
                  var r = 1 == t.$$('sheets').count();
                  t.$sheetMenu.getItem('remove-sheet') &&
                    t.$sheetMenu[r ? 'disableItem' : 'enableItem']('remove-sheet');
                  t.$sheetMenu.getItem('hide-sheet') &&
                    t.$sheetMenu[r ? 'disableItem' : 'enableItem']('hide-sheet');
                  t.callEvent('onBeforeSheetMenu', [n]) && t.$sheetMenu.show(e);
                })(r, e, t);
              },
            },
            on: {
              onItemClick: function (e) {
                e != r._activeSheet && r.showSheet(e);
              },
            },
          },
          {
            view: 'button',
            type: 'htmlbutton',
            width: 34,
            id: 'prev-sheet',
            disabled: !0,
            hidden: !0,
            label: "<span class='webix_icon wxi-menu-left'></span>",
            batch: 'pager',
            click: function () {
              Ct(r, -1);
            },
          },
          {
            view: 'button',
            type: 'htmlbutton',
            width: 34,
            id: 'next-sheet',
            hidden: !0,
            label: "<span class='webix_icon wxi-menu-right'></span>",
            batch: 'pager',
            click: function () {
              Ct(r, 1);
            },
          },
          { gravity: 1e-6 },
          {
            view: 'ssheet-zoom',
            numbers: _t,
            value: 1,
            width: 108,
            tooltip: e.scale,
            id: 'zoom',
            on: {
              onChange: function (e, t, n) {
                'user' == n && r.zoom(e);
              },
            },
          },
        ],
      };
    return r.callEvent('onViewInit', ['bottom-toolbar', o]), o;
  }
  function Ct(e, t) {
    var n = e.$$('sheets'),
      r = e.config.sheetTabWidth;
    'auto' == r && (r = e.defaults.sheetTabWidth), n.scrollTo(n.getScrollState().x + t * r, 0);
  }
  function St(e) {
    var t = e.$$('sheets'),
      n = t.getScrollState().x;
    if (0 == n) e.$$('prev-sheet').disable();
    else if ((e.$$('prev-sheet').enable(), t.$view.scrollWidth - n == t.$width))
      return e.$$('next-sheet').disable();
    e.$$('next-sheet').enable();
  }
  function $t(e) {
    var t = e.$$('sheets');
    e.$$('bottom-toolbar').showBatch('pager', t.$width != t.$view.scrollWidth);
  }
  function Et(e, t, n) {
    var r = Ft(e, t);
    if (n != r.state && ('visible' != n || r.state)) {
      if ('visible' != n) {
        var i = Mt(e);
        if (1 == i.length && i[0] === r) return;
        t == e._activeSheet && It(e, t);
      }
      (r.state = n), kt(e), e.callEvent('onSheetStateChange', [t, n]);
    }
  }
  function kt(n) {
    var e = n.$$('sheets');
    e &&
      e.filter(function (e) {
        var t = Ft(n, e.id).state;
        return 'hidden' != t && 'veryHidden' != t;
      });
  }
  function Vt(t, e, n, r) {
    var i, o;
    return (
      (o =
        -1 <
        (i = ge(t._sheets, function (e) {
          return e.name == t._activeSheet;
        }))
          ? i + 1
          : t._sheets.length),
      (n &&
        !ve(t._sheets, function (e) {
          return e.name == n;
        })) ||
        (n = (function a(e) {
          var t = e._sheets.length + 1;
          for (; Ft(e, webix.i18n.spreadsheet.labels.sheet + t); ) t++;
          return webix.i18n.spreadsheet.labels.sheet + t;
        })(t)),
      (e = e || { data: [] }),
      t._sheets.splice(o, 0, { name: n, content: e }),
      t.$$('sheets') && t.$$('sheets').add({ id: n, value: n }, o),
      t._mData.addPage(n),
      Rt(t, n, e, t.config.prepareData),
      !1 !== r && t.showSheet(n),
      t.callEvent('onSheetAdd', [n]),
      n
    );
  }
  function At(e, t) {
    t || (t = e._activeSheet), e.$$('sheets').edit(t);
  }
  function Mt(e) {
    return e._sheets.filter(function (e) {
      return 'hidden' != e.state && 'veryHidden' != e.state;
    });
  }
  function It(e, t) {
    var n = Mt(e),
      r = ge(n, function (e) {
        return e.name == t;
      }),
      i = r - 1;
    n[i] || (i = 0), n.splice(r, 1), e.showSheet(n[i].name);
  }
  function zt(e, t) {
    if (1 < e._sheets.length) {
      var n = Mt(e);
      if (1 == n.length && n[0] === Ft(e, t)) return;
      e._activeSheet == t && It(e, t);
      var r = ge(e._sheets, function (e) {
        return e.name == t;
      });
      e._sheets.splice(r, 1),
        e._mData.removePage(t),
        e.$$('sheets') && (e.$$('sheets').remove(t), e.$$('sheets').refresh()),
        e.callEvent('onSheetRemove', [t]);
    }
  }
  function Dt(e, t, n) {
    if (t != n) {
      for (var r = 1; !n || Ft(e, n); ) (n = webix.i18n.spreadsheet.labels.sheet + r), r++;
      n = n.replace(/[*?:[\]\\/]/g, '').substring(0, 31);
      var i = Ft(e, t),
        o = e.$$('sheets');
      if (((i.name = n), e._activeSheet == t && (e._activeSheet = n), o))
        (o.getItem(t).value = n), o.data.changeId(t, n), o.refresh(n);
      e._mData.renamePage(t, n), e.callEvent('onSheetRename', [t, n]);
    }
  }
  function Rt(i, o, a, s) {
    i.ranges.parse(a.ranges, o), webix.extend(a, { styles: [], formats: [], editors: [] });
    var e = i._mData.getPage(o),
      t = a.data.map(function (e) {
        var t = webix.isUndefined(e[2]) || null === e[2];
        if (s) {
          if (t) e[2] = '';
          else {
            var n = /^=link\(/i;
            'string' == typeof e[2] && n.test(e[2]) && (e[2] = e[2].replace(n, '=HYPERLINK('));
          }
          var r = ut(i, a, e);
          (e[2] = r.value), (e[3] = e[3] || ''), (e[4] = r.type), Ot(e, a);
        } else if (t) throw 'unsupported value in '.concat(A(o), '!').concat(y[e[0]]).concat(e[1]);
        return [
          e[0] - 1,
          e[1] - 1,
          {
            value: e[2],
            type: e[4],
            style: e[3],
            $format: Ye({ fmt: Je(a, e) }, 'string') ? 1 : 0,
          },
        ];
      });
    e.parse(t, !0);
  }
  function Ot(t, e, n) {
    var r = 'date' == t[4];
    if (r || n) {
      var i = 'string' == typeof t[2],
        o = n && i && /^=hyperlink\(/i.test(t[2]),
        a = t[3]
          ? ve(e.styles, function (e) {
              return e[0] == t[3];
            })
          : null,
        s = a ? ue(a[1]) : {};
      if ((r && (!a || !s.format)) || o) {
        var l = {};
        o
          ? ((t[3] = 'wss_link' + (a ? '_' + t[3] : '')),
            (l = { color: '#0000ff', underline: 'underline' }))
          : i && /^=time\(/i.test(t[2])
            ? ((t[3] = 'wss_load_time' + (a ? '_' + t[3] : '')),
              (l.format = t[3] + '_fmt'),
              e.formats.push([l.format, webix.i18n.spreadsheet.formats.timeFormat]))
            : ((t[3] = 'wss_load_date' + (a ? '_' + t[3] : '')), (l.format = 'date')),
          ve(e.styles, function (e) {
            return e[0] == t[3];
          }) || e.styles.push([t[3], le({ props: webix.extend(s, l, !0) })]);
      }
    }
  }
  function Tt(r, e, i) {
    e || (e = { data: [] }),
      e.sheets || (e = Nt(e)),
      (r._activeSheet = ''),
      (r._sheets = e.sheets),
      (r._mData = new t({ strict: r.config.strict })),
      e.sheets.forEach(function (e) {
        r._mData.addPage(e.name);
      }),
      e.sheets.forEach(function (e) {
        var t = e.content,
          n = e.name;
        Rt(r, n, t, i);
      }),
      (function o(e, t) {
        var n = e.$$('sheets');
        if (n) {
          n.clearAll();
          var r = [];
          t.sheets.forEach(function (e) {
            r.push({ id: e.name, value: e.name });
          }),
            n.parse(r),
            kt(e);
        }
      })(r, e),
      Pt(r, Mt(r)[0].name);
  }
  function Nt(e) {
    return { sheets: [{ name: webix.i18n.spreadsheet.labels.sheet + 1, content: e }] };
  }
  function Pt(e, t) {
    if (t != e._activeSheet && e.callEvent('onBeforeSheetShow', [t])) {
      e._activeSheet && (Ft(e, e._activeSheet).content = e.serialize()), (e._activeSheet = t);
      var n = Ft(e, t).content;
      (e._mPage = e._mData.getPage(t)), Bt(e, n), e.callEvent('onAfterSheetShow', [t]);
    }
  }
  function Ft(e, t) {
    return ve(e._sheets, function (e) {
      return e.name == t;
    });
  }
  function Ut(e, t) {
    return 'hidden' != (t = Ft(e, t)).state && 'veryHidden' != t.state;
  }
  function Bt(e, t) {
    var n = T(pe(pt(e), t.spans, e.config.rowCount, e.config.columnCount), 2),
      r = n[0],
      i = n[1];
    (r == e.config.rowCount && i == e.config.columnCount) ||
      ((e.config.rowCount = r), (e.config.columnCount = i), e._resetTable()),
      E(i),
      e.callEvent('onReset', []),
      (e._loading_data = !0),
      e.callEvent('onDataParse', [t]),
      (e._loading_data = !1),
      e._table.refresh(),
      e.config.bottombar && e.$$('sheets').refresh();
  }
  function Lt(e, t, n) {
    for (
      var r = [],
        i = e.$$('cells'),
        o = i.getState().order,
        a = i.data.order,
        s = n || e._zoom,
        l = i.config.columnWidth,
        u = i.config.rowHeight,
        c = 1;
      c < o.length;
      c++
    ) {
      var f = Math.ceil(i.getColumnConfig(o[c]).width / s);
      f && f != l && r.push([0, c, f]);
    }
    for (var h = 0; h < a.length; h++) {
      var d = Math.ceil(i.getItem(a[h]).$height / s);
      d && d != u && r.push([1 * a[h], 0, d]);
    }
    t.sizes = r;
  }
  function Ht(e, t) {
    var n = 1;
    t.table && t.table.zoom && (n = t.table.zoom);
    for (
      var r = e.$$('cells'), i = r.config.columnWidth, o = r.config.rowHeight, a = 1;
      a <= e.config.rowCount;
      a++
    ) {
      e.$$('cells').getItem(a).$height = o * n;
    }
    var s = ('contrast' == webix.skin.$name || 'flat' == webix.skin.$name ? 24 : 20) * n,
      l = e.getColumn('rowId');
    (l.width = 40 * n), (l.header[0].height = s);
    for (var u = 1; u <= e.config.columnCount; u++) {
      var c = e.getColumn(u);
      (c.header[0].height = s), (c.width = i * n);
    }
    if (t.sizes)
      for (var f = 0; f < t.sizes.length; f++) {
        var h = t.sizes[f];
        if (1 * h[0] != 0) {
          var d = e.$$('cells').getItem(h[0]);
          d && (d.$height = h[2] * n);
        } else {
          var v = e.getColumn(h[1]);
          v && (v.width = h[2] * n);
        }
      }
    e.refresh(!0);
  }
  function jt(e, t) {
    var n = { table: { zoom: e._zoom } };
    Lt(e, n, t), Ht(e, n);
  }
  function Wt(u, c, e) {
    if (!u._loading_data) {
      var t = K(u, { row: c, column: e });
      if (t && t.props.wrap) {
        var f = u._table,
          n = f.getItem(c),
          h = n.$height || f.config.rowHeight;
        f.eachColumn(function (e, t) {
          var n = K(u, { row: c, column: e });
          if (n && n.props && 'wrap' === n.props.wrap) {
            var r,
              i = this.getText(c, e),
              o = t.width,
              a = f.getSpan(c, e);
            if (a) {
              var s = f.getSpanNode({ row: a[0], column: a[1] });
              (o = s.offsetWidth), (r = s.offsetHeight);
            }
            (u.getCellEditor(c, e) || u.getCellFilter(c, e)) && (o += 20);
            var l = oe(u, i, n.id, o).height;
            r && (l = l <= r ? 0 : l - r + h), (h = Math.max(h, l));
          }
        }),
          (n.$height = h);
      }
    }
  }
  var qt = Object.freeze({
      init: function La(i) {
        if (i.config.resizeCell) {
          var e = i.$$('cells');
          e.define('resizeRow', { headerOnly: !0, size: 10 }),
            e.define('resizeColumn', { headerOnly: !0, size: 10 }),
            e.define('fixedRowHeight', !1),
            e.attachEvent('onRowResize', function (e) {
              i.$$('cells').refreshSelectArea(),
                w(i, 'sizes', {
                  row: e,
                  column: 0,
                  size: i.$$('cells').getItem(e).$height,
                  page: i.getActiveSheet(),
                });
            }),
            e.attachEvent('onColumnResize', function (e) {
              i.$$('cells').refreshSelectArea(),
                w(i, 'sizes', {
                  row: 0,
                  column: e,
                  size: i.getColumn(e).width,
                  page: i.getActiveSheet(),
                });
            }),
            i.attachEvent('onUndo', function (e, t, n, r) {
              ('c-resize' != e && 'r-resize' != e) ||
                (function o(e, t, n, r) {
                  var i = e.$$('cells');
                  t
                    ? ((i.getItem(t).$height = r),
                      w(e, 'sizes', { row: t, column: 0, size: r, page: e.getActiveSheet() }))
                    : i.setColumnWidth(n, r),
                    i.refreshSelectArea();
                })(i, t, n, r);
            });
        }
        i.attachEvent('onDataParse', function (e) {
          Ht(i, e);
        }),
          i.attachEvent('onDataSerialize', function (e) {
            Lt(i, e);
          }),
          i.attachEvent('onAction', function (e, t) {
            'before-grid-change' == e &&
              (function p(e, t, n, r, i) {
                var o,
                  a = r.sizes,
                  s = [];
                if (n) {
                  for (o = a.length - 1; 0 <= o; o--) {
                    var l = T(a[o], 3),
                      u = l[0],
                      c = l[1],
                      f = l[2];
                    if (u && 'row' == t && u >= i.row) {
                      if (n < 0 && u < i.row - n) continue;
                      s.push([1 * u + n, c, f]);
                    } else if (c && 'column' == t && c >= i.column) {
                      if (n < 0 && c < i.column - n) continue;
                      s.push([u, 1 * c + n, f]);
                    } else s.push(a[o]);
                  }
                  if (0 < n)
                    if ('column' == t)
                      for (
                        var h = function (t) {
                            var e = ve(a, function (e) {
                              return e[1] == i.column + t;
                            });
                            e && s.push([0, i.column + t, e[2]]);
                          },
                          d = 0;
                        d < n;
                        d++
                      )
                        h(d);
                    else
                      for (
                        var v = function (t) {
                            var e = ve(a, function (e) {
                              return e[0] == i.row + t;
                            });
                            e && s.push([i.row + t, 0, e[2]]);
                          },
                          g = 0;
                        g < n;
                        g++
                      )
                        v(g);
                  r.sizes = s;
                }
              })(0, t.name, t.inc, t.data, t.start);
          }),
          i.attachEvent('onBeforeStyleChange', function (e, t, n, r) {
            !r ||
              'wrap' !== r.props.wrap ||
              (n && n.props.wrap == r.props.wrap) ||
              delete i._table.getItem(e).$height;
          }),
          i.attachEvent('onStyleChange', function (e, t) {
            return Wt(i, e, t);
          }),
          i.attachEvent('onCellChange', function (e, t, n, r) {
            r == i.getActiveSheet() && Wt(i, e, t);
          });
      },
      load: Ht,
      zoomSizes: jt,
    }),
    Xt = {};
  function Gt(e, t, n) {
    var r = e.$$('cells'),
      i = e._zoom || 1;
    if (
      (('in' != t && 'out' != t) || (t = Zt(i, 'in' == t ? 1 : -1, _t)),
      (e._zoom = t),
      r.define({ minColumnWidth: 40 * t }),
      e.$$('zoom') && e.$$('zoom').setValue(t),
      t != i)
    ) {
      var o = webix.skin.$active.fontSize * t,
        a = 'contrast' == webix.skin.$name || 'flat' == webix.skin.$name ? 24 : 20,
        s = 'webix_ssheet_zoom_' + t.toString().replace('.', '_');
      (r.$view.className = r.$view.className.replace(/ webix_ssheet_zoom_\w+/, '')),
        r.define({ css: s }),
        n || (jt(e, i), Y(e), e.callEvent('onZoom', [t, i])),
        Xt[s] ||
          1 == t ||
          ((Xt[s] = 1),
          webix.html.addStyle(
            '\n\t\t\t\t.'
              .concat(s, ' .webix_hcell, .')
              .concat(s, ' .webix_cell{\n\t\t\t\t\tfont-size: ')
              .concat(o, 'px;\n\t\t\t\t}\n\n\t\t\t\t.')
              .concat(s, ' .sheet_column_0 .webix_cell{\n\t\t\t\t\tpadding: 0 ')
              .concat(12 * t, 'px;\n\t\t\t\t}\n\n\t\t\t\t.')
              .concat(
                s,
                '.webix_ssheet_table .webix_hs_left .webix_hcell.webix_first:before{\n\t\t\t\t\tright: '
              )
              .concat(4 * t, 'px;\n\t\t\t\t\tbottom: ')
              .concat(4 * t, 'px;\n\t\t\t\t\tborder-top-width: ')
              .concat((a - 8) * t, 'px;\n\t\t\t\t\tborder-right-width: ')
              .concat((a - 8) * t, 'px;\n\t\t\t\t}\n\n\t\t\t\t.')
              .concat(s, ' .webix_cell{\n\t\t\t\t\tpadding: ')
              .concat(2 * t, 'px 0px;\n\t\t\t\t}\n\n\t\t\t\t.')
              .concat(s, ' .webix_cell div:first-child{\n\t\t\t\t\tmargin: 0 ')
              .concat(12 * t, 'px;\n\t\t\t\t}\n\t\t\t')
          ),
          webix.html.addStyle(
            '\n\t\t\t\t.'
              .concat(s, ' .webix_cell.ss_filter, .')
              .concat(s, ' .webix_cell.ss_editor{\n\t\t\t\t\tpadding-right: ')
              .concat(16 * t, 'px;\n\t\t\t\t}\n\t\t\t\t.')
              .concat(s, ' .ssheet_filter_sign, .')
              .concat(s, ' .webix_cell.ss_editor:after{\n\t\t\t\t\tfont-size: ')
              .concat(20 * t, 'px;\n\t\t\t\t\tright: ')
              .concat(6 * t, 'px;\n\t\t\t\t}\n\t\t\t\t.')
              .concat(s, ' .webix_cell.ss_filter.ss_editor:after{\n\t\t\t\t\tright: ')
              .concat(28 * t, 'px;\n\t\t\t\t}\n\t\t\t\t.')
              .concat(s, ' .webix_cell.ss_filter.ss_editor{\n\t\t\t\t\tpadding-right: ')
              .concat(36 * t, 'px;\n\t\t\t\t}\n\t\t\t\t.')
              .concat(s, ' .webix_lock:before{\n\t\t\t\t\tfont-size: ')
              .concat(o, 'px;\n\t\t\t\t}\n\t\t\t\t.')
              .concat(s, ' .ssheet_commented_sign:before{\n\t\t\t\t\tborder-top-width: ')
              .concat(8 * t, 'px;\n\t\t\t\t\tborder-left-width: ')
              .concat(8 * t, 'px;\n\t\t\t\t}\n\t\t\t')
          ));
    }
  }
  function Yt(e, t) {
    t.table = { zoom: e._zoom };
  }
  function Kt(e, t) {
    var n = 1;
    t.table && t.table.zoom && (n = t.table.zoom), Gt(e, n, !0);
  }
  function Zt(e, t, n) {
    var r,
      i = n.indexOf(e);
    if (-1 != i) return n[i + t] || e;
    for (var o = 0; o < n.length; o++)
      if (n[o] > e) {
        if (t < 0 && -1 == --o) return e;
        r = n[o];
        break;
      }
    return t < 0 && !r && (r = n[n.length - 1]), r || e;
  }
  var Qt = Object.freeze({
    init: function Ha(i) {
      i.attachEvent('onUndo', function (e, t, n, r) {
        'zoom' == e && Gt(i, r);
      }),
        i.attachEvent('onDataSerialize', function (e) {
          return Yt(i, e);
        }),
        i.attachEvent('onDataParse', function (e) {
          return Kt(i, e);
        });
    },
    zoom: Gt,
    serialize: Yt,
    load: Kt,
    getNext: Zt,
  });
  webix.protoUI(
    {
      name: 'ssheet-zoom',
      $cssName: 'counter webix_ssheet_zoom',
      $init: function () {
        var e = this;
        this.attachEvent('onAfterRender', function () {
          e.$setValue(e.config.value),
            (e.getInputNode().readOnly = !0),
            webix.event(e.$view.firstChild, 'keydown', function (e) {
              return webix.html.preventEvent(e);
            });
        });
      },
      $setValue: function (e) {
        this.getInputNode().value = parseInt(100 * e, 10) + '%';
      },
      shift: function (e, t) {
        var n = Zt(this.config.value, e, this.config.numbers);
        this.setValue(n, t);
      },
    },
    webix.ui.counter
  ),
    (webix.editors.excel_date = webix.extend(
      {
        createPopup: function () {
          var e = webix.editors.excel_date;
          if (!e.popup) {
            var t = webix.ui({
              view: 'popup',
              body: {
                view: 'calendar',
                icons: !0,
                timepicker: !0,
                on: {
                  onChange: function (e) {
                    (e = e[0]),
                      (this.getParentView()._last_input_target.value = e ? r(e) : ''),
                      webix.callEvent('onEditEnd', []);
                  },
                },
              },
              on: {
                onEnter: function () {
                  webix.callEvent('onEditEnd', []);
                },
              },
            });
            e.popup = t.config.id;
          }
          return e.popup;
        },
        render: function () {
          var e = this,
            t = webix.html.create('div', { class: 'webix_dt_editor' }, "<input type='text'>");
          return (
            (this.popup = this.createPopup()),
            webix.event(t.firstChild, 'click', function () {
              return e.getPopup().show(t);
            }),
            t
          );
        },
        getPopup: function () {
          return webix.$$(this.popup);
        },
        showPopup: function () {
          var e = this.getInputNode(),
            t = this.getPopup();
          (t._last_input_target = e), t.show(e), e.setAttribute('aria-expanded', 'true');
        },
        updateCalendar: function (e) {
          var t = this.getPopup().getBody();
          t.blockEvent(), t.setValue(e), t.unblockEvent();
        },
        afterRender: function () {
          this.showPopup();
        },
        setValue: function (e) {
          (e = '' === e || isNaN(1 * e) ? new Date() : x(e)), this.updateCalendar(e);
          var t = Qe(
            webix.$$(this.config.node).queryView(function (e) {
              return 'spreadsheet' === e.name;
            }, 'parent'),
            this.config.row.id,
            this.config.id
          );
          this.getInputNode().value = t(e);
        },
        getValue: function () {
          var e = this.getInputNode().value;
          return this.getPopup().hide(), e;
        },
      },
      webix.editors.text
    )),
    (webix.editors.ss_richselect = webix.extend(
      {
        getFormat: function (e) {
          var t,
            n = this.getInputNode();
          return e && n.exists(e) && (t = n.getItem(e)), t && t.format;
        },
        popupInit: function (e) {
          webix.editors.richselect.popupInit.apply(this, arguments),
            e.getList().define('template', function (e) {
              return e.$value || e.value;
            });
        },
      },
      webix.editors.richselect
    ));
  var Jt = {
    span: function (e) {
      var t = e.$$('cells').getSelectArea();
      if (t)
        if (
          (function a(e, t) {
            var n,
              r,
              i = t.start,
              o = t.end;
            for (n = 1 * i.row; n <= 1 * o.row; n++)
              for (r = 1 * i.column; r <= 1 * o.column; r++)
                if (e.$$('cells').getSpan(n, r)) return !0;
            return !1;
          })(e, t)
        )
          e.splitCell();
        else {
          for (var n = [], r = t.start.row; r <= t.end.row; r++) {
            for (var i = t.start.column; i <= t.end.column; i++) {
              var o = e.getCellValue(r, i);
              if ((o && n.push(o), 1 < n.length)) break;
            }
            if (1 < n.length) break;
          }
          1 < n.length
            ? e
                .confirm({ text: webix.i18n.spreadsheet.labels['merge-cell-confirm'] })
                .then(function () {
                  return e.combineCells();
                })
            : e.combineCells();
        }
    },
    undo: function (e) {
      return e.undo();
    },
    redo: function (e) {
      return e.redo();
    },
    'hide-gridlines': function (e) {
      return e.hideGridlines('toggle');
    },
    'hide-headers': function (e) {
      return e.hideHeaders('toggle');
    },
    'freeze-columns': function (e) {
      return e.freezeColumns();
    },
    'freeze-rows': function (e) {
      return e.freezeRows();
    },
    'increase-decimals': function (e) {
      return Fe(e, 1);
    },
    'decrease-decimals': function (e) {
      return Fe(e, -1);
    },
    'increase-indent': function (e) {
      return e.callEvent('onStyleSet', ['indent', 1]);
    },
    'decrease-indent': function (e) {
      return e.callEvent('onStyleSet', ['indent', -1]);
    },
    'show-formulas': function (e) {
      return e.showFormulas('toggle');
    },
    'print-borders': function (e) {
      return e.showPrintBorders('toggle');
    },
  };
  var en = [
    { id: 'Arial', value: 'Arial' },
    { id: "'Roboto', sans-serif", value: 'Roboto' },
    { id: "'PT Sans', Tahoma", value: 'PT Sans' },
    { id: "'Open Sans', sans-serif", value: 'Open Sans' },
    { id: 'Tahoma', value: 'Tahoma' },
    { id: 'Verdana', value: 'Verdana' },
    { id: 'Calibri, Tahoma', value: 'Calibri' },
  ];
  function tn(e) {
    var t = webix.i18n.spreadsheet.menus,
      n = [
        { id: 'add', group: 'column', value: t['insert-column'] },
        { id: 'del', group: 'column', value: t['delete-column'] },
        { id: 'show', group: 'column', value: t['show-column'], neighbors: !0 },
        { id: 'hide', group: 'column', value: t['hide-column'] },
      ];
    return (
      0 != e.config.resizeCell &&
        n.push({ id: 'resize', group: 'column', value: t['resize-column'] }),
      n
    );
  }
  function nn(e) {
    var t = webix.i18n.spreadsheet.menus,
      n = [
        { id: 'add', group: 'row', value: t['insert-row'] },
        { id: 'del', group: 'row', value: t['delete-row'] },
        { id: 'show', group: 'row', value: t['show-row'], neighbors: !0 },
        { id: 'hide', group: 'row', value: t['hide-row'] },
      ];
    return (
      0 != e.config.resizeCell && n.push({ id: 'resize', group: 'row', value: t['resize-row'] }), n
    );
  }
  function rn() {
    return [
      { id: 'clear-value', value: an('value') },
      { id: 'clear-style', value: an('style') },
      { id: 'clear-conditional-formats', value: an('conditional-formats') },
      { id: 'clear-dropdown-editors', value: an('dropdown-editors') },
      { id: 'clear-comments', value: an('comments') },
      { $template: 'Separator' },
      { id: 'clear-all', value: an('all') },
    ];
  }
  var on = [
    { id: 'no', value: 'no' },
    { id: 'left', value: 'left' },
    { id: 'top', value: 'top' },
    { id: 'right', value: 'right' },
    { id: 'bottom', value: 'bottom' },
    { id: 'all', value: 'all' },
    {
      id: 'outer',
      value: 'outer',
    },
    { id: 'top-bottom', value: 'top-bottom' },
  ];
  function an(e) {
    var t = webix.i18n.spreadsheet.menus;
    return t.clear + ' ' + t['clear-' + e].toLowerCase();
  }
  var sn = {
      'font-weight': 'bold',
      'font-style': 'italic',
      underline: 'underline',
      strike: 'strike',
    },
    ln = {
      button: function (e) {
        return {
          view: 'ssheet-toggle',
          width: e.width || F.width,
          id: e.name,
          name: e.name,
          label: e.label,
          css: e.css || '',
          onValue: sn[e.name],
          offValue: 'normal',
          tooltip: webix.i18n.spreadsheet.tooltips[e.name] || '',
        };
      },
      colorButton: function (e) {
        return {
          view: 'ssheet-color',
          css: e.css,
          name: e.name,
          width: e.width || F.width + 24,
          title:
            "<span class='webix_ssheet_button_icon webix_ssheet_color_button_icon webix_ssheet_icon ssi-" +
            e.name +
            "' ></span>",
          tooltip: webix.i18n.spreadsheet.tooltips[e.name] || '',
        };
      },
      toggleButton: function (e) {
        return {
          view: 'ssheet-toggle-silent',
          width: F.width,
          id: e.name,
          name: e.name,
          label:
            "<span class='webix_ssheet_button_icon webix_ssheet_icon ssi-" +
            (e.icon || e.name) +
            "'></span>",
          tooltip: webix.i18n.spreadsheet.tooltips[e.name] || '',
        };
      },
      iconButton: function (e) {
        var t = webix.copy(e);
        return (
          webix.extend(t, {
            view: 'button',
            width: F.width,
            id: e.name,
            label:
              "<span class='webix_ssheet_button_icon webix_ssheet_icon ssi-" + e.name + "'></span>",
            css: '',
            tooltip:
              webix.i18n.spreadsheet.tooltips[e.name] || webix.i18n.spreadsheet.menus[e.name] || '',
          }),
          e.onValue &&
            webix.extend(
              t,
              { view: 'ssheet-toggle', onValue: e.onValue, offValue: e.offValue },
              !0
            ),
          t
        );
      },
      segmented: function (e) {
        return {
          view: 'segmented',
          name: e.name,
          css: e.css || '',
          width: e.width || F.width + 76,
          options: e.options,
        };
      },
      select: function (e) {
        return (
          webix.extend(e, {
            view: 'richselect',
            id: e.name,
            value: U[e.name],
            suggest: { css: 'webix_ssheet_suggest', padding: 0, data: e.options },
          }),
          (e.tooltip = webix.i18n.spreadsheet.tooltips[e.name] || ''),
          e.popupWidth && ((e.suggest.fitMaster = !1), (e.suggest.width = e.popupWidth)),
          e.popupTemplate && (e.suggest.body = { template: e.popupTemplate }),
          e.popupEvents &&
            ((e.suggest.body = e.suggest.body || {}), (e.suggest.body.on = e.popupEvents)),
          e
        );
      },
      separator: function () {
        return { view: 'ssheet-separator' };
      },
      title: function (e) {
        var t = e.title;
        return (
          0 === t.indexOf('$') && (t = ''),
          {
            template: (t = webix.i18n.spreadsheet.labels[e.title] || t),
            view: 'ssheet-bar-title',
            height: F.titleHeight,
          }
        );
      },
      borders: function (e) {
        return {
          view: 'ssheet-borders',
          width: e.width || F.width + 24,
          data: on,
          id: e.name,
          name: e.name,
          tooltip: webix.i18n.spreadsheet.tooltips[e.name],
        };
      },
      align: function (e) {
        return {
          view: 'ssheet-align',
          value: U[e.name],
          width: e.width || F.width + 24,
          data: e.options,
          name: e.name,
          tooltip: webix.i18n.spreadsheet.tooltips[e.name],
        };
      },
      condFormat: function (e) {
        return { view: 'ssheet-cond-format', width: 40, id: e.name, name: e.name };
      },
    },
    un = {
      'font-family': function () {
        return ln.select({ name: 'font-family', options: en, width: 100, view: 'combo' });
      },
      'font-size': function () {
        return ln.select({
          name: 'font-size',
          options: [
            '8',
            '9',
            '10',
            '11',
            '12',
            '14',
            '15',
            '16',
            '18',
            '20',
            '22',
            '24',
            '28',
            '36',
          ],
          width: 70,
          view: 'text',
          icon: 'wxi-menu-down',
          css: 'webix_ssheet_text',
          on: {
            onItemClick: function () {
              var e = webix.$$(this.config.suggest);
              e.isVisible() || e.show(this.getInputNode());
            },
          },
        });
      },
      'font-weight': function () {
        return ln.button({ name: 'font-weight', label: 'B', css: 'webix_ssheet_bold' });
      },
      'font-style': function () {
        return ln.button({ name: 'font-style', label: 'I', css: 'webix_ssheet_italic' });
      },
      underline: function () {
        return ln.button({ name: 'underline', label: 'U', css: 'webix_ssheet_underline' });
      },
      strike: function () {
        return ln.button({ name: 'strike', label: 'S', css: 'webix_ssheet_strike' });
      },
      color: function () {
        return ln.colorButton({ name: 'color', icon: 'font', css: 'webix_ssheet_color' });
      },
      background: function () {
        return ln.colorButton({
          name: 'background',
          icon: 'paint-brush',
          css: 'webix_ssheet_background',
          width: 70,
        });
      },
      borders: function () {
        return ln.borders({ name: 'borders' });
      },
      'text-align': function () {
        var e = webix.i18n.spreadsheet.tooltips;
        return ln.align({
          name: 'text-align',
          css: 'webix_ssheet_align',
          options: [
            { id: 'left', css: 'webix_ssheet_icon ssi-left', tooltip: e['align-left'] },
            { id: 'center', css: 'webix_ssheet_icon ssi-center', tooltip: e['align-center'] },
            { id: 'right', css: 'webix_ssheet_icon ssi-right', tooltip: e['align-right'] },
          ],
        });
      },
      'vertical-align': function () {
        var e = webix.i18n.spreadsheet.tooltips;
        return ln.align({
          name: 'vertical-align',
          css: 'webix_ssheet_align',
          options: [
            { id: 'top', css: 'webix_ssheet_icon ssi-top', tooltip: e['align-top'] },
            { id: 'middle', css: 'webix_ssheet_icon ssi-middle', tooltip: e['align-middle'] },
            { id: 'bottom', css: 'webix_ssheet_icon ssi-bottom', tooltip: e['align-bottom'] },
          ],
        });
      },
      wrap: function () {
        return ln.iconButton({ name: 'wrap', onValue: 'wrap', offValue: 'nowrap' });
      },
      format: function () {
        return ln.select({
          name: 'format',
          width: 106,
          options: (function t() {
            var e = webix.i18n.spreadsheet.labels;
            return [
              { id: 'common', value: e.common },
              { id: 'price', value: e.currency, example: '98.20' },
              { id: 'int', value: e.number, example: '2120.02' },
              { id: 'percent', value: e.percent, example: '0.5' },
              { id: 'date', value: e.date, example: '45000' },
              { id: 'string', value: e.string, example: '012345' },
              { id: 'custom', value: e['custom-format'] },
            ];
          })(),
          popupWidth: 180,
          popupTemplate: function (e) {
            var t = _e[e.id] ? _e[e.id].getFormat : '',
              n = { css: '' },
              r = t && e.example ? t(e.example, n) : '';
            return (
              e.value +
              (t
                ? "<span class='webix_ssheet_right" +
                  (n.css ? ' ' + n.css : '') +
                  "'>" +
                  r +
                  '</span>'
                : '')
            );
          },
          popupEvents: {
            onItemClick: function (e) {
              'custom' == e && this.getTopParentView().callEvent('onCommand', [{ id: e }]);
            },
          },
        });
      },
      column: function (e) {
        return {
          name: 'column',
          view: 'ssheet-button',
          icon: 'column',
          arrow: !0,
          area: !0,
          width: 58,
          options: tn(e),
        };
      },
      row: function (e) {
        return {
          name: 'row',
          view: 'ssheet-button',
          icon: 'row',
          arrow: !0,
          area: !0,
          width: 58,
          options: nn(e),
        };
      },
      clear: function () {
        return {
          name: 'clear',
          view: 'ssheet-button',
          icon: 'clear-styles',
          arrow: !0,
          area: !0,
          width: 58,
          options: rn(),
        };
      },
      image: function () {
        return {
          name: 'image',
          view: 'ssheet-button',
          icon: 'add-image',
          arrow: !0,
          options: [
            { id: 'add-image-cell', value: webix.i18n.spreadsheet.labels['add-image-cell'] },
            { id: 'add-image-top', value: webix.i18n.spreadsheet.labels['add-image-top'] },
          ],
        };
      },
      graph: function () {
        return {
          name: 'graph',
          view: 'ssheet-button',
          icon: 'add-sparkline',
          arrow: !0,
          options: [
            { id: 'add-sparkline', value: webix.i18n.spreadsheet.labels['add-sparkline'] },
            { id: 'add-chart', value: webix.i18n.spreadsheet.labels['add-chart'] },
          ],
        };
      },
      comment: function () {
        return {
          name: 'comment',
          view: 'ssheet-button',
          icon: 'comments',
          arrow: !0,
          area: !0,
          width: 55,
        };
      },
      'create-filter': function () {
        return ln.toggleButton({ name: 'create-filter' });
      },
      'hide-gridlines': function () {
        return ln.toggleButton({ name: 'hide-gridlines' });
      },
      'hide-headers': function () {
        return ln.toggleButton({ name: 'hide-headers' });
      },
      'show-formulas': function () {
        return ln.toggleButton({ name: 'show-formulas' });
      },
      'print-borders': function () {
        return ln.toggleButton({ name: 'print-borders', icon: 'borders-no' });
      },
    };
  function cn(e) {
    var t = webix.i18n.spreadsheet;
    return t.menus[e] || t.labels[e] || t.tooltips[e] || e;
  }
  function fn(e) {
    var t = (function o() {
        var e,
          t,
          n,
          r = { undo: ['undo', 'redo'], insert: ['add-sparkline', 'add-image', 'add-comment'] },
          i = {};
        for (t in r)
          for (e = i[t] = 0; e < r[t].length; e++)
            (n = webix.html.getTextSize(cn(r[t][e]), 'webix_ssheet_button_measure').width + 7),
              (i[t] = Math.max(n, i[t]));
        return i;
      })(),
      n = F.titleHeight;
    return e
      ? [
          {
            padding: 3,
            margin: 0,
            rows: [
              {
                margin: 2,
                cols: [
                  { $button: 'excel-export' },
                  { $button: 'print' },
                  { $button: 'print-borders' },
                ],
              },
              { template: cn('file'), view: 'ssheet-bar-title', height: n },
            ],
          },
          { view: 'ssheet-separator' },
          {},
        ]
      : [
          {
            padding: 3,
            margin: 0,
            rows: [
              {
                margin: 2,
                cols: [
                  {
                    name: 'sheet',
                    view: 'ssheet-button-icon-top',
                    label: cn('sheet'),
                    arrow: !0,
                    options: [
                      { id: 'new-sheet' },
                      { id: 'copy-sheet' },
                      { id: 'remove-sheet' },
                      { id: 'hide-sheet' },
                    ],
                  },
                  { rows: [{ $button: 'excel-import' }, { $button: 'excel-export' }] },
                  { rows: [{ $button: 'print' }, { $button: 'print-borders' }] },
                ],
              },
              { template: cn('file'), view: 'ssheet-bar-title', height: n, width: 85 },
            ],
          },
          { view: 'ssheet-separator' },
          {
            padding: 3,
            rows: [
              { $button: 'undo', view: 'ssheet-button', label: cn('undo'), width: t.undo },
              { $button: 'redo', view: 'ssheet-button', label: cn('redo'), width: t.undo },
              { template: cn('undo-redo'), view: 'ssheet-bar-title', height: n },
            ],
          },
          { view: 'ssheet-separator' },
          {
            padding: 3,
            rows: [
              {
                margin: 2,
                cols: [
                  {
                    margin: 2,
                    cols: [
                      {
                        $button: 'font-family',
                        width: 4 * (webix.skin.$active.inputHeight + 2) + 6,
                      },
                      { $button: 'font-size' },
                    ],
                  },
                  { $button: 'borders' },
                ],
              },
              {
                margin: 2,
                cols: [
                  {
                    margin: 2,
                    cols: [
                      { $button: 'font-weight' },
                      { $button: 'font-style' },
                      { $button: 'underline' },
                      { $button: 'strike' },
                    ],
                  },
                  { $button: 'background' },
                  { $button: 'color' },
                ],
              },
              { template: cn('font'), view: 'ssheet-bar-title', height: n },
            ],
          },
          { view: 'ssheet-separator' },
          {
            padding: 3,
            rows: [
              {
                margin: 2,
                cols: [
                  {
                    $button: 'text-align',
                  },
                  { $button: 'span' },
                  { $button: 'increase-indent' },
                ],
              },
              {
                margin: 2,
                cols: [
                  { $button: 'vertical-align' },
                  { $button: 'wrap' },
                  { $button: 'decrease-indent' },
                ],
              },
              { template: cn('align'), view: 'ssheet-bar-title', height: n },
            ],
          },
          { view: 'ssheet-separator' },
          {
            padding: 3,
            rows: [
              { $button: 'format' },
              {
                margin: 2,
                cols: [{ $button: 'increase-decimals' }, { $button: 'decrease-decimals' }],
              },
              { template: cn('number'), view: 'ssheet-bar-title', height: n },
            ],
          },
          { view: 'ssheet-separator' },
          {
            padding: 3,
            rows: [
              {
                cols: [
                  { $button: 'sort-asc' },
                  { $button: 'create-filter' },
                  { $button: 'conditional-format' },
                  { $button: 'add-link' },
                  { $button: 'clear' },
                ],
              },
              {
                cols: [
                  { $button: 'sort-desc' },
                  { $button: 'add-range' },
                  { $button: 'lock-cell' },
                  { $button: 'add-dropdown' },
                ],
              },
              { template: cn('edit'), view: 'ssheet-bar-title', height: n },
            ],
          },
          { view: 'ssheet-separator' },
          {
            padding: 3,
            rows: [
              {
                cols: [
                  { $button: 'image', view: 'ssheet-button', label: cn('image'), width: t.insert },
                  {
                    $button: 'add-comment',
                    view: 'ssheet-button',
                    label: cn('comment'),
                    width: t.insert,
                  },
                ],
              },
              { $button: 'graph', view: 'ssheet-button', label: cn('graph'), width: t.insert },
              { template: cn('insert'), view: 'ssheet-bar-title', height: n },
            ],
          },
          { view: 'ssheet-separator' },
          {
            padding: 3,
            rows: [
              {
                cols: [
                  { rows: [{ $button: 'row' }, { $button: 'column' }] },
                  { rows: [{ $button: 'hide-gridlines' }, { $button: 'hide-headers' }] },
                  { rows: [{ $button: 'freeze-rows' }, { $button: 'freeze-columns' }] },
                  { rows: [{ $button: 'show-formulas' }, {}] },
                ],
              },
              { template: cn('view'), view: 'ssheet-bar-title', height: n },
            ],
          },
          { view: 'ssheet-separator' },
          {},
        ];
  }
  var hn = {
    'undo-redo': ['undo', 'redo'],
    font: [
      'font-family',
      'font-size',
      'font-weight',
      'font-style',
      'underline',
      'strike',
      'color',
      'background',
      'borders',
    ],
    align: ['text-align', 'vertical-align', 'wrap', 'span', 'increase-indent', 'decrease-indent'],
    format: ['format'],
  };
  function dn(l) {
    l.attachEvent('onComponentInit', function () {
      return (function e(t) {
        t.attachEvent('onAfterSelect', function (e) {
          return vn(t, e);
        });
      })(l);
    }),
      l.attachEvent('onCommand', function (e) {
        'toolbar-update' == e.id &&
          (e.name
            ? (function i(e, t, n) {
                var r = e.$$('bar').elements[t];
                r && r.setValue(n);
              })(l, e.name, e.value)
            : vn(l, l.getSelectedId(!0)));
      });
    var e = [];
    if (l.config.toolbar) {
      var t = l.config.toolbar;
      'full' == t &&
        ((t = fn(l.config.readonly)),
        webix.isUndefined(l.config.bottombar) && (l.config.bottombar = !0)),
        (e = (function r(i, e) {
          var o = function (e) {
            for (var t = 0; t < e.length; t++) {
              var n = e[t].$button;
              if (n) {
                var r = un[n] ? un[n](i) : ln.iconButton({ name: n });
                webix.extend(e[t], r);
              }
              e[t].rows && o(e[t].rows), e[t].cols && o(e[t].cols);
            }
          };
          return o(e), e;
        })(l, t));
    } else
      e = (function u(e, t) {
        var n,
          r,
          i,
          o = [];
        for (var a in t)
          o.push(
            ((n = e),
            (i = t[(r = a)]),
            {
              rows: [
                {
                  padding: 2,
                  cols: [
                    {
                      margin: 2,
                      cols: (function s(e, t) {
                        for (var n = [], r = 0; r < t.length; r++) {
                          var i = t[r];
                          if ('object' == p(i)) n.push(i);
                          else {
                            var o = un[i] ? un[i](e) : ln.iconButton({ name: i });
                            n.push(o);
                          }
                        }
                        return n;
                      })(n, i),
                    },
                  ],
                },
                ln.title({ title: r }),
              ],
            })
          ),
            o.push(ln.separator());
        return o;
      })(l, l.config.buttons || hn);
    var n = {
      view: webix.env.$customScroll ? 'scrollview' : 'ssheet-toolbar-scrollview',
      scroll: 'x',
      body: {
        view: 'toolbar',
        css: 'webix_ssheet_toolbar webix_layout_toolbar',
        id: 'bar',
        padding: 0,
        elements: e,
        on: {
          onChange: function (e, t, n) {
            if ('user' == n) {
              var r = this.$eventSource,
                i = r.config.name;
              'format' == i && 'common' == e && (e = '');
              var o = 'font-size' == i;
              if ((o || 'font-family' == i) && (!e || (o && isNaN(e)))) return r.setValue(t);
              if (o) {
                var a = Math.floor(400 / 0.75),
                  s = Math.max(1, Math.min(a, e));
                s != e && ((e = s), r.setValue(e)), (e += 'px');
              }
              ('format' == i && 'custom' == e) || l.callEvent('onStyleSet', [i, e]);
            }
          },
          onItemClick: function (e) {
            var t = l.innerId(e);
            Jt[t] ? Jt[t].call(this, l) : l.callEvent('onCommand', [{ id: t }]);
          },
        },
      },
    };
    return l.callEvent('onViewInit', ['toolbar', n]), n;
  }
  function vn(e, t) {
    var n = (function u(e, t) {
      for (
        var n = [
            'font-family',
            'font-size',
            'text-align',
            'vertical-align',
            'format',
            'background',
            'color',
          ],
          r = t[0],
          i = gn(e, r),
          o = 1;
        o < t.length;
        o++
      ) {
        for (var a = gn(e, t[o]), s = n.length - 1; 0 <= s; s--) {
          var l = n[s];
          i[l] != a[l] && (delete i[l], n.splice(s, 1));
        }
        if (!n.length) break;
      }
      return i;
    })(e, t);
    e.$$('bar').setValues(n);
  }
  function gn(e, t) {
    var n = e.$$('cells').getSpan(t.row, t.column);
    if (n) {
      var r = T(n, 2);
      (t.row = r[0]), (t.column = r[1]);
    }
    var i = K(e, t),
      o = i ? webix.copy(i.props) : {};
    for (var a in U) o[a] || (o[a] = U[a]);
    o['font-size'] = o['font-size'].replace('px', '');
    var s = Z(e, t.row, t.column) || 'common';
    return (o.format = Be(s) ? 'custom' : s), o;
  }
  function pn(e, t, n) {
    var r = t.$$('cells').config.columns,
      i = { row: e, column: r['rowId' == r[0].id ? 1 : 0].id },
      o = { row: n || e, column: r[r.length - 1].id };
    i.column && o.column && Cn(i, o, t);
  }
  function mn(e) {
    var t = e.$$('cells').data.order,
      n = e.$$('cells').config.columns,
      r = 'rowId' == n[0].id ? 1 : 0,
      i = { row: t[0], column: n[r].id },
      o = { row: t[t.length - 1], column: n[n.length - 1].id };
    i.column && o.column && Cn(i, o, e);
  }
  function wn(e, t, n) {
    var r = t.$$('cells').data.order;
    Cn({ row: r[0], column: e }, { row: r[r.length - 1], column: n || e }, t);
  }
  function bn(e, t) {
    var n = t.$$('cells').getSelectArea();
    return !!(n && e >= n.start.column && e <= n.end.column);
  }
  function xn(e, t, n) {
    return _n(e, n) && bn(t, n);
  }
  function _n(e, t) {
    var n = t.$$('cells').getSelectArea();
    return !!(n && e >= n.start.row && e <= n.end.row);
  }
  function yn(e, t) {
    var n = t.$$('cells').getSelectArea();
    n
      ? wn(Math.min(n.start.column, n.end.column, e), t, Math.max(n.start.column, n.end.column, e))
      : wn(e, t);
  }
  function Cn(e, t, n) {
    n.$$('cells').addSelectArea(e, t);
  }
  function Sn(s, l) {
    var u = l.$$('cells'),
      c = 25,
      f = u.getColumnConfig(s).width;
    u.eachRow(function (e) {
      var t = u.getSpan(e, s);
      if (!(t && 1 < t[2])) {
        var n = this.getText(e, s),
          r = l.getStyle(e, s),
          i = r ? r.id : '';
        if (n.replace(/<\/?[^>]+(>|$)/g, '')) {
          var o = oe(l, n, i),
            a = l._zoom;
          l.getCellEditor(e, s) && (o.width += 18 * a),
            l.getCellFilter(e, s) && (o.width += 18 * a),
            r && 'wrap' == r.props.wrap && o.width > f && (o.width = f),
            o.width > c && (c = o.width);
        }
      }
    }),
      u.setColumnWidth(s, c);
  }
  function $n(s, l) {
    var u = 25;
    l._table.eachColumn(function (e) {
      if ('rowId' != e) {
        var t = this.getText(s, e),
          n = this.getColumnConfig(e).width,
          r = l._table.getSpan(s, e);
        r && (n = l._table.getSpanNode({ row: r[0], column: r[1] }).offsetWidth);
        var i = l.getStyle(s, e),
          o = i ? i.id : '';
        if (t.replace(/<\/?[^>]+(>|$)/g, '')) {
          var a = oe(l, t, o, n);
          a.height > u && (u = a.height);
        }
      }
    }),
      l._table.setRowHeight(s, u);
  }
  function En(e, t, n) {
    if (n._table.config.header) {
      var r = n._table,
        i = 'webix_highlight',
        o = e.row,
        a = t.row,
        s = e.column,
        l = t.column,
        u = r.config.columns,
        c = u[1].id;
      if (
        ('rowId' == s
          ? s == l
            ? ((e.column = s = c), (t.column = l = u[u.length - 1].id))
            : (e.column = s = c)
          : 'rowId' == l && (t.column = l = c),
        a < o)
      ) {
        var f = [a, o];
        (o = f[0]), (a = f[1]);
      }
      if (l < s) {
        var h = [l, s];
        (s = h[0]), (l = h[1]);
      }
      if (
        (r.eachRow(function (e) {
          e < o || a < e ? r.removeCellCss(e, 'rowId', i, !0) : r.addCellCss(e, 'rowId', i, !0);
        }),
        webix.delay(function () {
          return r.refresh();
        }),
        r.eachColumn(function (e) {
          var t = r.getHeaderNode(e);
          'rowId' != e &&
            t &&
            (e < s || l < e ? webix.html.removeCss(t, i) : webix.html.addCss(t, i, !0));
        }),
        n.$$('navigation'))
      ) {
        var d = '';
        if (s && l) {
          if (!o) {
            var v = r.data.order;
            (o = v[0]), (a = v[v.length - 1]);
          }
          var g = (d = M(o, s, a, l)).split(':');
          g[0] == g[1] && (d = g[0]);
        }
        n.$$('navigation').setValue(d);
      }
    }
  }
  var kn = Object.freeze({
      selectRow: pn,
      selectAll: mn,
      selectColumn: wn,
      isColSelected: bn,
      isCellSelected: xn,
      isRowSelected: _n,
      selectColumns: yn,
      adjustColumn: Sn,
      adjustRow: $n,
      highlightColRow: En,
    }),
    Vn = 'webix_lock';
  function An(n, t, r, i, e, o, a) {
    var s = n.getActiveSheet();
    o || (o = s);
    var l = n.$$('cells');
    if ('object' === p(t) && 'object' === p(r))
      N.set(function () {
        !(function a(e, t, n, r) {
          for (var i = e.row; i <= t.row; i++)
            for (var o = e.column; o <= t.column; o++) n.call(r || this, i, o);
        })(t, r, function (e, t) {
          An(n, e, t, i, !0, o, !0);
        });
      });
    else if (((i = !1 !== i), o == s)) {
      ((n._locks[t] = n._locks[t] || {})[r] = i)
        ? l.addCellCss(t, r, Vn, !0)
        : l.removeCellCss(t, r, Vn, !0);
    } else {
      var u = ve(n._sheets, function (e) {
        return e.name == o;
      });
      if (u) {
        var c = u.content.locked;
        if (c) {
          var f = u.content.locked,
            h = ge(f, function (e) {
              return e[0] == t && e[1] == r;
            });
          i ? -1 == h && f.push([t, r]) : -1 != h && f.splice(h, 1);
        } else !c && i && (u.content.locked = [[t, r]]);
      }
    }
    a || n.callEvent('onAction', ['lock', { row: t, column: r, value: !i, newValue: i }]),
      e || l.refresh();
  }
  function Mn(e, t, n, r) {
    return r && r != e.getActiveSheet()
      ? !(
          !(r = ve(e._sheets, function (e) {
            return e.name == r;
          })) || !r.content.locked
        ) &&
          !!ve(r.content.locked, function (e) {
            return e[0] == t && e[1] == n;
          })
      : (e._locks[t] && e._locks[t][n]) || !1;
  }
  var In = Object.freeze({
    lockCss: Vn,
    init: function ja(i) {
      (i._locks = {}),
        i.attachEvent('onReset', function () {
          return (function t(e) {
            e._locks = {};
          })(i);
        }),
        i.attachEvent('onUndo', function (e, t, n, r) {
          'lock' === e && An(i, t, n, !!r, !0);
        }),
        i.attachEvent('onCommand', function (e) {
          'lock-cell' === e.id &&
            (function r(e) {
              var t = e.$$('cells').getSelectArea();
              if (t) {
                var n = e.isCellLocked(t.start.row, t.start.column);
                e.lockCell(t.start, t.end, !n);
              }
            })(i);
        }),
        i.attachEvent('onAction', function (e, t) {
          'before-grid-change' == e &&
            (function c(e, t, n, r, i) {
              var o = r.locked,
                a = o.length;
              if (n)
                for (; a--; ) {
                  var s = T(o[a], 2),
                    l = s[0],
                    u = s[1];
                  ((l && 'row' == t && l >= i.row) || (u && 'column' == t && u >= i.column)) &&
                    ('row' == t
                      ? l < i.row - n
                        ? o.splice(a, 1)
                        : (o[a][0] = 1 * l + n)
                      : 'column' == t &&
                        (u < i.column - n ? o.splice(a, 1) : (o[a][1] = 1 * u + n)));
                }
            })(0, t.name, t.inc, t.data, t.start);
        });
    },
    lockCell: An,
    isCellLocked: Mn,
    serialize: function Wa(e, t) {
      var n = [];
      for (var r in e._locks) for (var i in e._locks[r]) e._locks[r][i] && n.push([r, i]);
      t.locked = n;
    },
    load: function qa(e, t) {
      var n = t.locked;
      if (n) for (var r = 0; r < n.length; r++) An(e, n[r][0], n[r][1], !0, !0);
    },
  });
  function zn(e, t, n) {
    var r = e.$$('cells').getSpan()[t];
    if (r) return r[n];
  }
  function Dn(e, t) {
    var n = [],
      r = e.$$('cells').getSpan();
    if (r) {
      for (var i in r) {
        var o = r[i];
        for (var a in o) {
          var s = o[a];
          n.push([1 * i, 1 * a, s[0], s[1]]);
        }
      }
      t.spans = n;
    }
    return t;
  }
  function Rn(e, t, n, r, i) {
    if (!(n < 2 && r < 2) && (i || e.callEvent('onBeforeSpan', [t.row, t.column, [n, r]]))) {
      var o = e._mPage.getCell(t.row - 1, t.column - 1),
        a = (o && o.style) || '',
        s = Pn(e, t.row, t.column);
      s && (a += ' ' + s),
        (function c(e, t, n, r) {
          var i,
            o,
            a,
            s = 1 * t.row,
            l = 1 * t.column,
            u = !e.getCellValue(s, l);
          for (i = s; i < s + r; i++)
            for (o = l; o < l + n; o++)
              '' === (a = e.getCellValue(i, o)) ||
                (o == l && i == s) ||
                (u && ((u = !1), e.setCellValue(s, l, a)), e.setCellValue(i, o, ''));
        })(e, t, n, r),
        e.$$('cells').addSpan(t.row, t.column, n, r, null, a),
        i ||
          (e.callEvent('onAfterSpan', [t.row, t.column, [n, r]]),
          w(e, 'spans', { page: e.getActiveSheet(), row: t.row, column: t.column, x: n, y: r }));
    }
  }
  function On(e, t) {
    var n = e.$$('cells').getSpan(t.row, t.column);
    n &&
      e.callEvent('onBeforeSplit', [t.row, t.column, [n[2], n[3]]]) &&
      (e.$$('cells').removeSpan(t.row, t.column),
      e.callEvent('onAfterSplit', [t.row, t.column, [n[2], n[3]]]),
      w(e, 'spans', { row: t.row, column: t.column, x: 0, y: 0 }));
  }
  function Tn(e) {
    var t, n, r, i;
    (r = i = 0), (t = n = Infinity);
    for (var o = 0; o < e.length; o++) {
      var a = 1 * e[o].column,
        s = 1 * e[o].row;
      (t = Math.min(a, t)), (r = Math.max(a, r)), (n = Math.min(s, n)), (i = Math.max(s, i));
    }
    return { cell: { row: n, column: t }, x: r - t + 1, y: i - n + 1 };
  }
  function Nn(e, t, n, r, i) {
    var o = zn(e, t, n);
    o && (i ? -1 == o[3].indexOf(r) && (o[3] += ' ' + r) : (o[3] = o[3].replace(' ' + r, '')));
  }
  function Pn(e, t, n) {
    var r = [];
    return (
      e.getCellEditor(t, n) && r.push('ss_editor'),
      e.getCellFilter(t, n) && r.push('ss_filter'),
      r.join(' ')
    );
  }
  var Fn = {
    'border-right': function (e, t, n, r) {
      return r.end.column == t + n[0] - 1;
    },
    'border-bottom': function (e, t, n, r) {
      return r.end.row == e + n[1] - 1;
    },
  };
  function Un(t, e, n, r, i, o, a) {
    var s = 'row' == e.group ? t[3] : t[2],
      l = 'row' == e.group ? [1 * t[0], 1 * t[0] + t[3] - 1] : [1 * t[1], 1 * t[1] + t[2] - 1],
      u = 'row' == e.group ? [n.row, r.row] : [n.column, r.column],
      c = u[1] - u[0] + 1;
    (u[0] = Math.max(u[0], l[0])), (u[1] = Math.min(u[1], l[1]));
    var f = u[0] == l[0];
    if (u[0] <= u[1]) {
      if (('del' == e.id && (c = -1 * (u[1] - u[0] + 1)), 'del' == e.id && f && -1 * c < s)) {
        var h = ve(o, function (e) {
          return e[0] == t[0] && e[1] == t[1];
        });
        h && a.push(h);
      }
      (f && 'add' == e.id) ||
        ((t[2] = 'column' == e.group ? t[2] + c : t[2]),
        (t[3] = 'row' == e.group ? t[3] + c : t[3]));
    }
    return t;
  }
  function Bn(r, e, t, n, i, o) {
    var a = r._table.getSpan(t, n);
    if (e && e.span) {
      var s = e.span;
      t == 1 * s[0] + o.row &&
        n == 1 * s[1] + o.column &&
        (r._table.mapCells(
          t,
          n,
          s[3],
          s[2],
          function (e, t, n) {
            (a = r._table.getSpan(t, n)) && On(r, { row: a[0], column: a[1] });
          },
          !0
        ),
        Rn(r, { row: t, column: n }, s[2], s[3]),
        1 === i && On(r, { row: e.row, column: e.col }));
    } else a && On(r, { row: a[0], column: a[1] });
  }
  var Ln = Object.freeze({
    init: function Xa(s) {
      s.attachEvent('onStyleChange', function (e, t, n) {
        var r = zn(s, e, t);
        if (r) {
          var i = Pn(s, e, t);
          r[3] = (n ? n.id : '') + (i ? ' ' + i : '');
        }
      }),
        s.attachEvent('onDataParse', function (e) {
          !(function i(e, t) {
            if (t.spans)
              for (var n = 0; n < t.spans.length; n++) {
                var r = t.spans[n];
                Rn(e, { row: r[0], column: r[1] }, 1 * r[2], 1 * r[3], !0);
              }
          })(s, e);
        }),
        s.attachEvent('onDataSerialize', function (e) {
          Dn(s, e);
        }),
        s.attachEvent('onUndo', function (e, t, n, r, i) {
          ('span' != e && 'split' != e) ||
            ('span' == e && (i = !i),
            (function o(e, t, n, r, i) {
              i ? On(e, { row: t, column: n }) : Rn(e, { row: t, column: n }, r[0], r[1]);
            })(s, t, n, r, i));
        }),
        s.attachEvent('onAction', function (e, t) {
          if ('lock' == e && t.page == s.getActiveSheet()) Nn(s, t.row, t.column, Vn, t.newValue);
          else if ('before-grid-change' == e)
            !(function c(e, t, n, r, i) {
              var o = r.spans;
              if (n)
                for (var a = o.length - 1; 0 <= a; a--) {
                  var s = T(o[a], 2),
                    l = s[0],
                    u = s[1];
                  n < 0 &&
                    ('row' == t && l <= i.row - n - 1
                      ? (n = i.row - o[a][0])
                      : 'column' == t && u <= i.column - n - 1 && (n = i.column - o[a][1])),
                    (('row' == t && l >= i.row) || ('column' == t && u >= i.column)) &&
                      ((o[a][0] = 'row' == t ? 1 * l + n : l),
                      (o[a][1] = 'column' == t ? 1 * u + n : u));
                }
            })(0, t.name, t.inc, t.data, t.start);
          else if ('check-borders' == e)
            return (function a(e, t, n, r, i) {
              var o = zn(e, t, n);
              return !(!o || !Fn[i]) && Fn[i](t, n, o, r);
            })(s, t.row, t.column, t.area, t.mode);
        });
    },
    serialize: Dn,
    addSpan: Rn,
    removeSpan: On,
    getRange: Tn,
    setSpanCss: Nn,
    adjustSpan: Un,
    pasteSpan: Bn,
  });
  function Hn(e) {
    return webix.i18n.spreadsheet.labels[e] || e;
  }
  function jn(e) {
    return e && !isNaN(e) && !Ze(e);
  }
  var Wn = {
    number: [
      {
        id: 'greater',
        batch: 'text',
        handler: function (e, t) {
          return '' !== e && 1 * t < 1 * e;
        },
      },
      {
        id: 'less',
        batch: 'text',
        handler: function (e, t) {
          return '' !== e && 1 * e < 1 * t;
        },
      },
      {
        id: 'greaterOrEqual',
        batch: 'text',
        handler: function (e, t) {
          return '' !== e && 1 * t <= 1 * e;
        },
      },
      {
        id: 'lessOrEqual',
        batch: 'text',
        handler: function (e, t) {
          return '' !== e && 1 * e <= 1 * t;
        },
      },
      {
        id: 'equal',
        batch: 'text',
        handler: function (e, t) {
          return e == t;
        },
      },
      {
        id: 'notEqual',
        batch: 'text',
        handler: function (e, t) {
          return e != t;
        },
      },
      {
        id: 'contains',
        batch: 'text',
        handler: function (e, t) {
          return -1 !== e.toString().toLowerCase().indexOf(t.toString().toLowerCase());
        },
      },
      {
        id: 'notContains',
        batch: 'text',
        handler: function (e, t) {
          return -1 === e.toString().toLowerCase().indexOf(t.toString().toLowerCase());
        },
      },
    ],
    text: [
      {
        id: 'contains',
        batch: 'text',
        handler: function (e, t) {
          return -1 !== e.toString().toLowerCase().indexOf(t.toString().toLowerCase());
        },
      },
      {
        id: 'notContains',
        batch: 'text',
        handler: function (e, t) {
          return -1 === e.toString().toLowerCase().indexOf(t.toString().toLowerCase());
        },
      },
      {
        id: 'equal',
        batch: 'text',
        handler: function (e, t) {
          return e.toString().toLowerCase() === t.toString().toLowerCase();
        },
      },
      {
        id: 'notEqual',
        batch: 'text',
        handler: function (e, t) {
          return e.toString().toLowerCase() !== t.toString().toLowerCase();
        },
      },
      {
        id: 'beginsWith',
        batch: 'text',
        handler: function (e, t) {
          return 0 === e.toString().toLowerCase().lastIndexOf(t.toString().toLowerCase(), 0);
        },
      },
      {
        id: 'notBeginsWith',
        batch: 'text',
        handler: function (e, t) {
          return 0 !== e.toString().toLowerCase().lastIndexOf(t.toString().toLowerCase(), 0);
        },
      },
      {
        id: 'endsWith',
        batch: 'text',
        handler: function (e, t) {
          return (
            (e = e.toString()),
            (t = t.toString()),
            -1 !== e.toLowerCase().indexOf(t.toLowerCase(), e.length - t.length)
          );
        },
      },
      {
        id: 'notEndsWith',
        batch: 'text',
        handler: function (e, t) {
          return (
            (e = e.toString()),
            (t = t.toString()),
            -1 === e.toLowerCase().indexOf(t.toLowerCase(), e.length - t.length)
          );
        },
      },
    ],
    date: [
      {
        id: 'greater',
        batch: 'datepicker',
        handler: function (e, t) {
          return jn(e) && t < e;
        },
      },
      {
        id: 'less',
        batch: 'datepicker',
        handler: function (e, t) {
          return jn(e) && e < t;
        },
      },
      {
        id: 'greaterOrEqual',
        batch: 'datepicker',
        handler: function (e, t) {
          return jn(e) && t <= e;
        },
      },
      {
        id: 'lessOrEqual',
        batch: 'datepicker',
        handler: function (e, t) {
          return jn(e) && e <= t;
        },
      },
      {
        id: 'equal',
        batch: 'datepicker',
        handler: function (e, t) {
          return jn(e) && e == t;
        },
      },
      {
        id: 'notEqual',
        batch: 'datepicker',
        handler: function (e, t) {
          return !jn(e) || e != t;
        },
      },
      {
        id: 'between',
        batch: 'daterangepicker',
        handler: function (e, t) {
          return !!jn(e) && (!t.start || e > t.start) && (!t.end || e < t.end);
        },
      },
      {
        id: 'notBetween',
        batch: 'daterangepicker',
        handler: function (e, t) {
          return !!jn(e) && (!t.start || e <= t.start || !t.end || e >= t.end);
        },
      },
    ],
  };
  function qn(e, t) {
    return (
      isNaN(1 * t)
        ? '=' == t.charAt(0) &&
          1 < t.length &&
          null === (t = e._mData.getStore().exec(t.substring(1), e._mPage.getContext())) &&
          (t = '')
        : (t *= 1),
      t
    );
  }
  function Xn(u, c, f, h) {
    var d = '';
    if (!u.conditions._empty) {
      var v = u.conditions.get(c, f);
      if (v) {
        var g = u.$$('cells').getSpan(c, f),
          p = u.getCellValue(c, f, !1);
        p || 0 === p || (p = '');
        var m = ht(u, c, f);
        (m && 'string' != m) || (m = 'text');
        for (
          var e = function (e) {
              var t = p,
                n = v[e][0],
                r = u.conditions.handlers,
                i = void 0,
                o = ['text', m, 'number', 'date'];
              o = o.filter(function (e, t) {
                return o.indexOf(e) == t;
              });
              for (var a = 0; a < o.length; a++) {
                var s = o[a];
                if (
                  (i = ve(r[s], function (e) {
                    return e.id == n;
                  }))
                ) {
                  (i = i.handler), 'text' == s && 'equal' != n && 'notEqual' != n && (t = h);
                  break;
                }
              }
              var l = v[e][1];
              if (
                ((l = webix.isArray(l) ? { start: qn(u, l[0]), end: qn(u, l[1]) } : qn(u, l)),
                !d && i && i(t, l))
              ) {
                if (((d = v[e][2]), !g)) return 'break';
                Nn(u, c, f, v[e][2], !0);
              } else Nn(u, c, f, v[e][2], !1);
            },
            t = v.length - 1;
          0 <= t;
          t--
        ) {
          if ('break' === e(t)) break;
        }
      }
    }
    return d;
  }
  function Gn(e, t, n, r) {
    return (r._empty = !1), e[t] || (e[t] = {}), e[t][n] || (e[t][n] = []), e[t][n];
  }
  function Yn(e) {
    var t = { '>': 'greater', '<': 'less', '=': 'equal', '!=': 'notEqual', '<>': 'between' };
    if (((this._empty = !0), e))
      for (var n = e.length; n--; ) {
        var r = e[n],
          i = Gn(this._pull, r[0], r[1], this);
        (r[2] = t[r[2]] || r[2]), i.push([r[2], r[3], r[4]]);
      }
  }
  function Kn() {
    this._pull = {};
  }
  function Zn(e, t) {
    return e ? (t ? (this._pull[e] ? this._pull[e][t] : null) : this._pull[e]) : this._pull;
  }
  function Qn(e, t) {
    this.get(e, t) && delete this._pull[e][t];
  }
  function Jn() {
    var e,
      t,
      n,
      r,
      i = [];
    for (r in this._pull)
      for (e in this._pull[r])
        for (n = 0; n < this._pull[r][e].length; n++)
          (t = this._pull[r][e][n]), i.push([r, e, t[0], t[1], t[2]]);
    return i;
  }
  function er(e, t) {
    N.set(function () {
      z(t, e, function (e, t) {
        var n = e.conditions.get(t.row, t.column);
        n && nr('remove', t.row, t.column, n, null, e);
      }),
        e.refresh();
    });
  }
  function tr(e, t, n, r, i) {
    var o = t.condition;
    nr('update', n, r, e.conditions.get(n, r) || null, o, e),
      1 === i && nr('remove', t.row, t.col, o, null, e);
  }
  function nr(e, t, n, r, i, o) {
    o.callEvent('onBeforeConditionSet', [t, n, r, i]) &&
      (o.conditions[e].apply(o.conditions, [t, n, i]),
      o.callEvent('onAfterConditionSet', [t, n, r, i]));
  }
  function rr(e, t) {
    var n = t[1];
    return '=' == n[0] && (t[1] = e._mData.getStore().parse(n).source), t;
  }
  var ir = Object.freeze({
    init: function Ga(o) {
      (o.conditions = {
        _empty: !0,
        _pull: {},
        handlers: (function t() {
          var e = webix.copy(Wn);
          return (
            (e.number = e.number.concat([
              {
                id: 'between',
                handler: function (e, t) {
                  return (!t.start || e > t.start) && (!t.end || e < t.end);
                },
              },
              {
                id: 'notBetween',
                handler: function (e, t) {
                  return !t.start || e <= t.start || !t.end || e >= t.end;
                },
              },
            ])),
            e
          );
        })(),
        add: function (e, t, n, r, i) {
          (function a(e, t, n, r, i, o) {
            Gn(this._pull, t, n, this).push(rr(e, [r, i, o]));
          }).apply(this, [o, e, t, n, r, i]);
        },
        update: function (e, t, n) {
          (function i(t, e, n, r) {
            this.get(e, n) || Gn(this._pull, e, n, this),
              r.map(function (e) {
                return rr(t, e);
              }),
              (this._pull[e][n] = r);
          }).apply(this, [o, e, t, n]);
        },
        remove: Qn,
        get: Zn,
        parse: Yn,
        serialize: Jn,
        clear: Kn,
      }),
        o.attachEvent('onConditionSet', function (e) {
          return (function t(r, i) {
            N.set(function () {
              r.eachSelectedCell(function (e) {
                var t = r.conditions.get(e.row, e.column);
                if (t) for (var n = 0; n < t.length; n++) Nn(r, e.row, e.column, t[n][2], !1);
                nr('update', e.row, e.column, t || null, i, r);
              });
            }),
              r.refresh();
          })(o, e);
        }),
        o.attachEvent('onUndo', function (e, t, n, r) {
          'condition' == e &&
            (function i(e, t, n, r) {
              e.conditions.get(t, n) && e.conditions.remove(t, n),
                r && e.conditions.update(t, n, r);
            })(o, t, n, r);
        }),
        o.attachEvent('onDataSerialize', function (e) {
          return (function n(e, t) {
            t.conditions = e.conditions.serialize();
          })(o, e);
        }),
        o.attachEvent('onDataParse', function (e) {
          return (function n(e, t) {
            e.conditions.parse(t.conditions);
          })(o, e);
        }),
        o.attachEvent('onReset', function () {
          return o.conditions.clear();
        }),
        o.attachEvent('onAction', function (e, t) {
          'before-grid-change' == e &&
            (function c(e, t, n, r, i) {
              var o = r.conditions,
                a = o.length;
              if (n)
                for (; a--; ) {
                  var s = T(o[a], 2),
                    l = s[0],
                    u = s[1];
                  (('row' == t && l >= i.row) || ('column' == t && u >= i.column)) &&
                    ('row' == t
                      ? l < i.row - n
                        ? o.splice(a, 1)
                        : (o[a][0] = 1 * l + n)
                      : 'column' == t &&
                        (u < i.column - n ? o.splice(a, 1) : (o[a][1] = 1 * u + n)));
                }
            })(0, t.name, t.inc, t.data, t.start);
        }),
        (function n(e) {
          e.conditions.clear();
        })(o);
    },
    getConditionCss: Xn,
    clearConditionalFormats: er,
    pasteCondition: tr,
    _changeCondition: nr,
  });
  function or(e, t) {
    return (
      t || e.alert({ type: 'alert-error', text: webix.i18n.spreadsheet.labels['error-link'] }), !1
    );
  }
  function ar(e, t, n) {
    try {
      var r,
        i,
        o,
        a,
        s,
        l = t.split('!');
      switch (l.length) {
        case 1:
          l = T(l, 1)[0];
          break;
        case 2:
          var u = T(l, 2);
          if (
            ((s = u[0]),
            (l = u[1]),
            -1 != s.indexOf(' ') && ("'" != s[0] || "'" != s[s.length - 1]))
          )
            return or(e, n);
          break;
        default:
          return or(e, n);
      }
      if (O(l)) {
        var c = T(k(l), 2);
        (r = c[0]), (o = c[1]);
      } else {
        var f = V(t, e);
        if (!f) return or(e, n);
        var h = T(f, 5);
        (r = h[0]), (o = h[1]), (i = h[2]), (a = h[3]), (s = h[4]);
      }
      if (s) {
        if (!Ft(e, (s = s.replaceAll("'", '')))) return or(e, n);
        s != e.getActiveSheet() && e.showSheet(s);
      }
      var d = e.$$('cells');
      return (
        d.showCell(r, o),
        d.addSelectArea({ row: r, column: o }, { row: i || r, column: a || o }),
        !0
      );
    } catch (v) {
      return or(e, n);
    }
  }
  function sr(n, e) {
    n.attachEvent('onComponentInit', function () {
      return (function f(i) {
        var o,
          n,
          a = i._table,
          e = webix.event(document.body, 'pointermove', function (e) {
            'mouse' === e.pointerType &&
              (clearTimeout(t),
              (t = webix.delay(
                function (e) {
                  if (!i.comments._activeComment.editStatus) {
                    var t = a.locate(e),
                      n = i.comments.commentsView && i.comments.commentsView.isVisible();
                    if (t && i.comments.get(t.row, t.column)) {
                      var r = i.comments._activeComment.cell;
                      ((!r || (r.row == t.row && r.column == t.column)) && n) ||
                        i.callEvent('onCommand', [{ id: 'add-comment', cell: t, viewonly: !0 }]);
                    } else
                      n &&
                        !i.comments.commentsView.$view.contains(e.target) &&
                        i.callEvent('onCommentHide', []);
                  }
                },
                !0,
                [e],
                250
              )));
          });
        var t;
        i.config.math && (a.config.editMath = !0);
        function r() {
          var e = a.getSelectedId(!0);
          if (e.length) {
            var t = e[0],
              n = e[e.length - 1] ? e[e.length - 1] : e[0];
            En(t, n, i);
          } else {
            var r = {
              row: 0,
              column: 0,
            };
            En(r, r, i);
          }
        }
        a.attachEvent('onBeforeEditStop', function (e, t) {
          a.$anyKey = !1;
          var n = i.getCellValue(t.row, t.column);
          ('' === n && '' === e.value) ||
            (e.value != n && (i.setCellValue(t.row, t.column, e.value), a.refresh()),
            (e.value = e.old));
        }),
          a.attachEvent('onEnter', function (e) {
            a.getEditor() &&
              webix.delay(function () {
                a.moveSelection('down');
              }),
              webix.html.preventEvent(e);
          }),
          i.attachEvent('onBeforeEditStart', function (e, t) {
            return !i.isCellLocked(e, t);
          }),
          a.attachEvent('onAfterEditStart', function (e) {
            var t = e.row,
              n = e.column,
              r = i.getCellValue(t, n);
            a.$anyKey && ((a.$anyKey = !1), (r = '')), a.getEditor().setValue(r);
          }),
          a.attachEvent('onBeforeEditStart', function (e) {
            return i.callEvent('onBeforeEditStart', [e.row, e.column]);
          }),
          a.attachEvent('onBeforeSelect', function (e) {
            return 'rowId' != e.column;
          }),
          a.attachEvent('onBeforeBlockSelect', function (e, t, n) {
            En(n ? e : webix.copy(e), n ? t : webix.copy(t), i);
          }),
          a.attachEvent('onSelectChange', function () {
            return r();
          }),
          a.attachEvent('onAfterColumnShow', function () {
            webix.delay(function () {
              return r();
            });
          }),
          a.attachEvent('onColumnResize', function () {
            webix.delay(function () {
              return r();
            });
          }),
          webix.event(a.$view.firstChild, 'mousedown', function (e) {
            var t = a.config.resizeColumn,
              n = a.locate(e);
            if (n && n.cind) {
              if (t) {
                var r = a.getColumnConfig(n.column).width,
                  i = webix.html.posRelative(e);
                if (i.x < t.size || r - i.x < t.size + 1) return;
              }
              o = n.cind;
            }
          }),
          webix.event(a.$view.firstChild, 'mousemove', function (e) {
            if (o) {
              var t = a.locate(e);
              t && ((n = t.cind), En({ column: a.columnId(o) }, { column: a.columnId(n || 1) }, i));
            }
          });
        var s = webix.event(document.body, 'mouseup', function () {
          o && (null != n && (wn(a.columnId(o), i, a.columnId(n || 1)), (n = null)), (o = null));
        });
        a.attachEvent('onItemDblClick', function (e) {
          'rowId' === e.column && $n(e.row, i);
        });
        var l = 0;
        a.attachEvent('onHeaderClick', function (e, t) {
          if ('rowId' != e.column) {
            var n = new Date(),
              r = n - l <= 300;
            r ? Sn(e.column, i) : ((l = n), t.shiftKey ? yn(e.column, i) : wn(e.column, i));
          } else mn(i);
        });
        var u = null;
        a.attachEvent('onItemClick', function (e, t) {
          'rowId' === e.column && (t.shiftKey && u ? pn(u, i, e.row) : pn(e.row, i), (u = e.row));
        }),
          i.attachEvent('onReset', function () {
            return ur(i);
          }),
          i.attachEvent('onBeforeSheetShow', function () {
            return a.editStop();
          }),
          a.attachEvent('onBlur', function () {
            webix.delay(
              function () {
                var e = document.activeElement;
                if (!e || 'INPUT' != e.tagName) {
                  var t = webix.UIManager.getFocus(),
                    n =
                      t &&
                      !t.config.saveFocus &&
                      t != a &&
                      t.getTopParentView &&
                      t.getTopParentView() === i;
                  n && webix.UIManager.setFocus(a);
                }
              },
              this,
              [],
              100
            );
          }),
          a.attachEvent('onMoveSelection', function (e, t, n) {
            'rowId' == e.column && 'left' == t && n.ctrl && (e.column = 1);
          }),
          (function c(e) {
            webix.html.addStyle(
              '#' + e._table.$view.id + '.webix_dtable .webix_cell { white-space:nowrap;}'
            );
          })(i),
          i.attachEvent('onDestruct', function () {
            webix.eventRemove(e), webix.eventRemove(s);
          });
      })(n);
    });
    var t = {
      view: 'datatable',
      id: 'cells',
      css: 'webix_ssheet_table webix_data_border wss_' + n.$index,
      headerRowHeight: 'contrast' == webix.skin.$name || 'flat' == webix.skin.$name ? 24 : 20,
      spans: !0,
      leftSplit: 1,
      areaselect: !0,
      minColumnWidth: 40,
      editable: !0,
      editaction: e.liveEditor ? 'custom' : 'dblclick',
      minRowHeight: 1,
      navigation: !0,
      onClick: {
        webix_ssheet_ref: function (e) {
          var t = e.target.getAttribute('data-ref').replaceAll('&#x27;', "'");
          if (ar(n, t)) return !1;
        },
      },
    };
    return e && (t = webix.extend(t, e, !0)), t;
  }
  function lr(e, t, n, r, i, o) {
    var a = e.$$('cells').config.showFormulas && !o,
      s = i.id,
      l = t.id;
    if (!e._mPage) return '';
    var u = e._mPage.getCell(l - 1, s - 1),
      c = u ? u.value : '',
      f = u ? u.format : '',
      h = e.getCellValue(l, s);
    if ((a && (c = h), h != c)) {
      var d = webix.i18n.spreadsheet.table;
      '#REF!' == c ? (c = d['math-ref-error']) : '#ERROR' == c && (c = d['math-error']);
    }
    var v = '',
      g = ('string' == typeof c && '+' == c.trim()[0]) || (!c && 0 !== c) || isNaN(c),
      p = !a && Ye(f, 'date') && Ze(c),
      m = '';
    if (
      (o ||
        ((m += e.comments.get(l, s) ? "<div class='ssheet_commented_sign'></div>" : ''),
        (m += e.getCellFilter(l, s) ? "<div class='ssheet_filter_sign'></div>" : '')),
      !p && ('boolean' == typeof c || !g || Ye(f, 'string')))
    )
      if (f) {
        var w = { css: '' },
          b = Ee(f);
        if (b) {
          var x = b(c, w);
          x != webix.i18n.spreadsheet.table['format-error']
            ? (w.css && (v = 'class="'.concat(w.css, '"')), (c = x))
            : g || (c *= 1);
        }
      } else c *= 1;
    return e._print && !c && 0 !== c
      ? ''
      : ((webix.isUndefined(c) || null === c) && (c = ''),
        '<div '
          .concat(v, '>')
          .concat(c, '</div>')
          .concat(e._print ? '' : m));
  }
  function ur(u) {
    var e = u.$$('cells');
    e.clearAll();
    for (
      var t = u.config.columnCount,
        n = u.config.rowCount,
        r = [
          {
            id: 'rowId',
            header: '',
            width: 40,
            css: 'sheet_column_0',
            template: function (e) {
              return e.id;
            },
          },
        ],
        i = 1;
      i <= t;
      i++
    )
      r.push({
        id: i,
        editor: 'text',
        header: { text: y[i] },
        template: function (e, t, n, r) {
          return lr(u, e, 0, 0, r);
        },
        cssFormat: function (e, t, n, r) {
          var i = cr(u, n, r),
            o = u._mPage.getCell(n - 1, r - 1),
            a = (o && o.style) || '',
            s = Xn(u, n, r, i);
          s && (a += (a ? ' ' : '') + s);
          var l = u._printBorders.$render;
          return (
            l &&
              (l.cols[r] && (a += (a ? ' ' : '') + 'webix_ss_print_border_right'),
              l.rows[n] && (a += (a ? ' ' : '') + 'webix_ss_print_border_bottom')),
            a
          );
        },
      }),
        u.callEvent('onColumnInit', [r[i]]);
    e.refreshColumns(r);
    for (var o = [], a = 1; a <= n; a++) o.push({ id: a });
    e.parse(o);
  }
  function cr(e, t, n) {
    return lr(e, { id: t }, 0, 0, { id: n }, !0).replace(/<[^>]*>/gi, '');
  }
  function fr(i) {
    var o = i.$$('cells'),
      e = webix.env.isMac ? 'command' : 'ctrl';
    if (
      (webix.UIManager.addHotKey(
        e + '-a',
        function () {
          o.getEditor() || mn(i);
        },
        o
      ),
      webix.UIManager.addHotKey(
        e + '-p',
        function (e, t) {
          return (function r(e, t, n) {
            return t.callEvent('onCommand', [{ id: e }]), webix.html.preventEvent(n);
          })('print', i, t);
        },
        o
      ),
      !i.config.readonly)
    ) {
      webix.UIManager.addHotKey(
        'any',
        function (e, t) {
          var n = t.which || t.keyCode,
            r = 113 == n;
          if (!(16 == n || (112 <= n && n <= 123 && !r))) {
            var i = e.getSelectedId(!0);
            i.length && ((e.config.liveEditor && r) || (o.$anyKey = !0), o.edit(i[0]));
          }
        },
        o
      ),
        webix.UIManager.addHotKey(
          'enter',
          function (e) {
            var t = e.getSelectedId(!0);
            t.length &&
              ((e.config.liveEditor && !o.callEvent('onBeforeLiveEditor', [t[0]])) || o.edit(t[0]));
          },
          o
        ),
        webix.UIManager.addHotKey(
          'backspace',
          function () {
            return hr(i);
          },
          o
        ),
        webix.UIManager.addHotKey(
          'delete',
          function () {
            return hr(i);
          },
          o
        );
      var t = webix.env.isMac ? 'command-shift-z' : 'ctrl-y';
      webix.UIManager.addHotKey(
        t,
        function () {
          return i.redo();
        },
        o
      ),
        webix.UIManager.addHotKey(
          e + '-z',
          function () {
            return i.undo();
          },
          o
        ),
        webix.UIManager.addHotKey(
          e + '-b',
          function () {
            return vr(i, 'font-weight');
          },
          o
        ),
        webix.UIManager.addHotKey(
          e + '-i',
          function () {
            return vr(i, 'font-style');
          },
          o
        ),
        webix.UIManager.addHotKey(
          e + '-u',
          function (e, t) {
            return (function n(e, t) {
              return vr(e, 'underline'), webix.html.preventEvent(t);
            })(i, t);
          },
          o
        );
      var n = webix.env.isMac ? 'command-shift-x' : 'ctrl-alt-s';
      webix.UIManager.addHotKey(
        n,
        function () {
          return vr(i, 'strike');
        },
        o
      ),
        webix.UIManager.addHotKey(
          e + '-add',
          function (e, t) {
            return dr(i, 'in', t);
          },
          o
        ),
        webix.UIManager.addHotKey(
          e + '-=',
          function (e, t) {
            return dr(i, 'in', t);
          },
          o
        ),
        webix.UIManager.addHotKey(
          e + '-subtract',
          function (e, t) {
            return dr(i, 'out', t);
          },
          o
        ),
        webix.UIManager.addHotKey(
          e + '-0',
          function (e, t) {
            return dr(i, 1, t);
          },
          o
        ),
        webix.UIManager.addHotKey(
          e + '-`',
          function () {
            return i.showFormulas('toggle');
          },
          o
        );
    }
  }
  function hr(t) {
    t.$$('cells').getEditor() ||
      N.set(function () {
        t.eachSelectedCell(function (e) {
          return t.setCellValue(e.row, e.column, '');
        }),
          t.refresh();
      });
  }
  function dr(e, t, n) {
    return e.zoom(t), webix.html.preventEvent(n);
  }
  function vr(e, t) {
    var n = e.getSelectedId();
    if (n) {
      var r = e.getStyle(n.row, n.column),
        i = sn[t] || t,
        o = r && r.props[t] === i ? 'normal' : i;
      e.callEvent('onStyleSet', [t, o]);
    }
  }
  var gr = [];
  for (var pr in n) gr.push(pr);
  function mr(r) {
    return (
      r.attachEvent('onComponentInit', function () {
        return (function e(o) {
          var a = o.$$('liveEditor'),
            i = o.$$('navigation'),
            s = o._table;
          function l(e, t) {
            var n = a.config.activeCell;
            n && n.row == e && n.column == t && wr(o, { row: e, column: t });
          }
          function n(e, t, n) {
            if (o.getCellEditor(t.row, t.column) || !wr(o, t, n)) return !0;
            if ((a.focus(), !n)) {
              a.paintValue();
              var r = a.getInputNode(),
                i = r.value.length;
              r.setSelectionRange(i, i);
            }
            return !1;
          }
          function u() {
            a.define({ activeCell: null }), a.setValue(''), a.disable();
          }
          s.attachEvent('onBeforeEditStart', function (e) {
            var t = s.$anyKey;
            return (s.$anyKey = !1), n(this, e, t);
          }),
            s.attachEvent('onBeforeLiveEditor', function (e) {
              return n(this, e, !1);
            }),
            s.attachEvent('onItemDblClick', function (e) {
              'rowId' != e.column &&
                (o.getCellEditor(e.row, e.column) ? this.edit(e) : n(this, e, !1));
            }),
            s.attachEvent('onAfterScroll', function () {
              a.$view.contains(document.activeElement) && a.paintValue();
            }),
            o.attachEvent('onCellChange', function (e, t, n, r) {
              if (r == o.getActiveSheet()) {
                var i = a.config.activeCell;
                i && i.row == e && i.column == t && a.setValue(n);
              }
            }),
            o.attachEvent('onAfterSelect', function (e) {
              o.$handleSelection || wr(o, e[0]);
            }),
            o.attachEvent('onChange', function (e) {
              if ('update' == e && a.isEnabled()) {
                var t = a.config.activeCell;
                t &&
                  a.getValue() != o.getCellValue(t.row, t.column) &&
                  (delete a._update_range, a.showActiveSheet(), a.updateCellValue());
              }
            }),
            o.attachEvent('onBeforeSheetShow', function (t) {
              if (!o._rangeDialog) {
                var e = a.config.activeCell;
                if (e) {
                  var n = a.getInputNode().selectionStart,
                    r = a.getValue();
                  o.getCellValue(e.row, e.column) != r
                    ? (a._activeMath || (a._activeMath = o.getActiveSheet()),
                      webix.delay(function () {
                        if (t == a._activeMath) {
                          o.$handleSelection = null;
                          var e = a.config.activeCell;
                          s.select(e.row, e.column);
                        }
                        a.setValue(r),
                          a.refresh(),
                          a.getInputNode().setSelectionRange(n, n),
                          a.paintValue(),
                          (o.$handleSelection = function (e, t, n, r) {
                            return xr(o, n, r, e);
                          });
                      }))
                    : (i.setValue(''), u());
                }
              }
            }),
            o.attachEvent('onReset', function () {
              o._rangeDialog || (o.$handleSelection = null);
            }),
            o.$$('cells').attachEvent('onFocus', function () {
              a._activeMath &&
                webix.delay(function () {
                  return a.focus();
                });
            }),
            o.attachEvent('onAfterLoad', function () {
              return u();
            }),
            o.attachEvent('onAction', function (e, t) {
              var n = a.config.activeCell;
              if ('paste' == e) return wr(o, n);
              var r = n && n.row == t.row && n.column == t.column;
              !r || ('lock' != e && 'dropdown' != e) || br(o, t.row, t.column);
            }),
            o.attachEvent('onFormatChange', function (e, t) {
              return l(e, t);
            }),
            o.attachEvent('onCellChange', function (e, t, n, r) {
              r == o.getActiveSheet() && l(e, t);
            });
        })(r);
      }),
      {
        view: 'toolbar',
        css: 'webix_ssheet_toolbar',
        elements: [
          {
            view: 'text',
            icon: 'wxi-menu-down',
            on: {
              onItemClick: function () {
                var e = webix.$$(this.config.suggest);
                e.isVisible() || e.show(this.getInputNode());
              },
              onChange: function (e, t, n) {
                'user' == n && '' !== e && r.showCell(e);
              },
            },
            suggest: {
              view: 'ssheet-suggest-labels',
              css: 'webix_ssheet_nav_suggest',
              body: {
                template:
                  "<span class='webix_ssheet_left'>#name#</span><span class='webix_ssheet_right'>#value#</span>",
                width: 250,
              },
              on: {
                onBeforeShow: function () {
                  var e = r.ranges.serialize(r.getActiveSheet()).map(function (e) {
                    return { name: e[0], value: e[1] };
                  });
                  if (!e.length) return !1;
                  var t = this.getList();
                  t.clearAll(), t.parse(e);
                },
              },
              data: [],
            },
            width: 150,
            id: 'navigation',
          },
          { view: 'ssheet-separator' },
          { view: 'label', label: webix.i18n.spreadsheet.liveEditor.edit, width: 65 },
          {
            view: 'button',
            id: 'formulaButton',
            label: 'f(x)',
            autowidth: !0,
            popup: {
              view: 'popup',
              on: {
                onBeforeShow: function () {
                  var n = this;
                  if (!r.getSelectedId()) return !1;
                  webix.delay(function () {
                    var e = n.getBody();
                    e.unselect && e.unselect(), e.scrollTo(0, 0);
                    var t = e.getFilter('value');
                    (t.value = ''), t.focus(), e.filterByAll();
                  });
                },
                onHide: function () {
                  r.$$('liveEditor').focus();
                },
              },
              width: 200,
              body: {
                view: 'datatable',
                saveFocus: !0,
                scroll: 'y',
                data: gr,
                columns: [{ id: 'value', header: [{ content: 'textFilter' }], fillspace: !0 }],
                on: {
                  onItemClick: function (e) {
                    _r(r, this, e);
                  },
                  onKeyPress: function (e) {
                    if (27 == e) this.hide();
                    else if (13 == e) {
                      var t = this.getSelectedId();
                      t && _r(r, this, t.row);
                    }
                  },
                },
              },
            },
          },
          { view: 'live-editor', disabled: !0, id: 'liveEditor', suggestData: gr },
        ],
      }
    );
  }
  function wr(i, e, t) {
    var n = i.$$('liveEditor');
    if (n && e) {
      var r = br(i, e.row, e.column);
      return (
        (n.config.activeCell = e),
        n.setValue(t ? '' : n.getCellValue(e.row, e.column)),
        i._rangeDialog ||
          (i.$handleSelection = r
            ? null
            : function (e, t, n, r) {
                return xr(i, n, r, e);
              }),
        !r
      );
    }
  }
  function br(e, t, n) {
    var r = e.$$('liveEditor'),
      i = e.getCellEditor(t, n) || e.isCellLocked(t, n);
    return i ? r.disable() : r.enable(), i;
  }
  function xr(e, t, n, r) {
    var i,
      o = e.$$('liveEditor'),
      a = o._update_range,
      s = o.getInputNode().selectionStart,
      l = '';
    if (o._activeMath) {
      var u = e.getActiveSheet();
      o._activeMath != u && (l = o.prepareSheet(u));
    }
    t == n
      ? (i = ':' == o.getValue()[(a ? a.pos : s) - 1] ? t : l + t)
      : (i = ''.concat(l + t, ':').concat(n));
    if (a && a.pos == s - a.len) o.setRange(i, !0), (s = o._update_range.pos + i.length);
    else {
      if (!o.expectOperator())
        return (function c(e, t) {
          var n = e.$$('liveEditor');
          if (n.isEnabled()) {
            var r = n.config.activeCell;
            n.showActiveSheet(),
              n.updateCellValue(r),
              n.setValue(t ? e.getCellValue(t.row, t.column) : '');
          }
          return !0;
        })(e, r);
      o.setRange(i), (s += i.length);
    }
    return o.focus(), o.getInputNode().setSelectionRange(s, s), o.paintValue(), !1;
  }
  function _r(e, t, n) {
    var r = e.$$('liveEditor'),
      i = t.getItem(n).value,
      o = r.getValue(),
      a = i + '(';
    (a = 0 == o.indexOf('=') ? o + (r.expectOperator(!0) ? '' : '+') + a : '=' + a),
      t.getParentView().hide(),
      r.setValue(a);
  }
  var yr = (function () {
    function t(e) {
      u(this, t), (this.view = e);
    }
    return (
      f(t, [
        { key: '$init', value: function () {} },
        { key: '$show', value: function () {} },
        { key: '$hide', value: function () {} },
        {
          key: 'open',
          value: function () {
            var e = this;
            if (this.$dialog) {
              if (this.$dialog.isVisible()) return;
            } else
              (this.$dialog = webix.ui(this.$init())),
                this.view._destroy_with_me.push(this.$dialog),
                this.$dialog.attachEvent('onHide', function () {
                  e.$hide(), webix.UIManager.setFocus(e.view);
                }),
                this.$dialog.attachEvent('onShow', function () {
                  webix.UIManager.setFocus(e.$dialog);
                });
            var t = this.$dialog.getBody();
            this.$dialog.show(), !1 === this.$show(this.$dialog, t) && this.close();
          },
        },
        {
          key: 'close',
          value: function () {
            this.$dialog.hide();
          },
        },
      ]),
      t
    );
  })();
  function Cr(e) {
    return e
      ? ('"' === (e = e.trim())[0] && (e = e.substr(1)),
        '"' === e[e.length - 1] && (e = e.substr(0, e.length - 1)),
        e)
      : '';
  }
  var Sr = (function (e) {
      function t() {
        return u(this, t), g(this, d(t).apply(this, arguments));
      }
      return (
        h(t, yr),
        f(t, [
          {
            key: '$show',
            value: function (e, t) {
              if (((this.cell = this.view.getSelectedId()), !this.cell)) return !1;
              t.elements.preview.setHTML(''), t.elements.url.setValue('');
              var n = (function r(e) {
                if (e && 'string' == typeof e && 0 === e.indexOf('=IMAGE('))
                  return { url: Cr(e.substr(7, e.length - 8)) };
              })(this.view.getCellValue(this.cell.row, this.cell.column));
              n && n.url && t.elements.url.setValue(n.url), t.elements.url.focus();
            },
          },
          {
            key: '$init',
            value: function () {
              var t = this,
                e = this.view.config.save,
                n = (e && e.images) || null;
              return {
                view: 'ssheet-dialog',
                head: webix.i18n.spreadsheet.labels['image-title'],
                move: !0,
                position: 'center',
                body: {
                  view: 'form',
                  elements: [
                    {
                      view: 'text',
                      name: 'url',
                      placeholder: webix.i18n.spreadsheet.labels['image-url'],
                      on: {
                        onChange: function (e) {
                          return t.showPreview(e);
                        },
                      },
                    },
                    {
                      view: 'label',
                      label: webix.i18n.spreadsheet.labels['image-or'],
                      align: 'center',
                    },
                    {
                      view: 'uploader',
                      label: webix.i18n.spreadsheet.labels['image-upload'],
                      upload: n,
                      on: {
                        onBeforeFileAdd: function (e) {
                          var t = this;
                          if (!this.config.upload) {
                            var n = new FileReader();
                            return (
                              (n.onload = function (e) {
                                return t.getFormView().elements.url.setValue(e.target.result);
                              }),
                              n.readAsDataURL(e.file),
                              !1
                            );
                          }
                          this.getFormView().elements.preview.setHTML('');
                        },
                        onFileUpload: function (e, t) {
                          this.getFormView().elements.url.setValue(t.imageURL);
                        },
                      },
                    },
                    {
                      view: 'formlate',
                      name: 'preview',
                      borderless: !0,
                      css: 'webix_ssheet_preview',
                      template: '',
                      height: 50,
                    },
                  ],
                },
                on: {
                  onSaveClick: function () {
                    return t.okClick();
                  },
                  onCancelClick: function () {
                    return t.close();
                  },
                },
              };
            },
          },
          {
            key: 'okClick',
            value: function () {
              var e = this.cell,
                t = this.fillUrl(this.$dialog.getBody().elements.url.getValue());
              this.view.addImage(e.row, e.column, t), this.close();
            },
          },
          {
            key: 'fillUrl',
            value: function (e) {
              return /^[/]|((https?:\/|data:image)\/)/i.test(e) || (e = 'http://' + e), e;
            },
          },
          {
            key: 'showPreview',
            value: function (e) {
              e &&
                ((e = webix.template.escape(this.fillUrl(e))),
                this.$dialog
                  .queryView('form')
                  .elements.preview.setHTML(
                    "<img class='webix_ssheet_cimage' src='" + e + "'></img>"
                  ));
            },
          },
        ]),
        t
      );
    })(),
    $r = Object.freeze({ action: 'add-image-cell', DialogBox: Sr }),
    Er = (function (e) {
      function t() {
        return u(this, t), g(this, d(t).apply(this, arguments));
      }
      return (
        h(t, Sr),
        f(t, [
          {
            key: 'open',
            value: function (e) {
              (this.config = e.config),
                (this.viewid = e.viewid),
                this.view.callEvent('onUIEditStart', [this.viewid, 'image']),
                Sr.prototype.open.apply(this, arguments);
            },
          },
          {
            key: '$hide',
            value: function () {
              this.view.callEvent('onUIEditStop', [this.viewid, 'image']),
                (this.config = this.viewid = null);
            },
          },
          {
            key: '$init',
            value: function () {
              var n = this;
              return (
                this.view.attachEvent('onUIEditStart', function (e, t) {
                  n.$dialog && n.$dialog.isVisible() && 'image' != t && n.close();
                }),
                this.view.attachEvent('onCommand', function (e) {
                  'close-ui-editor' == e.id && n.$dialog && n.$dialog.isVisible() && n.close();
                }),
                Sr.prototype.$init.apply(this, arguments)
              );
            },
          },
          {
            key: '$show',
            value: function (e, t) {
              t.elements.preview.setHTML(''),
                t.elements.url.setValue(''),
                this.config && this.config.data && t.elements.url.setValue(this.config.data),
                t.elements.url.focus();
            },
          },
          {
            key: 'okClick',
            value: function () {
              var e = this.fillUrl(this.$dialog.getBody().elements.url.getValue());
              if (this.viewid) this.view.views.update(this.viewid, e);
              else {
                var t = this.view.views.add(null, null, 'image', e);
                this.view.views.highlight(t);
              }
              this.close();
            },
          },
        ]),
        t
      );
    })(),
    kr = Object.freeze({ action: 'add-image-top', DialogBox: Er }),
    Vr = !1;
  function Ar(e) {
    Or(e, -1);
  }
  function Mr(e) {
    Or(e, 1);
  }
  function Ir(e) {
    Vr || ((e._ssUndoHistory = []), (e._ssUndoCursor = -1));
  }
  function zr(e, t) {
    e.$skipHistory ||
      e._loading_data ||
      (e._ssUndoHistory.splice(e._ssUndoCursor + 1), e._ssUndoHistory.push(t), e._ssUndoCursor++);
  }
  function Dr(e, t) {
    t.$skipHistory++;
    try {
      e.call(t);
    } finally {
      t.$skipHistory--;
    }
  }
  function Rr(e) {
    (Vr = !0), e(), (Vr = !1);
  }
  function Or(e, t) {
    var n = e._ssUndoHistory[0 < t ? e._ssUndoCursor + t : e._ssUndoCursor];
    if (n) {
      var r = 0 < t ? n.newValue : n.value,
        i = 0 < t,
        o = [n.action, n.row, n.column, r, i, n.extra];
      e._ssUndoCursor += t;
      var a = n.group,
        s = e._ssUndoHistory[0 < t ? e._ssUndoCursor + t : e._ssUndoCursor];
      Dr(function () {
        e.callEvent('onUndo', o),
          (a && s && a == s.group) || (e.refresh(), e.callEvent('onAfterUndo', []));
      }, e),
        s && a && a == s.group && Or(e, t);
    }
  }
  var Tr,
    Nr = Object.freeze({
      init: function Ya(o) {
        Ir(o),
          (function e(i) {
            i.attachEvent('onUndo', function (e, t, n, r) {
              switch (e) {
                case 'freeze-row':
                  i.freezeRows(r);
                  break;
                case 'freeze-column':
                  i.freezeColumns(r);
              }
            });
          })(o),
          o.attachEvent('onHardReset', function () {
            return Ir(o);
          }),
          o.attachEvent('onAfterSheetShow', function () {
            return Ir(o);
          }),
          o.attachEvent('onBeforeStyleChange', function (e, t, n, r) {
            if (Mn(o, e, t)) return !1;
            zr(o, { action: 'style', row: e, column: t, value: r, newValue: n, group: N.value });
          }),
          o.attachEvent('onBeforeValueChange', function (e, t, n, r, i) {
            if (Mn(o, e, t, i)) return !1;
            i == o.getActiveSheet() &&
              zr(o, { action: 'value', row: e, column: t, value: r, newValue: n, group: N.value });
          }),
          o.attachEvent('onBeforeSpan', function (e, t, n) {
            if (Mn(o, e, t)) return !1;
            zr(o, { action: 'span', row: e, column: t, value: n, newValue: n, group: N.value });
          }),
          o.attachEvent('onBeforeSplit', function (e, t, n) {
            if (Mn(o, e, t)) return !1;
            zr(o, { action: 'split', row: e, column: t, value: n, newValue: n, group: N.value });
          }),
          o.attachEvent('onAction', function (e, t) {
            ('lock' == e && t.page != o.getActiveSheet()) ||
              zr(o, {
                action: e,
                row: t.row || null,
                column: t.column || null,
                value: webix.isUndefined(t.value) ? null : t.value,
                newValue: webix.isUndefined(t.newValue) ? null : t.newValue,
                extra: t.extra || null,
                group: N.value,
              });
          }),
          o.$$('cells').attachEvent('onColumnResize', function (e, t, n) {
            return zr(o, {
              action: 'c-resize',
              row: 0,
              column: e,
              value: n,
              newValue: t,
              group: N.value,
            });
          }),
          o.attachEvent('onColumnOperation', function (e, t, n) {
            'add' !== e &&
              'del' !== e &&
              zr(o, {
                action: { id: e, group: 'column' },
                group: N.value,
                column: { start: { column: t }, end: { column: n } },
              });
          }),
          o.attachEvent('onRowOperation', function (e, t, n) {
            'add' !== e &&
              'del' !== e &&
              zr(o, {
                action: { id: e, group: 'row' },
                group: N.value,
                row: { start: { row: t }, end: { row: n } },
              });
          }),
          o.$$('cells').attachEvent('onRowResize', function (e, t, n) {
            return zr(o, {
              action: 'r-resize',
              row: e,
              column: 0,
              value: n,
              newValue: t,
              group: N.value,
            });
          }),
          o.attachEvent('onBeforeConditionSet', function (e, t, n, r) {
            if (Mn(o, e, t)) return !1;
            (n = n ? webix.copy(n) : null),
              zr(o, {
                action: 'condition',
                row: e,
                column: t,
                value: n,
                newValue: r,
                group: N.value,
              });
          }),
          o.attachEvent('onZoom', function (e, t) {
            return zr(o, { action: 'zoom', value: t, newValue: e, group: N.value });
          }),
          (o.$skipHistory = 0);
      },
      undo: Ar,
      redo: Mr,
      reset: Ir,
      ignoreUndo: Dr,
      ignoreReset: Rr,
    });
  function Pr(a) {
    clearTimeout(Tr),
      (Tr = webix.delay(function () {
        var e = a.views;
        for (var t in e._pull) {
          var n = e._pull[t],
            r = e._types[n.type],
            i = r.render,
            o = r.track;
          o && Fr(a, e.get(t), o, n, i);
        }
      }));
  }
  function Fr(e, t, n, r, i) {
    var o = jr(e, r);
    if ('chart' == r.type) {
      i && (t = i(t, r, o, !0));
      var a = r.config;
      a &&
        !Xr(a.type) &&
        (function c(e, t, n) {
          var r = t.config;
          'object' != p(r.legend) && (r.legend = { fromData: !!r.legend });
          var i = r.legend;
          if (i.fromData) e.shift();
          else if (i.range)
            for (
              var o = Wr(n, t), a = 'rows' == r.dataSeries, s = Yr(i.range, a, o), l = 0;
              l < s.length;
              l++
            ) {
              var u = s[l];
              delete e[0][u];
            }
        })(o, r, e);
    }
    n(t, o);
  }
  function Ur(e, t) {
    for (var n in (webix.callEvent('onClick', []), e.views._pull)) {
      var r = webix.$$(n),
        i = e.views._pull[n];
      t && ((i.x = Lr(e, i.config.width, i.x, 'x')), (i.y = Lr(e, i.config.height, i.y, 'y'))),
        Br(e, r, i);
    }
  }
  function Br(e, t, n) {
    var r = e._table.getScrollState();
    t.define({ width: n.config.width * e._zoom, height: n.config.height * e._zoom }),
      t.resize(),
      t.show({ x: n.x * e._zoom, y: n.y * e._zoom - r.y });
  }
  function Lr(e, t, n, r) {
    if (n || 0 === n) {
      var i =
        ('x' == r
          ? (function o(e) {
              var t = 0;
              return (
                e._table.eachColumn(function (e) {
                  'rowId' !== e && (t += this.getColumnConfig(e).width);
                }),
                t / e._zoom
              );
            })(e)
          : (function a(e) {
              var t = 0;
              return (
                e._table.data.each(function (e) {
                  t += e.$height || webix.skin.$active.rowHeight;
                }),
                t / e._zoom
              );
            })(e)) - t;
      n = Math.min(Math.max(n, 0), i);
    } else n = e._table.getScrollState()[r] + 50;
    return n;
  }
  function Hr(e) {
    return 'string' == typeof e && -1 === e.indexOf('data:image');
  }
  function jr(e, t) {
    var n = t.data;
    if (/^(http|data:image|\/)/i.test(n)) return n;
    var r = [];
    if (n) {
      var i = 'rows' == t.config.dataSeries,
        o = 0;
      n = qr(n);
      for (var a = 0; a < n.length; a++) {
        var s = Hr(n[a]) ? V(n[a], e) : null;
        if (s) {
          var l = s[4] ? e._mData.getPage(s[4]) : e._mPage;
          if (((s[5] = o), l)) {
            var u = i ? Qr.apply(l, s) : Zr.apply(l, s);
            o += u[2];
            for (var c = 0; c < u[0].length; c++) r[c] || (r[c] = {}), webix.extend(r[c], u[0][c]);
          }
        }
      }
    }
    return r;
  }
  function Wr(e, t) {
    var n = t.data;
    if (!/^(http|data:image|\/)/i.test(n)) {
      var r = {};
      if (n) {
        var i = 'rows' == t.config.dataSeries,
          o = 0;
        n = qr(n);
        for (var a = 0; a < n.length; a++) {
          var s = Hr(n[a]) ? V(n[a], e) : null;
          if (s) {
            var l = s[4] ? e._mData.getPage(s[4]) : e._mPage;
            if (((s[5] = o), l)) {
              var u = i ? Qr.apply(l, s) : Zr.apply(l, s);
              (o += u[2]), webix.extend(r, u[1]);
            }
          }
        }
      }
      return r;
    }
  }
  function qr(e) {
    return e.replace(/\s/g, '').split(',');
  }
  function Xr(e) {
    return /pie|donut/.test(e);
  }
  function Gr(l, e, t, n, u) {
    var c = 'rows' == t,
      f = [];
    if (e) {
      var h = [],
        d = [],
        v = [];
      n &&
        (n.legend && (d = Yr(n.legend, c)),
        n.xAxis && (h = Yr(n.xAxis, c)),
        n.series &&
          (v = n.series.filter(function (e) {
            return -1 == d.indexOf(e.range) && -1 == h.indexOf(e.range);
          }))),
        (e = qr(e));
      var g = 0,
        p = 1;
      e.forEach(function (i) {
        var o = D(i) ? V(i, l) : null;
        if (o) {
          for (
            var a,
              s = c ? o[0] : o[1],
              e = c ? o[2] : o[3],
              t = function (e) {
                var t = c ? M(e, o[1], e, o[3], o[4]) : M(o[0], e, o[2], e, o[4]),
                  n = ve(v, function (e) {
                    return e.range == t && (!e.active || e.active == i);
                  });
                n && (n.active || (n.active = i), (a = 1));
              },
              n = s;
            n <= e;
            n++
          )
            t(n);
          var r = function (e) {
            var t = c ? M(e, o[1], e, o[3], o[4]) : M(o[0], e, o[2], e, o[4]);
            if (-1 != d.indexOf(t) || -1 != h.indexOf(t)) return 'continue';
            var n = v.filter(function (e) {
              return e.range == t && e.active == i;
            })[0];
            if (a && !n && (!u || !p || e != s)) return 'continue';
            f.push(
              n || {
                active: i,
                range: t,
                marker: 'square',
                tooltip: 1,
                color: (function r(e) {
                  var t = [
                    '#e06666',
                    '#6aa84f',
                    '#3c78d8',
                    '#e69138',
                    '#783f04',
                    '#134f5c',
                    '#674ea7',
                    '#c27ba0',
                  ];
                  return t[e % t.length];
                })(g),
              }
            ),
              g++;
          };
          for (n = s; n <= e; n++) r(n);
          p = 0;
        }
      });
    }
    return f;
  }
  function Yr(e, o, a) {
    var s = [];
    return (
      (e = qr(e)).forEach(function (e) {
        if ((e = D(e) ? V(e) : null))
          for (var t = o ? e[0] : e[1], n = o ? e[2] : e[3], r = t; r <= n; r++) {
            var i = o ? M(r, e[1], r, e[3], e[4]) : M(e[0], r, e[2], r, e[4]);
            s.push(a ? a[i] : i);
          }
      }),
      s
    );
  }
  function Kr(e) {
    return (
      'object' != p(e.xAxis) && (e.xAxis = { fromData: !!e.xAxis }),
      'object' != p(e.legend) && (e.legend = { fromData: !!e.legend }),
      (e.legend = webix.extend(e.legend, { layout: 'x', align: 'center', valign: 'bottom' })),
      e.scale || (e.scale = { lines: 1 }),
      e
    );
  }
  function Zr(e, t, n, r, i, o) {
    for (var a = [], s = {}, l = e, u = 0; l <= n; l++, u++) {
      a[u] = {};
      for (var c = t, f = o; c <= r; c++, f++)
        l == n &&
          ((s[
            ''
              .concat(i ? i + '!' : '')
              .concat(y[c])
              .concat(e, ':')
              .concat(y[c])
              .concat(n)
          ] = 'data'.concat(f)),
          o++),
          (a[u]['data'.concat(f)] = this.getValue(l - 1, c - 1));
    }
    return [a, s, o];
  }
  function Qr(e, t, n, r, i, o) {
    for (var a = [], s = {}, l = t, u = 0; l <= r; l++, u++) {
      a[u] = {};
      for (var c = e, f = o; c <= n; c++, f++)
        l == r &&
          ((s[
            ''
              .concat(i ? i + '!' : '')
              .concat(y[t])
              .concat(c, ':')
              .concat(y[r])
              .concat(c)
          ] = 'data'.concat(f)),
          o++),
          (a[u]['data'.concat(f)] = this.getValue(c - 1, l - 1));
    }
    return [a, s, o];
  }
  var Jr = Object.freeze({
      init: function Ka(m) {
        var i,
          c = m._table.$view.querySelector('.webix_ss_center');
        (m.views = {
          register: function (e, t, n) {
            this._types[e] || (this._types[e] = { render: t, track: n });
          },
          move: function (e, t, n) {
            var r = webix.$$(e),
              i = webix.copy(this._pull[e]);
            (this._pull[e].x = Lr(m, i.config.width, t / m._zoom, 'x')),
              (this._pull[e].y = Lr(m, i.config.height, n / m._zoom, 'y')),
              m.callEvent('onAction', [
                'move-view',
                { row: e, newValue: webix.copy(this._pull[e]), value: i },
              ]),
              Br(m, r, this._pull[e]);
          },
          add: function (e, t, n, r, i, o) {
            var a = this;
            (i = i || {}),
              'chart' == n && (i = webix.extend(i, { type: 'line', dataSeries: 'columns' }));
            var s = (i.height = i.height || 300),
              l = (i.width = i.width || 500),
              u = webix.ui({
                id: o || '$ssheet-ui' + webix.uid(),
                view: 'ssheet-ui',
                container: c,
                master: m._table.config.id,
                width: l,
                height: s,
              });
            return (
              u.attachEvent('onViewMoveEnd', function (e, t) {
                var n = m._table.getScrollState();
                a.move(o, e, t + n.y);
              }),
              u.attachEvent('onViewResize', function () {
                var e = a._pull[o],
                  t = webix.copy(e);
                (e.config.height = u.$height),
                  (e.config.width = u.$width),
                  m.callEvent('onAction', [
                    'resize-view',
                    { row: o, newValue: webix.copy(e), value: t },
                  ]);
              }),
              u.attachEvent('onViewEdit', function () {
                var e = a._pull[o],
                  t = a._commands[e.type] || e.type;
                m.callEvent('onCommand', [{ id: t, viewid: o, config: e }]);
              }),
              u.attachEvent('onViewRemove', function () {
                return a.remove(o);
              }),
              (o = u.config.id),
              (e = Lr(m, s, e, 'x')),
              (t = Lr(m, l, t, 'y')),
              (this._pull[o] = { x: e, y: t, type: n, data: r, config: i }),
              this.update(o, r, i, !0),
              Br(m, u, this._pull[o]),
              o
            );
          },
          remove: function (e) {
            var t = this._pull[e];
            webix.$$(e).close(),
              delete this._pull[e],
              m.callEvent('onAction', ['add-view', { row: e, newValue: null, value: t }]);
          },
          get: function (e) {
            return webix.$$(e).getBody();
          },
          getConfig: function (e) {
            return this._pull[e];
          },
          update: function (e, t, n, r) {
            var i = r ? null : webix.copy(this._pull[e]),
              o = this._pull[e],
              a = this._types[o.type];
            if (((t = t || n.data || ''), delete (n = n || {}).data, 'chart' == o.type)) {
              var s = n.type;
              if (s && !n.series) {
                var l,
                  u = n.xAxis && n.xAxis.range,
                  c = n.legend && n.legend.range;
                i &&
                  i.config &&
                  (Xr(s)
                    ? i.config.legend && i.config.legend.fromData && (l = 1)
                    : i.config.xAxis && i.config.xAxis.fromData && (l = 1)),
                  (n.series = Gr(m, t, n.dataSeries, { xAxis: u, legend: c }, l));
              }
            }
            var f = webix.$$(e),
              h = n.height || 300,
              d = n.width || 500;
            f.$width != d && f.$height != h && (f.define({ width: d, height: h }), f.resize()),
              (o.data = t),
              (o.config = n);
            var v = this.get(e);
            if (((t = jr(m, o)), a.render)) {
              var g = webix.copy(o);
              (g.config.width = g.config.height = 0),
                (function p(e) {
                  var t = function (e) {
                      return 'datatable' == e.name || 'treetable' == e.name;
                    },
                    n = e.queryView(t, 'self');
                  (n = n ? [n] : e.queryView(t, 'all')).forEach(function (e) {
                    return e.disable();
                  });
                })((v = a.render(v, g, t)));
            }
            a.track && Fr(m, v, a.track, o),
              m.callEvent('onAction', [
                'add-view',
                { row: e, newValue: webix.copy(this._pull[e]), value: i },
              ]);
          },
          highlight: function (e) {
            var t = webix.$$(e),
              n = 'webix_ssheet_ui_focused',
              r = webix.$$(this._activeWin);
            r && !r.$destructed && webix.html.removeCss(r.$view, n),
              t ? ((this._activeWin = e), webix.html.addCss(t.$view, n)) : delete this._activeWin;
          },
          _commands: { image: 'add-image-top', chart: 'add-chart' },
          _types: {},
          _pull: {},
        }),
          m._table.attachEvent('onResize', function () {
            return Ur(m);
          }),
          m._table.attachEvent('onScrollY', function () {
            return Ur(m);
          }),
          m._table.attachEvent('onScrollX', function () {
            return Ur(m);
          }),
          m.attachEvent('onReset', function () {
            return (function e(t) {
              Dr(function () {
                for (var e in t.views._pull) t.views.remove(e);
              }, t);
            })(m);
          }),
          m.attachEvent('onUndo', function (e, t, n, r) {
            var i = 'move-view' === e;
            (i || 'resize-view' == e || 'add-view' === e) &&
              (function c(e, t, n, r) {
                if (r) {
                  var i = r.x,
                    o = r.y,
                    a = r.type,
                    s = r.data,
                    l = r.config;
                  e.views._pull[n]
                    ? t
                      ? e.views.move(n, i, o)
                      : e.views.update(n, s, l)
                    : e.views.add(i, o, a, s, l, n);
                  var u = e.$$('chartEditor');
                  u && u.viewId == n && u.queryView('form').setValues(l);
                } else e.views.remove(n);
              })(m, i, t, r);
          }),
          m.attachEvent('onAction', function (e, t) {
            'header-hide' == e
              ? Ur(m)
              : 'before-grid-change' == e &&
                (function c(e, t, n, r, i) {
                  for (var o = r.views, a = 0; a < o.length; a++)
                    if (Hr(o[a][3])) {
                      var s = o[a][4].series;
                      s &&
                        s.forEach(function (e) {
                          (e.range = P(e.range, t, n, i)), (e.active = P(e.active, t, n, i));
                        });
                      var l = o[a][4].legend && o[a][4].legend.range;
                      l &&
                        (o[a][4].legend.range = qr(l)
                          .map(function (e) {
                            return P(e, t, n, i);
                          })
                          .join(','));
                      var u = o[a][4].xAxis && o[a][4].xAxis.range;
                      u && (o[a][4].xAxis.range = P(u, t, n, i)),
                        (o[a][3] = qr(o[a][3])
                          .map(function (e) {
                            return P(e, t, n, i);
                          })
                          .join(','));
                    }
                })(0, t.name, t.inc, t.data, t.start);
          }),
          m.attachEvent('onZoom', function () {
            return Ur(m, !0);
          }),
          m.attachEvent('onColumnOperation', function () {
            return Ur(m, !0);
          }),
          m.attachEvent('onRowOperation', function () {
            return Ur(m, !0);
          }),
          m.attachEvent('onDataParse', function (e) {
            return (function r(t, e) {
              var n = e.views;
              n &&
                Dr(function () {
                  n.forEach(function (e) {
                    return t.views.add.apply(t.views, e);
                  });
                }, t);
            })(m, e);
          }),
          m.attachEvent('onDataSerialize', function (e, t) {
            return (function a(e, t, n) {
              for (var r in ((t.views = []), e.views._pull)) {
                var i = e.views._pull[r],
                  o = [i.x, i.y, i.type, i.data, i.config];
                n && n.viewIds && o.push(r), t.views.push(o);
              }
            })(m, e, t);
          }),
          m.attachEvent('onCellChange', function (e, t, n, r) {
            r == m.getActiveSheet() && Pr(m);
          }),
          m.attachEvent('onMathRefresh', function () {
            return Pr(m);
          }),
          m.attachEvent('onDestruct', function () {
            for (var e in m.views._pull) webix.$$(e).destructor();
          }),
          webix.attachEvent('onClick', function (e) {
            var t = webix.$$(e);
            t && t.config.externalUI && (t = webix.$$(t.config.externalUI));
            var n = t && (t.queryView('ssheet-ui', 'self') || t.queryView('ssheet-ui', 'parent'));
            if (n) {
              m.views.highlight(n);
              var r = n.config.id;
              i &&
                (m.views.getConfig(r).type == i
                  ? n.callEvent('onViewEdit', [])
                  : m.callEvent('onCommand', [{ id: 'close-ui-editor' }]));
            } else i || m.views.highlight();
          }),
          m.attachEvent('onUIEditStart', function (e, t) {
            m.views.highlight(e), (i = t);
          }),
          m.attachEvent('onUIEditStop', function (e, t) {
            i == t &&
              webix.delay(function () {
                i = null;
              });
          }),
          m.views.register(
            'chart',
            function (e, t, n) {
              var r = (function S(e, t, n) {
                var r = /<[^>]*>/gi,
                  i = webix.copy(e.config),
                  o = (i = Kr(i)).scale.lines,
                  a = i.scale.color || undefined,
                  s = (i.type = (function C(e) {
                    var t = e.type;
                    return (
                      e.stacked &&
                        -1 == t.indexOf('stacked') &&
                        (e.type = 'stacked' + e.type.charAt(0).toUpperCase() + e.type.substr(1)),
                      e['3D'] && -1 == t.indexOf('3D') && (e.type += '3D'),
                      e.horizontal && -1 == t.indexOf('H') && (e.type += 'H'),
                      e.type
                    );
                  })(i)),
                  l = Xr(s),
                  u = i.series;
                i.series = [];
                var c,
                  f,
                  h = i.xAxis,
                  d = i.legend,
                  v = { height: 24, align: d.align || 'center', valign: d.valign || 'bottom' };
                if (((v.layout = 'middle' == v.valign ? 'y' : 'x'), l))
                  d.fromData ? (c = 'data0') : d.range && (c = n[d.range]),
                    (v.template = '#'.concat(c, '#'));
                else {
                  if (((v.values = []), (f = !d.fromData && d.range))) {
                    var g = 'rows' == i.dataSeries;
                    f = Yr(d.range, g, n);
                  }
                  for (var p in ((i.yAxis = i.yAxis || {}), i.yAxis))
                    '' === i.yAxis[p] && delete i.yAxis[p];
                  (i.yAxis = webix.extend(i.yAxis, {
                    lineColor: a,
                    color: a,
                    lines: o,
                    lineShape: i.scale.circle ? 'arc' : 'default',
                  })),
                    h.fromData
                      ? (h.range = f
                          ? Object.keys(t[0]).filter(function (e) {
                              return -1 == f.indexOf(e);
                            })[0]
                          : 'data0')
                      : h.range && (h.range = n[h.range]);
                }
                for (var m = 0; m < u.length; m++) {
                  var w = u[m].color,
                    b = n[u[m].range];
                  if (b != h.range && (!l || b != c)) {
                    var x = {
                      value: '#'.concat(b, '#'),
                      tooltip: { template: u[m].tooltip ? '#'.concat(b, '#') : '' },
                    };
                    if (
                      ((x[l ? 'pieInnerText' : 'label'] = u[m].label ? '#'.concat(b, '#') : ''),
                      'radar' == s || 'line' == s || 'spline' == s || 'scatter' == s
                        ? ((x.line = { color: w }),
                          (x.item = { borderColor: w, type: u[m].marker }))
                        : l || (x.color = w),
                      ('area' != s && 'splineArea' != s) || (x.alpha = 0.7),
                      t[0] && !l && (f || d.fromData))
                    ) {
                      var _ = f ? t[0][f[m]] : t[0][b],
                        y = _ || 0 === _ ? (_ + '').replace(r, '') : '';
                      v.values.push({ text: y, color: w });
                    }
                    i.series.push(x);
                  }
                }
                return (
                  l ||
                    ((i.xAxis = { title: i.xAxis.title, lineColor: a, color: a, lines: o }),
                    (i['barH' == s || 'stackedBarH' == s ? 'yAxis' : 'xAxis'].template = function (
                      e
                    ) {
                      var t = e[h.range];
                      return t || 0 === t ? (t + '').replace(r, '') : '';
                    })),
                  c || (v.values && v.values.length) ? (i.legend = v) : delete i.legend,
                  'scatter' == s &&
                    ((i.xValue = i.xAxis.template), (i.origin = 'auto'), delete i.xAxis.template),
                  webix.extend({ view: 'chart', padding: { left: 80 } }, i, !0)
                );
              })(t, n, Wr(m, t));
              return webix.ui(r, e);
            },
            function (e, t) {
              e.clearAll(), e.parse(t);
            }
          ),
          m.views.register('image', function (e, t, n) {
            var r = webix.extend(
              { css: 'webix_ssheet_bgimage', template: '<img src="'.concat(n, '"/>') },
              t.config || {},
              !0
            );
            return webix.ui(r, e);
          });
      },
      _getDataParts: qr,
      _isPie: Xr,
      _getSeries: Gr,
      _getParts: Yr,
      _normalizeConfig: Kr,
    }),
    ei = webix.i18n.spreadsheet.labels;
  function ti(t) {
    t.attachEvent('onComponentInit', function () {
      return (function e(s) {
        var l = s.$$('chartEditor'),
          a = l.queryView('form'),
          u = a.elements;
        function c() {
          if (u['legend.fromData'].getValue()) {
            var e = Xr(u.type.getValue()) ? v : r;
            d(u['legend.range'], e());
          }
        }
        function f(e) {
          if (e) {
            var t = u['legend.range'].getValue();
            g('', t);
          }
          var n = Xr(u.type.getValue()) ? v : r;
          (e = e ? n() : ''), d(u['legend.range'], e);
        }
        function h(e) {
          if (e) {
            var t = u['xAxis.range'].getValue();
            g('', t);
          }
          (e = e ? v() : ''), d(u['xAxis.range'], e);
        }
        function d(e, t) {
          e.blockEvent(), e.setValue(t), e.unblockEvent();
        }
        function v() {
          var e = u.range.getValue(),
            t = u.dataSeries.getValue(),
            n = u['legend.range'].getValue(),
            r = '',
            i = Gr(s, e, t, { legend: n || '' });
          return i.length && (r = i[0].range), r;
        }
        function r() {
          var r = qr(u.range.getValue()),
            i = 'rows' == u.dataSeries.getValue(),
            o = qr(u['xAxis.range'].getValue()),
            a = [];
          return (
            r.forEach(function (e) {
              if (-1 == o.indexOf(e)) {
                var t = V(e, s);
                if (t) {
                  var n = i ? M(t[0], t[1], t[2], t[1], t[4]) : M(t[0], t[1], t[0], t[3], t[4]);
                  -1 == r.indexOf(n) && a.push(n);
                }
              }
            }),
            a.join(',')
          );
        }
        function g(e, t) {
          var n = u.range.getValue(),
            r = u['legend.range'].getValue(),
            i = u['xAxis.range'].getValue(),
            o = u.dataSeries.getValue(),
            a = Gr(s, n, o, { legend: r, xAxis: i });
          (t = qr(t)),
            (n = qr(n).filter(function (e) {
              return -1 == t.indexOf(e);
            })),
            e &&
              (e = qr(e)).forEach(function (t) {
                var e = a.filter(function (e) {
                  return e.range == t;
                });
                e.length || n.push(t);
              }),
            d(u.range, n.join(','));
        }
        function p(e) {
          var t = u['legend.align'],
            n = t.getList();
          'middle' == e
            ? n.exists('center') && n.remove('center')
            : n.exists('center') || n.add({ id: 'center', value: ei['chart-legend-center'] }, 1);
        }
        function m(e) {
          var t = u['legend.valign'],
            n = t.getList();
          'center' == e
            ? n.exists('middle') && n.remove('middle')
            : n.exists('middle') || n.add({ id: 'middle', value: ei['chart-legend-middle'] }, 1);
        }
        function w(e) {
          c();
          var t = Xr(e),
            n = 'bar' == e,
            r = u.series,
            i = 'radar' == e || 'line' == e || 'spline' == e || 'scatter' == e;
          r.hideSubviews('marker', i),
            r.hideSubviews('label', i || n || t),
            r.hideSubviews('color', !t),
            'area' == e || n ? u.stacked.show() : o(u.stacked),
            n ? u.horizontal.show() : o(u.horizontal),
            'radar' == e ? u['scale.circle'].show() : o(u['scale.circle']),
            t ? (_('axis'), _('pie', !0)) : (_('axis', !0), _('pie')),
            t || 'radar' == e ? _('axisTitle') : _('axisTitle', !0),
            x();
        }
        function b(e) {
          var t = u.range.getValue(),
            n = u.series.getValue(),
            r = u['legend.range'].getValue(),
            i = u['xAxis.range'].getValue(),
            o = u.dataSeries.getValue();
          (n = Gr(s, t, o, { series: n, legend: r, xAxis: i }, e)), u.series.setValue(n);
        }
        function x() {
          var e = 'rows' == u.dataSeries.getValue(),
            t = u.horizontal.getValue(),
            n = Xr(u.type.getValue());
          (!n && e) || (!e && n)
            ? (u['legend.fromData'].define('label', ei['chart-col-legend']),
              u['xAxis.fromData'].define('label', ei['chart-row-' + (t ? 'yAxis' : 'xAxis')]))
            : (u['legend.fromData'].define('label', ei['chart-row-legend']),
              u['xAxis.fromData'].define('label', ei['chart-col-' + (t ? 'yAxis' : 'xAxis')])),
            u['legend.fromData'].refresh(),
            u['xAxis.fromData'].refresh();
        }
        function o(e) {
          e.setValue && d(e), e.hide();
        }
        function _(e, t) {
          a.queryView({ batch: e }, 'all').forEach(function (e) {
            t ? e.show() : o(e);
          });
        }
        s.attachEvent('onCommand', function (e) {
          if ('add-chart' == e.id) {
            var t = e.config,
              n = (t && t.config) || {};
            l.show(),
              (s.$handleSelection = function (e, t, n, r) {
                var i = webix.UIManager.getFocus();
                if (
                  l.queryView(function (e) {
                    return e == i;
                  })
                )
                  if (i == u.range || i == u['legend.range']) {
                    var o = i.getValue(),
                      a = o.lastIndexOf(',');
                    (o = -1 == a ? '' : o.substring(0, a + 1)), i.setValue(o + n + ':' + r);
                  } else i.config.range && i.setValue(n + ':' + r);
                return !1;
              }),
              a.clear(),
              s.$$('chartTabs').setValue('common'),
              ((n = Kr(n)).range = t ? t.data : s.getSelectedRange()),
              (l.viewId = e.viewid ? e.viewid : s.views.add(null, null, 'chart', n.range, n)),
              s.callEvent('onUIEditStart', [l.viewId, 'chart']),
              m(n.legend.align),
              p(n.legend.valign);
            var r = (function i(t) {
              return (
                [{ value: 'H', name: 'horizontal' }, { value: 'stacked' }, { value: '3D' }].forEach(
                  function (e) {
                    -1 != t.type.indexOf(e.value) &&
                      ((t[e.name || e.value] = 1),
                      (t.type = t.type.replace(e.value, '').toLowerCase()));
                  }
                ),
                t
              );
            })(n);
            a.setValues(r),
              w(r.type),
              !Xr(r.type) && n.legend.fromData && f(n.legend.fromData),
              n.xAxis.fromData && h(n.xAxis.fromData),
              b(),
              a.queryView('accordionitem', 'all').forEach(function (e) {
                return e.expand();
              }),
              u.range.focus();
          }
        }),
          s.attachEvent('onUIEditStart', function (e, t) {
            l.isVisible() && 'chart' != t && ni(s);
          }),
          s.attachEvent('onCommand', function (e) {
            'close-ui-editor' == e.id && l.isVisible() && ni(s);
          }),
          s.attachEvent('onAction', function (e, t) {
            'add-view' != e || t.newValue || (l.isVisible() && l.viewId == t.row && ni(s));
          }),
          a.attachEvent('onChange', function (e, t) {
            var n = this.$eventSource;
            if (n === u.range || n === u['xAxis.range'] || n === u['legend.range']) {
              var r = e.split('!'),
                i = 2 == r.length ? r[0] + '!' + r[1].toUpperCase() : e.toUpperCase();
              e != i && d(n, (e = i));
            }
            switch (n) {
              case u.type:
                w(e);
                break;
              case u.horizontal:
                x();
                break;
              case u.range:
              case u.dataSeries:
                this.$eventSource == u.dataSeries && x(),
                  u['legend.fromData'].getValue() && c(),
                  u['xAxis.fromData'].getValue() && d(u['xAxis.range'], v()),
                  b();
                break;
              case u['xAxis.fromData']:
                h(e), b(t);
                break;
              case u['legend.fromData']:
                f(e), b(Xr(u.type.getValue()) ? t : 0);
                break;
              case u['legend.align']:
                m(e);
                break;
              case u['legend.valign']:
                p(e);
                break;
              case u['xAxis.range']:
                u['xAxis.fromData'].getValue() && d(u['xAxis.fromData']), g(e, t);
                break;
              case u['legend.range']:
                u['legend.fromData'].getValue() && d(u['legend.fromData']), g(e, t);
            }
            var o = a.getValues();
            s.views.update(l.viewId, o.range, o);
          }),
          u.series.attachEvent('onRangeChange', g);
      })(t);
    });
    var e = webix.skin.$active,
      n = e.dataPadding - 2,
      r = e.layoutMargin.form;
    return {
      width: 440,
      hidden: !0,
      id: 'chartEditor',
      css: 'ssheet_chart',
      rows: [
        {
          height: e.barHeight,
          css: 'ssheet_chart_wizard_head',
          padding: { left: 4 },
          cols: [
            {
              view: 'icon',
              inputHeight: e.inputHeight,
              hotkey: 'esc',
              icon: 'webix_ssheet_icon ssi-arrow-left',
              click: function () {
                return ni(t);
              },
            },
            { type: 'header', borderless: !0, template: ei['chart-edit'] },
          ],
        },
        {
          view: 'form',
          complexData: !0,
          borderless: !0,
          padding: { top: 0 },
          elementsConfig: { labelWidth: 184 },
          elements: [
            {
              view: 'tabview',
              id: 'chartTabs',
              cells: [
                {
                  id: 'common',
                  borderless: !0,
                  type: 'form',
                  paddingX: 0,
                  header: ei['chart-common'],
                  rows: [
                    {
                      view: 'scrollview',
                      body: {
                        margin: r,
                        rows: [
                          ri('type', 'chart-type', ii()),
                          {
                            view: 'checkbox',
                            label: ei['stacked-chart'],
                            name: 'stacked',
                            hidden: !0,
                          },
                          {
                            view: 'checkbox',
                            label: ei['horizontal-chart'],
                            name: 'horizontal',
                            hidden: !0,
                          },
                          {
                            view: 'checkbox',
                            label: ei['chart-pie-3d'],
                            name: '3D',
                            batch: 'pie',
                          },
                          { view: 'text', label: ei['chart-range'], name: 'range' },
                          {
                            view: 'checkbox',
                            label: ei['chart-col-xAxis'],
                            name: 'xAxis.fromData',
                            batch: 'axis',
                          },
                          {
                            view: 'checkbox',
                            label: ei['chart-row-legend'],
                            name: 'legend.fromData',
                          },
                          {
                            view: 'radio',
                            label: ei['chart-data-from'],
                            name: 'dataSeries',
                            vertical: !0,
                            options: [
                              { id: 'columns', value: ei['chart-columns'] },
                              { id: 'rows', value: ei['chart-rows'] },
                            ],
                          },
                          {},
                        ],
                      },
                    },
                  ],
                },
                {
                  id: 'advanced',
                  borderless: !0,
                  type: 'form',
                  paddingX: 0,
                  padding: { bottom: 0 },
                  header: ei['chart-series'],
                  rows: [{ view: 'ssheet-series', name: 'series' }],
                },
                {
                  id: 'extras',
                  borderless: !0,
                  type: 'form',
                  paddingX: 0,
                  header: ei['chart-extras'],
                  rows: [
                    {
                      view: 'scrollview',
                      body: {
                        view: 'accordion',
                        margin: webix.skin.$active.layoutMargin.form,
                        css: 'webix_ssheet_accordion',
                        multi: !0,
                        type: 'clean',
                        rows: [
                          {
                            header: ei['chart-legend'],
                            body: {
                              margin: r,
                              padding: n,
                              rows: [
                                {
                                  view: 'text',
                                  label: ei['chart-legend-range'],
                                  name: 'legend.range',
                                },
                                ri(
                                  'legend.align',
                                  'chart-legend-align',
                                  (function i() {
                                    return [
                                      { id: 'left', value: ei['chart-legend-left'] },
                                      { id: 'center', value: ei['chart-legend-center'] },
                                      { id: 'right', value: ei['chart-legend-right'] },
                                    ];
                                  })()
                                ),
                                ri(
                                  'legend.valign',
                                  'chart-legend-valign',
                                  (function o() {
                                    return [
                                      { id: 'top', value: ei['chart-legend-top'] },
                                      { id: 'middle', value: ei['chart-legend-middle'] },
                                      { id: 'bottom', value: ei['chart-legend-bottom'] },
                                    ];
                                  })()
                                ),
                              ],
                            },
                          },
                          {
                            header: ei['chart-scale'],
                            batch: 'axis',
                            id: 'scale',
                            body: {
                              margin: r,
                              padding: n,
                              rows: [
                                {
                                  view: 'checkbox',
                                  label: ei['chart-lines'],
                                  name: 'scale.lines',
                                  batch: 'axis',
                                },
                                {
                                  view: 'checkbox',
                                  label: ei['chart-radar-circle'],
                                  name: 'scale.circle',
                                  hidden: !0,
                                },
                                {
                                  view: 'ssheet-colorpicker',
                                  label: ei['chart-scale-color'],
                                  name: 'scale.color',
                                  batch: 'axis',
                                },
                              ],
                            },
                          },
                          {
                            header: ei['chart-x-axis'],
                            batch: 'axis',
                            body: {
                              margin: r,
                              padding: n,
                              rows: [
                                {
                                  view: 'text',
                                  label: ei['chart-xAxis-range'],
                                  name: 'xAxis.range',
                                  range: !0,
                                  batch: 'axis',
                                },
                                {
                                  view: 'text',
                                  label: ei['chart-xAxis-title'],
                                  name: 'xAxis.title',
                                  batch: 'axisTitle',
                                },
                              ],
                            },
                          },
                          {
                            header: ei['chart-y-axis'],
                            batch: 'axis',
                            body: {
                              margin: r,
                              padding: n,
                              rows: [
                                {
                                  view: 'text',
                                  label: ei['chart-yAxis-title'],
                                  name: 'yAxis.title',
                                  batch: 'axisTitle',
                                },
                                {
                                  view: 'text',
                                  label: ei['chart-yAxis-origin'],
                                  name: 'origin',
                                  batch: 'axis',
                                  attributes: { type: 'number' },
                                },
                                {
                                  view: 'label',
                                  label: ei['chart-yAxis-note'],
                                  css: 'ssheet_note',
                                  height: 20,
                                },
                                {
                                  view: 'text',
                                  label: ei['chart-yAxis-start'],
                                  name: 'yAxis.start',
                                  batch: 'axis',
                                  attributes: { type: 'number' },
                                },
                                {
                                  view: 'text',
                                  label: ei['chart-yAxis-end'],
                                  name: 'yAxis.end',
                                  batch: 'axis',
                                  attributes: { type: 'number' },
                                },
                                {
                                  view: 'text',
                                  label: ei['chart-yAxis-step'],
                                  name: 'yAxis.step',
                                  batch: 'axis',
                                  attributes: { type: 'number' },
                                },
                              ],
                            },
                          },
                          {},
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  }
  function ni(e) {
    var t = e.$$('chartEditor');
    e.callEvent('onUIEditStop', [t.viewId, 'chart']),
      (t.viewId = null),
      (e.$handleSelection = null),
      t.hide();
  }
  function ri(e, t, n) {
    return {
      view: 'richselect',
      name: e,
      label: ei[t],
      suggest: { view: 'ssheet-form-suggest', data: n },
    };
  }
  function ii() {
    return [
      { id: 'line', value: ei['line-chart'] },
      { id: 'spline', value: ei['spline-chart'] },
      { id: 'splineArea', value: ei['splinearea-chart'] },
      { id: 'area', value: ei['area-chart'] },
      { id: 'bar', value: ei['bar-chart'] },
      { id: 'radar', value: ei['radar-chart'] },
      { id: 'pie', value: ei['pie-chart'] },
      { id: 'donut', value: ei['donut-chart'] },
      { id: 'scatter', value: ei['scatter-chart'] },
    ];
  }
  var oi = webix.i18n.spreadsheet.labels,
    ai = (function (e) {
      function t() {
        return u(this, t), g(this, d(t).apply(this, arguments));
      }
      return (
        h(t, yr),
        f(t, [
          {
            key: '$show',
            value: function (e, t) {
              if (((this.cell = this.view.getSelectedId()), !this.cell)) return !1;
              var i = t.elements;
              (this.view.$handleSelection = function (e, t, n, r) {
                return i.range.setValue(n + ':' + r), !1;
              }),
                i.range.setValue('');
              var n = (function r(e) {
                if (e && 'string' == typeof e && 0 === e.indexOf('=SPARKLINE(')) {
                  var t = e.substr(11, e.length - 12).split(','),
                    n = { range: t[0], type: Cr(t[1]), color: Cr(t[2]), negativeColor: Cr(t[3]) };
                  return 'barH' == n.type && ((n.type = 'bar'), (n.horizontal = 1)), n;
                }
              })(this.view.getCellValue(this.cell.row, this.cell.column));
              n &&
                (t.blockEvent(),
                i.type.setValue(n.type),
                i.range.setValue(n.range),
                n.color && (i.color_def.setValue(n.color), i.color_pos.setValue(n.color)),
                n.negativeColor && i.color_neg.setValue(n.negativeColor),
                n.horizontal && i.horizontal.setValue(1),
                t.unblockEvent(),
                this.renderPreview()),
                i.range.focus();
            },
          },
          {
            key: '$hide',
            value: function () {
              this.view.$handleSelection = null;
            },
          },
          {
            key: '$init',
            value: function () {
              var e = this;
              return {
                view: 'ssheet-dialog',
                head: oi['sparkline-title'],
                move: !0,
                position: 'center',
                body: {
                  view: 'form',
                  visibleBatch: 1,
                  on: {
                    onChange: function () {
                      return e.renderPreview();
                    },
                  },
                  elements: [
                    {
                      view: 'richselect',
                      name: 'type',
                      label: oi['sparkline-type'],
                      value: 'line',
                      labelPosition: 'left',
                      suggest: { view: 'ssheet-form-suggest', data: ii() },
                      on: {
                        onChange: function (e) {
                          var t = this.getFormView();
                          switch (e) {
                            case 'pie':
                            case 'donut':
                              t.showBatch(3);
                              break;
                            case 'bar':
                              t.showBatch(2);
                              break;
                            default:
                              t.showBatch(1);
                          }
                        },
                      },
                    },
                    { view: 'text', label: oi['sparkline-range'], name: 'range' },
                    {
                      view: 'ssheet-colorpicker',
                      label: oi['sparkline-color'],
                      name: 'color_def',
                      id: 'add_sparkline_color',
                      value: '#6666FF',
                      batch: '1',
                    },
                    {
                      view: 'ssheet-colorpicker',
                      label: oi['sparkline-positive'],
                      name: 'color_pos',
                      value: '#6666FF',
                      batch: '2',
                    },
                    {
                      view: 'ssheet-colorpicker',
                      label: oi['sparkline-negative'],
                      name: 'color_neg',
                      value: '#FF6666',
                      batch: '2',
                    },
                    {
                      view: 'checkbox',
                      label: oi['horizontal-chart'],
                      name: 'horizontal',
                      batch: '2',
                    },
                    {
                      view: 'formlate',
                      name: 'preview',
                      borderless: !0,
                      css: 'webix_ssheet_preview',
                      height: 50,
                    },
                  ],
                },
                on: {
                  onSaveClick: function () {
                    return e.okClick();
                  },
                  onCancelClick: function () {
                    return e.close();
                  },
                },
              };
            },
          },
          {
            key: 'checkRange',
            value: function (e) {
              if (e && V(e, this.view)) return !0;
              this.view.alert({ text: oi['error-range'] });
            },
          },
          {
            key: 'okClick',
            value: function () {
              var e = this.$dialog.getBody().getValues();
              if (((e.range = e.range.toUpperCase()), e.range && this.checkRange(e.range))) {
                var t = this.sparkConfig(e);
                this.view.addSparkline(this.cell.row, this.cell.column, t), this.close();
              }
            },
          },
          {
            key: 'renderPreview',
            value: function () {
              var e = this.$dialog.getBody(),
                t = e.getValues();
              if (((t.range = t.range.toUpperCase()), t.range && this.checkRange(t.range))) {
                for (
                  var n = V(t.range, this.view),
                    r = this.view._mPage.getRange(n[0] - 1, n[1] - 1, n[2] - 1, n[3] - 1),
                    i = this.sparkConfig(t, !0),
                    o = 0;
                  o < r.length;
                  o++
                )
                  r[o] = r[o] || 0;
                e.elements.preview.setValue(
                  webix.Sparklines.getTemplate(i)(r, { width: 200, height: 40 })
                );
              } else e.elements.preview.setValue('');
            },
          },
          {
            key: 'sparkConfig',
            value: function (e, t) {
              e = webix.copy(e);
              var n = this.$dialog.getBody();
              return (
                'bar' === e.type
                  ? ((e.color = e.color_pos), (e.negativeColor = e.color_neg))
                  : n.elements.color_def.isVisible()
                    ? (e.color = e.color_def)
                    : 'donut' == e.type && t && webix.extend(e, { type: 'pie', donut: 1 }, !0),
                e
              );
            },
          },
        ]),
        t
      );
    })(),
    si = Object.freeze({ action: 'add-sparkline', DialogBox: ai }),
    li = (function (e) {
      function t() {
        return u(this, t), g(this, d(t).apply(this, arguments));
      }
      return (
        h(t, yr),
        f(t, [
          {
            key: '$show',
            value: function (e) {
              var o = this,
                a = e.$$('form');
              a.clear(), a.clearValidation(), a.elements.name.focus();
              var t = this.view.getSelectedRange();
              t && (t = A(this.view.getActiveSheet()) + '!' + t),
                a.setValues({ range: t, scope: '$global' }),
                this._updateData(),
                (this.view._rangeDialog = !0),
                (this.view.$handleSelection = function (e, t, n, r) {
                  return (
                    a.elements.range.setValue(
                      (function i(e, t, n) {
                        return (n ? A(n) + '!' : '') + e + ':' + t;
                      })(n, r, o.view.getActiveSheet())
                    ),
                    !1
                  );
                });
            },
          },
          {
            key: '$hide',
            value: function () {
              (this.view.$handleSelection = null), (this.view._rangeDialog = null);
            },
          },
          {
            key: 'saveClick',
            value: function () {
              var e = this.view,
                t = this.$dialog.$$('form'),
                n = t.getValues();
              if (n.range) {
                var r = n.range.split('!');
                1 == r.length && r.unshift(A(e.getActiveSheet())),
                  (n.range = r[0] + '!' + r[1].toUpperCase());
              }
              if (((n.name = n.name.toUpperCase()), t.setValues(n), t.validate())) {
                var i = this.$dialog.$$('table');
                if (n.id) {
                  var o = i.getItem(n.id);
                  e.ranges.remove(o.name, this._getScope(o)), i.updateItem(n.id, n);
                } else i.add(n);
                e.ranges.add(n.name, n.range, this._getScope(n)),
                  e.refresh(),
                  i.unselect(),
                  t.setValues({ scope: '$global' });
              }
            },
          },
          {
            key: '_getScope',
            value: function (e) {
              return '$global' == e.scope || e.scope;
            },
          },
          {
            key: 'removeRange',
            value: function (n) {
              var r = this,
                i = this.view;
              i.confirm({ text: webix.i18n.spreadsheet.labels['range-remove-confirm'] }).then(
                function () {
                  var e = r.$dialog.$$('table'),
                    t = e.getItem(n);
                  i.ranges.remove(t.name, r._getScope(t)), i.refresh(), e.remove(n);
                }
              );
            },
          },
          {
            key: 'editRange',
            value: function (e) {
              var t = this.$dialog.$$('form'),
                n = this.$dialog.$$('table');
              t.clearValidation();
              var r = webix.copy(n.getItem(e));
              t.setValues(r);
            },
          },
          {
            key: '$init',
            value: function () {
              var n = this;
              this.view.attachEvent('onSheetRename', function (e, t) {
                return n._updateData(e, t);
              }),
                this.view.attachEvent('onSheetRemove', function (e) {
                  return n._updateData(e);
                }),
                this.view.attachEvent('onSheetAdd', function () {
                  return n._updateData();
                });
              var t = webix.i18n.spreadsheet.labels,
                e = {
                  padding: 0,
                  type: 'clean',
                  cols: [
                    {
                      view: 'ssheet-dialog-table',
                      id: 'table',
                      borderless: !0,
                      columns: [
                        { id: 'name', header: t['range-name'], width: 120 },
                        { id: 'range', header: t['range-cells'], width: 150 },
                        {
                          id: 'scope',
                          header: t['range-scope'],
                          width: 95,
                          template: function (e) {
                            return '$global' == e.scope ? t['range-global'] : e.scope;
                          },
                        },
                        {
                          template:
                            "<span class='webix_icon ssheet_ranges_edit wxi-pencil'></span>",
                          width: 44,
                        },
                        {
                          template: "<span class='webix_icon ssheet_ranges_edit wxi-trash'></span>",
                          width: 44,
                        },
                      ],
                      autowidth: !0,
                      height: 200,
                      select: 'row',
                      on: {
                        onBeforeSelect: function (e) {
                          return e == n.$dialog.$$('form').getValues().id;
                        },
                      },
                      onClick: {
                        'wxi-trash': function (e, t) {
                          return n.removeRange(t);
                        },
                        'wxi-pencil': function (e, t) {
                          return n.editRange(t);
                        },
                      },
                    },
                    {
                      width: 270,
                      view: 'form',
                      id: 'form',
                      rules: {
                        name: function (e, t) {
                          return (
                            !n.$dialog.$$('table').find(function (e) {
                              return e.name == t.name && e.scope == t.scope && e.id != t.id;
                            }, !0) && !nt(t.name)
                          );
                        },
                        range: D,
                        scope: webix.rules.isNotEmpty,
                      },
                      elementsConfig: { labelWidth: 95 },
                      elements: [
                        { view: 'text', name: 'name', label: t['range-name'] },
                        {
                          view: 'text',
                          name: 'range',
                          id: 'range',
                          label: t['range-cells'],
                          on: {
                            onFocus: function () {
                              return n.view.showCell(n.$dialog.$$('range').getValue(), !0);
                            },
                          },
                        },
                        {
                          view: 'richselect',
                          name: 'scope',
                          id: 'sheets',
                          label: t['range-scope'],
                          suggest: { view: 'ssheet-form-suggest', body: { data: [] } },
                        },
                      ],
                    },
                  ],
                };
              return {
                view: 'ssheet-dialog',
                move: !0,
                head: webix.i18n.spreadsheet.labels['range-title'],
                autoheight: !0,
                width: 800,
                position: 'center',
                body: e,
                on: {
                  onSaveClick: function () {
                    return n.saveClick();
                  },
                  onCancelClick: function () {
                    return n.close();
                  },
                },
              };
            },
          },
          {
            key: '_updateData',
            value: function (e, t) {
              if (this.$dialog.isVisible()) {
                var n = this.view._mData.getRanges(),
                  r = webix.i18n.spreadsheet.labels,
                  i = this.$dialog.$$('table'),
                  o = this.$dialog.$$('form'),
                  a = i.getItem(o.getValues().id);
                if (a) {
                  var s = a.name;
                  a = (s = e == a.scope ? (t ? t + '!' + s : null) : a.scope + '!' + s)
                    ? n.get(s)
                    : null;
                }
                i.clearAll();
                for (var l, u = n.serialize(), c = [], f = 0; f < u.length; f++) {
                  var h = f + 1,
                    d = T(u[f], 2),
                    v = d[0],
                    g = d[1];
                  a && n.get(v) == a && (l = h);
                  var p = v.split('!');
                  c.push({
                    scope: 1 == p.length ? '$global' : p[0],
                    name: p[1] || p[0],
                    range: g,
                    id: h,
                  });
                }
                i.parse(c), o.setValues({ id: l }, !0), l && i.select(l);
                var m = this.$dialog.$$('sheets'),
                  w = m.getList();
                w.clearAll();
                var b = [{ id: '$global', value: r['range-global'] }];
                if (
                  (this.view._sheets.forEach(function (e) {
                    b.push({ id: e.name, value: e.name });
                  }),
                  w.parse(b),
                  e)
                ) {
                  var x = (g = this.$dialog.$$('range')).getValue();
                  (t = t || this.view.getActiveSheet()),
                    0 == x.indexOf(A(e) + '!') && g.setValue(A(t) + '!' + x.split('!')[1]),
                    m.getValue() == e && m.setValue(t);
                }
              }
            },
          },
        ]),
        t
      );
    })(),
    ui = Object.freeze({ action: 'add-range', DialogBox: li }),
    ci = (function (e) {
      function t() {
        return u(this, t), g(this, d(t).apply(this, arguments));
      }
      return (
        h(t, yr),
        f(t, [
          {
            key: '$show',
            value: function () {
              var i = this.$dialog.$$('form');
              if (((this.cell = this.view.getSelectedId(!0)), !this.cell.length)) return !1;
              i.clear();
              var e = this.view.getCellEditor(this.cell[0].row, this.cell[0].column);
              e && i.setValues({ range: e.options, empty: e.empty }),
                (this.view.$handleSelection = function (e, t, n, r) {
                  return i.elements.range.setValue(n + ':' + r), !1;
                }),
                i.elements.range.focus();
            },
          },
          {
            key: '$hide',
            value: function () {
              this.view.$handleSelection = null;
            },
          },
          {
            key: '$init',
            value: function () {
              var e = this;
              return {
                view: 'ssheet-dialog',
                position: 'center',
                head: webix.i18n.spreadsheet.labels['dropdown-title'],
                move: !0,
                body: {
                  padding: 0,
                  view: 'form',
                  id: 'form',
                  elementsConfig: { labelWidth: 130 },
                  rows: [
                    {
                      view: 'text',
                      label: webix.i18n.spreadsheet.labels['dropdown-range'],
                      name: 'range',
                    },
                    {
                      view: 'checkbox',
                      label: webix.i18n.spreadsheet.labels['dropdown-empty-option'],
                      name: 'empty',
                    },
                  ],
                },
                on: {
                  onSaveClick: function () {
                    return e.okClick();
                  },
                  onCancelClick: function () {
                    return e.close();
                  },
                },
              };
            },
          },
          {
            key: 'okClick',
            value: function () {
              var t = this.$dialog.$$('form').getValues();
              V(t.range, this.view)
                ? (N.set(function () {
                    for (var e = 0; e < this.cell.length; e++)
                      this.view.setCellEditor(this.cell[e].row, this.cell[e].column, {
                        editor: 'ss_richselect',
                        options: t.range,
                        empty: t.empty,
                      });
                  }, this),
                  this.close())
                : this.view.alert({
                    text: webix.i18n.spreadsheet.labels['error-range'],
                    type: 'alert-error',
                  });
            },
          },
        ]),
        t
      );
    })(),
    fi = Object.freeze({
      action: 'add-dropdown',
      DialogBox: ci,
    }),
    hi = (function () {
      function t(e) {
        u(this, t), (this._master = e);
      }
      return (
        f(t, [
          {
            key: 'clear',
            value: function (t) {
              var n = this,
                e = 'string' == typeof t ? t : this._master.getActiveSheet();
              this.serialize(e).forEach(function (e) {
                !0 !== t ? n.remove(e[0], t) : e[2] && n.remove(e[0], t);
              });
            },
          },
          {
            key: '_normalizeName',
            value: function (e, t) {
              return !0 !== t && (e = (t || this._master.getActiveSheet()) + '!' + e), e;
            },
          },
          {
            key: '_normalizeRange',
            value: function (e, t) {
              return (
                1 == e.split('!').length &&
                  (e = ('string' == typeof t ? t : this._master.getActiveSheet()) + '!' + e),
                e
              );
            },
          },
          {
            key: 'add',
            value: function (e, t, n) {
              var r = this._master;
              r.callEvent('onAfterRangeSet', [e, t, n]),
                (e = this._normalizeName(e, n)),
                r._mData.getRanges().add(e, this._normalizeRange(t, n)),
                r.callEvent('onMathRefresh', []);
            },
          },
          {
            key: 'getCode',
            value: function (e, t) {
              e = this._normalizeName(e, t);
              var n = this._master._mData.getRanges().get(e);
              if (n) return n.source;
            },
          },
          {
            key: 'remove',
            value: function (e, t) {
              (e = this._normalizeName(e, t)),
                this._master._mData.getRanges().remove(e),
                this._master.callEvent('onMathRefresh', []);
            },
          },
          {
            key: 'parse',
            value: function (e, t) {
              if (e)
                for (var n = 0; n < e.length; n++) {
                  var r = this._master._mData.getRanges(),
                    i = T(e[n], 3),
                    o = i[0],
                    a = i[1],
                    s = i[2];
                  (o = this._normalizeName(o, s || t)),
                    r.get(o) || r.add(o, this._normalizeRange(a, t));
                }
            },
          },
          {
            key: 'serialize',
            value: function (e) {
              e = e || this._master.getActiveSheet();
              for (
                var t = this._master._mData.getRanges().serialize(), n = [], r = 0;
                r < t.length;
                r++
              ) {
                var i = t[r],
                  o = i[0].split('!'),
                  a = 1 == o.length;
                (a || o[0] == e) && n.push([o[a ? 0 : 1], i[1], a]);
              }
              return n;
            },
          },
          {
            key: 'getRanges',
            value: function (e) {
              return this.serialize(e).map(function (e) {
                return { name: e[0], range: e[1], global: e[2] };
              });
            },
          },
        ]),
        t
      );
    })();
  function di(o, e, t) {
    var n = [];
    if ('string' == typeof e) {
      var r = V(e, o);
      if (r) {
        var i = o._mPage;
        if ((r[4] && (i = o._mData.getPage(r[4])), i)) {
          var a = (
            i == o._mPage
              ? Dn(o, {})
              : ve(o._sheets, function (e) {
                  return e.name == r[4];
                }).content
          ).spans;
          n = function m(e, t, n, r, i, o) {
            for (var a = [], s = e._mPage === this, l = t - 1; l <= r - 1; l++)
              for (var u = n - 1; u <= i - 1; u++) {
                for (var c = void 0, f = 0; f < o.length; f++) {
                  var h = o[f],
                    d = l + 1,
                    v = u + 1;
                  if (
                    (d != h[0] || v != h[1]) &&
                    d >= h[0] &&
                    d < h[0] + h[3] &&
                    v >= h[1] &&
                    v < h[1] + h[2]
                  ) {
                    c = !0;
                    break;
                  }
                }
                if (!c) {
                  var g = this.getCell(l, u),
                    p = void 0;
                  (p = g ? webix.copy(g) : { value: '' }),
                    s
                      ? (p.$value = lr(e, { id: l + 1 }, 0, 0, { id: u + 1 }, !0))
                      : delete p.format,
                    (p.id = p.value),
                    a.push(p);
                }
              }
            return a;
          }.apply(i, [o, r[0], r[1], r[2], r[3], a]);
        }
      }
    } else if (webix.isArray(e))
      for (var s = 0; s < e.length; s++) {
        var l = e[s] || 0 === e[s] ? e[s] : '';
        (l = 'object' === p(l) ? webix.copy(l) : { id: l, value: l }), n.push(l);
      }
    for (var u = {}, c = n.length - 1; 0 <= c; c--) {
      var f = 'boolean' == typeof n[c].value;
      f && (n[c].value *= 1),
        (f || 0 === n[c].id) && (n[c].id = String(n[c].value)),
        t && t.unique && (u[n[c].id] ? n.splice(c, 1) : (u[n[c].id] = !0));
    }
    if (t) {
      for (var h = !1, d = n.length - 1; 0 <= d; d--) {
        var v = n[d].value;
        v || 0 === v ? (n[d].value = String(v)) : (n.splice(d, 1), (h = !0));
      }
      t.order &&
        n.sort(function (e, t) {
          var n = o.$$('cells').data.sorting.as,
            r = e.value,
            i = t.value;
          return webix.rules.isNumber(r) && webix.rules.isNumber(i)
            ? n['int'](r, i)
            : n.string(r, i);
        }),
        h &&
          t.filter &&
          n.unshift(
            (function g() {
              return {
                id: '$empty',
                value: '',
                $value:
                  "<span class='webix_ssheet_empty'>" +
                  webix.i18n.spreadsheet.labels['dropdown-empty'] +
                  '</span>',
              };
            })()
          ),
        t.empty && n.unshift({ id: '$empty', $empty: !0, value: '' });
    }
    return n;
  }
  var vi = Object.freeze({
    init: function Za(t) {
      (t.ranges = new hi(t)),
        t.attachEvent('onDataSerialize', function (e) {
          e.ranges = t.ranges.serialize();
        });
    },
    rangeOptions: di,
  });
  function gi(e) {
    (e._table._ssFilters = {}), _i(e);
  }
  function pi(e) {
    var t = e._ssFilters,
      n = [];
    for (var r in t) for (var i in t[r]) n.push(t[r][i]);
    return n;
  }
  function mi(e, t) {
    var r = !1;
    z(t, e, function (e, t) {
      var n = e._table._ssFilters[t.row];
      n &&
        n[t.column] &&
        ((r = !0),
        delete n[t.column],
        e._table.removeCellCss(t.row, t.column, 'ss_filter'),
        e._table.removeCellCss(t.row, t.column, 'ss_filter_active'),
        Nn(e, t.row, t.column, 'ss_filter', !1),
        Nn(e, t.row, t.column, 'ss_filter_active', !1));
    }),
      r && e.filterSpreadSheet();
  }
  function wi(e, t, n, r, i) {
    (r || (r = { end: { row: t } }), r.end) &&
      (r = (function u(e, t, n, r, i) {
        var o = e._table.getSpan(t, n);
        if (t === r || (o && t == r - o[3] + 1))
          for (r = t; r < e.config.rowCount; r++) {
            var a = r + 1,
              s = e._table.getSpan(a, n);
            if (!s || s[0] == a) {
              var l = e.getCellValue(a, n);
              if (!l && 0 !== l) break;
            }
          }
        return i ? r : M(t + 1, n, r, n);
      })(e, t, n, r.end.row, i));
    return r;
  }
  function bi(e) {
    return !!(e.includes || (e.condition && e.condition.filter));
  }
  function xi(e) {
    var t = e._table._ssFilters;
    for (var n in t) for (var r in t[n]) if (t[n][r]) return !0;
    return !1;
  }
  function _i(e) {
    var t = xi(e);
    e.callEvent('onCommand', [{ id: 'toolbar-update', name: 'create-filter', value: t }]);
  }
  function yi(e, t, n) {
    for (var r = t + 1; r < e.config.rowCount; r++) {
      var i = e.getCellValue(r, n);
      if (i || 0 === i) {
        var o = ht(e, r, n);
        return 'number' == o || 'date' == o ? o : 'text';
      }
      if ('' !== i) break;
    }
    return 'text';
  }
  function Ci(e, t, n, r, i, o) {
    var a = t.filter;
    (a.options = P(a.options, 'row', o.row, { column: t.col, row: t.row })),
      (a.options = P(a.options, 'column', o.column, { column: t.col, row: t.row })),
      a.lastRow && (a.lastRow += o.row),
      delete a.value,
      delete a.handler,
      e.setCellFilter(n, r, a);
  }
  function Si(e, t) {
    for (var n = Wn[e], r = 0; r < n.length; r++) if (n[r].id == t) return n[r];
  }
  function $i(e) {
    return webix.copy(Wn[e]);
  }
  function Ei(e, t) {
    var n = t.includes,
      r = t.condition,
      i = Si(e, r.type),
      o = i
        ? i.handler
        : function () {
            return !0;
          };
    if (n) for (var a = 0; a < n.length; a++) n[a] = String(n[a]);
    return function (e) {
      return n ? -1 !== n.indexOf(e) : '' === r.filter || o(e, r.filter);
    };
  }
  var ki = Object.freeze({
      init: function Qa(s) {
        var l = s._table;
        s.attachEvent('onReset', function () {
          return gi(s);
        }),
          gi(s),
          (l.on_click.ssheet_filter_sign = function (e, t) {
            var n = l._ssFilters[t.row][t.column],
              r = n.mode || yi(s, t.row, t.column),
              i = [];
            n.options &&
              ('string' == typeof n.options
                ? (i = di(s, n.options, { unique: !0, order: !0, filter: !0 }))
                : webix.isArray(n.options) && (i = di(s, n.options, { filter: !0 }))),
              s.callEvent('onCommand', [
                { id: 'start-filter', cell: t, mode: r, options: i, filter: n },
              ]);
          }),
          (l.on_dblclick.ssheet_filter_sign = function () {
            return !1;
          }),
          s.attachEvent('onCommand', function (e) {
            'create-filter' === e.id &&
              (function t(n) {
                var r = n._table.getSelectArea();
                xi(n)
                  ? (N.set(function () {
                      return n.removeFilters();
                    }),
                    r && n._table.addSelectArea(r.start, r.end))
                  : r &&
                    N.set(function () {
                      for (var e = r.start.row, t = r.start.column; t <= r.end.column; t++)
                        n.setCellFilter(e, t, { options: r, lastRow: wi(n, e, t, r, !0) });
                    }),
                  _i(n);
              })(s);
          });
        var u = !1;
        s.attachEvent('onUndo', function (e, t, n, r) {
          if ('filter' == e) (r = 'object' == p(r) ? r : null), s.setCellFilter(t, n, r), (u = !0);
          else if ('apply-filter' == e) {
            var i = s.getCellFilter(t, n);
            if (((i.value = r), delete i.handler, r && r.condition)) {
              var o = i.mode || yi(s, t, n);
              i.handler = Ei(o, i.value);
            }
            u = !0;
            var a = r && bi(r);
            l[a ? 'addCellCss' : 'removeCellCss'](t, n, 'ss_filter_active'),
              Nn(s, t, n, 'ss_filter_active', a);
          }
        }),
          s.attachEvent('onAfterUndo', function () {
            u && (s.filterSpreadSheet(), (u = !1));
          }),
          s.attachEvent('onAction', function (e, t) {
            'filter' == e
              ? (Nn(s, t.row, t.column, 'ss_filter', t.newValue),
                Nn(
                  s,
                  t.row,
                  t.column,
                  'ss_filter_active',
                  t.newValue && t.newValue.value && bi(t.newValue.value)
                ),
                _i(s))
              : 'before-grid-change' == e &&
                (function f(e, t, n, r, i) {
                  var o = r.filters;
                  if (n)
                    for (var a = o.length - 1; 0 <= a; a--) {
                      var s = T(o[a], 3),
                        l = s[0],
                        u = s[1],
                        c = s[2];
                      if (('row' == t && l >= i.row) || ('column' == t && u >= i.column)) {
                        if ('row' == t) {
                          if (l < i.row - n) {
                            o.splice(a, 1);
                            continue;
                          }
                          (o[a][0] = 1 * l + n), c.lastRow && (c.lastRow += n);
                        } else if ('column' == t) {
                          if (u < i.column - n) {
                            o.splice(a, 1);
                            continue;
                          }
                          o[a][1] = 1 * u + n;
                        }
                        c.options = P(c.options, t, n, i);
                      }
                    }
                })(0, t.name, t.inc, t.data, t.start);
          });
      },
      getFilters: pi,
      serialize: function Ja(e, t) {
        for (var n = pi(e._table), r = (t.filters = []), i = 0; i < n.length; i++) {
          var o = n[i],
            a = o.row,
            s = o.column,
            l = o.options,
            u = o.mode,
            c = o.value,
            f = o.lastRow;
          (c = c && webix.copy(c)), r.push([a, s, { value: c, options: l, mode: u, lastRow: f }]);
        }
      },
      load: function es(e, t) {
        var n = t.filters;
        if (n) {
          for (var r = 0; r < n.length; r++)
            e.setCellFilter(n[r][0], n[r][1], n[r][2] || { options: '' });
          e.filterSpreadSheet();
        }
      },
      clearFilters: mi,
      isFilter: function ts(e, t, n) {
        var r = e._table._ssFilters;
        return r[t] && !!r[t][n];
      },
      calibrateRange: wi,
      isValueActive: bi,
      getFilterMode: yi,
      pasteFilter: Ci,
      getSingleOption: Si,
      getConditions: $i,
      getFilterFunction: Ei,
    }),
    Vi = (function (e) {
      function t() {
        return u(this, t), g(this, d(t).apply(this, arguments));
      }
      return (
        h(t, yr),
        f(t, [
          {
            key: 'open',
            value: function (e) {
              var t = this;
              if (
                ((this.cell = e.cell),
                (this.$mode = e.mode),
                (this.$filter = e.filter),
                !this.cell || this.view.isCellLocked(this.cell.row, this.cell.column))
              )
                return !1;
              if (!this.$dialog) {
                (this.$dialog = webix.ui(this.$init())),
                  this.view._destroy_with_me.push(this.$dialog),
                  this.$dialog.attachEvent('onHide', function () {
                    return t.$hide();
                  });
                var n = this.view.$$('cells');
                n.attachEvent('onScrollY', function () {
                  return t.syncScroll();
                }),
                  n.attachEvent('onScrollX', function () {
                    return t.syncScroll();
                  });
              }
              if (!1 === this.$show(this.$filter.value, e.options)) return this.close();
              this.$dialog.show(this._getTargetNode());
            },
          },
          {
            key: '_getTargetNode',
            value: function () {
              var e = this.view.$$('cells');
              return e.getSpan(this.cell.row, this.cell.column)
                ? e.getSpanNode(this.cell)
                : e.getItemNode(this.cell);
            },
          },
          {
            key: '$show',
            value: function (e, t) {
              var n = this.getList(),
                r = this.getFilter();
              r.config.mode !== this.$mode &&
                (r.define('conditions', this.getConditions(this.$mode)),
                r.define('mode', this.$mode));
              var i = e && e.conditions && e.conditions.type;
              i && !Si(this.$mode, i) && (e = ''),
                n.clearAll(),
                n.data.importData(t),
                (r.config.value = ''),
                r.setValue(webix.copy(e || {}));
            },
          },
          {
            key: '$init',
            value: function () {
              var e = this,
                t = webix.i18n.spreadsheet.labels;
              return {
                view: 'popup',
                css: 'ssheet_filter',
                padding: 7,
                relative: 'right',
                body: {
                  margin: 4,
                  rows: [
                    {
                      view: 'filter',
                      field: 'value',
                      mode: 'text',
                      conditions: this.getConditions('text'),
                      inputs: [
                        'text',
                        {
                          view: 'ssheet-datepicker',
                          timepicker: !0,
                          batch: 'datepicker',
                          on: {
                            onChange: function () {
                              return e.getFilter().applyFilter();
                            },
                          },
                        },
                        {
                          view: 'ssheet-daterangepicker',
                          timepicker: !0,
                          batch: 'daterangepicker',
                          on: {
                            onChange: function () {
                              return e.getFilter().applyFilter();
                            },
                          },
                        },
                      ],
                      template: function (e) {
                        return e.$value || e.value;
                      },
                    },
                    {
                      cols: [
                        {},
                        {
                          view: 'button',
                          label: t.cancel,
                          autowidth: !0,
                          css: 'webix_transparent',
                          on: {
                            onItemClick: function () {
                              return e.close();
                            },
                          },
                        },
                        {
                          view: 'button',
                          label: t.apply,
                          autowidth: !0,
                          css: 'webix_secondary',
                          on: {
                            onItemClick: function () {
                              return e.applyFilter();
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
              };
            },
          },
          {
            key: 'applyFilter',
            value: function () {
              var e = this.getFilter(),
                t = this.$filter.value,
                n = (this.$filter.value = e.getValue());
              (this.$filter.handler = Ei(this.$mode, n)),
                this.view.filterSpreadSheet(),
                this.view.callEvent('onAction', [
                  'apply-filter',
                  { row: this.cell.row, column: this.cell.column, value: t, newValue: n },
                ]),
                this.setCellStyle(this.cell.row, this.cell.column, 'ss_filter_active', bi(n)),
                this.close();
            },
          },
          {
            key: 'setCellStyle',
            value: function (e, t, n, r) {
              var i = this.view.$$('cells'),
                o = this.getSpan(i, e, t);
              o &&
                (r
                  ? -1 == o[3].indexOf(n) && (o[3] += ' ' + n)
                  : (o[3] = o[3].replace(' ' + n, ''))),
                i[r ? 'addCellCss' : 'removeCellCss'](e, t, n);
            },
          },
          {
            key: 'getSpan',
            value: function (e, t, n) {
              var r = e.getSpan()[t];
              if (r) return r[n];
            },
          },
          {
            key: 'getList',
            value: function () {
              return this.getFilter().getChildViews()[2];
            },
          },
          {
            key: 'getFilter',
            value: function () {
              return this.$dialog.getBody().getChildViews()[0];
            },
          },
          {
            key: 'syncScroll',
            value: function () {
              if (this.$dialog.isVisible()) {
                var e = this._getTargetNode(),
                  t = this.view.$$('cells'),
                  n = !1;
                if (e) {
                  var r = webix.html.offset(e),
                    i = webix.html.offset(t.$view.getElementsByClassName('webix_ss_body')[0]),
                    o = r.y - i.y,
                    a = r.x - i.x + r.width;
                  n =
                    o < 0 ||
                    o + r.height > i.height ||
                    a < 0 ||
                    a - r.width > i.width - webix.env.scrollSize;
                }
                !e || n ? this.$dialog.show({ x: -9999, y: -9999 }) : this.$dialog.show(e);
              }
            },
          },
          {
            key: 'getConditions',
            value: function (e) {
              for (var t = webix.i18n.filter, n = $i(e), r = 0; r < n.length; r++)
                n[r].id && (n[r].value = t[n[r].id]);
              return n;
            },
          },
        ]),
        t
      );
    })(),
    Ai = Object.freeze({ action: 'start-filter', DialogBox: Vi }),
    Mi = (function (e) {
      function t() {
        return u(this, t), g(this, d(t).apply(this, arguments));
      }
      return (
        h(t, yr),
        f(t, [
          {
            key: '$show',
            value: function () {
              if (
                ((this.form = this.$dialog.$$('form')),
                (this.list = this.$dialog.$$('list')),
                (this.preview = this.$dialog.$$('preview')),
                (this.cell = this.view.getSelectedId(!0)),
                !this.cell.length)
              )
                return !1;
              this.fillForm(this.view),
                (this.view.$handleSelection = function () {
                  return !1;
                });
            },
          },
          {
            key: '$hide',
            value: function () {
              this.view.$handleSelection = null;
            },
          },
          {
            key: '$init',
            value: function () {
              var i = this,
                t = webix.i18n.spreadsheet,
                e = t.labels,
                n = t.formats,
                r = $e('int'),
                o = [
                  {
                    name: 'zeros',
                    view: 'counter',
                    css: 'webix_ssheet_counter',
                    label: e['decimal-places'],
                    value: 0,
                    batch: 'common',
                  },
                  { name: 'separator', view: 'checkbox', label: e.separator, batch: 'common' },
                  {
                    view: 'richselect',
                    name: 'symbol',
                    label: e['currency-symbol'],
                    options: ye,
                    batch: 'common',
                  },
                  {
                    view: 'formlist',
                    label: e.negative,
                    height: 160,
                    name: 'negative',
                    batch: 'common',
                    css: 'webix_ssheet_format_negative',
                    template: function (e) {
                      if (i.list) {
                        var t = i.getFormat(e.id),
                          n = { css: '' },
                          r = (t = ze(t.fmt, t.delimiters))(-1234.56789, n);
                        return "<span class='" + n.css + "'>" + r + '</span>';
                      }
                    },
                    data: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
                  },
                ],
                a = [
                  {
                    view: 'text',
                    label: e['format-pattern'],
                    name: 'format',
                    labelPosition: 'top',
                    batch: 'custom',
                    placeholder: '[>100]0' + r.groupSign + '000' + r.decimalSign + '00;[>0]None',
                  },
                  {
                    id: 'docs',
                    template:
                      "<a href='https://webix-guides.gitbook.io/spreadsheet-user-guide/formatting_numbers#custom-number-format' target='_blank' class = 'docs'>" +
                      e['format-docs'] +
                      '</a>',
                    borderless: !0,
                    batch: 'custom',
                  },
                ],
                s = [
                  {
                    name: 'date',
                    batch: 'date',
                    view: 'formlist',
                    labelWidth: 90,
                    height: 160,
                    label: e['date-format'],
                    css: 'webix_ssheet_format_date',
                    template: function (e) {
                      return ze(e.value, r)(45e3);
                    },
                    data: [n.dateFormat, n.timeFormat, n.fullDateFormat, n.longDateFormat],
                  },
                ];
              return {
                view: 'ssheet-dialog',
                position: 'center',
                width: 460,
                head: e['format-title'],
                move: !0,
                body: {
                  padding: 0,
                  cols: [
                    {
                      view: 'list',
                      id: 'list',
                      css: 'webix_ssheet_format_type',
                      width: 120,
                      scroll: !1,
                      data: this.getFormats(),
                      select: !0,
                      on: {
                        onSelectChange: function (e) {
                          switch ((i.updateForm(), e[0])) {
                            case 'custom':
                            case 'date':
                              i.form.showBatch(e[0]);
                              break;
                            default:
                              var t = i.form.elements;
                              i.form.showBatch('common'),
                                t.separator['percent' == e[0] ? 'hide' : 'show'](),
                                t.symbol['price' == e[0] ? 'show' : 'hide']();
                          }
                        },
                      },
                    },
                    {
                      view: 'form',
                      id: 'form',
                      height: 340,
                      paddingY: 0,
                      paddingX: 20,
                      elements: [
                        {
                          id: 'preview',
                          template: function (e) {
                            return e.value == t.table['format-error']
                              ? e.value
                              : "<span class ='" + e.css + "'>" + e.value + '</span>';
                          },
                          css: 'webix_ssheet_format_preview',
                          autoheight: !0,
                          borderless: !0,
                        },
                      ].concat(o, a, s),
                      elementsConfig: { labelWidth: 140 },
                      on: {
                        onChange: function () {
                          return i.updateForm();
                        },
                      },
                    },
                  ],
                },
                on: {
                  onSaveClick: function () {
                    return i.okClick();
                  },
                  onCancelClick: function () {
                    return i.closeWin();
                  },
                },
              };
            },
          },
          {
            key: 'okClick',
            value: function () {
              var t = this,
                e = this.list.getSelectedId(),
                n =
                  'custom' == e ? { format: this.form.getValues().format } : this.form.getValues();
              (n.type = e),
                N.set(function () {
                  for (var e = 0; e < t.cell.length; e++)
                    Ae(t.view, t.cell[e].row, t.cell[e].column, n.format, n);
                }),
                this.view.$$('cells').refresh(),
                this.closeWin();
            },
          },
          {
            key: 'closeWin',
            value: function () {
              var e = Z(this.view, this.cell[0].row, this.cell[0].column) || 'common';
              Be(e) ||
                this.view.callEvent('onCommand', [
                  { id: 'toolbar-update', name: 'format', value: e },
                ]),
                this.close();
            },
          },
          {
            key: 'getFormat',
            value: function (e) {
              var t = this.list.getSelectedId(),
                n = this.form.getValues();
              return (
                (n.negative = e || n.negative),
                'custom' != t
                  ? ('date' != t && (n.date = ''), { fmt: He((n = Le(t, n))), delimiters: $e(t) })
                  : { fmt: n.format, delimiters: $e(t) }
              );
            },
          },
          {
            key: 'fillForm',
            value: function (e) {
              var t,
                n = webix.i18n.spreadsheet,
                r = Z(e, this.cell[0].row, this.cell[0].column),
                i = {
                  zeros: 0,
                  separator: 0,
                  negative: 1,
                  date: n.formats.dateFormat,
                  symbol: ye[0].value,
                  format: '',
                },
                o = r || '';
              (i.format = ke(o || 'price')),
                'custom' !=
                  (t = o ? ('string' == o ? (o = 'custom') : _e[o].values.type) : (o = 'price')) &&
                  webix.extend(i, _e[o].values, !0);
              var a = this.view.$$('cells').getItem(this.cell[0].row),
                s = this.cell[0].column;
              (this.value = webix.isUndefined(a[s]) ? '' : a[s]),
                this.form.setValues(i),
                this.list.select(t),
                this.updateForm();
            },
          },
          {
            key: 'updateForm',
            value: function () {
              var e = this.form.elements,
                t = this.getFormat(),
                n = this.value,
                r = '' === n || isNaN(n);
              Ye(t, 'date') && (r || Ze(n))
                ? (n = 45e3)
                : r && !Ye(t, 'string') && (n = 1234.56789);
              var i = { css: '' };
              (n = ze(t.fmt, t.delimiters)(n, i)),
                this.preview.parse({ value: n, css: i.css }),
                e.negative.refresh(),
                e.date.refresh(),
                e.format.setValue(t.fmt);
            },
          },
          {
            key: 'getFormats',
            value: function () {
              var e = webix.i18n.spreadsheet.labels;
              return [
                { id: 'price', value: e.currency },
                { id: 'int', value: e.number },
                { id: 'percent', value: e.percent },
                { id: 'date', value: e.date },
                { id: 'custom', value: e['custom-format'] },
              ];
            },
          },
        ]),
        t
      );
    })(),
    Ii = Object.freeze({ action: 'custom', DialogBox: Mi });
  var zi = (function (e) {
      function t() {
        return u(this, t), g(this, d(t).apply(this, arguments));
      }
      return (
        h(t, yr),
        f(t, [
          {
            key: '_rulesToArr',
            value: function () {
              var e = this.view.conditions.handlers;
              return [
                {
                  value: webix.i18n.spreadsheet.labels['conditional-common'],
                  disabled: !0,
                  $css: 'webix_ssheet_cformats_type',
                },
              ]
                .concat(
                  m(e.date),
                  [
                    {
                      value: webix.i18n.spreadsheet.labels['conditional-text'],
                      disabled: !0,
                      $css: 'webix_ssheet_cformats_type',
                    },
                  ],
                  m(e.text)
                )
                .map(function (e) {
                  return e.value || (e.value = webix.i18n.filter[e.id]), e;
                });
            },
          },
          {
            key: '_getCondition',
            value: function () {
              var r = this,
                e = this.view,
                t = this._getDatalayout().getValue(),
                i = [];
              t.forEach(function (e) {
                var t = [e.condition];
                'between' != e.condition && 'notBetween' != e.condition
                  ? t.push(r._normalizeValue(e.value, e.condition))
                  : t.push([
                      r._normalizeValue(e.value, e.condition),
                      r._normalizeValue(e.value2, e.condition),
                    ]),
                  t.push(e.style);
                for (var n = 0; n < t.length; n++)
                  if ('' === t[n] || (webix.isArray(t[n]) && -1 != t[n].indexOf(''))) return !1;
                i.push(t);
              }),
                e.callEvent('onConditionSet', [i]);
            },
          },
          {
            key: '_safeInt',
            value: function (e) {
              var t = parseFloat(e);
              return t == e ? t : e;
            },
          },
          {
            key: '_setCondition',
            value: function () {
              var n = this,
                e = this.view.conditions.get(this.cell.row, this.cell.column),
                r = [];
              for (
                e &&
                e.forEach(function (e) {
                  var t = {};
                  (t.condition = e[0]),
                    webix.isArray(e[1])
                      ? ((t.value = n._formatValue(e[1][0], t.condition)),
                        (t.value2 = n._formatValue(e[1][1], t.condition)))
                      : (t.value = n._formatValue(e[1], t.condition)),
                    (t.style = e[2]),
                    r.push(t);
                });
                r.length < 3;

              )
                r.push({});
              this._getDatalayout().setValue(r);
            },
          },
          {
            key: '_getDatalayout',
            value: function () {
              return this.$dialog.getBody().getChildViews()[0].getChildViews()[1].getBody();
            },
          },
          {
            key: '_formatValue',
            value: function (e, t) {
              return (t && this._isNotDateRule(t)) || !this.editFormat || '' === e || '=' == e[0]
                ? e.toString()
                : ((e = x(e)), this.editFormat(e));
            },
          },
          {
            key: '_normalizeValue',
            value: function (e, t) {
              this._isNotDateRule(t) ||
                (this.editFormat
                  ? isNaN(e)
                    ? '=' != e[0] &&
                      ((e = webix.Date.strToDate(webix.i18n.spreadsheet.formats.parseDateTime)(e)),
                      (e = isNaN(e) ? '' : r(e)))
                    : (e = Ze(e) ? '' : e)
                  : (e = this._safeInt(e, 10)));
              return e;
            },
          },
          {
            key: '_isNotDateRule',
            value: function (t) {
              return (
                'equal' != t &&
                'notEqual' != t &&
                ve(this.view.conditions.handlers.text, function (e) {
                  return e.id == t;
                })
              );
            },
          },
          {
            key: 'okClick',
            value: function () {
              this._getCondition(), this.close();
            },
          },
          {
            key: '$show',
            value: function () {
              var i = this;
              if (((this.cell = this.view.getSelectedId()), !this.cell)) return !1;
              var t = ht(this.view, this.cell.row, this.cell.column);
              'date' == t && (this.editFormat = Qe(this.view, this.cell.row, this.cell.column)),
                this.$dialog.queryView('text', 'all').forEach(function (e) {
                  e.define({ placeholder: 'date' == t ? i._formatValue(45e3) : '' }), e.refresh();
                }),
                (this.view.$handleSelection = function (e, t, n, r) {
                  return i.activeValue && n == r && i.activeValue.setValue('=' + n), !1;
                }),
                this._setCondition();
            },
          },
          {
            key: '$hide',
            value: function () {
              (this.view.$handleSelection = null),
                delete this.editFormat,
                this._getDatalayout().clearAll();
            },
          },
          {
            key: 'getRows',
            value: function (e) {
              var i = this,
                r = this;
              return {
                view: 'form',
                padding: 0,
                borderless: !0,
                css: 'webix_ssheet_cformats',
                elements: [
                  {
                    margin: 10,
                    padding: { right: 4 },
                    cols: [
                      {
                        view: 'richselect',
                        name: 'style',
                        width: 120,
                        placeholder: webix.i18n.spreadsheet.labels['conditional-style'],
                        css: 'webix_ssheet_cformat_select',
                        suggest: {
                          padding: 0,
                          borderless: !0,
                          css: 'webix_ssheet_cformat_list',
                          body: {
                            template: function (e) {
                              var t = 'webix_ssheet_cformat ' + e.css;
                              return '<div class="'.concat(t, '">').concat(e.name, '</div>');
                            },
                            data: e,
                          },
                        },
                      },
                      {
                        view: 'richselect',
                        width: 150,
                        name: 'condition',
                        placeholder: webix.i18n.spreadsheet.labels['conditional-operator'],
                        on: {
                          onChange: function (e) {
                            var t = this.getFormView().elements;
                            if (r.editFormat) {
                              if (r._isNotDateRule(e)) t.value.define({ placeholder: '' });
                              else {
                                var n = r._normalizeValue(t.value.getValue(), e);
                                t.value.setValue(r._formatValue(n, e)),
                                  t.value.define({ placeholder: r._formatValue(45e3) });
                              }
                              t.value.refresh();
                            }
                            'between' == e || 'notBetween' == e ? t.value2.show() : t.value2.hide();
                          },
                        },
                        suggest: {
                          view: 'ssheet-form-suggest',
                          body: { data: this._rulesToArr() },
                        },
                      },
                      {
                        cols: [
                          {
                            view: 'text',
                            on: {
                              onFocus: function (e) {
                                i.activeValue = e;
                              },
                              onBlur: function (e) {
                                var t = e.getValue();
                                if ('' !== t) {
                                  var n = e.getFormView().elements.condition.getValue();
                                  (t = i._normalizeValue(t, n)), e.setValue(i._formatValue(t, n));
                                }
                              },
                            },
                            name: 'value',
                          },
                          {
                            view: 'text',
                            name: 'value2',
                            on: {
                              onFocus: function (e) {
                                i.activeValue = e;
                              },
                              onBlur: function (e) {
                                var t = e.getValue();
                                if ('' !== t) {
                                  var n = e.getFormView().elements.condition.getValue();
                                  (t = i._normalizeValue(t, n)), e.setValue(i._formatValue(t, n));
                                }
                              },
                            },
                            hidden: !0,
                          },
                        ],
                      },
                      {
                        view: 'icon',
                        css: 'webix_ssheet_cformat_icon',
                        icon: 'wxi-trash',
                        click: function (e) {
                          var t = webix.$$(e).getFormView(),
                            n = i._getDatalayout();
                          n.getValue();
                          var r = n.getChildViews().indexOf(t);
                          n.remove(n.getIdByIndex(r)), n.count() < 3 && n.add({});
                        },
                      },
                    ],
                  },
                ],
              };
            },
          },
          {
            key: '$init',
            value: function () {
              var t = this,
                e = webix.skin.$active.layoutMargin.form;
              return {
                view: 'ssheet-dialog',
                head: webix.i18n.spreadsheet.labels['conditional-format'],
                position: 'center',
                width: 770,
                move: !0,
                margin: e,
                body: {
                  margin: 0,
                  rows: [
                    {
                      height: 36,
                      padding: { left: 12 },
                      cols: [
                        { view: 'label', width: 131, label: webix.i18n.spreadsheet.labels.display },
                        {
                          view: 'label',
                          width: 161,
                          label: webix.i18n.spreadsheet.labels.condition,
                        },
                        { view: 'label', label: webix.i18n.spreadsheet.labels.value },
                        {
                          view: 'icon',
                          css: 'webix_ssheet_cformat_icon',
                          icon: 'wxi-plus-circle',
                          click: function () {
                            var e = t._getDatalayout();
                            e.getValue(), e.add({});
                          },
                        },
                        { width: 4 + webix.env.scrollSize },
                      ],
                    },
                    {
                      view: 'scrollview',
                      maxHeight: 3 * webix.skin.$active.inputHeight + 4,
                      borderless: !0,
                      scroll: 'y',
                      body: {
                        view: 'datalayout',
                        padding: 0,
                        borderless: !0,
                        rows: [
                          this.getRows(
                            (function n(e) {
                              return e.map(function (e) {
                                return (e.id = e.css), e;
                              });
                            })(this.view.config.conditionStyle)
                          ),
                        ],
                      },
                    },
                  ],
                },
                on: {
                  onSaveClick: function () {
                    return t.okClick();
                  },
                  onCancelClick: function () {
                    return t.close();
                  },
                },
              };
            },
          },
        ]),
        t
      );
    })(),
    Di = Object.freeze({ action: 'conditional-format', DialogBox: zi }),
    Ri = (function (e) {
      function t() {
        return u(this, t), g(this, d(t).apply(this, arguments));
      }
      return (
        h(t, yr),
        f(t, [
          {
            key: '$show',
            value: function (e, t) {
              (this.view.$handleSelection = function () {
                return !1;
              }),
                t.elements.sheets.setValue(this.getSheets()),
                t.elements.filename.setValue('Data'),
                t.elements.filename.getInputNode().select();
            },
          },
          {
            key: '$hide',
            value: function () {
              this.view.$handleSelection = null;
            },
          },
          {
            key: '$init',
            value: function () {
              var e = this;
              return {
                view: 'ssheet-dialog',
                head: webix.i18n.spreadsheet.labels['export-title'],
                move: !0,
                position: 'center',
                body: {
                  view: 'form',
                  elements: [
                    {
                      view: 'text',
                      name: 'filename',
                      placeholder: webix.i18n.spreadsheet.labels['export-name'],
                    },
                    { view: 'multicheckbox', name: 'sheets', css: 'webix_ssheet_multicheckbox' },
                  ],
                },
                on: {
                  onSaveClick: function () {
                    return e.okClick();
                  },
                  onCancelClick: function () {
                    return e.close();
                  },
                },
              };
            },
          },
          {
            key: 'getSheets',
            value: function () {
              for (var e = this.view, t = e._sheets, n = [], r = 0; r < t.length; r++) {
                var i = t[r].state;
                'veryHidden' != i &&
                  n.push({
                    name: t[r].name,
                    hidden: 'hidden' == i,
                    active: e._activeSheet === t[r].name ? 1 : 0,
                  });
              }
              return n;
            },
          },
          {
            key: 'okClick',
            value: function () {
              var e = this.$dialog.getBody().getValues();
              webix.toExcel(this.view, e), this.close();
            },
          },
        ]),
        t
      );
    })(),
    Oi = Object.freeze({ action: 'excel-export', DialogBox: Ri }),
    Ti = (function (e) {
      function t() {
        return u(this, t), g(this, d(t).apply(this, arguments));
      }
      return (
        h(t, yr),
        f(t, [
          {
            key: '$show',
            value: function (e, r) {
              if (!this.view.getSelectedId()) return !1;
              this.restoreValue(r) || r.clear(),
                r.elements.name.focus(),
                (this.view.$handleSelection = function (e, t, n) {
                  return r.elements.url.setValue('#' + n), !1;
                });
            },
          },
          {
            key: '$hide',
            value: function () {
              this.view.$handleSelection = null;
            },
          },
          {
            key: 'restoreValue',
            value: function (e) {
              var t = this.view.getSelectedId();
              if (t) {
                var n = this.view.getCellValue(t.row, t.column);
                if (n && 'string' == typeof n && 0 === n.indexOf('=HYPERLINK')) {
                  var r = n.split('"');
                  return e.setValues({ name: r[3] || '', url: r[1] || '' }), !0;
                }
              }
              return !1;
            },
          },
          {
            key: '$init',
            value: function () {
              var e = this;
              return {
                view: 'ssheet-dialog',
                head: webix.i18n.spreadsheet.labels['link-title'],
                move: !0,
                position: 'center',
                body: {
                  view: 'form',
                  elements: [
                    {
                      view: 'text',
                      name: 'name',
                      placeholder: webix.i18n.spreadsheet.labels['link-name'],
                    },
                    {
                      view: 'text',
                      name: 'url',
                      placeholder: webix.i18n.spreadsheet.labels['link-url'],
                    },
                  ],
                },
                on: {
                  onSaveClick: function () {
                    return e.okClick();
                  },
                  onCancelClick: function () {
                    return e.close();
                  },
                },
              };
            },
          },
          {
            key: 'okClick',
            value: function () {
              var e = this.view.getSelectedId(),
                t = this.$dialog.getBody().getValues(),
                n = '';
              t.url &&
                ((t.name = t.name || t.url),
                /^(#|(https?:\/\/))/i.test(t.url) || (t.url = 'http://' + t.url),
                (n = '=HYPERLINK("'.concat(t.url, '","').concat(t.name, '")'))),
                this.view.setCellValue(e.row, e.column, n),
                this.view.refresh(),
                this.close();
            },
          },
        ]),
        t
      );
    })(),
    Ni = Object.freeze({ action: 'add-link', DialogBox: Ti });
  function Pi(o, a, s) {
    var e = [],
      l = {},
      t = o._activeSheet,
      u = (function n(y, C, S, $, E) {
        var k = webix.html.create('div', { class: 'webix_ssheet_print' });
        (C.xCorrection = 1),
          (C.header = C.header || !1),
          (C.trim = !!webix.isUndefined(C.trim) || C.trim),
          (C.sheetnames = !!webix.isUndefined(C.sheetnames) || C.sheetnames);
        var V = y.$index,
          A = Ui(C),
          e = C.sheets,
          t = C.data;
        e && 'current' != t && 'selection' != t
          ? 'string' == typeof e
            ? (e = [e])
            : (!0 !== e && 'all' != t) ||
              (e = y._sheets.map(function (e) {
                return e.name;
              }))
          : (e = [S]);
        return (
          (e = e.filter(function (e) {
            return Ut(y, e);
          })).forEach(function (e, t) {
            y.$index = V + '_' + t;
            var n = y.$$('cells');
            y.showSheet(e);
            var r = y._zoom;
            y.ignoreUndo(function () {
              return y.zoom(1);
            });
            var i = 'wss_' + y.$index;
            y._print = !0;
            var o = n.$customPrint(C, !0);
            delete y._print;
            var a = o.firstChild;
            if (a) {
              for (
                var s = T(a.children, 2),
                  l = s[0],
                  u = s[1],
                  c = l.childElementCount,
                  f = C.sheetnames ? 20 : 0,
                  h = f,
                  d = 1;
                d <= c;
                d++
              )
                h += n.getItem(d).$height || n.config.rowHeight;
              if (h > A.height / 4)
                for (var v = c - 1; 0 <= v; v--)
                  u.firstChild
                    ? webix.html.insertBefore(l.children[v], u.firstChild)
                    : u.appendChild(l.children[v]);
              if (f) {
                var g = webix.html.create(
                  'tr',
                  { class: 'webix_ssheet_sheetname' },
                  '<td>'.concat(e, ':</td>')
                );
                l.firstChild ? webix.html.insertBefore(g, l.firstChild) : l.appendChild(g);
              }
              var p = o.firstChild;
              p && (e != S && webix.html.removeCss(p, 'wss_' + V), webix.html.addCss(p, i)),
                k.appendChild(o);
            }
            if (C.external)
              for (var m in y.views._pull) {
                var w = y.views._pull[m];
                if ('image' == w.type)
                  !(function () {
                    var e = webix.html.create('IMG', {
                        src: w.data,
                        width: (w.config.width || 500) + 'px',
                        height: (w.config.height || 300) + 'px',
                      }),
                      t = webix.promise.defer();
                    $.push(t),
                      (e.onload = function () {
                        return t.resolve();
                      }),
                      k.appendChild(e);
                  })();
                else {
                  var b = webix.$$(m).getBody();
                  if (b.$customPrint) {
                    var x = b.$customPrint({ size: C.size }, !0);
                    x.then ? ((E[$.length] = k.childElementCount), $.push(x)) : k.appendChild(x);
                  } else k.appendChild(Fi(webix.$$(m).getBody()));
                }
              }
            if (
              t + 1 < y._sheets.length &&
              (a || (C.external && Object.keys(y.views._pull).length))
            ) {
              var _ = webix.html.create('DIV', { class: 'webix_print_pagebreak' });
              k.appendChild(_);
            }
            (y.$index = V),
              y.ignoreUndo(function () {
                return y.zoom(r);
              });
          }),
          k
        );
      })(o, a, t, e, l);
    o.showSheet(t);
    var c = webix.promise.defer();
    return (
      webix.promise.all(e).then(function (e) {
        for (
          var t = Object.keys(l).sort(o.$$('cells').data.sorting.as['int']), n = t.length - 1;
          0 <= n;
          n--
        ) {
          var r = t[n];
          u.insertBefore(e[r], u.childNodes[l[r]]);
        }
        if (s) return c.resolve(u);
        webix.html.insertBefore(u, a.docFooter, document.body),
          window.print(),
          (function i(n, e) {
            webix.html.remove(e),
              n._sheets.forEach(function (e, t) {
                webix.html.removeStyle('.wss_' + n.$index + '_' + t);
              });
          })(o, u),
          c.resolve();
      }),
      c
    );
  }
  function Fi(e) {
    var t = e.$view.cloneNode(!0),
      n = e.$view.getElementsByTagName('canvas');
    if (n.length)
      for (var r = n.length - 1; 0 <= r; r--) {
        t.getElementsByTagName('canvas')[r].getContext('2d').drawImage(n[r], 0, 0);
      }
    var i = webix.html.create('div', { class: 'webix_ssheet_ui' });
    return i.appendChild(t), i;
  }
  function Ui(t) {
    var e = webix.env.printSizes.find(function (e) {
        return e.id == t.paper;
      }),
      n = 'landscape' == t.mode,
      r = t.margin ? 2 * webix.env.printMargin : 0;
    return {
      width: e[n ? 'height' : 'width'] * webix.env.printPPI - r,
      height: e[n ? 'width' : 'height'] * webix.env.printPPI - r,
    };
  }
  function Bi(e, t) {
    if (!t || e._printBorders.$render) {
      for (
        var n = { rows: {}, cols: {} },
          r = e.$$('cells'),
          i = e._printBorders,
          o = Ui(i),
          a = i.sheetnames ? 20 : 0,
          s = r.config.topSplit,
          l = a,
          u = 1;
        u <= s;
        u++
      )
        l += (r.getItem(u).$height || r.config.rowHeight) / e._zoom;
      l > o.height / 4 && ((s = 0), (l = a));
      for (var c = l, f = s + 1; f <= e.config.rowCount; f++) {
        var h = (r.getItem(f).$height || r.config.rowHeight) / e._zoom;
        c + h > o.height && ((c = l), (n.rows[1 == f ? f : f - 1] = 1)), (c += h);
      }
      if ('page' != i.fit)
        for (var d = 0, v = 1; v <= e.config.columnCount; v++) {
          var g = (r.getColumnConfig(v).width || r.config.columnWidth) / e._zoom;
          d + g > o.width && ((d = 0), (n.cols[1 == v ? v : v - 1] = 1)), (d += g);
        }
      (e._printBorders.$render = n), e.refresh();
    }
  }
  var Li = Object.freeze({
      print: Pi,
      init: function ns(i) {
        (i.$customPrint = function (e, t) {
          return Pi(i, e, t);
        }),
          (i._printBorders = {
            paper: webix.env.printSizes.find(function (e) {
              return 'a4' == e.id;
            })
              ? 'a4'
              : webix.env.printSizes[0].id,
            fit: 'page',
            mode: 'landscape',
            margin: 1,
            sheetnames: 1,
          }),
          i.attachEvent('onUndo', function (e, t, n, r) {
            'print-borders' == e && i.showPrintBorders(r);
          }),
          i.attachEvent('onAfterSheetShow', function () {
            return Bi(i, !0);
          }),
          i.attachEvent('onChange', function () {
            return Bi(i, !0);
          });
      },
      showBorders: Bi,
    }),
    Hi = (function (e) {
      function t() {
        return u(this, t), g(this, d(t).apply(this, arguments));
      }
      return (
        h(t, yr),
        f(t, [
          {
            key: '$show',
            value: function (e, t) {
              var n = t.elements.sheets.getList();
              n.clearAll(),
                n.parse(this.getSheets(this.view)),
                t.setValues({ data: 'full', sheets: this.view.getActiveSheet() }, !0);
            },
          },
          {
            key: '$init',
            value: function () {
              var t,
                e = this,
                n = webix.i18n.spreadsheet.labels,
                r = webix.env.printSizes.map(function (e) {
                  return 'a4' == e.id && (t = 'a4'), (e.value = n['page-' + e.id] || e.id), e;
                });
              return (
                t || (t = r[0].id),
                {
                  view: 'ssheet-dialog',
                  head: n['print-title'],
                  move: !0,
                  modal: !0,
                  width: 580,
                  position: 'center',
                  buttons: !1,
                  on: {
                    onHide: function () {
                      webix.extend(e.view._printBorders, e.getValues(), !0), Bi(e.view, !0);
                    },
                  },
                  body: {
                    view: 'form',
                    elementsConfig: { labelWidth: 0 },
                    elements: [
                      { type: 'section', template: n['print-settings'] },
                      {
                        cols: [
                          {
                            view: 'radio',
                            name: 'data',
                            vertical: !0,
                            options: [
                              { id: 'full', value: n.sheets },
                              { id: 'selection', value: n.selection },
                            ],
                            on: {
                              onChange: function (e) {
                                var t = this.getFormView().elements,
                                  n = t.sheets;
                                'full' == e ? (t.sheetnames.setValue(1), n.enable()) : n.disable();
                              },
                            },
                          },
                          {
                            padding: { right: 30 },
                            rows: [
                              {
                                name: 'sheets',
                                view: 'multiselect',
                                width: 160,
                                stringResult: !1,
                                suggest: { selectAll: !0, body: { data: [] } },
                              },
                              {},
                            ],
                          },
                          {
                            rows: [
                              {
                                view: 'checkbox',
                                name: 'sheetnames',
                                value: 1,
                                labelRight: n['sheet-names'],
                              },
                              { view: 'checkbox', name: 'borderless', labelRight: n.borderless },
                              { view: 'checkbox', name: 'skiprows', labelRight: n['skip-rows'] },
                              { view: 'checkbox', name: 'margin', labelRight: n.margin },
                              { view: 'checkbox', name: 'external', labelRight: n['external-ui'] },
                            ],
                          },
                        ],
                      },
                      { type: 'section', template: n['print-paper'] },
                      { view: 'radio', name: 'paper', value: t, options: r },
                      { type: 'section', template: n['print-layout'] },
                      {
                        rows: [
                          {
                            view: 'radio',
                            name: 'fit',
                            value: 'page',
                            options: [
                              { id: 'page', value: n['page-width'] },
                              { id: 'data', value: n['page-actual'] },
                            ],
                          },
                          {
                            view: 'radio',
                            name: 'mode',
                            value: 'landscape',
                            options: [
                              { id: 'portrait', value: n['page-portrait'] },
                              { id: 'landscape', value: n['page-landscape'] },
                            ],
                          },
                        ],
                      },
                      {
                        cols: [
                          {},
                          {
                            view: 'button',
                            css: 'ssheet_cancel_button',
                            hotkey: 'esc',
                            value: n.cancel,
                            autowidth: !0,
                            click: function () {
                              return e.close();
                            },
                          },
                          {
                            view: 'button',
                            value: n['print-borders'],
                            autowidth: !0,
                            click: function () {
                              return e.printPreview();
                            },
                          },
                          {
                            view: 'button',
                            value: n.print,
                            hotkey: 'enter',
                            autowidth: !0,
                            click: function () {
                              return e.okClick();
                            },
                          },
                        ],
                      },
                    ],
                  },
                }
              );
            },
          },
          {
            key: 'getValues',
            value: function () {
              var e = this.$dialog.getBody().getValues({ disabled: !1 });
              return (e.margin = e.margin ? 0 : {}), e;
            },
          },
          {
            key: 'printPreview',
            value: function () {
              this.close(), this.view.showPrintBorders(!0);
            },
          },
          {
            key: 'getSheets',
            value: function (t) {
              return t._sheets
                .map(function (e) {
                  return { value: e.name, id: e.name };
                })
                .filter(function (e) {
                  return Ut(t, e.id);
                });
            },
          },
          {
            key: 'okClick',
            value: function () {
              var e = this.$dialog.getBody().getValues({ disabled: !1 });
              (e.margin = e.margin ? 0 : {}), this.close(), webix.print(this.view, e);
            },
          },
        ]),
        t
      );
    })(),
    ji = Object.freeze({ action: 'print', DialogBox: Hi }),
    Wi = (function (e) {
      function t() {
        return u(this, t), g(this, d(t).apply(this, arguments));
      }
      return (
        h(t, yr),
        f(t, [
          {
            key: 'open',
            value: function (e) {
              var t = this;
              if (
                ((this.cell = e.cell ? e.cell : this.view.getSelectedId()),
                !this.cell ||
                  (this.view.isCellLocked(this.cell.row, this.cell.column) && !e.viewonly) ||
                  !this.view.callEvent('onBeforeCommentShow', [
                    this.cell.row,
                    this.cell.column,
                    !e.viewonly,
                  ]))
              )
                return !1;
              (this.view.comments._activeComment = { editStatus: !e.viewonly, cell: this.cell }),
                this.$dialog ||
                  ((this.$dialog = webix.ui(this.$init())),
                  this.view._destroy_with_me.push(this.$dialog),
                  (this.view.comments.commentsView = this.$dialog),
                  this.$dialog.attachEvent('onHide', function () {
                    return t.$hide();
                  }),
                  this.view.attachEvent('onCommentHide', function () {
                    return t.$dialog.hide();
                  }));
              var n = this.$dialog.getBody(),
                r = this.view.$$('cells').getSpan(this.cell.row, this.cell.column),
                i = r ? { row: this.cell.row, column: 1 * r[1] + r[2] - 1 } : this.cell;
              webix.delay(function () {
                t.$dialog.show(t.view.$$('cells').getItemNode(i)), t._setComment();
              }),
                !1 === this.$show(this.$dialog, n) && this.close();
            },
          },
          {
            key: '$show',
            value: function () {
              (this.textarea = this.$dialog.queryView({ view: 'textarea' })),
                (this.template = this.$dialog.queryView({ view: 'template' }));
            },
          },
          {
            key: '$init',
            value: function () {
              var e = this;
              return {
                view: 'popup',
                css: 'ssheet_comments',
                minWidth: 250,
                minHeight: 150,
                relative: 'right',
                resize: !0,
                on: {
                  onViewResize: function () {
                    e.$dialog.hide(),
                      e.$dialog.show(),
                      e.textarea.isVisible() && e.textarea.focus();
                  },
                },
                body: {
                  animate: !1,
                  cells: [
                    {
                      view: 'template',
                      css: 'ssheet_comment_view',
                      borderless: !0,
                      scroll: 'auto',
                      onClick: {
                        ssheet_comment_view: function () {
                          e.view.config.readonly ||
                            e.view.isCellLocked(e.cell.row, e.cell.column) ||
                            e.showInput(e.view.comments.get(e.cell.row, e.cell.column));
                        },
                      },
                    },
                    {
                      view: 'textarea',
                      on: {
                        onChange: function () {
                          e.addComment();
                        },
                        onFocus: function () {
                          e.view.comments._activeComment = { editStatus: !0, cell: e.cell };
                        },
                        onBlur: function () {
                          (e.view.comments._activeComment = {}), e.$dialog.hide();
                        },
                      },
                    },
                  ],
                },
              };
            },
          },
          {
            key: '_setComment',
            value: function () {
              var e = this.view.comments.get(this.cell.row, this.cell.column);
              this.view.comments._activeComment.editStatus
                ? this.showInput(e)
                : this.showTemplate(e);
            },
          },
          {
            key: 'showTemplate',
            value: function (e) {
              this.template.show(), this.template.setHTML(e);
            },
          },
          {
            key: 'showInput',
            value: function (e) {
              var t = this;
              this.view.$$('cells').select(this.cell.row, this.cell.column),
                webix.delay(function () {
                  t.changeTextarea(e), t.textarea.show(), t.textarea.focus();
                });
            },
          },
          {
            key: 'addComment',
            value: function () {
              this.view.comments.add(this.cell.row, this.cell.column, this.textarea.getValue());
            },
          },
          {
            key: 'changeTextarea',
            value: function (e) {
              this.textarea.blockEvent(),
                this.textarea.setValue(e || ''),
                this.textarea.unblockEvent();
            },
          },
        ]),
        t
      );
    })(),
    qi = Object.freeze({ action: 'add-comment', DialogBox: Wi }),
    Xi = (function (e) {
      function t() {
        return u(this, t), g(this, d(t).apply(this, arguments));
      }
      return (
        h(t, yr),
        f(t, [
          {
            key: 'open',
            value: function (e) {
              (this.group = e.group),
                (this.header = e.value),
                yr.prototype.open.apply(this, arguments);
            },
          },
          {
            key: '$show',
            value: function () {
              var e = this.view.getSelectedId();
              if (!e) return !1;
              this.view.$handleSelection = function () {
                return !1;
              };
              var t = this.$dialog.getBody().elements;
              (this.type = t.type),
                (this.size = t.size),
                this.$dialog.getHead().getChildViews()[0].setHTML(this.header);
              var n,
                r = this.view.$$('cells');
              (n =
                'row' == this.group
                  ? r.getItem(e.row).$height || r.config.rowHeight
                  : r.getColumnConfig(e.column).width || r.config.columnWidth),
                (n /= this.view._zoom),
                (this.type.getOption(1).value =
                  webix.i18n.spreadsheet.labels['row' == this.group ? 'height' : 'width']),
                this.type.setValue(1),
                this.type.refresh(),
                this.size.setValue(Math.ceil(n)),
                this.size.focus();
            },
          },
          {
            key: '$hide',
            value: function () {
              this.view.$handleSelection = null;
            },
          },
          {
            key: 'okClick',
            value: function () {
              var e = this.type.getValue(),
                t = 'auto';
              1 == e
                ? (t = 1 * this.size.getValue())
                : 3 == e &&
                  (t =
                    this.view.$$('cells').config[
                      'row' == this.group ? 'rowHeight' : 'columnWidth'
                    ]),
                'row' == this.group
                  ? this.view.setRowHeight(null, t)
                  : this.view.setColumnWidth(null, t),
                this.close();
            },
          },
          {
            key: '$init',
            value: function () {
              var t = this,
                e = webix.i18n.spreadsheet.labels;
              return {
                view: 'ssheet-dialog',
                position: 'center',
                width: 300,
                move: !0,
                body: {
                  padding: 0,
                  cols: [
                    {
                      view: 'radio',
                      name: 'type',
                      vertical: !0,
                      optionHeight: 40,
                      on: {
                        onChange: function (e) {
                          1 == e ? t.size.enable() : t.size.disable();
                        },
                      },
                      options: [
                        { id: 1, value: '' },
                        { id: 2, value: e['fit-content'] },
                        { id: 3, value: e['default-size'] },
                      ],
                    },
                    { rows: [{ view: 'text', name: 'size', width: 120 }] },
                  ],
                },
                on: {
                  onSaveClick: function () {
                    return t.okClick();
                  },
                  onCancelClick: function () {
                    return t.close();
                  },
                },
              };
            },
          },
        ]),
        t
      );
    })(),
    Gi = [
      kr,
      $r,
      si,
      ui,
      fi,
      Ai,
      Ii,
      Di,
      Oi,
      Ni,
      ji,
      qi,
      Object.freeze({ action: 'resize', DialogBox: Xi }),
    ];
  function Yi(e, t, n) {
    Rr(function () {
      (e.$handleSelection = null),
        e.parse(t),
        n && (n.sheet && e.showSheet(n.sheet), e._table.scrollTo(n.x, n.y));
    });
  }
  var Ki = Object.freeze({
    init: function rs(s) {
      s.attachEvent('onCommand', function (e, t, n) {
        if ('add' == e.id || 'del' == e.id) {
          var r = s._table.getSelectArea();
          !r || (t && n) || ((t = r.start), (n = r.end)),
            t &&
              n &&
              ('column' == e.group &&
                'add' == e.id &&
                E(s.config.columnCount + (n.column - t.column) + 1),
              N.set(function () {
                !(function S(e, t, n, r) {
                  var i,
                    o = r._table.getSelectArea(),
                    a = r._table.getScrollState(),
                    s = 'del' == e.id,
                    l = r.serialize({ sheets: s, viewIds: !0 }),
                    u = webix.copy(l),
                    c = { value: l, newValue: u };
                  s ||
                    webix.extend(
                      c,
                      ($((i = {}), e.group, t[e.group]),
                      $(i, 'extra', { count: n.row - t.row + 1 }),
                      i)
                    );
                  var f = s
                      ? ve(u, function (e) {
                          return e.name == r.getActiveSheet();
                        }).content
                      : u,
                    h = [],
                    d = f.spans;
                  for (var v in d) {
                    var g = Un(d[v], e, t, n, 0, f.data, h);
                    (g[2] <= 0 || g[3] <= 0) && d.splice(v, 1);
                  }
                  var p = (function w(e, t, n) {
                    var r = e.group,
                      i = 'add' == e.id ? 1 : 'del' == e.id ? -1 : 0;
                    return (
                      i &&
                        ('row' == r && (i += i * (n.row - t.row)),
                        'column' == r && (i += i * (n.column - t.column))),
                      { name: r, inc: i }
                    );
                  })(e, t, n);
                  Dr(function () {
                    r.callEvent('onAction', [
                      'before-grid-change',
                      { name: p.name, inc: p.inc, data: f, start: t },
                    ]);
                  }, r),
                    'column' == e.group
                      ? s
                        ? (function b(e, t, n, r) {
                            var i = n.column - t.column + 1;
                            if (r.config.columnCount === i) {
                              if (t.column == n.column) return;
                              n.column--, i--;
                            }
                            r._mPage.removeColumn(t.column - 1, i),
                              (r.config.columnCount -= i),
                              r.callEvent('onColumnOperation', [e.id, t.column, n.column]);
                          })(e, t, n, r)
                        : (function x(e, t, n, r) {
                            var i = n.column - t.column + 1;
                            r._mPage.addColumn(t.column - 1, i),
                              (r.config.columnCount += i),
                              r.callEvent('onColumnOperation', [e.id, t.column, n.column]);
                          })(e, t, n, r)
                      : 'row' == e.group &&
                        (s
                          ? (function _(e, t, n, r) {
                              var i = n.row - t.row + 1;
                              if (r.config.rowCount === i) {
                                if (t.row == n.row) return;
                                n.row--, i--;
                              }
                              r._mPage.removeRow(t.row - 1, i),
                                (r.config.rowCount -= i),
                                r.callEvent('onRowOperation', [e.id, t.row, n.row]);
                            })(e, t, n, r)
                          : (function y(e, t, n, r) {
                              var i = n.row - t.row + 1;
                              r._mPage.addRow(t.row - 1, i),
                                (r.config.rowCount += i),
                                r.callEvent('onRowOperation', [e.id, t.row, n.row]);
                            })(e, t, n, r));
                  var m = r.serialize();
                  (f.data = m.data),
                    (f.ranges = m.ranges),
                    h.forEach(function (e) {
                      f.data.push(e);
                    }),
                    r.callEvent('onAction', ['grid-change', c]),
                    Dr(function () {
                      Yi(r, f, a);
                    }, r),
                    o &&
                      (o = (function C(e, t) {
                        var n = t.config,
                          r = n.rowCount,
                          i = n.columnCount;
                        if (
                          (1 * e.start.row > r && (e.start.row = r),
                          1 * e.end.row > r && (e.end.row = r),
                          1 * e.start.column > i && (e.start.column = i),
                          1 * e.end.column > i && (e.end.column = i),
                          t.isRowVisible(e.start.row) &&
                            t.isRowVisible(e.end.row) &&
                            t.isColumnVisible(e.start.column) &&
                            t.isColumnVisible(e.end.column))
                        )
                          return e;
                      })(o, r)) &&
                      r.$$('cells').addSelectArea(o.start, o.end);
                })(e, t, n, s);
              }));
        }
      }),
        s.attachEvent('onUndo', function (e, t, n, r, i, o) {
          if ('grid-change' == e) {
            var a = s._table.getScrollState();
            o
              ? i
                ? s._mPage[t ? 'addRow' : 'addColumn']((t || n) - 1, o.count)
                : s._mPage[t ? 'removeRow' : 'removeColumn']((t || n) - 1, o.count)
              : (a.sheet = s.getActiveSheet()),
              Yi(s, r, a);
          }
        });
    },
  });
  function Zi(e) {
    e._table._ssEditors = {};
  }
  function Qi(e, t) {
    e._table.editStop(),
      z(t, e, function (e, t) {
        var n = e._table._ssEditors[t.row];
        n &&
          n[t.column] &&
          (delete n[t.column],
          e._table.removeCellCss(t.row, t.column, 'ss_editor'),
          Nn(e, t.row, t.column, 'ss_editor', !1));
      });
  }
  function Ji(e, t, n, r, i) {
    var o = t.dropdown;
    e.setCellEditor(n, r, o), 1 === i && e.setCellEditor(t.row, t.col, {});
  }
  var eo,
    to,
    no,
    ro,
    io,
    oo,
    ao = Object.freeze({
      init: function is(a) {
        var e = a._table;
        a.attachEvent('onReset', function () {
          return Zi(a);
        }),
          Zi(a),
          e.attachEvent('onBeforeEditStart', function (e) {
            var t = this.getColumnConfig(e.column);
            if (this._ssEditors[e.row]) {
              var n = this._ssEditors[e.row][e.column];
              n &&
                (webix.extend(t, n, !0),
                webix.extend(t, { row: a.getRow(e.row) }, !0),
                n.options &&
                  ('string' == typeof n.options
                    ? (t.options = di(a, n.options, { unique: !0, order: !0, empty: n.empty }))
                    : webix.isArray(n.options) &&
                      (t.options = di(a, n.options, { empty: n.empty })),
                  t.collection && (t.collection.clearAll(), t.collection.parse(t.options))));
            }
          }),
          e.attachEvent('onBeforeEditStop', function (e, t, n) {
            if (!n && t.getFormat) {
              var r = t.getValue(),
                i = t.getFormat(r);
              N.set(function () {
                a.setCellValue(t.row, t.column, r),
                  i ? Ae(a, t.row, t.column, ke(i)) : Me(a, t.row, t.column);
              });
              var o = a.getSelectedId();
              o &&
                o.row == t.row &&
                o.column == t.column &&
                ((i = Be((i = i || 'common')) ? 'custom' : i),
                a.callEvent('onCommand', [{ id: 'toolbar-update', name: 'format', value: i }]));
            }
          }),
          e.attachEvent('onAfterEditStop', function (e, t) {
            var n = this.getColumnConfig(t.column);
            (n.editor = 'text'), delete n.popup, delete n.$popup, delete n.row;
          }),
          a.attachEvent('onUndo', function (e, t, n, r) {
            'dropdown' == e && a.setCellEditor(t, n, r);
          }),
          a.attachEvent('onAction', function (e, t) {
            'dropdown' == e
              ? Nn(a, t.row, t.column, 'ss_editor', t.newValue)
              : 'before-grid-change' == e &&
                (function f(e, t, n, r, i) {
                  var o = r.editors;
                  if (n)
                    for (var a = o.length - 1; 0 <= a; a--) {
                      var s = T(o[a], 3),
                        l = s[0],
                        u = s[1],
                        c = s[2];
                      if (('row' == t && l >= i.row) || ('column' == t && u >= i.column)) {
                        if ('row' == t) {
                          if (l < i.row - n) {
                            o.splice(a, 1);
                            continue;
                          }
                          o[a][0] = 1 * l + n;
                        } else if ('column' == t) {
                          if (u < i.column - n) {
                            o.splice(a, 1);
                            continue;
                          }
                          o[a][1] = 1 * u + n;
                        }
                        c.options = P(c.options, t, n, i);
                      }
                    }
                })(0, t.name, t.inc, t.data, t.start);
          });
      },
      serialize: function os(e, t) {
        var n,
          r,
          i = e._table._ssEditors,
          o = [];
        for (n in i) for (r in i[n]) o.push([n, r, i[n][r]]);
        t.editors = o;
      },
      load: function as(e, t) {
        var n = t.editors;
        if (n) for (var r = 0; r < n.length; r++) e.setCellEditor.apply(e, n[r]);
      },
      clearEditors: Qi,
      isEditor: function ss(e, t, n) {
        var r = e._table._ssEditors;
        return r[t] && !!r[t][n];
      },
      pasteDropdown: Ji,
    });
  function so(e, t, n, r) {
    var i = e.$$('cells');
    (no = i.getSelectArea()),
      (eo = (function f(e) {
        var t = [];
        e._mData
          .getCopyManager()
          .copy(
            e._mPage.cellID(no.start.row - 1, no.start.column - 1),
            e._mPage.cellID(no.end.row - 1, no.end.column - 1)
          );
        for (var n = no.start.row; n <= no.end.row; n++) {
          for (var r = [], i = no.start.column; i <= no.end.column; i++) {
            var o = { text: e.getCellValue(n, i, !1) },
              a = e.conditions.get(n, i),
              s = e.getCellEditor(n, i),
              l = e.getCellFilter(n, i),
              u = e._table.getSpan(n, i);
            if (s || l || a || u) {
              var c = { row: n, col: i };
              a && (c.condition = a),
                s && (c.dropdown = s),
                l && (c.filter = l),
                u && (c.span = u),
                (o.extra = c);
            }
            r.push(o);
          }
          t.push(r);
        }
        return t;
      })(e)),
      r && n && n.writeText && n.writeText(t.value),
      (to = t.value),
      ro &&
        0 !== Object.keys(i._ssFilters).length &&
        (io = (function u(e, t) {
          for (
            var n = Object.keys(e),
              r = Math.min.apply(null, n),
              i = Math.max.apply(null, n),
              o = t,
              a = 1,
              s = r;
            s <= i;
            s++
          )
            if (e[s]) {
              var l = Object.keys(e[s]);
              (o = Math.min(o, Math.min.apply(null, l))),
                (a = Math.max(a, Math.max.apply(null, l)));
            }
          return no.start.row <= r && no.end.row >= i && no.start.column <= o && no.end.column >= a;
        })(i._ssFilters, e.config.columnCount));
  }
  function lo(y, C, e) {
    e || (e = '');
    var t = C.getSelectArea();
    if (t) {
      var S = t.start,
        $ = t.end,
        E = e === to,
        k = E ? eo : webix.csv.parse(e, C.config.delimiter);
      E ||
        (k = (function a(e, t) {
          var n = co(t);
          if (n)
            for (var r = 0; r < e.length; r++)
              for (var i = 0; i < e[r].length; i++) {
                var o = webix.Number.parse(e[r][i], n);
                webix.rules.isNumber(o) && (e[r][i] = o);
              }
          return e;
        })(k, y.config));
      var V = { id: 'move', column: 0, row: 0, cut: ro };
      (!oo && E) || (io = ro = 0);
      var n = y.serialize();
      Dr(function () {
        !(function _(e, t, n) {
          var r = t.row + n.length - 1,
            i = t.column + n[0].length - 1;
          if (r > e.config.rowCount || i > e.config.columnCount) {
            var o = { id: 'add' };
            r > e.config.rowCount &&
              ((o.group = 'row'),
              e.callEvent('onCommand', [o, { row: e.config.rowCount + 1 }, { row: r }])),
              i > e.config.columnCount &&
                ((o.group = 'column'),
                e.callEvent('onCommand', [o, { column: e.config.columnCount + 1 }, { column: i }]));
          }
        })(y, S, k);
        var e = k.length,
          t = k[0].length,
          n = $.column - S.column + 1,
          r = $.row - S.row + 1;
        if (E) {
          var i = y._mData.getCopyManager();
          if (io) {
            var o = C.getSelectArea();
            y.removeFilters(), C.addSelectArea(o.start, o.end);
          }
          var a = !io && (e < r || t < n) ? 2 : 0;
          if ('conditions' != oo) {
            var s = y._mPage.cellID(S.row - 1, S.column - 1),
              l = y._mData.getStore().getMeta().$chunk;
            if (1 == ro) {
              var u = y._mPage.cellID(no.start.row - 1, no.start.column - 1),
                c = y._mPage.cellID(no.end.row - 1, no.end.column - 1);
              i.clean(u, c, 255), i.move(s, l);
            } else {
              var f;
              oo &&
                (f = function (e, t) {
                  switch (oo) {
                    case 'formulas':
                      return webix.extend(e, { value: t.formula || t.value }, !0);
                    case 'styles':
                      return webix.extend(e, { style: t.style, format: t.format }, !0);
                    case 'values':
                      return webix.extend(e, { value: t.value }, !0);
                  }
                }),
                i.paste(s, y._mPage.cellID($.row - 1, $.column - 1), l, a, f);
            }
          }
          if (2 == a)
            for (var h = 0, d = 0; h < Math.max(r, e); h++, d++) {
              d == k.length && (d = 0);
              for (var v = 0, g = 0; v < Math.max(n, t); v++, g++) {
                g == k[0].length && (g = 0);
                var p = {
                  id: 'move',
                  column: V.column + Math.floor(v / t) * t,
                  row: V.row + Math.floor(h / e) * e,
                  cut: ro,
                };
                uo(y, S.row + h, S.column + v, k[d][g], p);
              }
            }
          else
            C.mapCells(
              S.row,
              S.column,
              e,
              null,
              function (e, t, n, r, i) {
                if (k[r] && k[r].length > i) {
                  var o = k[r][i];
                  uo(y, t, n, o, V);
                }
              },
              !0
            );
          1 == ro && (io = !(ro = 2));
        } else
          for (var m = 0, w = 0; m < Math.max(r, e); m++, w++) {
            w == k.length && (w = 0);
            for (var b = 0, x = 0; b < Math.max(n, t); b++, x++)
              x == k[0].length && (x = 0), y.setCellValue(S.row + m, S.column + b, k[w][x]);
          }
      }, y),
        y.callEvent('onAction', ['paste', { value: n, newValue: y.serialize() }]),
        y.callEvent('onCommand', [{ id: 'toolbar-update' }]),
        y.refresh();
    }
  }
  function uo(e, t, n, r, i) {
    if ('object' === p(r)) {
      var o = r.extra;
      o &&
        (!o.condition || (oo && 'conditions' != oo) || tr(e, o, t, n, ro),
        o.dropdown && !oo && Ji(e, o, t, n, ro),
        o.filter && io && Ci(e, o, t, n, 0, i)),
        oo || Bn(e, o, t, n, ro, i),
        e.saveCell(t, n, e.getActiveSheet());
    }
  }
  function co(e) {
    var t = e.clipboardNumberFormat;
    return (
      !t &&
        e.clipboardDecimalDelimiter &&
        (t = { decimalDelimiter: e.clipboardDecimalDelimiter, decimalOptional: !0 }),
      t &&
        webix.extend(t, {
          minusSign: webix.i18n.minusSign,
          minusPosition: webix.i18n.minusPosition,
        }),
      t
    );
  }
  var fo = Object.freeze({
    init: function ls(a) {
      var e = a.config.clipboard,
        t = navigator.clipboard;
      if (!1 !== e) {
        webix.clipbuffer.init();
        var n = document.querySelector('.webix_clipbuffer'),
          s = a.$$('cells');
        s.attachEvent('onSelectChange', function () {
          return (function e(u, c) {
            if (!u._loading_data) {
              var f = u.$$('cells');
              f.getSelectedId() &&
                webix.delay(function () {
                  for (var e = [], t = f.getSelectArea(), n = t.start.row; n <= t.end.row; n++) {
                    for (var r = [], i = t.start.column; i <= t.end.column; i++)
                      r.push(
                        ((o = u.getCellValue(n, i, !1)),
                        (a = u.config),
                        void 0,
                        (s = co(a)),
                        webix.rules.isNumber(o) && s && (o = webix.Number.numToStr(s)(o)),
                        o)
                      );
                    e.push(r);
                  }
                  var o,
                    a,
                    s,
                    l = webix.csv.stringify(e, f.config.delimiter);
                  f.getEditor() ? (c.value = l) : (c.focus(), webix.clipbuffer.set(l)),
                    webix.UIManager.setFocus(f);
                });
            }
          })(a, n);
        }),
          s.attachEvent('onKeyPress', function (e, t) {
            (67 !== e && 88 !== e) ||
              (!t.ctrlKey && !t.metaKey) ||
              !s.getSelectedId() ||
              ((ro = 1 * (88 === e)), so(a, n));
          }),
          a.attachEvent('onCommand', function (e) {
            -1 != e.id.indexOf('paste')
              ? ((oo = e.id.split('-')[1]),
                t && t.readText
                  ? t
                      .readText()
                      .then(function (e) {
                        webix.clipbuffer.set(e), lo(a, s, n.value);
                      })
                      ['catch'](function () {
                        lo(a, s, to);
                      })
                      ['finally'](function () {
                        oo = null;
                      })
                  : (lo(a, s, to), (oo = null)))
              : ('copy' != e.id && 'cut' != e.id) || ((ro = 1 * ('cut' == e.id)), so(a, n, t, !0));
          }),
          a.attachEvent('onUndo', function (e, t, n, r) {
            if ('paste' == e) {
              var i = s.getScrollState(),
                o = s.getSelectArea();
              Rr(function () {
                (a.$handleSelection = null),
                  a.parse(r),
                  s.addSelectArea(o.start, o.end),
                  s.scrollTo(i.x, i.y);
              });
            }
          }),
          a.config.readonly ||
            s.attachEvent('onPaste', function (e) {
              lo(a, s, e);
            });
      }
    },
  });
  function ho(e, t) {
    t
      ? (e['_hidden_' + t + '_hash'] = {})
      : ((e._hidden_cols_hash = {}), (e._hidden_rows_hash = {}), e.filterSpreadSheet());
  }
  function vo(e, t) {
    return !e._hidden_cols_hash[t];
  }
  function go(e, t, n, r) {
    if (t) {
      var i = (function l(e) {
          return webix.isArray(e) ? e : [e, e];
        })(t),
        o = 'row' == r ? e._hidden_rows_hash : e._hidden_cols_hash;
      o[i[0]] || (!webix.isUndefined(n) && !n)
        ? !o[i[0]] ||
          (!webix.isUndefined(n) && n) ||
          ('row' == r ? bo : wo)({ id: 'hide', group: r }, $({}, r, i[0]), $({}, r, i[1]), e)
        : ('row' == r ? _o : xo)({ id: 'hide', group: r }, $({}, r, i[0]), $({}, r, i[1]), e);
    } else {
      var a = e.getSelectedId(!0),
        s = { id: !1 === n ? 'show' : 'hide', group: r };
      a.length && e.callEvent('onCommand', [s, a[0], a[a.length - 1]]);
    }
  }
  function po(e, t) {
    return !e._hidden_rows_hash[t];
  }
  function mo(e) {
    'column' == e.group
      ? 'show' == e.id
        ? wo.apply(this, arguments)
        : 'hide' == e.id && xo.apply(this, arguments)
      : 'row' == e.group &&
        ('show' == e.id ? bo.apply(this, arguments) : 'hide' == e.id && _o.apply(this, arguments));
  }
  function wo(r, i, o, a, s) {
    var l = a.$$('cells'),
      u = l.getSelectArea(),
      c = a._hidden_cols_hash;
    if (r.neighbors)
      if (c[i.column - 1]) for (; c[i.column - 1]; ) i.column--;
      else for (; c[o.column + 1]; ) o.column++;
    N.set(function () {
      for (var e = i.column; e <= o.column; e++)
        if (c[e]) {
          delete c[e];
          var t = l.getColumnConfig(e - 1 || 'rowId').header[0];
          (t.css = t.css.replace('webix_ssheet_hide_column', '')),
            l.showColumn(e),
            s || a.callEvent('onColumnOperation', [r.id, e, e]);
        }
      var n = a._frozenColumns;
      n && n >= i.column && (a.freezeColumns(0), a.freezeColumns(n)),
        u && l.addSelectArea(u.start, u.end);
    }, a);
  }
  function bo(r, i, o, a, s) {
    var l = a.$$('cells'),
      u = l.getSelectArea(),
      c = a._hidden_rows_hash;
    if (r.neighbors)
      if (c[i.row - 1]) for (; c[i.row - 1]; ) i.row--;
      else for (; c[o.row + 1]; ) o.row++;
    N.set(function () {
      var e = a._frozenRows;
      e && a.freezeRows(0);
      for (var t = i.row; t <= o.row; t++)
        if (c[t]) {
          if ((delete c[t], t - 1 == 0)) {
            var n = l.getColumnConfig('rowId').header[0];
            (n.css = n.css.replace('webix_ssheet_hide_row', '')), l.refreshColumns();
          } else l.removeCellCss(t - 1, 'rowId', 'webix_ssheet_hide_row');
          s || a.callEvent('onRowOperation', [r.id, t, t]);
        }
      a.filterSpreadSheet(), e && a.freezeRows(e), u && l.addSelectArea(u.start, u.end);
    }, a);
  }
  function xo(e, t, n, r, i) {
    var o = r.$$('cells'),
      a = n.column;
    if (((r.$handleSelection = null), o.unselect(), n.column < 1 || t.column < 1))
      delete r._hidden_cols_hash[t.column];
    else {
      for (; a >= t.column; ) {
        if (-1 != o.getColumnIndex(a)) {
          r._hidden_cols_hash[a] = a;
          var s = o.getColumnConfig(a - 1 || 'rowId').header[0];
          (s.css = (s.css || '') + ' webix_ssheet_hide_column'), o.hideColumn(a);
        }
        a--;
      }
      i || r.callEvent('onColumnOperation', [e.id, t.column, n.column]);
    }
  }
  function _o(e, t, n, r, i) {
    if (n.row < 1 || t.row < 1) delete r._hidden_rows_hash[t.row];
    else {
      var o = r._frozenRows;
      o && r.freezeRows(0);
      for (var a = r.$$('cells'), s = n.row; s >= t.row; ) {
        if ((r._hidden_rows_hash[s] = s) - 1 == 0) {
          var l = a.getColumnConfig('rowId').header[0];
          (l.css = (l.css || '') + ' webix_ssheet_hide_row'), a.refreshColumns();
        } else a.addCellCss(s - 1, 'rowId', 'webix_ssheet_hide_row');
        s--;
      }
      r.filterSpreadSheet(),
        o && r.freezeRows(o),
        i || r.callEvent('onRowOperation', [e.id, t.row, n.row]);
    }
  }
  var yo = Object.freeze({
    init: function us(s) {
      s.attachEvent('onCommand', function (e) {
        if ('show' == e.id || 'hide' == e.id) {
          var t = s._table.getSelectArea();
          t && mo(e, webix.copy(t.start), webix.copy(t.end), s);
        }
      }),
        ho(s),
        s.attachEvent('onUndo', function (e, t, n, r, i) {
          if (!(('hide' != e.id && 'show' != e.id) || ('column' != e.group && 'row' != e.group))) {
            var o = e.id;
            i || (o = 'hide' == o ? 'show' : 'hide');
            var a = t || n;
            mo({ id: o, group: e.group, neighbors: e.neighbors }, a.start, a.end, s, !0);
          }
        }),
        s.attachEvent('onHardReset', function () {
          return ho(s);
        }),
        s.attachEvent('onAction', function (e, t) {
          'before-grid-change' == e &&
            (function u(e, t, n, r, i) {
              if (r.table && r.table.hidden && r.table.hidden[t] && r.table.hidden[t].length) {
                ho(e, 'column' == t ? 'cols' : 'rows');
                for (var o = i[t], a = r.table.hidden[t], s = a.length - 1; 0 <= s; s--) {
                  var l = 1 * a[s];
                  0 < n && o <= l
                    ? (a[s] = n + l)
                    : n < 0 && o <= l && (l < o - n ? a.splice(s, 1) : (a[s] = n + l));
                }
              }
            })(s, t.name, t.inc, t.data, t.start);
        });
    },
    reset: ho,
    isColumnVisible: vo,
    setState: go,
    isRowVisible: po,
    serialize: function cs(e, t) {
      var n = [],
        r = [];
      for (var i in e._hidden_rows_hash) n.push(i);
      for (var o in e._hidden_cols_hash) r.push(o);
      (n.length || r.length) && (t.table.hidden = {}),
        n.length && (t.table.hidden.row = n),
        r.length && (t.table.hidden.column = r);
    },
    load: function fs(e, t) {
      if ((ho(e), !webix.isUndefined(t.table) && !webix.isUndefined(t.table.hidden))) {
        var n = t.table.hidden;
        if (n.row && n.row.length)
          for (var r = 0; r < n.row.length; r++)
            _o({ id: 'hide', group: 'row' }, { row: n.row[r] }, { row: n.row[r] }, e, !0);
        if (n.column && n.column.length)
          for (var i = 0; i < n.column.length; i++)
            xo(
              { id: 'hide', group: 'column' },
              { column: n.column[i] },
              { column: n.column[i] },
              e,
              !0
            );
      }
    },
  });
  var Co = Object.freeze({
    init: function hs(R) {
      var O = R._table,
        e = 0;
      O.attachEvent('onAreaDrag', function () {
        return (e = new Date());
      }),
        O.attachEvent('onBeforeAreaRemove', function () {
          if (R.$handleSelection && new Date() - e < 500) return !1;
        }),
        O.attachEvent('onBeforeAreaAdd', function (e) {
          if ('rowId' == e.start.column) return !1;
          var t = O.getEditor();
          if (
            (!t ||
              (t.row == e.start.row &&
                t.column == e.start.column &&
                t.row == e.start.row &&
                t.column == e.start.column) ||
              O.editStop(),
            !R.$handleSelection)
          )
            return !0;
          var n = y[e.start.column] + e.start.row,
            r = y[e.end.column] + e.end.row,
            i = R.$handleSelection(e.start, e.end, n, r);
          return !1 !== i && ((R.$handleSelection = null), O.removeSelectArea()), i;
        }),
        O.attachEvent('onBeforeBlockSelect', function (e, t, n) {
          if (!R.config.readonly && n && O.$handleStart) {
            var r = O.getSelectArea(),
              i = r.start,
              o = r.end,
              a = e.row,
              s = t.row,
              l = e.column,
              u = t.column;
            if (i.row == a && o.row > s)
              R.clearRange(
                { start: { row: s + 1, column: l }, end: { row: o.row, column: u } },
                { values: !0 }
              );
            else if (i.column == l && o.column > u)
              R.clearRange(
                { start: { row: a, column: u + 1 }, end: { row: s, column: o.column } },
                { values: !0 }
              );
            else {
              var c;
              if (
                (a != i.row || s != o.row
                  ? (c = 'row')
                  : (l == i.column && u == o.column) || (c = 'column'),
                c)
              ) {
                N.start();
                for (var f = 'row' == c, h = f ? l : a; h <= (f ? u : s); h++) {
                  for (var d = [], v = [], g = i[c]; g <= o[c]; g++) {
                    var p = T('row' == c ? [g, h] : [h, g], 2),
                      m = p[0],
                      w = p[1],
                      b = R.getCellValue(m, w);
                    webix.rules.isNumber(b)
                      ? (v[0]
                          ? ((v[1] = g), webix.isUndefined(v.inc) && (v.inc = b - v.firstValue))
                          : ((v.firstValue = b), (v[0] = v[1] = g)),
                        (d[g] = v))
                      : (v = []);
                  }
                  for (
                    var x = i[c] == (f ? a : l),
                      _ = x ? i[c] : o[c],
                      y = x ? 1 : -1,
                      C = x ? o[c] + 1 : i[c] - 1,
                      S = 0,
                      $ = 1;
                    x ? C <= (f ? s : u) : (f ? a : l) <= C;
                    x ? C++ : C--, S++
                  ) {
                    S == o[c] - i[c] + 1 && ($++, (S = 0));
                    var E = _ + S * y,
                      k = T(f ? [E, h] : [h, E], 2),
                      V = k[0],
                      A = k[1],
                      M = R.getCellValue(V, A),
                      I = d[E];
                    I
                      ? (M += (I.inc || 1) * (I[1] - I[0] + 1) * $ * y)
                      : 'string' == typeof M &&
                        '=' == M[0] &&
                        0 < M.length &&
                        (M = f
                          ? R._mData.getStore().transposeMath(M, C - _ - S * y, 0)
                          : R._mData.getStore().transposeMath(M, 0, C - _ - S * y));
                    var z = T(f ? [C, h] : [h, C], 2);
                    (m = z[0]),
                      (w = z[1]),
                      R.setCellValue(m, w, M),
                      R.setStyle(m, w, R.getStyle(V, A));
                    var D = R.conditions.get(V, A);
                    D ? tr(R, { condition: D }, m, w) : R.conditions.clear(m, w);
                  }
                }
                N.end();
              }
            }
          }
        }),
        webix.event(O.$view, 'mousedown', function (e) {
          if (R.$handleSelection) return webix.html.preventEvent(e);
        });
    },
  });
  function So(e, t, n) {
    var r = n.getItem(e)[t];
    return r !== undefined && '' !== r;
  }
  var $o = {
    int: function (i, o) {
      return function (e, t) {
        if (!t[o]) return -1;
        if (!e[o]) return 1;
        var n = parseFloat(e[o]) || i * Infinity,
          r = parseFloat(t[o]) || i * Infinity;
        return (r < n ? 1 : n == r ? 0 : -1) * i;
      };
    },
    str: function (i, o) {
      return function (e, t) {
        if (!t[o]) return -1;
        if (!e[o]) return 1;
        var n = e[o].toString().toLowerCase(),
          r = t[o].toString().toLowerCase();
        return (r < n ? 1 : n == r ? 0 : -1) * i;
      };
    },
  };
  function Eo(e, t, n) {
    if ((t = t || e._table.getSelectArea())) {
      var r = (t = I(t, e));
      t.start.row === t.end.row &&
        (r = (function v(e, t) {
          for (
            var n = t.config.rowCount,
              r = t.config.columnCount,
              i = t._table,
              o = e.start.row,
              a = e.end.row,
              s = e.start.column,
              l = e.end.column,
              u = o - 1;
            0 < u && So(u, e.start.column, i);
            u--
          )
            o = u;
          for (var c = a + 1; c < n && So(c, e.end.column, i); c++) a = c;
          for (var f = s - 1; 0 < f && So(e.start.row, f, i); f--) s = f;
          for (var h = l + 1; h < r && So(e.end.row, h, i); h++) l = h;
          var d = { start: { row: o, column: s }, end: { row: a, column: l } };
          return (
            (o == e.start.row && a == e.end.row && s == e.start.column && l == e.end.column) ||
              t._table.addSelectArea(d.start, d.end),
            d
          );
        })(t, e));
      var i = e.getCellValue(t.start.row, t.start.column, !1),
        o = isNaN(parseFloat(i)) ? 'str' : 'int';
      (n = n && 'asc' !== n ? -1 : 1),
        N.set(function () {
          return (function g(e, t, n, r, i) {
            for (var o = e.start.column; o <= e.end.column; o++) {
              for (var a = [], s = e.start.row; s <= e.end.row; s++)
                if (i.isRowVisible(s)) {
                  var l = i.getCellValue(s, o, !1),
                    u = i.getStyle(s, o),
                    c = i.getCellValue(s, o);
                  c = c && '=' == c[0] ? c : null;
                  var f = i.conditions.get(s, o);
                  f && nr('remove', s, o, f, null, i),
                    a.push({ value: l, style: u, math: c, row: s, conditions: f });
                }
              a.sort($o[n](r, 'value'));
              for (var h = e.start.row; h <= e.end.row; h++)
                if (i.isRowVisible(h)) {
                  var d = a.shift();
                  if (
                    (i.setStyle(h, o, d.style || null),
                    d.conditions && nr('update', h, o, null, d.conditions, i),
                    d.math)
                  ) {
                    var v = i._mData.getStore().transposeMath(d.math, h - d.row, 0);
                    i.setCellValue(h, o, v);
                  } else i.setCellValue(h, o, d.value);
                }
            }
            i.refresh();
          })(r, t.start.column, o, n, e);
        });
    }
  }
  var ko = Object.freeze({
    init: function ds(t) {
      t.attachEvent('onCommand', function (e) {
        ('sort-asc' !== e.id && 'sort-desc' !== e.id) || Eo(t, null, e.id.replace('sort-', ''));
      });
    },
    sortRange: Eo,
  });
  function Vo(e, t, n, r) {
    if (-1 == t.indexOf('!')) return t;
    for (var i = st(t, e, !0), o = 0; o < i.length; o++)
      if (webix.isArray(i[o])) {
        var a = i[o][0] === n ? r : i[o][0];
        -1 != a.indexOf(' ') && (a = "'".concat(a, "'")),
          (i[o] = ''.concat(a, '!').concat(i[o][1]));
      }
    return i.join('');
  }
  function Ao(e) {
    return 'string' == typeof e && '=' == e[0];
  }
  var Mo = Object.freeze({
    init: function vs(a) {
      a.attachEvent('onSheetRename', function (i, o) {
        a._sheets.forEach(function (e) {
          var t = e.name == a.getActiveSheet();
          t && (e.content = a.serialize()),
            e.content.editors &&
              e.content.editors.forEach(function (e) {
                var t = e[2].options;
                if (t)
                  if ('string' == typeof t) e[2].options = Vo(a, t, i, o);
                  else
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      'string' == typeof r
                        ? Ao(r) && (t[n] = Vo(a, r, i, o))
                        : Ao(r.id) && (r.id = Vo(a, r.id, i, o));
                    }
              }),
            e.content.conditions &&
              (e.content.conditions.forEach(function (e) {
                Ao(e[3]) && (e[3] = Vo(a, e[3], i, o));
              }),
              t && (a.conditions.clear(), a.conditions.parse(e.content.conditions)));
        });
      });
    },
  });
  function Io(e) {
    var t = !(1 < arguments.length && arguments[1] !== undefined) || arguments[1],
      n = e.$$('cells'),
      r = -1 != n.$view.className.indexOf('webix_borderless');
    'toggle' === t && (t = !r),
      !r && t
        ? (webix.html.addCss(n.$view, 'webix_borderless', !0),
          e.callEvent('onCommand', [{ id: 'toolbar-update', name: 'hide-gridlines', value: !0 }]),
          e.callEvent('onAction', ['gridlines-hide', { newValue: !0, value: !1 }]))
        : r &&
          !t &&
          (webix.html.removeCss(n.$view, 'webix_borderless'),
          e.callEvent('onCommand', [{ id: 'toolbar-update', name: 'hide-gridlines', value: !1 }]),
          e.callEvent('onAction', ['gridlines-hide', { newValue: !1, value: !0 }]));
  }
  var zo = Object.freeze({
    init: function gs(i) {
      i.attachEvent('onUndo', function (e, t, n, r) {
        'gridlines-hide' == e && Io(i, r);
      });
    },
    hideGridlines: Io,
    serialize: function ps(e, t) {
      t.table.gridlines = -1 != e.$$('cells').$view.className.indexOf('webix_borderless') ? 0 : 1;
    },
    load: function ms(e, t) {
      var n = !1;
      webix.isUndefined(t.table) ||
        webix.isUndefined(t.table.gridlines) ||
        (n = !t.table.gridlines),
        Io(e, n);
    },
  });
  function Do(e, t) {
    var n = e.$$('cells'),
      r = !n.config.header;
    'toggle' == t && (t = n.config.header),
      t != r &&
        ((n.config.header = !t),
        e.callEvent('onCommand', [{ id: 'toolbar-update', name: 'hide-headers', value: t }]),
        e.callEvent('onAction', ['header-hide', { newValue: t, value: r }]));
    var i = n.isColumnVisible('rowId');
    ((i && t) || (!i && !t)) && n.hideColumn('rowId', {}, !0, t), n.refreshColumns();
  }
  var Ro = Object.freeze({
    init: function ws(i) {
      i.attachEvent('onUndo', function (e, t, n, r) {
        'header-hide' == e && Do(i, r);
      });
    },
    hideHeaders: Do,
    serialize: function bs(e, t) {
      t.table.headers = e.$$('cells').config.header ? 1 : 0;
    },
    load: function xs(e, t) {
      var n;
      t.table && !webix.isUndefined(t.table.headers) && (n = !t.table.headers), Do(e, n);
    },
  });
  function Oo(e, t, n, r) {
    Po(e, t, n) &&
      (r ||
        e.callEvent('onAction', [
          'comment',
          { row: t, column: n, newValue: null, value: e.comments._pull[t][n] },
        ]),
      delete e.comments._pull[t][n]),
      e.$$('cells').updateItem(t, n);
  }
  function To(e, t) {
    N.set(function () {
      z(t, e, function (e, t) {
        Po(e, t.row, t.column) && Oo(e, t.row, t.column);
      }),
        e.$$('cells').refresh();
    });
  }
  function No(e, t, n, r, i) {
    var o = Po(e, t, n) ? e.comments._pull[t][n] : null,
      a = e.$$('cells');
    'string' == typeof r && (r = r.trim() ? r : ''),
      (e.comments._pull[t] = e.comments._pull[t] ? e.comments._pull[t] : {}),
      (e.comments._pull[t][n] = r),
      a.addCellCss(t, n, 'ssheet_commented_cell'),
      i || e.callEvent('onAction', ['comment', { row: t, column: n, newValue: r, value: o }]);
  }
  function Po(e, t, n) {
    return e.comments._pull[t] && e.comments._pull[t][n] ? e.comments._pull[t][n] : '';
  }
  var Fo = Object.freeze({
    init: function _s(o) {
      (o.comments = {
        get: function (e, t) {
          return Po(o, e, t);
        },
        add: function (e, t, n) {
          No(o, e, t, n);
        },
        remove: function (e, t) {
          Oo(o, e, t);
        },
        _activeComment: {},
        _pull: {},
      }),
        o.attachEvent('onReset', function () {
          return (function t(e) {
            e.comments._pull = {};
          })(o);
        }),
        o.attachEvent('onUndo', function (e, t, n, r) {
          'comment' === e &&
            (function i(e, t, n, r) {
              Po(e, t, n) && Oo(e, t, n, !0), r && No(e, t, n, r, !0);
            })(o, t, n, r);
        }),
        o.attachEvent('onAction', function (e, t) {
          'before-grid-change' == e &&
            (function c(e, t, n, r, i) {
              var o = r.comments,
                a = o.length;
              if (n)
                for (; a--; ) {
                  var s = T(o[a], 2),
                    l = s[0],
                    u = s[1];
                  ((l && 'row' == t && l >= i.row) || (u && 'column' == t && u >= i.column)) &&
                    ('row' == t
                      ? l < i.row - n
                        ? o.splice(a, 1)
                        : (o[a][0] = 1 * l + n)
                      : 'column' == t &&
                        (u < i.column - n ? o.splice(a, 1) : (o[a][1] = 1 * u + n)));
                }
            })(0, t.name, t.inc, t.data, t.start);
        });
    },
    removeCommentsRange: To,
    serialize: function ys(e, t) {
      var n,
        r,
        i = [];
      for (n in e.comments._pull)
        for (r in e.comments._pull[n])
          e.comments._pull[n][r] && i.push([n, r, e.comments._pull[n][r]]);
      t.comments = i;
    },
    load: function Cs(e, t) {
      var n,
        r = t.comments;
      if (r) for (n = 0; n < r.length; n++) No(e, r[n][0], r[n][1], r[n][2], !0);
    },
  });
  function Uo(e, t) {
    var n = e.$$('cells'),
      r = n.config.showFormulas;
    'toggle' == t && (t = !r),
      t != r &&
        ((n.config.showFormulas = t),
        e.callEvent('onCommand', [{ id: 'toolbar-update', name: 'show-formulas', value: t }]),
        e.callEvent('onAction', ['show-formulas', { newValue: t, value: r }]),
        n.refresh());
  }
  var Bo = Object.freeze({
    init: function Ss(i) {
      i.attachEvent('onUndo', function (e, t, n, r) {
        'show-formulas' == e && Uo(i, r);
      });
    },
    showFormulas: Uo,
    serialize: function $s(e, t) {
      t.table.showFormulas = e.$$('cells').config.showFormulas ? 1 : 0;
    },
    load: function Es(e, t) {
      var n = !1;
      t.table && t.table.showFormulas && (n = t.table.showFormulas), Uo(e, n);
    },
  });
  var Lo = Object.freeze({
      init: function ks(n) {
        var r = [zo, Ro, In, ao, ki, yo, Fo, Bo];
        n.attachEvent('onDataSerialize', function (e) {
          for (var t = 0; t < r.length; t++) r[t].serialize && r[t].serialize(n, e);
        }),
          n.attachEvent('onDataParse', function (e) {
            for (var t = 0; t < r.length; t++) r[t].load && r[t].load(n, e);
          });
      },
    }),
    Ho = ['.xls', '.xlt', '.xla', '.xlsx', '.xlsm', '.xltx', '.xltm', '.xlam', '.xlsb'];
  var jo = Object.freeze({
    init: function Vs(t) {
      var r;
      window.XMLHttpRequest &&
        new XMLHttpRequest().upload &&
        ((r = webix.ui({ view: 'uploader', apiOnly: !0, accept: Ho.join() })).attachEvent(
          'onBeforeFileAdd',
          webix.bind(function (e) {
            return (
              -1 < Ho.indexOf('.' + e.type.toLowerCase()) &&
                (t.reset(),
                e.file.options || (e.file.options = {}),
                webix.extend(e.file.options, { cellDates: !1, sheetStubs: t.config.sheetStubs }),
                t.parse(e.file, 'excel')),
              !1
            );
          }, this)
        ),
        t._destroy_with_me.push(r)),
        t.attachEvent('onCommand', function (e) {
          'excel-import' === e.id &&
            (function n(e, t) {
              t
                ? webix.delay(function () {
                    return t.fileDialog();
                  })
                : e.alert(webix.i18n.spreadsheet.labels['import-not-support']);
            })(t, r);
        });
    },
  });
  function Wo(e) {
    return 3 === (e = e.substring(1)).length && (e += e), e;
  }
  function qo(e, t, n) {
    var r = e.split(';'),
      i = {};
    t && (i = { font: {}, alignment: {}, border: {} });
    for (var o = 0; o < r.length; o++) r[o] && (t ? Xo(i, r, o) : Go(i, r, o, n.table));
    return i;
  }
  function Xo(e, t, n) {
    switch (L[n]) {
      case 'color':
        e.font.color = { rgb: Wo(t[n]) };
        break;
      case 'background':
        var r = Wo(t[n]);
        r && 'ffffff' !== r.toLowerCase() && (e.fill = { fgColor: { rgb: r } });
        break;
      case 'text-align':
        e.alignment.horizontal = t[n];
        break;
      case 'font-family':
        e.font.name = t[n].replace(/'|,.*$/g, '');
        break;
      case 'font-size':
        e.font.sz = 0.75 * t[n].replace('px', '');
        break;
      case 'font-style':
        e.font.italic = 'italic' == t[n];
        break;
      case 'underline':
        e.font.underline = 'underline' == t[n];
        break;
      case 'strike':
        e.font.strike = 'strike' == t[n];
        break;
      case 'font-weight':
        e.font.bold = 'bold' == t[n];
        break;
      case 'vertical-align':
        e.alignment.vertical = 'middle' == t[n] ? 'center' : t[n];
        break;
      case 'wrap':
        e.alignment.wrapText = 'wrap' == t[n];
        break;
      case 'borders':
        break;
      case 'format':
        e.format = ke(t[n], !0) || '';
        break;
      case 'border-right':
      case 'border-bottom':
      case 'border-left':
      case 'border-top':
        e.border[L[n].split('-')[1]] = Yo(t[n], !0);
        break;
      case 'indent':
        e.alignment.indent = t[n];
    }
  }
  function Go(e, t, n, r) {
    switch (L[n]) {
      case 'color':
        e.color = Wo(t[n]);
        break;
      case 'background':
        e.backgroundColor = Wo(t[n]);
        break;
      case 'text-align':
        e.textAlign = t[n];
        break;
      case 'font-family':
        break;
      case 'font-size':
        e.fontSize = 0.75 * t[n].replace('px', '');
        break;
      case 'font-style':
        e.italic = 'italic' == t[n];
        break;
      case 'underline':
        e.underline = 'underline' == t[n];
        break;
      case 'strike':
        e.strikethrough = 'strike' == t[n];
        break;
      case 'font-weight':
        e.bold = 'bold' == t[n];
        break;
      case 'vertical-align':
        e.vertAlign = t[n];
        break;
      case 'wrap':
        e.whiteSpace = 'nowrap' != t[n];
        break;
      case 'borders':
      case 'format':
        break;
      case 'border-right':
      case 'border-bottom':
      case 'border-left':
      case 'border-top':
        var i = L[n].split('-')[1];
        e['border'.concat(i[0].toUpperCase() + i.substring(1), 'Color')] = Yo(t[n]);
        break;
      case 'indent':
        if (t[n]) {
          var o = 'padding'.concat('right' == t[2] ? 'Right' : 'Left'),
            a = r && r[o] ? r[o] : 10;
          e[o] = a + 6 * t[n];
        }
    }
  }
  function Yo(e, t) {
    var n = T(e.split(','), 2),
      r = n[0],
      i = n[1];
    return t ? { color: { rgb: Wo(r) }, style: i } : Wo(r);
  }
  function Ko(e) {
    if (!e) return {};
    for (var t = [], n = 0; n < L.length; n++) t.push(e[L[n]] || '');
    return qo(t.join(';'), !0);
  }
  var Zo = Object.freeze({
    init: function As(v) {
      var o = v._table;
      (v.$exportView = function (e) {
        var t = 'pdf' == e.export_mode,
          n = 'excel' == e.export_mode,
          r = {
            stubCells: !0,
            header: !1,
            footer: !1,
            heights: !0,
            rawValues: !t,
            filterHTML: !0,
            spans: !0,
            styles: !0,
            math: !t,
            hidden: n,
            xCorrection: o.config.header || e.hidden ? 1 : 0,
            ignore: { rowId: !0 },
            conditions: !0,
          };
        return (
          webix.extend(e, r),
          n || t
            ? (function i(p, m) {
                var w = this,
                  b = arguments,
                  x = 'excel' == m.export_mode;
                if (
                  (!0 === m.sheets
                    ? (m.sheets = p._sheets.map(function (e) {
                        return e.name;
                      }))
                    : m.sheets && m.sheets.length
                      ? 'string' == typeof m.sheets && (m.sheets = [m.sheets])
                      : (m.sheets = [p._activeSheet]),
                  x)
                ) {
                  if (p._sheets.length != m.sheets.length)
                    for (var e = 0; e < p._sheets.length; e++) {
                      var t = p._sheets[e];
                      'veryHidden' == t.state &&
                        -1 == m.sheets.indexOf(t.name) &&
                        m.sheets.push(t.name);
                    }
                } else
                  m.sheets = m.sheets.filter(function (e) {
                    return Ut(p, e);
                  });
                m.dataOnly = !0;
                for (
                  var _ = [],
                    S = p._activeSheet,
                    n = function (n) {
                      var e = m.sheets[n],
                        t = e.id || e;
                      p.showSheet(t);
                      var r = p._zoom;
                      p.ignoreUndo(function () {
                        return p.zoom(1);
                      }),
                        m.hidden && (m.xCorrection = 1);
                      var i = e.options ? webix.extend(e.options, m) : webix.copy(m);
                      t != S && (i._hidden = !0), i.name || (i.name = t);
                      var o = !x && 'image' != i.display,
                        a = p.serialize(),
                        s = pe(a.data, a.spans, 0, 0),
                        l = T(s, 2),
                        u = l[0],
                        c = l[1];
                      if (!x && (webix.isUndefined(i.textBefore) && (i.textBefore = i.name), o)) {
                        i.ignore = i.ignore || {};
                        for (var f = c + 1; f <= p.config.columnCount; f++) i.ignore[f] = !0;
                        var h =
                          i.filter ||
                          function () {
                            return !0;
                          };
                        i.filter = function (e) {
                          return e.id <= u && h.apply(w, b);
                        };
                      }
                      var d = webix[x ? 'toExcel' : 'toPDF'](p._table, i);
                      if (
                        (x && (d[0].state = Ft(p, t).state || 'visible'),
                        o && 0 == d[0].scheme.length)
                      )
                        return 'continue';
                      if ((x || o) && i.styles) {
                        var v = (d[0].styles = (function y(d, v, g, e, p) {
                          d.compactStyles();
                          var m = [],
                            w = {},
                            b = {},
                            x = (function r(e) {
                              var t = U;
                              return 'excel' == e.export_mode
                                ? {
                                    font: {
                                      sz: 0.75 * t['font-size'],
                                      name: t['font-family'].replace(/'|,.*$/g, ''),
                                    },
                                    alignment: {
                                      horizontal: t['text-align'],
                                      vertical: 'center',
                                      wrapText: 'nowrap' != t['white-space'],
                                    },
                                  }
                                : {
                                    fontSize: 0.75 * t['font-size'],
                                    textAlign: t['text-align'],
                                    whiteSpace: 'nowrap' != t['white-space'],
                                  };
                            })(v);
                          g && v.docHeader && (m = m.concat([{ 0: Ko(v.docHeader.css) }, {}])),
                            v.header && m.push({});
                          var t = m.length,
                            n = d.$$('cells'),
                            _ = t;
                          return (
                            n.eachRow(function (f) {
                              if (!(e < f)) {
                                var h = 0;
                                n.eachColumn(function (e) {
                                  if (!(p < h)) {
                                    if (h >= v.xCorrection) {
                                      var t,
                                        n,
                                        r = d.getStyle(f, e),
                                        i = h - v.xCorrection;
                                      if (((m[_] = m[_] || {}), r))
                                        if (w[r.id]) t = webix.copy(w[r.id]);
                                        else {
                                          for (var o in ((t = qo(r.text, g, v)), x))
                                            g ? webix.extend(t[o], x[o]) : t[o] || (t[o] = x[o]);
                                          w[r.id] = webix.copy(t);
                                        }
                                      else t = webix.copy(x);
                                      if (v.conditions) {
                                        var a = (function c(e, t, n, r) {
                                          var i = cr(e, t, n),
                                            o = Xn(e, t, n, i);
                                          if (o) {
                                            if (r[o]) return r[o];
                                            var a = webix.html.create('div', { class: o });
                                            document.body.appendChild(a);
                                            var s = window.getComputedStyle(a),
                                              l = s.backgroundColor,
                                              u = s.color;
                                            return (
                                              document.body.removeChild(a), (r[o] = [l, u]), r[o]
                                            );
                                          }
                                        })(d, f, e, b);
                                        a &&
                                          (function u(e, t, n) {
                                            var r = T(
                                                t.map(function (e) {
                                                  return webix.color.rgbToHex(e);
                                                }),
                                                2
                                              ),
                                              i = r[0],
                                              o = r[1];
                                            n
                                              ? ((e.fill = { fgColor: { rgb: i } }),
                                                (e.font.color = { rgb: o }))
                                              : ((e.backgroundColor = i), (e.color = o));
                                          })(t, a, g);
                                      }
                                      if (((m[_][i] = t), v.math)) {
                                        var s = d.getCellValue(f, e);
                                        if ('string' == typeof s && '=' == s[0] && 1 < s.length) {
                                          var l = d.getCellValue(f, e, !1);
                                          isNaN(l) && (n = 'string');
                                        }
                                      }
                                      m[_][i].type = n || ht(d, f, e);
                                    }
                                    h++;
                                  }
                                }, v.hidden),
                                  _++;
                              }
                            }, v.hidden),
                            g && v.docFooter && (m = m.concat([{}, { 0: Ko(v.docFooter.css) }])),
                            m
                          );
                        })(p, i, x, u, c));
                        o &&
                          (function C(e, t, n, r, i) {
                            var o = n.header ? 1 : 0;
                            if (n.spans)
                              for (
                                var a = i.spans.sort(function (e, t) {
                                    return e[1] < t[1] ? 1 : e[1] > t[1] ? -1 : 0;
                                  }),
                                  s = 0;
                                s < a.length;
                                s++
                              )
                                if (1 < a[s][2]) {
                                  var l = a[s][0] - 1 + o,
                                    u = a[s][1] - 1,
                                    c = a[s][2];
                                  if (e[l] && e[l][u]) {
                                    e[l][u].colspan = c;
                                    var f = t[0].exportData[l - o];
                                    f && f.splice(u + 1, c - 1);
                                    var h = Object.values(e[l]);
                                    h.splice(u + 1, c - 1), (e[l] = h);
                                  }
                                }
                            for (var d = t[0].exportData, v = 0; v < d.length; v++)
                              for (var g = 0; g < d[v].length; g++) {
                                var p = r.$$('cells').config.rowHeight;
                                if (n.heights && i.sizes.length)
                                  for (var m = 0; m < i.sizes.length; m++) {
                                    var w = i.sizes[m][0];
                                    if (w && w == v + 1) {
                                      p = i.sizes[m][2];
                                      break;
                                    }
                                  }
                                var b = e[v + o][g],
                                  x = b.vertAlign,
                                  _ = 0.75 * p - b.fontSize;
                                (b.paddingTop = 'top' == x ? 0 : 'bottom' == x ? _ : _ / 2),
                                  (b.paddingBottom = 'bottom' == x ? 0 : 'top' == x ? _ : _ / 2);
                              }
                          })(v, d, i, p, a);
                      }
                      (_ = _.concat(d)),
                        x
                          ? ((_[n].ranges = []),
                            p.ranges.serialize(t).forEach(function (e) {
                              var t = e[1].split('!');
                              _[n].ranges.push({
                                Sheet: e[2] ? null : n,
                                Name: e[0],
                                Ref:
                                  t[0] +
                                  '!' +
                                  t[1].replace(/[0-9]+|[A-Z]+/gi, function (e) {
                                    return '$'.concat(e);
                                  }),
                              });
                            }))
                          : m.autowidth &&
                            (function g(e, t) {
                              var n,
                                r =
                                  t.orientation && 'landscape' == t.orientation
                                    ? 'height'
                                    : 'width';
                              (n = e.$width ? e.$width : e[r]),
                                (t[r] = Math.max(t[r] || 0, n || 0));
                            })(i, m),
                        p.ignoreUndo(function () {
                          return p.zoom(r);
                        });
                    },
                    r = 0;
                  r < m.sheets.length;
                  r++
                )
                  n(r);
                return p.showSheet(S), delete m.dataOnly, _;
              })(v, e)
            : o
        );
      }),
        (o.$getExportValue = function (e, t, n) {
          var r = v.getCellValue(e, t, n.math),
            i = n.export_mode,
            o = n.math && '=' == r[0] && 1 < r.length;
          if (('pdf' != i && 'csv' != i) || o || n.rawValues) {
            if ('excel' == i && o)
              if (/^=(image|sparkline)\(/i.test(r)) r = '';
              else {
                for (
                  var a, s, l, u = v._mPage.cellID(e - 1, t - 1), c = e + 1;
                  c <= v.config.rowCount;
                  c++
                ) {
                  var f = v._mPage.getCell(c - 1, t - 1);
                  if (!f || f.source !== u) break;
                  a = c;
                }
                for (var h = t + 1; h <= v.config.columnCount; h++) {
                  var d = v._mPage.getCell(e - 1, h - 1);
                  if (!d || d.source !== u) break;
                  s = h;
                }
                (s || a) && (l = M(e, t, a || e, s || t)),
                  (r = {
                    value: /^=hyperlink\(/i.test(r) ? r.split('"')[3] : v.getCellValue(e, t, !1),
                    formula: r,
                    ref: l,
                  });
              }
          } else r = cr(v, e, t);
          return r;
        });
    },
  });
  function Qo(e, t, n, r) {
    for (var i = webix.copy(e.data), o = [], a = 0; a < i.length; a++)
      for (var s = 0; s < i[0].length; s++) {
        var l = a + 1,
          u = s + 1;
        o.push([l, u, i[a][s]]);
      }
    if (((e.data = o), e.spans))
      for (var c = 0; c < e.spans.length; c++) e.spans[c][0]++, e.spans[c][1]++;
    if (t)
      for (var f = 0; f < t.length; f++) {
        var h = t[f].Sheet,
          d = webix.isUndefined(h);
        (d || h === n) &&
          ((e.ranges = e.ranges || []),
          e.ranges.push([
            t[f].Name.toUpperCase(),
            t[f].Ref.substring(t[f].Ref.indexOf('!') + 1).replace(/\$/g, ''),
            d,
          ]));
      }
    if (
      (e.styles &&
        (function g(e, n) {
          for (var t = 1, r = {}, i = [], o = [], a = 0; a < e.styles.length; a++) {
            for (var s = [], l = e.styles[a][2], u = void 0, c = 0; c < L.length; c++)
              switch (L[c]) {
                case 'color':
                  s[c] = (l.font && l.font.color && Jo(l.font.color.rgb)) || '';
                  break;
                case 'background':
                  s[c] = (l.fill && l.fill.fgColor && Jo(l.fill.fgColor.rgb)) || '';
                  break;
                case 'text-align':
                  s[c] = (l.alignment ? l.alignment.horizontal : '') || U['text-align'];
                  break;
                case 'font-family':
                  s[c] = l.font && l.font.name ? ea(l.font.name) : '';
                  break;
                case 'font-size':
                  s[c] = (l.font && l.font.sz && l.font.sz / 0.75 + 'px') || '';
                  break;
                case 'font-style':
                  s[c] = l.font && l.font.italic ? 'italic' : '';
                  break;
                case 'underline':
                  s[c] = l.font && l.font.underline ? 'underline' : '';
                  break;
                case 'strike':
                  s[c] = l.font && l.font.strike ? 'strike' : '';
                  break;
                case 'font-weight':
                  s[c] = l.font && l.font.bold ? 'bold' : '';
                  break;
                case 'vertical-align':
                  var f = (l.alignment && l.alignment.vertical) || '';
                  s[c] = ('center' == f ? 'middle' : f) || U['vertical-align'];
                  break;
                case 'wrap':
                  s[c] = l.alignment && l.alignment.wrapText ? 'wrap' : 'nowrap';
                  break;
                case 'borders':
                  s[c] = '';
                  break;
                case 'format':
                  (function () {
                    var e = l.numFmt,
                      t = '';
                    e &&
                      'General' != e &&
                      ((e = e.replaceAll('\\', '')),
                      (t = we[e]
                        ? we[e]
                        : n.cache[e]
                          ? n.cache[e]
                          : (n.cache[e] = 'fmt' + n.count++)),
                      ve(o, function (e) {
                        return e[0] == t;
                      }) || o.push([t, e])),
                      (s[c] = t);
                  })();
                  break;
                case 'border-right':
                case 'border-bottom':
                case 'border-left':
                case 'border-top':
                  s[c] = ta(L[c], l);
                  break;
                case 'indent':
                  s[c] = l.alignment && l.alignment.indent ? l.alignment.indent : '';
              }
            (s = s.join(';')), (u = r[s] || 'wss' + t);
            for (var h = 0; h < e.data.length; h++)
              if (e.data[h][0] === e.styles[a][0] + 1 && e.data[h][1] === e.styles[a][1] + 1) {
                e.data[h][3] = u;
                break;
              }
            r[s] || (i.push([u, s]), (r[s] = u), t++);
          }
          (e.formats = o), (e.styles = i);
        })(e, r),
      e.types &&
        (function p(n) {
          n.types.forEach(function (e) {
            for (var t = 0; t < n.data.length; t++)
              if (n.data[t][0] === e[0] + 1 && n.data[t][1] === e[1] + 1) {
                n.data[t][4] = e[2];
                break;
              }
          });
        })(e),
      e.hidden &&
        (function m(e) {
          for (var t = { row: [], column: [] }, n = 0; n < e.hidden.length; n++) {
            var r = e.hidden[n];
            'column' == r[0] ? t.column.push(r[1] + 1) : t.row.push(r[1] + 1);
          }
          e.table = { hidden: t };
        })(e),
      e.sizes)
    )
      for (var v = 0; v < e.sizes.length; v++)
        'column' == e.sizes[v][0]
          ? (e.sizes[v] = [0, e.sizes[v][1] + 1, e.sizes[v][2]])
          : (e.sizes[v] = [e.sizes[v][1] + 1, 0, e.sizes[v][2]]);
    return e;
  }
  function Jo(e) {
    return 8 === (e = e || '000000').length && (e = e.substring(2)), '#' + e;
  }
  function ea(e) {
    for (var t = U['font-family'], n = 0; n < en.length; n++)
      if (en[n].value == e) {
        t = en[n].id;
        break;
      }
    return t;
  }
  function ta(e, t) {
    if (((e = e.replace('border-', '')), t.border && t.border[e])) {
      var n = t.border[e];
      if (n.color) {
        var r = Jo(n.color.rgb) || '',
          i = n.style || '';
        return ''.concat(r, ',').concat(i);
      }
    }
    return '';
  }
  var na = Object.freeze({
    init: function Ms(a) {
      (a._parseExcel = function (e, t) {
        var n = e.options || {};
        n.math = a.config.math;
        for (var r = { sheets: [] }, i = { count: me, cache: {} }, o = 0; o < e.names.length; o++)
          (n.name = e.names[o]),
            r.sheets.push({
              name: n.name,
              state: e.states[o],
              content: Qo(t.getSheet(e, n), e.ranges, o, i),
            });
        return r;
      }),
        (a._parseCsv = function (e, t) {
          e = t.getRecords(e);
          for (var n = webix.copy(e), r = [], i = 0; i < n.length; i++)
            for (var o = n[i].split(t.cell), a = 0; a < o.length; a++) {
              var s = i + 1,
                l = a + 1;
              r.push([s, l, o[a]]);
            }
          return { data: r };
        });
    },
  });
  var ra = Object.freeze({
    init: function Is(t) {
      t.attachEvent('onCommand', function (e) {
        switch (e.id) {
          case 'clear-value':
            t.clearRange(null, { values: !0 });
            break;
          case 'clear-style':
            t.clearRange(null, { styles: !0 });
            break;
          case 'clear-conditional-formats':
            t.clearRange(null, { conditions: !0 });
            break;
          case 'clear-dropdown-editors':
            t.clearRange(null, { editors: !0 });
            break;
          case 'clear-all':
            N.set(function () {
              t.clearRange(null, null);
            });
            break;
          case 'clear-comments':
            t.clearRange(null, { comments: !0 });
        }
      });
    },
  });
  function ia(e, t, n) {
    if (t) webix.isArray(t) || (t = [t, t]);
    else {
      var r = e.$$('cells').getSelectArea();
      r && (t = [r.start[n], r.end[n]]);
    }
    return t;
  }
  function oa(e, t, n, r) {
    var i = {},
      o = {};
    (r = ia(e, r, n)) &&
      ((i[n] = r[0]), (o[n] = r[1]), e.callEvent('onCommand', [{ id: t, group: n }, i, o]));
  }
  function aa(t, n, r, i) {
    (r = ia(t, r, n)) &&
      N.set(function () {
        for (var e = r[0]; e <= r[1]; e++)
          'auto' != i
            ? ((i *= t._zoom), t.$$('cells')['row' == n ? 'setRowHeight' : 'setColumnWidth'](e, i))
            : ('row' == n ? $n : Sn)(e, t);
      });
  }
  var sa = Object.freeze({
    insertRow: function zs(e) {
      oa(this, 'add', 'row', e);
    },
    deleteRow: function Ds(e) {
      oa(this, 'del', 'row', e);
    },
    setRowHeight: function Rs(e, t) {
      aa(this, 'row', e, t);
    },
    insertColumn: function Os(e) {
      oa(this, 'add', 'column', e);
    },
    deleteColumn: function Ts(e) {
      oa(this, 'del', 'column', e);
    },
    setColumnWidth: function Ns(e, t) {
      aa(this, 'column', e, t);
    },
  });
  var la = Object.freeze({
    lockCell: function Ps(e, t, n, r) {
      An(this, e, t, n, !1, r);
    },
    isCellLocked: function Fs(e, t, n) {
      return Mn(this, e, t, n);
    },
  });
  function ua(e, t, n) {
    var r,
      i = e.$$('cells').getSpan();
    for (var o in i)
      if (!('row' == t && n < o))
        for (var a in i[o])
          if (!('column' == t && n < a)) {
            var s = i[o][a],
              l = 'row' == t ? 1 * o + s[1] - 1 : 1 * a + s[0] - 1;
            n < l &&
              ((r = !0),
              ca(
                e,
                [o, a],
                'row' == t ? s[0] : s[0] - (l - n),
                'row' == t ? s[1] - (l - n) : s[1]
              ));
          }
    r && e.refresh();
  }
  function ca(e, t, n, r) {
    e.splitCell(t[0], t[1], !0),
      e.combineCells({ cell: { row: t[0], column: t[1] }, x: n, y: r }, !0);
  }
  var fa = Object.freeze({
    freezeColumns: function Us(e) {
      var t = this.$$('cells');
      if (webix.isUndefined(e)) {
        var n = t.getSelectArea();
        e = n ? n.end.column : 0;
      }
      var r = 'rowId' == t.config.columns[0].id ? 1 : 0,
        i = r,
        o = !1;
      if (e && e != this._frozenColumns) {
        for (var a = e; 0 < a && !(i = t.getColumnIndex(a) + 1); a--);
        i || (i = r);
      } else o = !0;
      N.set(function () {
        ua(this, 'column', e),
          t.unselect(),
          t.define('leftSplit', i),
          t.refreshColumns(),
          this.callEvent('onAction', [
            'freeze-column',
            { value: this._frozenColumns || 0, newValue: e },
          ]),
          (this._frozenColumns = o || !e ? 0 : e);
      }, this);
    },
    freezeRows: function Bs(e) {
      var t = this.$$('cells');
      if (webix.isUndefined(e)) {
        var n = t.getSelectArea();
        e = n ? n.end.row : 0;
      }
      var r = 0,
        i = !1;
      if (e && e != this._frozenRows) for (var o = e; 0 < o && !(r = t.getIndexById(o) + 1); o--);
      else i = !0;
      N.set(function () {
        ua(this, 'row', e),
          t.unselect(),
          t.define('topSplit', r),
          t.refreshColumns(),
          this.callEvent('onAction', ['freeze-row', { value: this._frozenRows, newValue: e }]),
          (this._frozenRows = i || !e ? 0 : e);
      }, this);
    },
  });
  var ha = Object.freeze({
    hideGridlines: function Ls(e) {
      Io(this, e);
    },
  });
  var da = Object.freeze({
    hideHeaders: function Hs(e) {
      Do(this, e);
    },
  });
  var va = Object.freeze({
    hideColumn: function js(e, t) {
      go(this, e, t, 'column');
    },
    isColumnVisible: function Ws(e) {
      return vo(this, e);
    },
    hideRow: function qs(e, t) {
      go(this, e, t, 'row');
    },
    isRowVisible: function Xs(e) {
      return po(this, e);
    },
  });
  var ga = Object.freeze({
    addImage: function Gs(e, t, n) {
      this.setCellValue(
        e,
        t,
        (function r(e) {
          return '=IMAGE("'.concat(e, '")');
        })(n)
      ),
        this.refresh();
    },
    addSparkline: function Ys(e, t, n) {
      var r = (function i(e) {
        var t = 'bar' == (e = webix.copy(e)).type;
        t && e.horizontal && (e.type = 'barH');
        var n = '=SPARKLINE('.concat(e.range, ',"').concat(e.type, '"');
        return (
          t
            ? (n += ',"'.concat(e.color, '","').concat(e.negativeColor, '"'))
            : e.color && (n += ',"'.concat(e.color, '"')),
          n + ')'
        );
      })(n);
      this.setCellValue(e, t, r), this.refresh();
    },
    getSheetData: function Ks(r) {
      var i = this;
      if (this._mData.getPage(r))
        return {
          getValue: function (e, t, n) {
            return i.getCellValue(e, t, n, r);
          },
          getRangeValue: function (e) {
            return i.getRangeValue(e, r);
          },
        };
    },
    registerMathMethod: function Zs(e, t) {
      o(this, e, t, !0);
    },
    recalculate: function Qs() {
      this._mData.getStore().recalculate(), this.callEvent('onMathRefresh', []), this.refresh();
    },
    setPlaceholder: function Js(e, t) {
      'object' == p(e) && ((t = e), (e = '*')),
        this._mData.getStore().setPlaceholder(e, t),
        this.refresh(),
        this.callEvent('onMathRefresh', []);
    },
  });
  var pa = Object.freeze({
    combineCells: function el(e, t) {
      var n = this;
      if (!e) {
        var r = this.getSelectedId(!0);
        1 < r.length && (e = Tn(r));
      }
      N.set(function () {
        e && Rn(n, e.cell, e.x, e.y);
      }),
        t || this.refresh();
    },
    splitCell: function tl(e, t, n) {
      e && t
        ? On(this, { row: e, column: t })
        : N.set(function () {
            this.eachSelectedCell(function (e) {
              On(this, e);
            });
          }, this),
        n || this.refresh();
    },
    addStyle: function nl(e, t) {
      return J(this, e, t);
    },
    getStyle: function rl(e, t) {
      return K(this, { row: e, column: t });
    },
    setStyle: function il(e, t, n) {
      return re(this, { row: e, column: t }, n);
    },
    setRangeStyle: function ol(e, t) {
      N.set(function () {
        ie(this, e, t);
      }, this);
    },
    clearRange: function al(e, t) {
      (e || (e = this._table.getSelectArea())) &&
        (t || (t = { styles: !0, values: !0, editors: !0, conditions: !0, comments: !0 }),
        t.styles && ce(this, e),
        t.conditions && er(this, e),
        t.values && this.setRangeValue(e, null),
        t.editors && (Qi(this, e), mi(this, e)),
        t.comments && To(this, e),
        this.refresh());
    },
    compactStyles: function sl() {
      return fe(this);
    },
    serialize: function ll(e) {
      var t = {};
      return (
        this.callEvent('onDataSerialize', [t, e]),
        e && (e.compactStyles && (t.styles = he(t)), e.sheets)
          ? (function s(t, e, n) {
              var r = Ft(t, t._activeSheet);
              (r.content = e), (r.state = r.state || 'visible');
              var i = webix.copy(t._sheets),
                o = !n || !1 !== n.math,
                a = n && n.compactStyles;
              return (
                i.forEach(function (e) {
                  e.name != t._activeSheet &&
                    ((e.content.data = pt(t, o, e.name)),
                    (e.state = e.state || 'visible'),
                    a && (e.content.styles = he(e.content)),
                    (e.content.ranges = t.ranges.serialize(e.name)));
                }),
                i
              );
            })(this, t, e)
          : t
      );
    },
    showSheet: function ul(e) {
      Pt(this, e);
    },
    setSheetState: function cl(e, t) {
      Et(this, e, t);
    },
    getSheetState: function fl(e) {
      return Ft(this, e).state || 'visible';
    },
    getActiveSheet: function hl() {
      return this._activeSheet;
    },
    addSheet: function dl(e, t, n) {
      return Vt(this, e, t, n);
    },
    clearSheet: function vl() {
      this.reset();
    },
    renameSheet: function gl(e, t) {
      Dt(this, e, t);
    },
    editSheet: function pl(e) {
      At(this, e);
    },
    removeSheet: function ml(e) {
      zt(this, e);
    },
    undo: function wl() {
      Ar(this);
    },
    redo: function bl() {
      Mr(this);
    },
    sortRange: function xl(e, t) {
      Eo(this, e, t);
    },
    showCell: function _l(e, t) {
      ar(this, e, t);
    },
  });
  function ma(e) {
    return 'boolean' == typeof e && (e *= 1), e || 0 === e ? e : '';
  }
  var wa = Object.freeze({
    refresh: function yl(e) {
      e ? this._table.refreshColumns() : this._table.refresh();
    },
    eachSelectedCell: function Cl(e) {
      for (var t = this.getSelectedId(!0), n = 0; n < t.length; n++) e.call(this, t[n]);
    },
    getSelectedRange: function Sl(e) {
      var t = this._table.getSelectArea();
      return t
        ? (e && (e = this.getActiveSheet()),
          M(t.start.row, t.start.column, t.end.row, t.end.column, e))
        : '';
    },
    getSelectedId: function $l(e) {
      var t = this._table.getSelectArea();
      if (!e) return t && t.start.row ? t.start : null;
      var n = [];
      if (t)
        for (var r = t.start, i = t.end, o = r.row; o <= i.row; o++)
          for (var a = r.column; a <= i.column; a++) n.push({ row: o, column: a });
      return n;
    },
    getCellValue: function El(e, t, n, r) {
      if ((r = r ? this._mData.getPage(r) : this._mPage))
        return ma(r.getValue(e - 1, t - 1, !1 !== n));
    },
    setCellValue: function kl(l, u, c, f) {
      var h = this;
      f || (f = this.getActiveSheet());
      var d = this._mData.getPage(f);
      if (d) {
        c = ma(c);
        var e,
          v = this.getCellValue(l, u, !0, f),
          g = ht(this, l, u, f);
        if ('date' == g) {
          var t = webix.Date.strToDate(webix.i18n.spreadsheet.formats.parseDateTime),
            n = isNaN(c) ? r(t(c)) : c;
          e = v == n;
        } else 'string' == g || '' === c || isNaN(c) || v != c || 0 === c || ((e = !0), (c *= 1));
        e ||
          v === c ||
          N.set(function () {
            if (h.callEvent('onBeforeValueChange', [l, u, c, v, f])) {
              if (f != h.getActiveSheet()) {
                var e = ve(h._sheets, function (e) {
                    return e.name == f;
                  }).content,
                  t = ve(e.data, function (e) {
                    return e[0] == l && e[1] == u;
                  });
                t || ((t = [l, u]), e.data.push(t)),
                  (t[2] = c),
                  (h._page_value_set = !0),
                  (t[4] = null);
                var n = ut(h, e, t);
                delete h._page_value_set;
                var r = d.getCell(l - 1, u - 1, !0);
                (r.$format = Ye({ fmt: Je(e, t) }, 'string') ? 1 : 0),
                  d.setValue(l - 1, u - 1, n.value),
                  (t[2] = n.value),
                  (t[4] = r.type = n.type),
                  Ot(t, e, !0),
                  (r.style = t[3]),
                  h.callEvent('onCellChange', [l, u, n.value, f]);
              } else {
                var i = h.getSelectedId();
                wr(h, i, !0),
                  h._mPage.setValue(l - 1, u - 1, c),
                  h.callEvent('onCellChange', [l, u, c, f]);
                var o = ht(h, l, u);
                if (
                  (g != o &&
                    'string' == o &&
                    '=' == c[0] &&
                    1 < c.length &&
                    h._mPage.setValue(l - 1, u - 1, c),
                  wr(h, i),
                  /^=hyperlink\(/i.test(c))
                ) {
                  var a = h.getStyle(l, u),
                    s = h.addStyle({ color: '#0000ff', underline: 'underline' }, a);
                  h.setStyle(l, u, s);
                }
              }
              h.saveCell(l, u, f);
            }
          });
      }
    },
    setRangeValue: function Vl(i, o, a) {
      N.set(function () {
        for (var e = I(i, this), t = 0, n = e.start.row; n <= e.end.row; n++)
          for (var r = e.start.column; r <= e.end.column; r++, t++)
            this.setCellValue(n, r, webix.isArray(o) ? o[t] : o, a);
      }, this);
    },
    getRangeValue: function Al(e, t) {
      t || (t = this.getActiveSheet());
      var n = V(e, this, t),
        r = this._mData.getPage(n[4]);
      return n && r ? r.getRange(n[0] - 1, n[1] - 1, n[2] - 1, n[3] - 1).map(ma) : [];
    },
    getRow: function Ml(t) {
      for (
        var i = this,
          o = webix.copy(this._table.getItem(t)),
          e = function (n) {
            var r = i._mPage.getCell(t - 1, n - 1);
            if (r) {
              (o[n] = r.value),
                [
                  ['style', '$cellCss'],
                  ['type', '$cellType'],
                  ['format', '$cellFormat'],
                ].forEach(function (e) {
                  var t = r[e[0]];
                  t && (o[e[1]] || (o[e[1]] = {}), (o[e[1]][n] = t));
                });
              var e = i.getCellValue(t, n, !0);
              e && '=' == e[0] && (o['$' + n] = e);
            }
          },
          n = 1;
        n <= this.config.columnCount;
        n++
      )
        e(n);
      return o;
    },
    getColumn: function Il(e) {
      return this._table.getColumnConfig(e);
    },
    reset: function zl(e) {
      var t = { data: [] };
      e && e.sheets && (t = Nt(t)), this.parse(t);
    },
    _resetTable: function Dl() {
      ur(this);
    },
  });
  var ba = Object.freeze({
    saveCell: function Rl(e, t, n) {
      var r = (n ? this._mData.getPage(n) : this._mPage).getCell(e - 1, t - 1);
      w(this, 'data', {
        row: e,
        column: t,
        value: this.getCellValue(e, t, null, n),
        page: n || this.getActiveSheet(),
        style: (r ? r.style : '') || '',
      });
    },
  });
  var xa = Object.freeze({
    setCellEditor: function Ol(e, t, n) {
      var r = (this._table._ssEditors[e] = this._table._ssEditors[e] || {}),
        i = r[t] || null;
      (r[t] = n) && n.editor
        ? this._table.addCellCss(e, t, 'ss_editor')
        : (delete this._table._ssEditors[e][t], this._table.removeCellCss(e, t, 'ss_editor')),
        this.callEvent('onAction', ['dropdown', { row: e, column: t, value: i, newValue: n }]);
    },
    getCellEditor: function Tl(e, t) {
      return (this._table._ssEditors[e] || {})[t] || null;
    },
  });
  var _a = Object.freeze({
    setCellFilter: function Nl(e, t, n) {
      var r = (this._table._ssFilters[e] = this._table._ssFilters[e] || {}),
        i = r[t] || null;
      if (
        (n && (webix.isArray(n) || 'string' == typeof n) && (n = { options: n }),
        (r[t] = n) && 'object' == p(n))
      ) {
        if (
          (this._table.addCellCss(e, t, 'ss_filter'),
          n.value && bi(n.value) && this._table.addCellCss(e, t, 'ss_filter_active'),
          webix.extend(n, { row: e, column: t }, !0),
          (n.options = wi(this, e, t, n.options)),
          !n.handler && n.value && n.value.condition)
        ) {
          var o = n.mode || yi(this, e, t);
          n.handler = Ei(o, n.value);
        }
      } else
        delete this._table._ssFilters[e][t],
          this._table.removeCellCss(e, t, 'ss_filter'),
          this._table.removeCellCss(e, t, 'ss_filter_active');
      this.callEvent('onAction', ['filter', { row: e, column: t, value: i, newValue: n }]);
    },
    getCellFilter: function Pl(e, t) {
      return (this._table._ssFilters[e] || {})[t] || null;
    },
    removeFilters: function Fl() {
      for (var t = this, e = pi(this._table), n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.row,
          o = r.column;
        this.setCellFilter(i, o, null);
      }
      (this._table._ssFilters = {}),
        this._table.data.filter(function (e) {
          return t.isRowVisible(e.id);
        });
    },
    filterSpreadSheet: function Ul() {
      var u = this,
        c = this._table;
      c.data.silent(function () {
        c.data.filter(function (e) {
          return u.isRowVisible(e.id);
        });
        for (
          var n = pi(c),
            e = function (e) {
              var t = n[e],
                i = t.row,
                o = t.column,
                a = t.handler,
                s = t.lastRow,
                l = !1;
              c.data.filter(
                function (e) {
                  var t = e.id;
                  if (t <= i || 'function' != typeof a) return !0;
                  var n = c.getSpan(t, o);
                  if (n) {
                    if (n[0] == i && n[1] == o) return !0;
                    t = n[0];
                  }
                  var r = String(u.getCellValue(t, o, !1));
                  if (s) {
                    if (s < t) return !0;
                  } else if (l || !r) return (l = !0);
                  return a(r);
                },
                1,
                !0
              );
            },
            t = 0;
          t < n.length;
          t++
        )
          e(t);
      }),
        c.callEvent('onAfterFilter', []),
        c.refresh();
    },
  });
  var ya = Object.freeze({
    confirm: function Bl(e) {
      return webix.confirm({
        container: this.$view,
        css: 'webix_ssheet_confirm',
        text: e.text,
        ok: webix.i18n.spreadsheet.labels.ok,
        cancel: webix.i18n.spreadsheet.labels.cancel,
      });
    },
    alert: function Ll(e) {
      return webix.alert({
        container: this.$view,
        css: 'webix_ssheet_alert',
        text: e.text,
        type: e.type,
        ok: webix.i18n.spreadsheet.labels.ok,
      });
    },
  });
  var Ca = Object.freeze({
    resetUndo: function Hl() {
      Ir(this);
    },
    groupUndo: function jl(e) {
      N.set(e, this);
    },
    ignoreUndo: function Wl(e) {
      Dr(e, this);
    },
  });
  var Sa = Object.freeze({
    setFormat: function ql(e, t, n) {
      Ae(this, e, t, n);
    },
    changeDecimals: function Xl(e, t, n) {
      Fe(this, n, e, t);
    },
  });
  var $a = Object.freeze({
    showFormulas: function Gl(e) {
      Uo(this, e);
    },
  });
  var Ea = Object.freeze({
    showPrintBorders: function Yl(e) {
      var t = !!this._printBorders.$render;
      'toggle' == e && (e = !t),
        e != t &&
          (e ? Bi(this) : (delete this._printBorders.$render, this.refresh()),
          this.callEvent('onCommand', [{ id: 'toolbar-update', name: 'print-borders', value: e }]),
          this.callEvent('onAction', ['print-borders', { newValue: e, value: t }]));
    },
  });
  var ka = Object.freeze({
    zoom: function Kl(e) {
      Gt(this, e);
    },
  });
  var Va = [
      {
        id: 'file',
        submenu: [
          {
            id: 'sheet',
            submenu: [
              { id: 'new-sheet' },
              { id: 'copy-sheet' },
              { id: 'remove-sheet' },
              { id: 'hide-sheet' },
            ],
          },
          { id: 'excel-import' },
          { id: 'excel-export' },
          { id: 'print' },
          { id: 'print-borders' },
        ],
      },
      {
        id: 'edit',
        submenu: [
          { id: 'add-range' },
          { id: 'add-dropdown' },
          { id: 'add-link' },
          { id: 'lock-cell' },
          { id: 'conditional-format' },
          {
            id: 'clear',
            submenu: [
              { id: 'clear-value' },
              { id: 'clear-style' },
              { id: 'clear-conditional-formats' },
              { id: 'clear-dropdown-editors' },
              { id: 'clear-comments' },
              { $template: 'Separator' },
              { id: 'clear-all' },
            ],
          },
        ],
      },
      {
        id: 'insert',
        submenu: [
          { id: 'image', submenu: [{ id: 'add-image-cell' }, { id: 'add-image-top' }] },
          { id: 'graph', submenu: [{ id: 'add-sparkline' }, { id: 'add-chart' }] },
          { id: 'add-comment' },
        ],
      },
      {
        id: 'data',
        submenu: [
          { id: 'sort', submenu: [{ id: 'sort-asc' }, { id: 'sort-desc' }] },
          { id: 'create-filter' },
        ],
      },
      {
        id: 'view',
        submenu: [
          {
            id: 'columns',
            submenu: [
              { id: 'insert-column' },
              { id: 'delete-column' },
              { id: 'show-column' },
              { id: 'hide-column' },
              { id: 'resize-column' },
            ],
          },
          {
            id: 'rows',
            submenu: [
              { id: 'insert-row' },
              { id: 'delete-row' },
              { id: 'show-row' },
              { id: 'hide-row' },
              { id: 'resize-row' },
            ],
          },
          { $template: 'Separator' },
          { id: 'freeze-columns' },
          { id: 'freeze-rows' },
          { id: 'hide-gridlines' },
          { id: 'hide-headers' },
          { id: 'show-formulas' },
        ],
      },
    ],
    Aa = [
      { id: 'file', submenu: [{ id: 'excel-export' }, { id: 'print' }, { id: 'print-borders' }] },
    ],
    Ma = {
      getMenuData: function (e, t) {
        var n;
        for (n = 0; n < e.length; n++)
          'string' == typeof e[n] && (e[n] = { id: e[n] }),
            ('resize-column' != e[n].id && 'resize-row' != e[n].id) || t.resizeCell
              ? (e[n].value || (e[n].value = webix.i18n.spreadsheet.menus[e[n].id]),
                e[n].submenu && (e[n].submenu = this.getMenuData(e[n].submenu, t)))
              : (e.splice(n, 1), n--);
        return e;
      },
    };
  function Ia(t) {
    t.attachEvent('onComponentInit', function () {
      return (function e(t) {
        t.$$('menu') &&
          t.$$('menu').attachEvent('onMenuItemClick', function (e) {
            return (function n(e, t) {
              e.callEvent('onMenuItemClick', [t]) &&
                (za[t] ? za[t](e) : e.callEvent('onCommand', [{ id: t }]));
            })(t, e);
          });
      })(t);
    });
    var e = t.config,
      n = {
        view: 'menu',
        borderless: !0,
        css: 'webix_ssheet_menu',
        id: 'menu',
        autowidth: !0,
        type: { height: 40 },
        data: Ma.getMenuData(webix.isArray(e.menu) ? e.menu : webix.copy(e.readonly ? Aa : Va), e),
      };
    return t.callEvent('onViewInit', ['menu', n]), n;
  }
  var za = {
    undo: function (e) {
      return e.undo();
    },
    redo: function (e) {
      return e.redo();
    },
    'insert-column': function (e) {
      return e.insertColumn();
    },
    'delete-column': function (e) {
      return e.deleteColumn();
    },
    'show-column': function (e) {
      return e.callEvent('onCommand', [{ id: 'show', group: 'column', neighbors: !0 }]);
    },
    'hide-column': function (e) {
      return e.hideColumn(null, !0);
    },
    'resize-column': function (e) {
      return e.callEvent('onCommand', [
        { id: 'resize', group: 'column', value: webix.i18n.spreadsheet.menus['resize-column'] },
      ]);
    },
    'insert-row': function (e) {
      return e.insertRow();
    },
    'delete-row': function (e) {
      return e.deleteRow();
    },
    'show-row': function (e) {
      return e.callEvent('onCommand', [{ id: 'show', group: 'row', neighbors: !0 }]);
    },
    'hide-row': function (e) {
      return e.hideRow(null, !0);
    },
    'resize-row': function (e) {
      return e.callEvent('onCommand', [
        { id: 'resize', group: 'row', value: webix.i18n.spreadsheet.menus['resize-row'] },
      ]);
    },
    'freeze-columns': function (e) {
      return e.freezeColumns();
    },
    'freeze-rows': function (e) {
      return e.freezeRows();
    },
    'hide-gridlines': function (e) {
      return e.hideGridlines('toggle');
    },
    'hide-headers': function (e) {
      return e.hideHeaders('toggle');
    },
    'show-formulas': function (e) {
      return e.showFormulas('toggle');
    },
    'print-borders': function (e) {
      return e.showPrintBorders('toggle');
    },
  };
  var Da = {
    name: 'spreadsheet',
    _base_index: { count: 1 },
    defaults: {
      spans: !0,
      liveEditor: !0,
      rowCount: 50,
      math: !0,
      columnCount: 20,
      resizeCell: !0,
      sheetTabWidth: 90,
      conditionStyle: (function Zl() {
        return [
          { name: Hn('normal'), css: 'webix_ssheet_condition_regular' },
          { name: Hn('neutral'), css: 'webix_ssheet_condition_neutral' },
          { name: Hn('bad'), css: 'webix_ssheet_condition_bad' },
          { name: Hn('good'), css: 'webix_ssheet_condition_good' },
        ];
      })(),
    },
    $init: function () {
      var e = this;
      (this.$index = this._base_index.count++),
        (this.$view.className += ' webix_ssheet'),
        this.$ready.unshift(this._sub_init),
        this.$ready.unshift(Se),
        this.$ready.push(this._set_handlers),
        (this._destroy_with_me = []),
        this.attachEvent('onDestruct', function () {
          e._destroy_with_me.forEach(function (e) {
            return e.destructor();
          });
        });
    },
    $skin: function () {
      !(function t() {
        var e = webix.skin.$name;
        (F.width = webix.skin.$active.inputHeight + 2),
          (F.titleHeight = 'mini' == e || 'compact' == e ? 18 : 20),
          (U['font-family'] = B[e]),
          'contrast' == e
            ? ((U.background = '#393939'), (U.color = '#ffffff'))
            : 'material' == e || 'mini' == e
              ? (U.color = '#475466')
              : 'willow' == e
                ? (U.color = '#2C2F3C')
                : 'dark' == e && ((U.background = '#2A2B2D'), (U.color = '#ffffff'));
      })();
    },
    _sub_init: function () {
      var e = this.config,
        t = e.readonly,
        n = [];
      e.menu && n.push(Ia(this)),
        ((t && (e.toolbar || e.buttons)) || (!t && !1 !== e.toolbar)) && n.push(dn(this)),
        e.subbar && n.push(e.subbar),
        !t && e.liveEditor && n.push(mr(this));
      var r = { editable: !t, liveEditor: e.liveEditor };
      e.rowHeight && (r.rowHeight = e.rowHeight),
        e.columnWidth && (r.columnWidth = e.columnWidth),
        t ? n.push(sr(this, r)) : n.push({ cols: [sr(this, r), ti(this)] });
      var i = !0 === e.bottombar ? yt(this) : e.bottombar;
      i && n.push(i),
        xt(this),
        t ||
          (function s(o) {
            o.attachEvent('onComponentInit', function () {
              return o.$$('context').attachTo(o._table.$view);
            });
            var e = webix.i18n.spreadsheet.menus,
              t = [];
            !1 !== o.config.clipboard &&
              (t = [
                { id: 'cut', value: e.cut },
                { id: 'copy', value: e.copy },
                { id: 'paste', value: e.paste },
                {
                  id: 'special-paste',
                  value: e['special-paste'],
                  submenu: [
                    { id: 'paste-values', value: e['paste-values'] },
                    { id: 'paste-formulas', value: e['paste-formulas'] },
                    { id: 'paste-styles', value: e['paste-styles'] },
                    { id: 'paste-conditions', value: e['paste-conditions'] },
                  ],
                },
              ]);
            var a = {
                data: t.concat([
                  { id: 'clear', value: e.clear, submenu: rn() },
                  { id: 'lock-cell', value: e['lock-cell'] },
                  { $template: 'Separator' },
                  {
                    id: 'sort',
                    value: e.sort,
                    submenu: [
                      { id: 'sort-asc', value: e['sort-asc'] },
                      { id: 'sort-desc', value: e['sort-desc'] },
                    ],
                  },
                  { id: 'create-filter', value: e['create-filter'] },
                  { $template: 'Separator' },
                  { id: 'add-range', value: e['add-range'] },
                  { id: 'add-link', value: e['add-link'] },
                  { id: 'add-comment', value: e['add-comment'] },
                ]),
                column: tn(o),
                row: nn(o),
              },
              n = {
                view: 'contextmenu',
                id: 'context',
                padding: 0,
                submenuConfig: {
                  padding: 0,
                  on: {
                    onBeforeShow: function () {
                      this.sizeToContent();
                    },
                  },
                },
                data: [],
                on: {
                  onMenuItemClick: function (e) {
                    o.callEvent('onCommand', [this.getMenuItem(e)]);
                  },
                  onBeforeShow: function (e) {
                    var t, n;
                    if ((webix.callEvent('onClick', []), !(n = o._table.locate(e)))) return !1;
                    if (
                      ((t = ''),
                      n.header && 'rowId' !== n.column
                        ? (bn(n.column, o) || wn(n.column, o), (t = 'column'))
                        : n.row &&
                          (t =
                            'rowId' === n.column
                              ? (_n(n.row, o) || pn(n.row, o), 'row')
                              : (xn(n.row, n.column, o) || o._table.addSelectArea(n, n), 'data')),
                      t)
                    ) {
                      var r = (function i(e, t, n) {
                        var r = { area: t, data: n };
                        return e.callEvent('onContextMenuConfig', [r]) ? r.data : null;
                      })(o, t, a[t]);
                      if (r)
                        return (
                          this.clearAll(),
                          this.parse(r),
                          this.sizeToContent(),
                          webix.html.preventEvent(e),
                          !0
                        );
                    }
                    return !1;
                  },
                },
              };
            o.callEvent('onViewInit', ['context', n]);
            var r = o.ui(n);
            o._destroy_with_me.push(r);
          })(this),
        (function o(e) {
          for (var r = {}, t = e.config.readonly ? [qi, Oi, ji] : Gi, n = 0; n < t.length; n++)
            r[t[n].action] = new t[n].DialogBox(e);
          e.attachEvent('onCommand', function (e) {
            var t = r[e.id];
            t && t.open(e);
          }),
            e.attachEvent('onAction', function (e, t) {
              if ('add-view' == e && !t.newValue) {
                var n = r['add-image-top'];
                n && n.viewid == t.row && n.close();
              }
            });
        })(this),
        this.rows_setter(n);
    },
    _set_handlers: function () {
      var e = this;
      this._table ||
        ((this._table = this.$$('cells')),
        (function r(e) {
          for (
            var t = [
                Qt,
                Ki,
                ir,
                de,
                fo,
                et,
                Co,
                ko,
                Nr,
                kn,
                yo,
                In,
                Ln,
                qt,
                et,
                mt,
                a,
                vi,
                Mo,
                ao,
                Lo,
                vt,
                jo,
                ki,
                Li,
                Zo,
                na,
                ra,
                Fo,
                b,
                Ro,
                zo,
                Jr,
                Bo,
              ],
              n = 0;
            n < t.length;
            n++
          )
            t[n].init && t[n].init(e);
        })(this),
        ur(this, this.config.columnCount, this.config.rowCount),
        fr(this),
        this._table.attachEvent('onAfterAreaAdd', function () {
          return e.callEvent('onAfterSelect', [e.getSelectedId(!0)]);
        }),
        this.callEvent('onComponentInit', []));
    },
    $onLoad: function (e, t) {
      this._set_handlers();
      var n = e.excel;
      n
        ? (e = this._parseExcel(e, t))
        : e.data || 'string' != typeof e || (!t.cell && !t.row) || (e = this._parseCsv(e, t)),
        (function o(e, t, n) {
          (e._loading_data = !0), (t = webix.isArray(t) ? { sheets: t } : t);
          var r = e.config.prepareData || n;
          if (!t.sheets && e._activeSheet) {
            var i = e._activeSheet;
            Rt(e, i, (Ft(e, i).content = t), r), Bt(e, t);
          } else Tt(e, t, r);
          e._loading_data = !1;
        })(this, e, n);
    },
  };
  !(function Ql(e) {
    for (
      var t = [sa, la, fa, ha, da, va, ga, pa, wa, ba, xa, _a, ya, Ca, Sa, $a, Ea, ka], n = 0;
      n < t.length;
      n++
    )
      webix.extend(e, t[n]);
  })(Da),
    webix.protoUI(Da, webix.AtomDataLoader, webix.IdSpace, webix.ui.layout);
});
//# sourceMappingURL=spreadsheet.js.map
