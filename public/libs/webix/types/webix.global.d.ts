// Type definitions for Webix UI 10.2
// Project: https://webix.com

declare namespace webix {
  type obj = { [key: string]: any };
  type WebixDataMap = { [key: string]: string };
  type WebixTemplate = (...args: any[]) => string;
  type WebixCallback = (...args: any[]) => any;
  type WebixProxy = {
    $proxy: boolean;
    init?(): void;
    load(view: webix.ui.baseview, params: obj): Promise<any> | any[] | obj;
    save?(view: webix.ui.baseview, params: obj, dp: webix.DataProcessor): Promise<any> | obj;
    saveAll?(view: webix.ui.baseview, params: obj, dp: webix.DataProcessor): Promise<any> | any[];
    result?(
      state: obj,
      view: webix.ui.baseview,
      dp: webix.DataProcessor,
      text: string,
      data: obj,
      loader: XMLHttpRequest
    ): void;
  };
  type EventHash = { [id: string]: WebixCallback };
  type PositionInfo = { x: number; y: number };
  type SizeInfo = { width: number; height: number };

  type WebixDataStorage = DataCollection | TreeCollection | DataStore | TreeStore;
  type WebixDataMoveTarget = webix.ui.baseview | WebixDataStorage;
  type WebixBindSource = webix.ui.baseview | WebixDataStorage;

  type WebixAnimate = {
    type?: 'flip' | 'slide' | 'flipback' | 'fade' | 'show';
    direction?: 'right' | 'left' | 'top' | 'bottom';
    subtype?: 'out' | 'in' | 'together' | 'horizontal' | 'vertical';
    x?: number;
    y?: number;
    delay?: number;
    timing?: string;
    callback?: WebixCallback;
    master?: obj;
  };
  type WebixValidationRule = 'isNotEmpty' | 'isEmail' | 'isNumber' | 'isChecked';
  type WebixValidationRules = {
    [key: string]: ((...args: any[]) => boolean) | WebixValidationRule;
  };
  type WebixEventContext = {
    bind?: obj;
    capture?: boolean;
    id?: string | number;
  };
  type WebixSortConfig = {
    by: string;
    dir?: string;
    as?: string;
  };
  type WebixSortingType =
    | 'int'
    | 'date'
    | 'string'
    | 'string_strict'
    | 'text'
    | 'string_locale'
    | 'string_locale_strict'
    | 'text_locale'
    | 'server'
    | 'raw';
  type WebixSorting = {
    create(config: WebixSortConfig | WebixSortConfig[]): any;
    as: {
      [key in WebixSortingType]: (a?: any, b?: any) => number;
    } & { [key: string]: (a?: any, b?: any) => number | boolean };
  };
  type WebixGroupConfig = {
    by: string | WebixCallback;
    map?: {
      [key: string]: any[];
    };
    missing?: boolean | string;
    footer?: {
      [key: string]: any[];
    } & { row?: string | WebixTemplate };
    row?: string | WebixTemplate;
  };
  type WebixDragConfig = {
    $drag?(source: HTMLElement, event: Event, pointer: string): string;
    $dragPos?: WebixCallback;
    $dragCreate?(source: HTMLElement, event: Event, pointer: string): HTMLElement;
    $dragDestroy?: WebixCallback;
    move?(source: HTMLElement, tindex: number, tobj: webix.ui.baseview, details: obj): void;
  };
  type WebixDropConfig = {
    $dragIn?(source: HTMLElement, target: HTMLElement, event: Event): void;
    $dragOut?(source: HTMLElement, target: HTMLElement, drop: HTMLElement, event: Event): void;
    $drop?(source: HTMLElement, target: HTMLElement, event: Event): void;
  };
  type WebixDnDContext = {
    from?: any;
    to?: any;
    source?: any;
    target?: any;
    start?: any;
    parent?: string | number;
    index?: number;
    x_offset?: number;
    y_offset?: number;
  };
  type WebixNumberFormat = {
    decimalSize?: number;
    groupSize?: number;
    decimalDelimiter?: string;
    groupDelimiter?: string;
    decimalOptional?: boolean;
    prefix?: string;
    sufix?: string;
    minusSign?: string | string[];
    minusPosition?: string;
  };
  type WebixPrintSettings = {
    paper?: string;
    mode?: 'portrait' | 'landscape';
    margin?: number | WebixMarginConfig;
    docHeader?: string;
    docFooter?: string;
    scroll?: boolean;
    fit?: 'page' | 'data';
    header?: boolean;
    skiprows?: boolean;
    borderless?: boolean;
    trim?: boolean;
    data?: string;
    footer?: boolean;
    sheets?: boolean | string | string[];
    sheetnames?: boolean;
    external?: boolean;
  };
  type WebixProgressBarConfig = {
    type?: 'top' | 'bottom' | 'icon';
    icon?: string;
    delay?: number;
    hide?: boolean;
    position?: number;
  };
  type WebixItemType = {
    css?: string;
    height?: number | 'auto';
    template?: string | WebixTemplate;
    width?: number | 'auto';
    [key: string]: any;
  };
  type WebixItemTypes = {
    [key: string]: WebixItemType;
  };
  type WebixScrollState = {
    x: number;
    y: number;
  };
  type WebixMarginConfig = {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
  type WebixPaddingConfig = {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
  type WebixAutoTooltipConfig = {
    template?: string | WebixTemplate;
    dx?: number;
    dy?: number;
    delay?: number;
    overflow?: boolean;
    css?: string | obj;
  };
  type WebixDynamicTooltipConfig = {
    $tooltipIn?(target: HTMLElement, event: Event): any;
    $tooltipOut?(target: HTMLElement, node: HTMLElement, event: Event): any;
    $tooltipMove?(
      target: HTMLElement,
      event: Event,
      details: { first?: string | null; overflow?: string | null }
    ): any;
    overflow?: boolean;
  };
  type WebixTouchConfig = {
    longTouchDelay: number;
    scrollDelay: number;
    gravity: number;
    deltaStep: number;
    speed: string;
    finish: number;
    elastic: boolean;
  };
  type WebixPagerConfig = {
    container?: string;
    size?: number;
    group?: number;
    page?: number;
  };
  type WebixEventMap = {
    [eventId: string]: webix.ui.baseview;
  };
  type WebixOnClickConfig = {
    [key: string]: WebixCallback;
  };
  type WebixCalendarIcon = {
    template: WebixTemplate;
    on_click: WebixOnClickConfig;
  };
  type WebixCalendarIconConfig = WebixCalendarIcon[];
  type WebixSparklineType = 'area' | 'bar' | 'line' | 'pie' | 'spline' | 'splineArea' | 'radar';
  type WebixSparklineOptions = {
    paddingX?: number;
    paddingY?: number;
    radius?: number;
    eventRadius?: number;
    minHeight?: number;
    css?: string;
    itemCss?: string | WebixCallback;
    origin?: number;
    scale?: number;
    color?: string;
    horizontal?: boolean;
    donut?: boolean;
    innerRadius?: number;
  };
  type WebixSparklines = {
    [key in WebixSparklineType]: WebixCallback;
  };
  type WebixSpan = [string | number, string, number, number, string?, string?];
  type WebixSpanConfig = WebixSpan[];
  type WebixHeaderMenuConfig = {
    width?: number;
    height?: number;
    autoheight?: boolean;
    autowidth?: boolean;
    yCount?: number;
    scroll?: boolean;
    spans?: boolean;
    data?: any[];
    template?: string | WebixTemplate;
  };
  type WebixDatatableHeaderConfig = {
    autoheight?: boolean;
    text?: string;
    batch?: number | string;
    colspan?: number;
    closed?: boolean;
    rowspan?: number;
    rotate?: boolean;
    collect?: { visible?: boolean };
    compare?: WebixCallback;
    content?: string;
    contentId?: number | string;
    placeholder?: string;
    prepare?: WebixCallback;
    inputConfig?: obj;
    tooltip?: boolean | string | WebixTemplate;
    mode?: string;
    height?: number;
    css?: string | obj;
    groupText?: string;
  };
  type WebixDatatableColumn = {
    id?: number | string;
    adjust?: boolean | 'data' | 'header';
    adjustBatch?: number;
    batch?: number | string;
    css?: string | obj;
    cssFormat?: WebixCallback;
    collection?: any;
    checkValue?: number | string;
    editor?: string;
    editParse?: WebixCallback;
    editFormat?: WebixCallback;
    header?: string | WebixDatatableHeaderConfig | (string | null | WebixDatatableHeaderConfig)[];
    headermenu?: boolean;
    hidden?: boolean;
    footer?: string | WebixDatatableHeaderConfig | (string | null | WebixDatatableHeaderConfig)[];
    numberFormat?: string;
    format?: WebixCallback;
    sort?: string | WebixCallback;
    suggest?: any;
    fillspace?: boolean | number;
    options?: any;
    optionslist?: boolean;
    popup?: any;
    template?: string | WebixTemplate;
    liveEdit?: boolean;
    math?: string;
    map?: string;
    maxWidth?: number;
    minWidth?: number;
    tooltip?: boolean | string | WebixTemplate;
    uncheckValue?: number | string;
    width?: number;
  };
  type WebixDatatableFilterConfig = {
    columnId?: string;
    compare?: WebixCallback;
    prepare?: WebixCallback;
  };
  type WebixDatatableFilterController = {
    getValue: WebixCallback;
    setValue?: WebixCallback;
    $server?: boolean;
  };
  type WebixShowColumnConfig = {
    spans?: boolean;
  };
  type WebixResizeRowColConfig = {
    size?: number;
    headerOnly?: boolean;
  };
  type WebixFormatConfig = {
    parse: WebixCallback;
    edit: WebixCallback;
  };
  type WebixCellObject = {
    row: string | number;
    column: string | number;
  };
  type WebixTimeboardValue = {
    day_part: string;
    hours?: string;
    minutes: string;
    seconds?: string;
    shours?: number;
    sminutes: number;
    sseconds?: number;
  };
  type WebixFileObject = {
    name?: string;
    size?: number;
    file?: File;
  };
  type WebixWindowPosConfig = {
    pos?: 'top' | 'left' | 'right' | 'bottom';
    x?: number;
    y?: number;
  };
  type WebixMessageBaseConfig = {
    text: string;
    id?: string | number;
  };
  type WebixMessageType = 'info' | 'success' | 'error' | 'debug';
  type WebixConfirmType = 'confirm-warning' | 'confirm-error';
  type WebixAlertType = 'alert-warning' | 'alert-error';
  type WebixPromptType = 'prompt-warning' | 'prompt-error';
  type WebixMessageConfig = WebixMessageBaseConfig & {
    expire?: number;
    type?: WebixMessageType | WebixAlertType | WebixConfirmType;
  };
  type WebixMessageboxConfig = WebixMessageBaseConfig & {
    title?: string;
    width?: number;
    height?: number;
    container?: HTMLElement;
    callback?: WebixCallback;
    css?: string;
  };
  type WebixAlertConfig = WebixMessageboxConfig & {
    ok?: string;
    type?: WebixAlertType | WebixConfirmType;
  };
  type WebixConfirmConfig = WebixMessageboxConfig & {
    ok?: string;
    cancel?: string;
    type?: WebixAlertType | WebixConfirmType;
  };
  type WebixModalboxConfig = WebixMessageboxConfig & {
    buttons?: string[];
    type?: WebixAlertType | WebixConfirmType;
  };
  type WebixPromptConfig = WebixMessageboxConfig & {
    ok?: string;
    cancel?: string;
    type?: WebixPromptType | WebixAlertType | WebixConfirmType;
  };
  type WebixFieldParams = {
    hidden?: boolean;
    disabled?: boolean;
  };
  type WebixRenderType = 'paint' | 'update' | 'add' | 'delete' | 'move';
  type WebixTreeRenderType = 'branch' | WebixRenderType;
  type WebixLocaleConfig = {
    lang?: string;
    webix?: { [key: string]: string };
  };
  type WebixDataScheme = {
    $init?: WebixCallback;
    $update?: WebixCallback;
    $save?: WebixCallback;
    $change?: WebixCallback;
    $serialize?: WebixCallback;
    $export?: WebixCallback;
    $group?: WebixCallback;
    $sort?: WebixCallback;
    [key: string]: any;
  };
  type WebixCommentsDataScheme = {
    $init?: WebixCallback;
  };
  type WebixGridlayoutPosConfig = {
    x?: number;
    y?: number;
    dx?: number;
    dy?: number;
  };
  type WebixDelimiterConfig = {
    rows?: string;
    cols?: string;
  };
  type WebixSpreadsheetButton =
    | 'undo'
    | 'redo'
    | 'font-family'
    | 'font-size'
    | 'font-weight'
    | 'font-style'
    | 'underline'
    | 'color'
    | 'background'
    | 'borders'
    | 'span'
    | 'text-align'
    | 'vertical-align'
    | 'wrap'
    | 'format'
    | 'increase-indent'
    | 'decrease-indent'
    | 'text-decoration';
  type WebixSpreadsheetButtonConfig = {
    [key: string]: WebixSpreadsheetButton[];
  };
  type WebixSpreadsheetSheetContent = {
    data: [number | string, number | string, string | number][];
  };
  type WebixSpreadsheetSparklineConfig = {
    type: string;
    range: string;
    color?: string;
    negativeColor?: string;
  };
  type WebixSpreadsheetStyle = {
    id?: string;
    props?: WebixSpreadsheetStyleProps;
    text?: string;
  };
  type WebixSpreadsheetStyleProps = {
    background?: string;
    borders?: string;
    'border-bottom'?: string;
    'border-left'?: string;
    'border-right'?: string;
    'border-top'?: string;
    color?: string;
    'font-family'?: string;
    'font-size'?: string;
    'font-style'?: string;
    'font-weight'?: string;
    format?: string;
    indent?: string;
    strike?: string;
    'text-align'?: string;
    underline?: string;
    'vertical-align'?: string;
    wrap?: string;
  };
  type WebixSpreadsheetSerializeConfig = {
    sheets?: boolean;
    math?: boolean;
    compactStyle?: boolean;
  };
  type WebixSpreadsheetComments = {
    add: WebixCallback;
    get: WebixCallback;
    remove: WebixCallback;
  };
  type WebixSpreadsheetAlertConfig = {
    text: string;
    type?: string;
  };
  type WebixSpreadsheetConfirmConfig = {
    text: string;
  };
  type WebixSpreadsheetRangeClearConfig = {
    values?: boolean;
    styles?: boolean;
  };
  type WebixSpreadsheetCellRangeConfig = {
    cell: { row: number; column: number };
    x?: number;
    y?: number;
  };
  type WebixSpreadsheetCellEditorConfig = {
    editor: string;
    options?: string | any[];
    empty?: boolean;
  };
  type WebixSpreadsheetCellFilterConfig = {
    options: string | any[];
    mode?: string;
    value?: obj;
    lastRow?: number;
  };
  type WebixSpreadsheetCellFilterExtendedConfig = WebixSpreadsheetCellFilterConfig & {
    row: number;
    column: number;
  };
  type WebixDataMoveOptions = {
    newId?: string | number;
  };
  type WebixTreeDataMoveOptions = WebixDataMoveOptions & {
    parent?: string | number;
  };
  type WebixTextPattern = {
    mask: string;
    allow?: RegExp;
  };
  type WebixTabviewCellConfig = {
    header: string;
    body: webix.ui.baseviewConfig;
    close?: boolean;
    icon?: string;
  };
  type WebixTreeFilterMode = {
    showSubItems?: boolean;
    openParents?: boolean;
    level?: number;
  };
  type WebixTreeState = {
    open: string[];
    select: string;
  };
  type WebixContext = {
    id?: string | number;
    obj?: webix.ui.baseview;
  };
  type WebixCanvasContext = CanvasRenderingContext2D;
  type WebixDatatableType = {
    [key: string]: string | WebixTemplate;
  };
  type WebixDatatableCollectValuesConfig = {
    visible?: boolean;
  };
  type WebixDatatableAreaSelection = {
    start: WebixCellObject;
    end: WebixCellObject;
    handle: boolean;
    preserve?: boolean;
    area_name?: string;
    css?: string;
  };
  type WebixDatatableSelectAreas = {
    [areaId: number]: WebixDatatableAreaSelection;
  };
  type WebixDatatableHideColumnConfig = {
    spans?: boolean;
  };
  type WebixDatatableCellPos = {
    row: number;
    column: string | number;
    rind: number;
    cind: number;
    span: number;
  };
  type WebixDataProcessorFullConfig = {
    id?: string | number;
    master?: string | webix.ui.baseview;
  } & WebixDataProcessorConfig;
  type WebixDataProcessorConfig = {
    $proxy?: boolean;
    url?:
      | string
      | (WebixDataProcessorConfig & {
          saveAll?(view: obj, params: obj, dp: any): Promise<any> | obj;
        });
    autoupdate?: boolean;
    updateFromResponse?: boolean;
    trackMove?: boolean;
    insert?: string | WebixCallback;
    update?: string | WebixCallback;
    delete?: string | WebixCallback;
    save?(view: obj, params: obj, dp: any): Promise<any> | obj;
  };
  type WebixDataLoaderInfo = {
    size: number;
    from: number;
    parent: number;
    config: any;
  };
  type WebixDataDriver = {
    toObject(data: any): any;
    getRecords(data: any): any[];
    getDetails(data: any): obj;
    getOptions(): any;
    getInfo(): any;
    [key: string]: any;
  };
  type WebixCSVDataDriver = {
    toObject(data: string): string;
    getRecords(data: string): string[];
    getDetails(data: string): obj;
    getOptions(): boolean;
    getInfo(): { size: 0 };
    stringToArray(data: string): string[];
    idColumn: string | number;
    row: string;
    cell: string;
  };
  type WebixExcelDataDriver = {
    toObject(data: string): string;
    getRecords(data: string): string[];
    getDetails(data: string): obj;
    getOptions(): false;
    getInfo(): { size: 0 };
    stringToArray(data: string): string[];
    idColumn: string | number;
    row: string;
    cell: string;
  };
  type WebixHTMLDataDriver = {
    toObject(data: string): HTMLElement;
    getRecords(data: HTMLElement): HTMLCollection;
    getDetails(data: string): obj;
    getOptions(): false;
    getInfo(): { size: 0 };
    tag: string;
  };
  type WebixHTMLTableDataDriver = {
    toObject(elementId: string): HTMLCollection;
    getRecords(data: any[]): any[];
    getDetails(data: HTMLElement): obj;
    getOptions(): void;
    getInfo(): { size: 0 };
  };
  type WebixJSArrayDataDriver = {
    toObject(data: string): obj;
    getRecords(data: obj): any[];
    getDetails(data: any[]): obj;
    getOptions(): false;
    getInfo(): { size: 0 };
    idColumn: string | number;
  };
  type WebixJSONDataDriver = {
    toObject(data: string): obj;
    getRecords(data: obj): any[];
    getDetails(data: string): obj;
    getOptions(): any;
    getInfo(): WebixDataLoaderInfo;
    child: string;
    parseDates: boolean;
  };
  type WebixXMLDataDriver = {
    toObject(data: string): obj;
    getRecords(data: obj): any[];
    getDetails(data: string): obj;
    getOptions(): any;
    getInfo(): WebixDataLoaderInfo;
    child: string;
    parseDates: boolean;
  };
  type WebixDataProcessorState = 'saving' | boolean;
  type WebixDataProcessorItemStateObject = {
    id: string | number;
    operation: 'update' | 'insert' | 'delete';
    data: obj;
  };
  type WebixDataProcessorResultObject = {
    id?: string | number;
    newId?: string | number;
    status?: 'update' | 'insert' | 'delete' | 'error' | 'invalid';
    [key: string]: any;
  };
  type WebixNavigationConfig = {
    items?: boolean;
    buttons?: boolean;
    type?: string;
  };
  type WebixBulletScaleConfig = {
    step?: number;
    template?: string | WebixTemplate;
  };
  type WebixChartItemType = 's' | 'square' | 't' | 'triangle' | 'd' | 'diamond' | 'r' | 'round';
  type WebixChartItemConfig = {
    alpha?: number;
    borderColor?: string | WebixTemplate;
    borderWidth?: number;
    color?: string | WebixTemplate;
    eventRadius?: number;
    radius?: number;
    shadow?: boolean;
    type?: WebixChartItemType | WebixTemplate;
  };
  type WebixChartLegendMarker = {
    type?: 'square' | 'round' | 'item';
    width?: number;
    height?: number;
    radius?: number;
  };
  type WebixChartLegendItem = {
    text?: string;
    color?: string | WebixTemplate;
    markerType?: 'square' | 'round' | 'item';
    toggle?: boolean;
  };
  type WebixChartLegendConfig = {
    width?: number;
    height?: number;
    layout?: 'x' | 'y';
    align?: 'left' | 'right' | 'center';
    valign?: 'top' | 'bottom' | 'middle';
    margin?: number;
    padding?: number;
    template?: string;
    toggle?: boolean;
    values?: WebixChartLegendItem[];
    marker?: WebixChartLegendMarker;
  };
  type WebixChartLineConfig = {
    width?: number;
    color?: string | WebixTemplate;
  };
  type WebixChartSeriesConfig = webix.ui.chartConfig[];
  type WebixChartXAxisConfig = {
    template?: string | WebixTemplate;
    title?: string;
    lines?: boolean | ((...args: any[]) => boolean);
    lineColor?: string | WebixTemplate;
    color?: string;
    start?: number;
    end?: number;
    step?: number;
  };
  type WebixChartYAxisConfig = {
    start?: number;
    end?: number;
    step?: number;
    template?: string | WebixTemplate;
    title?: string;
    lines?: boolean | ((...args: any[]) => boolean);
    color?: string;
    lineColor?: string | WebixTemplate;
    lineShape?: 'arc' | 'line';
    bg?: string | WebixTemplate;
  };
  type WebixChartColormap = {
    RAINBOW: WebixTemplate;
    default: WebixTemplate;
  };
  type WebixChartPreset =
    | 'column'
    | 'stick'
    | 'alpha'
    | 'area'
    | 'line'
    | 'point'
    | 'simple'
    | 'plot'
    | 'round'
    | 'square'
    | 'diamond';
  type WebixChartPresets = {
    simple: {
      item: {
        borderColor: '#ffffff';
        color: '#2b7100';
        shadow: false;
        borderWidth: 2;
      };
      line: {
        color: '#8ecf03';
        width: 2;
      };
    };
    plot: {
      color: '#8664C6';
      item: {
        borderColor: '#8664C6';
        borderWidth: 1;
        color: '#ffffff';
        type: 'r';
        shadow: false;
      };
      line: {
        color: '#8664C6';
        width: 2;
      };
    };
    diamond: {
      color: '#FF5C4C';
      item: {
        borderColor: '#FF5C4C';
        color: '#FF5C4C';
        type: 'd';
        radius: 3;
        shadow: true;
      };
      line: {
        color: '#FF5C4C';
        width: 2;
      };
    };
    point: {
      color: '#1ca1c1';
      disableLines: true;
      fill: false;
      disableItems: false;
      item: {
        color: '#1ca1c1';
        borderColor: '#1ca1c1';
        radius: 2;
        borderWidth: 2;
        type: 'r';
      };
      alpha: 1;
    };
    line: {
      line: {
        color: '#1ca1c1';
        width: 2;
      };
      item: {
        color: '#ffffff';
        borderColor: '#1ca1c1';
        radius: 2;
        borderWidth: 2;
        type: 'd';
      };
      fill: false;
      disableItems: false;
      disableLines: false;
      alpha: 1;
    };
    area: {
      fill: '#1ca1c1';
      line: {
        color: '#1ca1c1';
        width: 1;
      };
      disableItems: true;
      alpha: 0.2;
      disableLines: false;
    };
    round: {
      item: {
        radius: 3;
        borderColor: '#1ca1c1';
        borderWidth: 1;
        color: '#1ca1c1';
        type: 'r';
        shadow: false;
        alpha: 0.6;
      };
    };
    square: {
      item: {
        radius: 3;
        borderColor: '#00a497';
        borderWidth: 2;
        color: '#ffffff';
        type: 's';
        shadow: false;
        alpha: 1;
      };
      line: {
        color: '#00a497';
      };
    };
    column: {
      color: 'RAINBOW';
      gradient: false;
      barWidth: 45;
      radius: 0;
      alpha: 1;
      border: true;
    };
    stick: {
      barWidth: 5;
      gradient: false;
      color: '#1ca1c1';
      radius: 2;
      alpha: 1;
      border: false;
    };
    alpha: {
      color: '#b9a8f9';
      barWidth: 70;
      gradient: 'falling';
      radius: 0;
      alpha: 0.5;
      border: true;
    };
  };
  type WebixRangechartRange = {
    start?: number;
    end?: number;
    sindex?: number;
    eindex?: number;
  };
  type WebixChatCallsConfig = {
    enabled?: boolean;
    groupCalls?: boolean;
    livekitConfig?: {
      host: string;
      [key: string]: any;
    };
  };
  type WebixCommentsItemConfig = {
    templateUser?: string | WebixTemplate;
    templateMenu?: string | WebixTemplate;
    templateDate?: string | WebixTemplate;
    templateText?: string | WebixTemplate;
    templateLinks?: string | WebixTemplate;
    templateAvatar?: string | WebixTemplate;
    templateMentioned?: string | WebixTemplate;
    menuPosition?: WebixWindowPosConfig;
  };
  type WebixDaterangeValue = {
    start?: Date | string;
    end?: Date | string;
  };
  type WebixDiagramValues = {
    data: any[];
    links?: any[];
    shapes?: any[];
    item?: obj;
    linkItem?: obj;
  };
  type WebixDiagramItemType = {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    template?: string | WebixTemplate;
    type?: string;
    css?: string | WebixCallback;
  };
  type WebixDiagramLinkItemType = {
    mode?: 'edges' | 'direct' | 'curve' | 'child' | 'sibling';
    from?: 'center' | 'top' | 'right' | 'bottom' | 'left';
    to?: 'center' | 'top' | 'right' | 'bottom' | 'left';
    line?: any[];
    $css?: string | WebixCallback;
    lineWidth?: number;
    lineColor?: string;
    lineStyle?: string | number;
    arrow?: boolean | string | any[];
    $arrowCss?: string | WebixCallback;
    arrowSize?: string | number;
    backgroundColor?: string;
    fillOpacity?: string | number;
  };
  type WebixFileManagerClipboard = {
    files: any[];
    type: 'cut' | 'copy';
  };
  type WebixDocManagerClipboard = WebixFileManagerClipboard & {
    type: 'cut' | 'copy' | 'trashed';
  };
  type WebixFilterValue = {
    condition?: {
      filter?: string;
      type?: string;
    };
    includes?: any[] | null;
  };
  type WebixGrouplistOpenState = {
    parents: any[];
    branch: any[];
  };
  type WebixKanbanEditorConfig = webix.ui.formConfig & {
    [key: string]: any;
  };
  type WebixMulticomboValueConfig = {
    options?: boolean;
  };
  type WebixMultitextSubConfig = webix.ui.multitextConfig & {
    [key: string]: any;
  };
  type WebixPanelResizeEndPos = {
    mx: number;
    my: number;
  };
  type WebixPanelResizeMovePos = {
    x: number;
    y: number;
  };
  type WebixPropertyElementsConfig = {
    label?: string;
    type?: string;
    id?: string | number;
    options?: any[];
    [key: string]: any;
  }[];
  type WebixQueryRule = {
    field?: string;
  } & WebixFilterValue;
  type WebixQueryValue = {
    glue?: string;
    rules?: WebixQueryRule[];
  };
  type WebixTooltipDataItem = {
    id?: number | string;
    value: string;
  };
  type WebixGeochartInnerConfig = {
    backgroundColor?:
      | string
      | {
          fill?: string;
          stroke?: string;
          strokeWidth?: number;
        };
    colorAxis?: {
      minValue?: number;
      maxValue?: number;
      values?: number[];
      colors?: string[];
    };
    datalessRegionColor?: string;
    defaultColor?: string;
    displayMode?: 'auto' | 'regions' | 'markers' | 'text';
    domain?: string;
    enableRegionInteractivity?: boolean;
    forceIFrame?: boolean;
    geochartVersion?: number;
    height?: number;
    keepAspectRatio?: boolean;
    legend?:
      | {
          numberFormat?: string;
          textStyle?: {
            color?: string;
            fontName?: string;
            fontSize?: string;
            bold?: boolean;
            italic?: boolean;
          };
        }
      | 'none';
    region?: string;
    magnifyingGlass?: {
      enable?: boolean;
      zoomFactor?: number;
    };
    markerOpacity?: number;
    regioncoderVersion?: number;
    resolution?: 'countries' | 'provinces' | 'metros';
    sizeAxis?: {
      maxSize?: number;
      maxValue?: number;
      minSize?: number;
      minValue?: number;
    };
    tooltip?: {
      textStyle?: {
        color?: string;
        fontName?: string;
        fontSize?: string;
        bold?: boolean;
        italic?: boolean;
      };
      trigger?: 'focus' | 'none' | 'selection';
    };
    width?: number;
  };
  type WebixGoogleMapHeatmapLayerConfig = {
    data?: any[];
    dissipating?: boolean;
    gradient?: string[];
    map?: any;
    maxIntensity?: number;
    opacity?: number;
    radius?: number;
  };
  type WebixPivotOperationsConfig = {
    [key: string]:
      | {
          handler?: WebixCallback;
          fields?: number;
          hidden?: boolean;
          branchMode?: 'raw' | 'result';
        }
      | WebixCallback;
  };
  type WebixPivotTotalOperationsConfig = {
    [key: string]:
      | {
          group?: string;
          column?: string;
          footer?: string;
        }
      | string;
  };
  type WebixPivotStructure = {
    rows?: any[];
    columns?: any[];
    values?: {
      name?: string;
      operation?: string | string[];
      format?: WebixCallback;
      color?: string;
    }[];
    filters?: any[];
    groupBy?: string;
  };
  type WebixJetAppWrapper = {
    $$<T extends webix.ui.baseview>(name: string): T;
    callEvent(name: string, params?: any[]): boolean;
    attachEvent(name: string, handler: any): void;
    copyConfig(source: any, target: any, config?: any): any;
    getRouter(): any;
    getService(name: string): any;
    setService(name: string, handler: any): void;
    getSubView(name?: string): any;
    getSubViewInfo(name?: string): any;
    getUrl(): {
      page: string;
      params: { [name: string]: string };
      view?: any;
      isNew?: boolean;
    }[];
    getUrlString(): string;
    getRoot(): any;
    contains(view: obj): boolean;
    createFromURL(chunk: any): Promise<any>;
    createView(config: any, name?: string, params?: any): any;
    render(container?: any, url?: any, config?: any): Promise<any>;
    refresh(): Promise<any>;
    require(type: string, url: string): any;
    show(path: string, config?: any): Promise<any>;
    use(plugin: any, config?: any): void;
    setParam(id: string, value: any, url?: boolean): any;
    getParam(id: string, parent: boolean): any;
    getParentView(): any;
    error(name: string, data: any[]): any;
    destructor(): void;
    on(obj: any, name: string, code: any): any;
    app: WebixJetAppWrapper | undefined;
    config: any;
    ready: Promise<any>;
    webix: any;
  };

  function ajax(url: string, params?: any): Promise<any>;
  function ajax(): webix.Ajax;
  function debug(params?: { events?: boolean; size?: boolean }): void;
  function $$<T extends webix.ui.baseview>(id: string | Event | HTMLElement): T;

  interface Ajax {
    bind(master: any): Ajax;
    del(url: string, params?: any, callback?: WebixCallback): Promise<any>;
    get(url: string, params?: any, callback?: WebixCallback): Promise<any>;
    getXHR(): XMLHttpRequest;
    headers(values: obj): Ajax;
    post(url: string, params?: any, callback?: WebixCallback): Promise<any>;
    put(url: string, params?: any, callback?: WebixCallback): Promise<any>;
    response(type: string): Ajax;
    stringify(data: any): string;
    sync(): Ajax;
    master: obj;
  }
  interface clipbuffer {
    destructor(): void;
    focus(): void;
    init(): void;
    set(text: string): void;
  }
  interface color {
    hexToDec(hex: string): number;
    hsvToRgb(h: number, s: number, v: number): any[];
    rgbToHex(rgb: string | (string | number)[]): string;
    rgbToHsv(r: number, g: number, b: number): any[];
    toHex(number: number, length?: number): string;
    toRgb(rgb: string): any[];
  }
  type DelimiterConfig = {
    rows: string;
    cols: string;
  };
  interface csv {
    parse(text: string, delimiter?: DelimiterConfig): any[];
    stringify(data: any[], delimiter?: DelimiterConfig): string;
    delimiter: DelimiterConfig;
    escape: boolean;
  }
  interface WebixEditor {
    focus(): void;
    getInputNode(): HTMLElement;
    getValue(): string;
    render(): HTMLElement;
    setValue(value?: string): void;
  }
  interface WebixEditorObject extends WebixEditor {
    node: HTMLElement;
    value: any;
    config: obj;
  }
  interface textEditor extends WebixEditor {
    setValue(value: string): void;
  }
  interface checkboxEditor extends WebixEditor {
    setValue(value: string): void;
  }
  interface selectEditor extends WebixEditor {
    setValue(value: string): void;
  }
  interface popupEditor extends WebixEditor {
    createPopup(): obj | (string | number);
    destroy(): void;
    getPopup(): obj;
    linkInput(node: HTMLElement): void;
    popupInit(popup?: obj): void;
    setValue(value: string): void;
    popupType: string;
  }
  interface inlineCheckboxEditor extends WebixEditor {
    setValue(): void;
  }
  interface inlineTextEditor extends WebixEditor {
    setValue(): void;
  }
  interface comboEditor extends textEditor {
    afterRender(): void;
    getPopup(): obj;
    showPopup(): void;
  }
  interface passwordEditor extends textEditor {
    toggleInput(): void;
  }
  interface colorEditor extends popupEditor {
    popupInit(popup: obj): void;
    popupType: 'color';
  }
  interface dateEditor extends popupEditor {
    popupInit(popup: obj): void;
    popupType: 'date';
  }
  interface multiselectEditor extends popupEditor {
    popupInit(popup: obj): void;
    popupType: 'multiselect';
  }
  interface richselectEditor extends popupEditor {
    popupInit(popup: obj): void;
    popupType: 'richselect';
  }
  interface excelDateEditor extends textEditor {
    afterRender(): void;
    createPopup(): obj;
    getPopup(): obj;
    getValue(): string;
    showPopup(): void;
    updateCalendar(value: any): void;
  }
  interface ssRichselectEditor extends richselectEditor {
    getFormat(value: any): obj;
  }
  interface ganttNumEditor extends textEditor {}
  type editors = {
    checkbox: checkboxEditor;
    color: colorEditor;
    combo: comboEditor;
    date: dateEditor;
    'inline-checkbox': inlineCheckboxEditor;
    'inline-text': inlineTextEditor;
    multiselect: multiselectEditor;
    password: passwordEditor;
    popup: popupEditor;
    richselect: richselectEditor;
    select: selectEditor;
    text: textEditor;
    [name: string]: WebixEditor;
  } & {
    excel_date?: excelDateEditor;
    gantt_numeditor?: ganttNumEditor;
    ss_richselect?: ssRichselectEditor;
    $popup: obj;
  };
  type EnvContext = {
    target: HTMLElement;
    x: number;
    y: number;
    time: Date;
  };
  interface env {
    $customScroll?: boolean;
    cdn: string;
    codebase: string;
    fastClick: boolean;
    https: boolean;
    isAndroid?: boolean;
    isChromium?: boolean;
    isFF?: boolean;
    isIE?: boolean;
    isIOS?: boolean;
    isMac?: boolean;
    isSafari?: boolean;
    maxHTMLElementSize?: number;
    mobile?: boolean;
    mouse: {
      context(event: Event): EnvContext;
      down: 'mousedown';
      move: 'mousemove';
      up: 'mouseup';
    };
    passiveEventListeners: boolean;
    pringMargin: number;
    printPPI: number;
    scrollSize: number;
    strict: boolean;
    svg: boolean;
    svganimation: boolean;
    touch?: {
      context(event: Event): EnvContext;
      down: 'touchstart';
      move: 'touchmove';
      up: 'touchend';
    };
    transform: string;
    transition: string;
    transitionDuration: string;
    transitionEnd: string;
    translate: string;
    zIndexBase: number;
  }
  interface fullscreen {
    set(view: any, config?: { css?: string; head?: boolean | string | obj }): void;
    exit(): void;
  }
  interface html {
    addCss(node: HTMLElement, name: string): void;
    addMeta(name: string, value: string): void;
    addStyle(css: string, group_name?: string): void;
    allowSelect(): void;
    create(name: string, attrs?: obj, html?: string): HTMLElement;
    createCss(data: obj): string;
    denySelect(): void;
    download(obj: any, name: string): void;
    getSelectionRange(node: HTMLElement): {
      start: number;
      end: number;
    };
    getTextSize(text: string | string[], css?: string, width?: number): SizeInfo;
    getValue(node: HTMLElement): string;
    index(node: HTMLElement): number;
    insertBefore(node: HTMLElement, before: HTMLElement, rescue?: HTMLElement): void;
    locate(ev: Event | HTMLElement, name: string): string;
    offset(node: HTMLElement): PositionInfo & SizeInfo;
    pos(ev: Event): PositionInfo;
    posRelative(ev: Event): PositionInfo;
    preventEvent(ev: Event): boolean;
    remove(node: HTMLElement | HTMLElement[]): void;
    removeCss(node: HTMLElement, name: string): void;
    removeStyle(group_name?: string): void;
    setSelectionRange(node: HTMLElement, start?: number, end?: number): void;
    stopEvent(ev: Event): boolean;
    triggerEvent(node: HTMLElement, type: string, name: string): void;
  }
  interface i18n {
    dateFormatDate(date: string): Date;
    dateFormatStr(date: Date): string;
    fullDateFormatDate(date: string): Date;
    fullDateFormatStr(date: Date): string;
    intFormat(num: number): string;
    longDateFormatDate(date: string): Date;
    longDateFormatStr(date: Date): string;
    numberFormat(number: number): string;
    parseFormatDate(date: string): Date;
    parseFormatStr(date: Date): string;
    parseTimeFormatDate(date: string): Date;
    parseTimeFormatStr(date: Date): string;
    priceFormat(number: number): string;
    setLocale(name: string): void;
    timeFormatDate(time: string): Date;
    timeFormatStr(date: Date): string;
    PDFviewer: {
      automaticZoom: string;
      actualSize: string;
      pageFit: string;
      pageWidth: string;
      pageHeight: string;
      enterPassword: string;
      passwordError: string;
      of: string;
    };
    am: string[];
    aria: {
      calendar: string;
      increaseValue: string;
      decreaseValue: string;
      navMonth: string[];
      navYear: string[];
      navDecade: string[];
      dateFormat: string;
      monthFormat: string;
      yearFormat: string;
      hourFormat: string;
      minuteFormat: string;
      removeItem: string;
      pages: string[];
      page: string;
      headermenu: string;
      openGroup: string;
      closeGroup: string;
      closeTab: string;
      showTabs: string;
      resetTreeMap: string;
      navTreeMap: string;
      nextTab: string;
      prevTab: string;
      multitextSection: string;
      multitextextraSection: string;
      showChart: string;
      hideChart: string;
      resizeChart: string;
    };
    calendar: {
      monthFull: string[];
      monthShort: string[];
      dayFull: string[];
      dayShort: string[];
      hours: string;
      minutes: string;
      done: string;
      clear: string;
      today: string;
    };
    combo: {
      select: string;
      selectAll: string;
      unselectAll: string;
    };
    comments: {
      send: string;
      confirmMessage: string;
      edit: string;
      remove: string;
      placeholder: string;
      moreComments: string;
    };
    dataExport: {
      of: string;
      page: string;
    };
    dateFormat: string;
    dbllist: {
      selectAll: string;
      selectOne: string;
      deselectAll: string;
      deselectOne: string;
    };
    decimalDelimiter: string;
    decimalSize: number;
    fileSize: string[];
    filter: {
      less: string;
      lessOrEqual: string;
      greater: string;
      greaterOrEqual: string;
      contains: string;
      notContains: string;
      equal: string;
      notEqual: string;
      beginsWith: string;
      notBeginsWith: string;
      endsWith: string;
      notEndsWith: string;
      between: string;
      notBetween: string;
    };
    fullDateFormat: string;
    groupDelimiter: string;
    groupSize: number;
    hint?: {
      next: string;
      prev: string;
      last: string;
    };
    kanban?: {
      copy: string;
      dnd: string;
      remove: string;
      save: string;
      confirm: string;
      editor: {
        add: string;
        assign: string;
        attachments: string;
        color: string;
        edit: string;
        status: string;
        tags: string;
        text: string;
        upload: string;
      };
      menu: {
        copy: string;
        edit: string;
        remove: string;
      };
    };
    locale: string;
    locales: any;
    longDateFormat: string;
    message: {
      ok: string;
      cancel: string;
    };
    pager: {
      first: string;
      last: string;
      next: string;
      prev: string;
    };
    parseFormat: string;
    parseTimeFormat: string;
    pm: string[];
    price: string;
    priceSettings: {
      groupDelimiter: string;
      groupSize: number;
      decimalDelimiter: string;
      decimalSize: number;
    };
    richtext: {
      underline: string;
      bold: string;
      italic: string;
    };
    spreadsheet?: {
      labels: {
        common: string;
        currency: string;
        number: string;
        percent: string;
        date: string;
        string: string;
        'custom-format': string;
        'decimal-places': string;
        separator: string;
        negative: string;
        'currency-symbol': string;
        'date-format': string;
        'format-docs': string;
        'undo-redo': string;
        font: string;
        text: string;
        cell: string;
        align: string;
        format: string;
        column: string;
        borders: string;
        px: string;
        apply: string;
        cancel: string;
        save: string;
        sheet: string;
        'conditional-format': string;
        condition: string;
        'conditional-style': string;
        'conditional-operator': string;
        'conditional-between': string;
        'conditional-not-equal': string;
        range: string;
        'range-title': string;
        'range-name': string;
        'range-cells': string;
        'range-scope': string;
        'range-global': string;
        'image-or': string;
        'image-title': string;
        'image-upload': string;
        'image-url': string;
        'sparkline-title': string;
        'sparkline-type': string;
        'sparkline-range': string;
        'sparkline-color': string;
        'sparkline-positive': string;
        'sparkline-negative': string;
        'format-title': string;
        'format-pattern': string;
        'dropdown-empty': string;
        'dropdown-title': string;
        'dropdown-range': string;
        ok: string;
        'import-title': string;
        'import-not-support': string;
        'export-title': string;
        'export-name': string;
        'export-all-sheets': string;
        'link-title': string;
        'link-name': string;
        'link-url': string;
        image: string;
        'add-image-cell': string;
        'add-image-top': string;
        graph: string;
        'add-sparkline': string;
        'add-chart': string;
        display: string;
        value: string;
        'range-remove-confirm': string;
        'sheet-remove-confirm': string;
        'merge-cell-confirm': string;
        'error-range': string;
        print: string;
        'print-title': string;
        'print-settings': string;
        'print-paper': string;
        'print-layout': string;
        sheets: string;
        selection: string;
        borderless: string;
        'sheet-names': string;
        'skip-rows': string;
        margin: string;
        'page-letter': string;
        'page-a4': string;
        'page-a3': string;
        'page-width': string;
        'page-actual': string;
        'page-portrait': string;
        'page-landscape': string;
        'external-ui': string;
        comment: string;
        width: string;
        height: string;
        'fit-content': string;
        'default-size': string;
        'edit-view': string;
        'remove-view': string;
        'chart-edit': string;
        'chart-common': string;
        'chart-series': string;
        'chart-extras': string;
        'export-view': string;
        'export-view-pdf': string;
        'export-view-png': string;
        'export-view-excel': string;
        'line-chart': string;
        'area-chart': string;
        'bar-chart': string;
        'donut-chart': string;
        'pie-chart': string;
        'radar-chart': string;
        'spline-chart': string;
        'splinearea-chart': string;
        'chart-scale': string;
        'chart-x-axis': string;
        'chart-y-axis': string;
        'chart-lines': string;
        'chart-scale-color': string;
        'chart-xAxis-title': string;
        'chart-yAxis-title': string;
        'chart-col-xAxis': string;
        'chart-col-yAxis': string;
        'chart-row-xAxis': string;
        'chart-row-yAxis': string;
        'chart-xAxis-range': string;
        'chart-yAxis-origin': string;
        'chart-yAxis-start': string;
        'chart-yAxis-end': string;
        'chart-yAxis-step': string;
        'chart-yAxis-note': string;
        'chart-legend': string;
        'chart-row-legend': string;
        'chart-col-legend': string;
        'chart-legend-range': string;
        'chart-legend-align': string;
        'chart-legend-left': string;
        'chart-legend-right': string;
        'chart-legend-center': string;
        'chart-legend-valign': string;
        'chart-legend-top': string;
        'chart-legend-middle': string;
        'chart-legend-bottom': string;
        'chart-item': string;
        'stacked-chart': string;
        'horizontal-chart': string;
        'chart-range': string;
        'chart-series-color': string;
        'add-line': string;
        'chart-type': string;
        'chart-tooltip': string;
        'chart-label': string;
        'chart-data-from': string;
        'chart-columns': string;
        'chart-rows': string;
        'chart-markers': string;
        'chart-markers-square': string;
        'chart-markers-triangle': string;
        'chart-markers-diamond': string;
        'chart-markers-round': string;
        'chart-pie-3d': string;
        'chart-radar-circle': string;
      };
      tooltips: {
        color: string;
        background: string;
        'font-family': string;
        'font-size': string;
        'text-align': string;
        'vertical-align': string;
        borders: string;
        'borders-no': string;
        'borders-left': string;
        'borders-top': string;
        'borders-right': string;
        'borders-bottom': string;
        'borders-all': string;
        'borders-outer': string;
        'borders-top-bottom': string;
        'borders-color': string;
        'align-left': string;
        'align-center': string;
        'align-right': string;
        'align-top': string;
        'align-middle': string;
        'align-bottom': string;
        span: string;
        wrap: string;
        undo: string;
        redo: string;
        format: string;
        'increase-decimals': string;
        'decrease-decimals': string;
        'font-weight': string;
        'font-style': string;
        underline: string;
        strike: string;
        'hide-gridlines': string;
        'hide-headers': string;
        'show-formulas': string;
        'create-filter': string;
        'freeze-columns': string;
        'add-range': string;
        conditional: string;
        'add-sheet': string;
        'lock-cell': string;
        clear: string;
        'add-link': string;
        row: string;
        column: string;
        sheet: string;
        'add-image': string;
        'add-sparkline': string;
        'add-comment': string;
        'increase-indent': string;
        'decrease-indent': string;
      };
      menus: {
        'remove-sheet': string;
        'rename-sheet': string;
        file: string;
        new: string;
        'new-sheet': string;
        'excel-import': string;
        'excel-export': string;
        sheet: string;
        'copy-sheet': string;
        edit: string;
        undo: string;
        redo: string;
        columns: string;
        'insert-column': string;
        'delete-column': string;
        'show-column': string;
        'hide-column': string;
        'resize-column': string;
        rows: string;
        'insert-row': string;
        'delete-row': string;
        'show-row': string;
        'hide-row': string;
        'resize-row': string;
        insert: string;
        'conditional-format': string;
        common: string;
        text: string;
        clear: string;
        'clear-value': string;
        'clear-style': string;
        'clear-conditional-formats': string;
        'clear-dropdown-editors': string;
        'clear-comments': string;
        'clear-all': string;
        image: string;
        'add-image-cell': string;
        'add-image-top': string;
        graph: string;
        'add-sparkline': string;
        'add-chart': string;
        data: string;
        'add-link': string;
        'add-range': string;
        sort: string;
        'sort-asc': string;
        'sort-desc': string;
        view: string;
        'freeze-columns': string;
        'freeze-rows': string;
        'hide-gridlines': string;
        'hide-headers': string;
        'show-formulas': string;
        'create-filter': string;
        'add-dropdown': string;
        'lock-cell': string;
        print: string;
        'add-comment': string;
        cut: string;
        copy: string;
        paste: string;
        'special-paste': string;
        'paste-values': string;
        'paste-formulas': string;
        'paste-styles': string;
        'paste-conditions': string;
      };
      table: {
        'math-error': string;
        'math-ref-error': string;
        'format-error': string;
      };
      liveEditor: {
        edit: string;
      };
      formats: {
        dateFormat: string;
        timeFormat: string;
        longDateFormat: string;
        fullDateFormat: string;
        parseDateTime: string;
        parseDate: string;
        currencies: string[];
      };
    };
    timeFormat: string;
    timeboard: {
      seconds: string;
    };
  }
  interface promise {
    new (
      executor: (resolve: (value?: any) => void, reject: (reason?: any) => void) => void
    ): Promise<any>;
    all(promises: Promise<any>[]): Promise<any>;
    defer(): Omit<promise, 'defer'>;
    race(promises: Promise<any>[]): Promise<any>;
    reject(value: any): Promise<any>;
    resolve(value: any): Promise<any>;
  }
  interface rules {
    isChecked(value: any): boolean;
    isEmail(value: any): boolean;
    isNotEmpty(value: any): boolean;
    isNumber(value: any): boolean;
  }
  interface numberFilter {
    greater(a: any, b: any): boolean;
    less(a: any, b: any): boolean;
    greaterOrEqual(a: any, b: any): boolean;
    lessOrEqual(a: any, b: any): boolean;
    equal(a: any, b: any): boolean;
    notEqual(a: any, b: any): boolean;
    contains(a: any, b: any): boolean;
    notContains(a: any, b: any): boolean;
  }
  interface textFilter {
    equal(a: any, b: any): boolean;
    notEqual(a: any, b: any): boolean;
    contains(a: any, b: any): boolean;
    notContains(a: any, b: any): boolean;
    beginsWith(a: any, b: any): boolean;
    notBeginsWith(a: any, b: any): boolean;
    endsWith(a: any, b: any): boolean;
    notEndsWith(a: any, b: any): boolean;
  }
  interface dateFilter {
    greater(a: any, b: any): boolean;
    less(a: any, b: any): boolean;
    greaterOrEqual(a: any, b: any): boolean;
    lessOrEqual(a: any, b: any): boolean;
    equal(a: any, b: any): boolean;
    notEqual(a: any, b: any): boolean;
    between(a: any, b: any): boolean;
    notBetween(a: any, b: any): boolean;
  }
  interface filters {
    date: dateFilter;
    number: numberFilter;
    text: textFilter;
  }
  interface WebixStorage {
    get(name: string): any;
    put(name: string, value: any): void;
    remove(name: string): void;
  }
  interface cookie extends WebixStorage {
    clear(domain?: string): void;
    getRaw(name: string): string;
    put(name: string, value: any, domain?: string, expires?: Date): void;
    remove(name: string, domain?: string): void;
  }
  interface local extends WebixStorage {
    clear(): void;
  }
  interface session extends WebixStorage {
    clear(): void;
  }
  interface storage {
    cookie: webix.cookie;
    local: webix.local;
    session: webix.session;
    prefix(scope: string, storage: webix.cookie | webix.local | webix.session): WebixStorage;
  }

  interface WebixSkinLayoutConfig {
    space: number;
    wide: number;
    clean: number;
    head: number;
    line: number;
    toolbar: number;
    form: number;
    accordion: number;
  }

  interface WebixSkinConfig {
    topLayout: string;
    barHeight: number;
    tabbarHeight: number;
    sidebarTitleHeight: number;
    rowHeight: number;
    toolbarHeight: number;
    listItemHeight: number;
    inputHeight: number;
    buttonHeight: number;
    inputPadding: number;
    menuHeight: number;
    labelTopHeight: number;
    propertyItemHeight: number;
    timelineItemHeight: number;
    unitHeaderHeight: number;
    inputSpacing: number;
    borderWidth: number;
    sliderHandleWidth: number;
    sliderPadding: number;
    sliderBorder: number;
    vSliderPadding: number;
    vSliderHeight: number;
    switchHeight: number;
    switchWidth: number;
    layoutMargin: WebixSkinLayoutConfig;
    layoutPadding: WebixSkinLayoutConfig;
    tabMargin: number;
    tabOffset: number;
    tabBottomOffset: number;
    tabTopOffset: number;
    tabBorder: boolean;
    customCheckbox: boolean;
    customRadio: boolean;
    sidebarMarkAll: boolean;
    popupNoPoint: boolean;
    borderlessPopup: boolean;
    popupPadding: number;
    dataPadding: number;
    calendarWeekHeaderHeight: number;
    padding: number;
    accordionType: string;
    optionHeight: number;
    timelineColor: string;
    backColor: string;
    dataBorderColor: string;
    colorPadding: number;
  }

  interface skin {
    set(skin: string): void;
    $active: WebixSkinConfig;
    $name: string;
    compact: WebixSkinConfig;
    contrast: WebixSkinConfig;
    dark: WebixSkinConfig;
    flat: WebixSkinConfig;
    material: WebixSkinConfig;
    mini: WebixSkinConfig;
    willow: WebixSkinConfig;
  }

  namespace message {
    function hide(content: any): void;
    function hideAll(): void;
    const area: HTMLElement;
    const expire: number;
    const pull: { [messageId: string]: HTMLElement };
    const timers: any;
    const position: string;
  }
  namespace modalbox {
    function hide(content: any): void;
    function hideAll(): void;
    const pull: {
      [modalId: string]: WebixMessageConfig;
    };
    const order: string[];
  }

  type ProxyName = 'binary' | 'GraphQL' | 'json' | 'post' | 'rest' | 'debug' | string;

  type ProxyType<T> = T extends 'binary'
    ? binaryProxy
    : T extends 'GraphQL'
      ? GraphQLProxy
      : T extends 'json'
        ? jsonProxy
        : T extends 'post'
          ? postProxy
          : T extends 'rest'
            ? restProxy
            : T extends 'debug'
              ? debugProxy
              : WebixProxy;

  interface binaryProxy {
    $proxy: boolean;
    load(): Promise<any>;
  }
  interface GraphQLProxy {
    $proxy: boolean;
    url?: string;
    load(view: obj): Promise<any>;
    save(data: any): Promise<any>;
  }
  interface jsonProxy {
    $proxy: boolean;
    load(): Promise<any>;
    save(view: obj, update: obj): Promise<any>;
  }
  interface postProxy {
    $proxy: boolean;
    load(view: obj, params: obj): Promise<any>;
  }
  interface restProxy {
    $proxy: boolean;
    save(view: obj, update: obj): Promise<any>;
  }
  interface debugProxy {
    $proxy: boolean;
    load(): void;
    save(view: obj, update: obj, dp: obj): void;
  }
  namespace proxy {
    const binary: binaryProxy;
    const GraphQL: GraphQLProxy;
    const json: jsonProxy;
    const post: postProxy;
    const rest: restProxy;
    const debug: debugProxy;
  }

  function alert(
    text: string | WebixAlertConfig,
    type?: string | WebixCallback,
    callback?: WebixCallback
  ): Promise<any>;
  function animate(html_element: HTMLElement, animation: WebixAnimate): void;
  function attachEvent(type: string, functor: WebixCallback, id?: string): string | number;
  function bind(code: WebixCallback, master: obj): WebixCallback;
  function blockEvent(): void;
  function callEvent(name: string, params: any[]): boolean;
  function clone(source: obj): obj;
  function confirm(
    text: string | WebixConfirmConfig,
    type?: string | WebixCallback,
    callback?: WebixCallback
  ): Promise<any>;
  function copy(source: obj | any[]): any;
  function delay(code: WebixCallback, owner?: obj, params?: any[], delay?: number): number;
  function detachEvent(id: string): void;
  function dp(name: string | webix.ui.baseview | WebixDataProcessorFullConfig): DataProcessor;
  function editStop(): void;
  function event(
    node: EventTarget | string,
    event: string,
    handler: WebixCallback,
    context?: WebixEventContext
  ): string | number;
  function eventRemove(id: string | number): void;
  function exec(code: string): any;
  function extend<T, S>(target: T, source: S, overwrite?: boolean): T & S;
  function hasEvent(name: string): boolean;
  function isArray(check: any): boolean;
  function isDate(check: any): boolean;
  function isUndefined(check: any): boolean;
  function mapEvent(map: WebixEventMap): void;
  function message(
    content: string | WebixMessageConfig,
    type?: string,
    expire?: number,
    id?: string | number
  ): string;
  function modalbox(
    text: string | WebixModalboxConfig,
    type?: string | WebixCallback,
    callback?: WebixCallback
  ): Promise<any>;
  function once(code: WebixCallback): void;
  function print(view: webix.ui.baseview | string | number, options?: obj): void;
  function prompt(
    text: string | obj,
    type?: string | WebixCallback,
    callback?: WebixCallback
  ): Promise<any>;
  function proto(target: obj, ...mixins: any[]): obj;
  function protoUI(target: obj, ...mixins: any[]): obj;
  function proxy<T extends ProxyName>(type: T, source: string, config?: obj): ProxyType<T>;
  function ready(code: WebixCallback): void;
  function remote(): void;
  function require(url: string | any[] | obj, callback?: WebixCallback, master?: obj): Promise<any>;
  function send(url: string, values: obj, method: string, target: string): void;
  function single(source: WebixCallback): WebixCallback;
  function stringify(obj: obj | any[]): string;
  function template(template: string): WebixCallback;
  function toCSV(id: string | webix.ui.baseview, options?: obj): Promise<any>;
  function toExcel(id: string | webix.ui.baseview, options?: obj): Promise<any>;
  function toFunctor(name: string): WebixCallback;
  function toNode(id: string): HTMLElement;
  function toPDF(id: string | webix.ui.baseview | any[], options?: obj): Promise<any>;
  function toPNG(id: string | webix.ui.baseview, options?: string | obj): Promise<any>;
  function type(obj: obj, data: obj): void;
  function ui<T extends webix.ui.baseview>(
    config: obj,
    parent?: obj | string,
    replacement?: obj | string | number
  ): T;
  function uid(): number;
  function unblockEvent(): void;
  function wrap(target: WebixCallback, source: WebixCallback): WebixCallback;

  var name: string;
  var version: string;
  var clipbuffer: webix.clipbuffer;
  var color: webix.color;
  var csv: webix.csv;
  var editors: webix.editors;
  var env: webix.env;
  var fullscreen: webix.fullscreen;
  var html: webix.html;
  var i18n: webix.i18n;
  var promise: webix.promise;
  var rules: webix.rules;
  var skin: webix.skin;
  var storage: webix.storage;

  interface AtomDataLoader {
    load(
      url: string | WebixCallback | WebixProxy,
      type?: string,
      callback?: WebixCallback,
      clear?: boolean
    ): Promise<any>;
    parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
  }
  var AtomDataLoader: AtomDataLoader;
  interface AtomRender {
    render(id?: string | number, data?: obj, type?: string): void;
    sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
  }
  var AtomRender: AtomRender;
  interface AutoScroll {}
  var AutoScroll: AutoScroll;
  interface AutoTooltip {
    $tooltipIn(node: HTMLElement): HTMLElement;
    $tooltipMove(t: HTMLElement, e: Event, text: string): void;
    $tooltipOut: void;
  }
  var AutoTooltip: AutoTooltip;
  interface BaseBind {
    bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
    unbind(): void;
  }
  var BaseBind: BaseBind;
  interface BindSource {
    addBind(source: WebixBindSource, rule: string, format: string): void;
    getBindData(key: string | number, update?: boolean): void;
    removeBind(source: WebixBindSource): void;
    saveBatch(handler: WebixCallback): void;
    setBindData(data: obj, key: string | number): void;
  }
  var BindSource: BindSource;
  interface Canvas {
    clearCanvas(): void;
    getCanvas(context?: string): WebixCanvasContext;
    hideCanvas(): void;
    renderText(x: number, y: number, text: string, css: string, w: number): void;
    renderTextAt(
      valign: string,
      align: string,
      x: number,
      y: number,
      t: string,
      c: string,
      w: number
    ): void;
    showCanvas(): void;
    toggleCanvas(): void;
  }
  var Canvas: Canvas;
  interface CodeParser {
    collapseNames(obj: any): obj;
    expandNames(obj: obj): obj;
  }
  var CodeParser: CodeParser;
  interface CollectionBind {
    getCursor(): number;
    refreshCursor(): void;
    setCursor(cursor: string | number): void;
  }
  var CollectionBind: CollectionBind;
  interface ContextHelper {
    attachTo(target: webix.ui.baseview | HTMLElement): void;
    getContext(): WebixContext;
    setContext(context: WebixContext): void;
  }
  var ContextHelper: ContextHelper;
  interface CopyPaste {}
  var CopyPaste: CopyPaste;
  interface CustomPrint {
    $customPrint: WebixCallback;
  }
  var CustomPrint: CustomPrint;
  interface CustomScroll {
    enable(html_node: HTMLElement | webix.ui.baseview): void;
    init(): void;
    resize(): void;
    scrollStep: number;
  }
  var CustomScroll: CustomScroll;
  interface DataCollection {
    add(obj: obj, index?: number): string | number;
    addBind(source: WebixBindSource, rule: string, format: string): void;
    attachEvent(
      type: DataCollectionEventName,
      functor: WebixCallback,
      id?: string
    ): string | number;
    bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
    blockEvent(): void;
    callEvent(name: string, params: any[]): boolean;
    clearAll(soft?: boolean): void;
    clearValidation(): void;
    copy(
      sid: string | number,
      tindex: number,
      tobj?: WebixDataMoveTarget,
      details?: WebixDataMoveOptions
    ): void;
    count(): number;
    define(
      property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
      value?: any
    ): void;
    destructor(): void;
    detachEvent(id: string): void;
    exists(id: number | string): boolean;
    filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;
    find(criterion: WebixCallback, first?: boolean): any;
    getBindData(key: string | number, update?: boolean): void;
    getCursor(): number;
    getFirstId(): number | string;
    getIdByIndex(index: number | string): string | number;
    getIndexById(id: number | string): number;
    getItem(id: number | string): obj;
    getLastId(): number | string;
    getNextId(id: number | string, step?: number): string | number;
    getPrevId(id: number | string, step?: number): string | number;
    hasEvent(name: string): boolean;
    isVisible(): boolean;
    load(
      url: string | WebixCallback | WebixProxy,
      type?: string,
      callback?: WebixCallback,
      clear?: boolean
    ): Promise<any>;
    loadNext(
      count: number,
      start: number,
      callback: WebixCallback,
      url: string,
      now: boolean,
      clear?: boolean
    ): Promise<any>;
    mapEvent(map: WebixEventMap): void;
    move(
      sid: string,
      tindex: number,
      tobj?: webix.ui.baseview,
      details?: WebixDataMoveOptions
    ): string;
    moveBottom(id: string | number): void;
    moveDown(id: string | number, step: number): void;
    moveTop(id: string | number): void;
    moveUp(id: string | number, step: number): void;
    parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
    refresh(id?: number | string): void;
    refreshCursor(): void;
    remove(id: string | number | any[]): void;
    removeBind(source: WebixBindSource): void;
    saveBatch(handler: WebixCallback): void;
    serialize(all?: boolean): any[];
    setBindData(data: obj, key: string | number): void;
    setCursor(cursor: string | number): void;
    sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
    sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
    unbind(): void;
    unblockEvent(): void;
    updateItem(id: number | string, data: obj): void;
    validate(id?: string): boolean;
    waitSave(handler: WebixCallback): Promise<any>;
    config: DataCollectionConfig;
    data: DataStore;
    name: string;
    waitData: Promise<any>;
  }
  interface DataCollectionConfig {
    view?: string;
    data?: string | any[] | obj;
    dataFeed?: string | WebixProxy | WebixCallback;
    datathrottle?: number;
    datatype?: string;
    defaultData?: obj;
    externalData?: WebixCallback;
    id?: string | number;
    map?: WebixDataMap;
    on?: EventHash;
    ready?: WebixCallback;
    removeMissed?: boolean;
    rules?: WebixValidationRules;
    save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
    scheme?: WebixDataScheme;
    url?: string | WebixCallback | WebixProxy;
  }
  type DataCollectionEventName =
    | 'onAfterAdd'
    | 'onAfterCursorChange'
    | 'onAfterDelete'
    | 'onAfterLoad'
    | 'onAfterSort'
    | 'onBeforeAdd'
    | 'onBeforeCursorChange'
    | 'onBeforeDelete'
    | 'onBeforeLoad'
    | 'onBeforeSort'
    | 'onBindRequest'
    | 'onBindUpdate'
    | 'onDataRequest'
    | 'onDataUpdate'
    | 'onDestruct'
    | 'onLoadError'
    | 'onValidationError'
    | 'onValidationSuccess';
  interface DataCollectionFactory {
    new (config?: DataCollectionConfig): DataCollection;
  }
  var DataCollection: DataCollectionFactory;
  interface DataDriver {
    csv: WebixCSVDataDriver;
    excel: WebixExcelDataDriver;
    html: WebixHTMLDataDriver;
    htmltable: WebixHTMLTableDataDriver;
    jsarray: WebixJSArrayDataDriver;
    json: WebixJSONDataDriver;
    xml: WebixXMLDataDriver;
    [key: string]: any;
  }
  var DataDriver: DataDriver;
  interface DataLoader {
    add(obj: obj, index?: number): string | number;
    clearAll(soft?: boolean): void;
    count(): number;
    exists(id: number | string): boolean;
    filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;
    find(criterion: WebixCallback, first?: boolean): any;
    getFirstId(): number | string;
    getIdByIndex(index: number | string): string | number;
    getIndexById(id: number | string): number;
    getItem(id: number | string): obj;
    getLastId(): number | string;
    getNextId(id: number | string, step?: number): string | number;
    getPrevId(id: number | string, step?: number): string | number;
    load(
      url: string | WebixCallback | WebixProxy,
      type?: string,
      callback?: WebixCallback,
      clear?: boolean
    ): Promise<any>;
    loadNext(
      count: number,
      start: number,
      callback: WebixCallback,
      url: string,
      now: boolean,
      clear?: boolean
    ): Promise<any>;
    parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
    refresh(id?: number | string): void;
    remove(id: string | number | any[]): void;
    serialize(all?: boolean): any[];
    sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
    sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
    updateItem(id: number | string, data: obj): void;
    waitSave(handler: WebixCallback): Promise<any>;
    data: DataStore;
    waitData: Promise<any>;
  }
  var DataLoader: DataLoader;
  interface DataMarks {
    addCss(id: string | number, css: string, silent?: boolean): void;
    clearCss(css: string, silent?: boolean): void;
    hasCss(id: string | number, css: string): boolean;
    removeCss(id: string | number, css: string, silent?: boolean): void;
  }
  var DataMarks: DataMarks;
  interface DataMove {
    copy(
      sid: string | number,
      tindex: number,
      tobj?: WebixDataMoveTarget,
      details?: WebixDataMoveOptions
    ): void;
    move(
      sid: string,
      tindex: number,
      tobj?: WebixDataMoveTarget,
      details?: WebixDataMoveOptions
    ): string;
    moveBottom(id: string | number): void;
    moveDown(id: string | number, step: number): void;
    moveTop(id: string | number): void;
    moveUp(id: string | number, step: number): void;
  }
  var DataMove: DataMove;
  interface DataProcessor {
    attachEvent(type: string, functor: WebixCallback, id?: string): string | number;
    attachProgress(start: WebixCallback, end: WebixCallback, error: WebixCallback): void;
    blockEvent(): void;
    callEvent(name: string, params: any[]): boolean;
    clearValidation(): void;
    define(
      property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
      value?: any
    ): void;
    detachEvent(id: string): void;
    escape(value: string): string;
    getItemState(itemId: string | number): WebixDataProcessorItemStateObject;
    getState(): WebixDataProcessorState;
    hasEvent(name: string): boolean;
    ignore(code: WebixCallback, master: webix.ui.baseview | WebixDataStorage): void;
    mapEvent(map: WebixEventMap): void;
    off(): void;
    on(): void;
    processResult(data: WebixDataProcessorResultObject): void;
    reset(): void;
    save(id: string | number, operation?: string, obj?: obj): Promise<any>;
    send(): Promise<any>;
    setItemState(itemId: string | number, state: boolean): void;
    unblockEvent(): void;
    validate(mode?: WebixFieldParams): boolean;
    config: WebixDataProcessorFullConfig;
    name: string;
  }
  var DataProcessor: DataProcessor;
  interface DataRecord {
    attachEvent(type: string, functor: WebixCallback, id?: string): string | number;
    bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
    blockEvent(): void;
    callEvent(name: string, params: any[]): boolean;
    define(
      property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
      value?: any
    ): void;
    detachEvent(id: string): void;
    getValues(): obj;
    hasEvent(name: string): boolean;
    isVisible(): boolean;
    load(
      url: string | WebixCallback | WebixProxy,
      type?: string,
      callback?: WebixCallback,
      clear?: boolean
    ): Promise<any>;
    mapEvent(map: WebixEventMap): void;
    parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
    refresh(id?: string | number): void;
    setValues(values: obj, update?: boolean, config?: any): void;
    unbind(): void;
    unblockEvent(): void;
    config: obj;
    name: string;
  }
  interface DataRecordConfig {
    view?: string;
    data?: string | any[] | obj;
    dataFeed?: string | WebixProxy | WebixCallback;
    datatype?: string;
    id?: string | number;
    on?: EventHash;
    url?: string | WebixCallback | WebixProxy;
  }
  type DataRecordEventName =
    | 'onAfterLoad'
    | 'onBeforeLoad'
    | 'onBindRequest'
    | 'onChange'
    | 'onLoadError';
  interface DataRecordFactory {
    new (config?: DataRecordConfig): DataRecord;
  }
  var DataRecord: DataRecordFactory;
  interface DataState {
    getState(): obj;
    setState(state: obj): void;
  }
  var DataState: DataState;
  interface DataStore {
    add(obj: obj, index?: number): string | number;
    addMark(id: string, name: string, css?: boolean, value?: any, silent?: boolean): any;
    attachEvent(type: string, functor: WebixCallback, id?: string): string | number;
    blockEvent(): void;
    callEvent(name: string, params: any[]): boolean;
    changeId(old: string | number, newid: string | number): void;
    clearAll(soft?: boolean): void;
    clearMark(name: string): void;
    count(): number;
    destructor(): void;
    detachEvent(id: string): void;
    each(method: WebixCallback, master?: obj, all?: boolean): void;
    exists(id: number | string): boolean;
    filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;
    find(criterion: WebixCallback, first?: boolean): any;
    getFirstId(): number | string;
    getIdByIndex(index: number | string): string | number;
    getIndexById(id: number | string): number;
    getIndexRange(from: string | number, to: string | number): any[];
    getItem(id: number | string): obj;
    getLastId(): number | string;
    getMark(id: number | string, mark_name: string): any;
    getNextId(id: number | string, step?: number): string | number;
    getPrevId(id: number | string, step?: number): string | number;
    getRange(from: number | string, to: string | number): any[];
    hasEvent(name: string): boolean;
    id(item: obj): number | string;
    importData(source: webix.ui.baseview): void;
    mapEvent(map: WebixEventMap): void;
    move(
      sid: string,
      tindex: number,
      tobj?: webix.ui.baseview,
      details?: WebixDataMoveOptions
    ): string;
    provideApi(target: obj, eventable: boolean): void;
    refresh(id?: number | string): void;
    remove(id: string | number | any[]): void;
    removeMark(id: number | string, name: string, css?: boolean, silent?: boolean): void;
    scheme(config: obj): void;
    serialize(all?: boolean): any[];
    setDriver(type: string): void;
    silent(code: WebixCallback): void;
    sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
    sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
    unblockEvent(): void;
    unsync(): void;
    updateItem(id: number | string, data: obj): void;
    driver: obj;
    name: string;
    order: any[];
    pull: obj;
    sorting: WebixSorting;
  }
  var DataStore: DataStore;
  interface DataValue {
    attachEvent(type: string, functor: WebixCallback, id?: string): string | number;
    bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
    blockEvent(): void;
    callEvent(name: string, params: any[]): boolean;
    detachEvent(id: string): void;
    getValue(): string;
    hasEvent(name: string): boolean;
    isVisible(): boolean;
    mapEvent(map: WebixEventMap): void;
    refresh(): void;
    setValue(value: string, config?: any): void;
    unbind(): void;
    unblockEvent(): void;
    name: string;
  }
  interface DataValueConfig {
    view?: string;
    id?: string | number;
    on?: EventHash;
    value?: string | number;
  }
  type DataValueEventName = 'onBindRequest' | 'onChange';
  interface DataValueFactory {
    new (config?: DataValueConfig): DataValue;
  }
  var DataValue: DataValueFactory;
  interface WebixDate {
    add(date: Date, inc: number, mode: string, copy?: boolean): Date;
    copy(date: Date): Date;
    datePart(date: Date, copy?: boolean): Date;
    dateToStr(format: string | WebixCallback, utc?: boolean): WebixCallback;
    dayStart(date: Date): Date;
    equal(datea: Date, dateb: Date): boolean;
    getISOWeek(date: Date): number;
    getUTCISOWeek(date: Date): number;
    isHoliday(date: Date): boolean;
    monthStart(date: Date): Date;
    strToDate(format: string, utc?: boolean): WebixCallback;
    timePart(date: Date): number;
    toFixed(num: number | string): number | string;
    weekStart(date: Date): Date;
    yearStart(date: Date): Date;
    startOnMonday: boolean;
  }
  var Date: WebixDate;
  interface Destruction {
    destructor(): void;
  }
  var Destruction: Destruction;
  interface DragControl {
    addDrag(node: string | number | HTMLElement, ctrl: WebixDragConfig): void;
    addDrop(
      node: string | number | HTMLElement,
      ctrl: WebixDropConfig,
      master_mode?: boolean
    ): void;
    createDrag(event: Event, pointer: string): void;
    destroyDrag(): void;
    getContext(): WebixDnDContext;
    getMaster(target: webix.ui.baseview | HTMLElement): obj;
    getNode(): HTMLElement;
    sendSignal(signal: string): void;
    unlink(target: webix.ui.baseview): void;
    $drag(source: HTMLElement, ev: Event): HTMLElement;
    $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): void;
    $dragOut(source: HTMLElement, target: HTMLElement, drop: HTMLElement, event: Event): void;
    $dragPos: WebixCallback;
    $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;
    left: number;
    top: number;
  }
  var DragControl: DragControl;
  interface DragItem {
    $drag(source: HTMLElement, ev: Event, pointer: string): string;
    $dragHTML: WebixCallback;
    $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
    $dragMark(context: WebixDnDContext, ev: Event): boolean;
    $dragOut(
      source: HTMLElement,
      old_target: HTMLElement,
      new_target: HTMLElement,
      ev: Event
    ): void;
    $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;
    $dropAllow: WebixCallback;
    $dropHTML: WebixCallback;
  }
  var DragItem: DragItem;
  interface DragOrder {
    $drag(source: HTMLElement, ev: Event, pointer: string): string;
    $dragDestroy: void;
    $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
    $dragMark: boolean;
    $dragOut(source: HTMLElement, target: HTMLElement, drop: HTMLElement): void;
    $dragPos: WebixCallback;
    $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;
  }
  var DragOrder: DragOrder;
  interface EditAbility {
    edit(id: WebixCellObject): void;
    editCancel(): void;
    editNext(): void;
    editStop(): void;
    focusEditor(id: WebixCellObject): void;
    getEditState(): WebixEditorObject;
    getEditor(id?: string): WebixEditorObject;
    getEditorValue(): string;
    validateEditor(id?: string | number): boolean;
  }
  var EditAbility: EditAbility;
  interface EventSystem {
    attachEvent(type: string, functor: WebixCallback, id?: string): string | number;
    blockEvent(): void;
    callEvent(name: string, params: any[]): boolean;
    detachEvent(id: string): void;
    hasEvent(name: string): boolean;
    mapEvent(map: WebixEventMap): void;
    unblockEvent(): void;
  }
  var EventSystem: EventSystem;
  interface FlexLayout {
    render(): void;
    $getSize(dx?: number, dy?: number): any[];
  }
  var FlexLayout: FlexLayout;
  interface Group {
    group(config: WebixGroupConfig, target?: string | number): void;
    ungroup(mode: boolean): void;
  }
  var Group: Group;
  interface GroupMethods {
    any(property: string, data: obj): any;
    count(property: string, data: obj): number;
    max(property: string, data: obj): number;
    min(property: string, data: obj): number;
    string(property: string, data: obj): number;
    sum(property: string, data: obj): number;
    [key: string]: any;
  }
  var GroupMethods: GroupMethods;
  interface GroupStore {
    group(config: WebixGroupConfig, target?: string): void;
    ungroup(): void;
  }
  var GroupStore: GroupStore;
  interface HTMLOptions {
    addOption(id: string | number, value: any, show?: boolean, index?: number): void;
    disableOption(id: string | number): void;
    enableOption(id: string | number): void;
    getOption(id: string | number): obj;
    hideOption(id: string | number): void;
    optionIndex(ID: string | number): number;
    removeOption(id: string | number): void;
    showOption(id: string | number): void;
  }
  var HTMLOptions: HTMLOptions;
  interface HtmlMap {
    addPoly(id: string | number, points: any[], userdata?: string): void;
    addRect(id: string | number, points: any[], userdata?: string): void;
    addSector(
      id: string | number,
      aplha0: number,
      aplha1: number,
      x: number,
      y: number,
      R: number,
      ky: number,
      userdata?: string
    ): void;
    hide(html: HTMLElement, userdata: string, mode: boolean): void;
    render(html: HTMLElement): void;
  }
  var HtmlMap: HtmlMap;
  interface IdSpace {
    innerId(id: number | string): number | string;
    ui<T extends webix.ui.baseview>(view: webix.ui.baseviewConfig & { [key: string]: any }): T;
    $$<T extends webix.ui.baseview>(name: string): T;
  }
  var IdSpace: IdSpace;
  interface KanbanView {
    eachOtherList(code: WebixCallback): void;
    getKanban(): webix.ui.kanban;
    move(
      sid: string,
      tindex: number,
      tobj?: webix.ui.baseview,
      details?: WebixDataMoveOptions
    ): string;
    $dragCreate(source: HTMLElement, event: Event): HTMLElement;
    $dragPos: WebixCallback;
    $dropHTML: WebixCallback;
    $skin: WebixCallback;
    on_context: EventHash;
  }
  var KanbanView: KanbanView;
  interface KeysNavigation {
    moveSelection(direction: string): void;
  }
  var KeysNavigation: KeysNavigation;
  interface MapCollection {}
  var MapCollection: MapCollection;
  interface Modality {}
  var Modality: Modality;
  interface MouseEvents {
    on_click: EventHash;
    on_context: EventHash;
    on_dblclick: EventHash;
    on_mouse_move: EventHash;
  }
  var MouseEvents: MouseEvents;
  interface Movable {
    $dragCreate(source: HTMLElement, event: Event, pointer: string): HTMLElement;
    $dragDestroy: WebixCallback;
    $dragPos: WebixCallback;
  }
  var Movable: Movable;
  interface NavigationButtons {}
  var NavigationButtons: NavigationButtons;
  interface Number {
    format(value: number, config?: WebixNumberFormat): string;
    getConfig(format: string): WebixNumberFormat;
    numToStr(config: WebixNumberFormat): WebixCallback;
    parse(value: string, config: WebixNumberFormat): number;
  }
  var Number: Number;
  interface OverlayBox {
    hideOverlay(): void;
    showOverlay(message: string): void;
  }
  var OverlayBox: OverlayBox;
  interface PagingAbility {
    getPage(): number;
    getPager(): webix.ui.pager;
    setPage(page: number): void;
  }
  var PagingAbility: PagingAbility;
  interface ProgressBar {
    hideProgress(): void;
    showProgress(config?: WebixProgressBarConfig): void;
  }
  var ProgressBar: ProgressBar;
  interface RecordBind {}
  var RecordBind: RecordBind;
  interface RenderStack {
    customize(obj: WebixItemType): void;
    getItemNode(id: string | number): HTMLElement;
    locate(e: Event): string | number;
    render(id: string | number, data: obj, type: WebixRenderType): void;
    showItem(id: string | number): void;
    type: WebixItemType;
    types: WebixItemTypes;
  }
  var RenderStack: RenderStack;
  interface ResizeArea {}
  var ResizeArea: ResizeArea;
  interface Scrollable {
    getScrollState(): WebixScrollState;
    scrollTo(x: number, y: number): void;
  }
  var Scrollable: Scrollable;
  interface SelectionModel {
    getSelectedId(as_array?: boolean): any;
    getSelectedItem(as_array?: boolean): obj;
    isSelected(id: string | number): boolean;
    select(id: string | any[], preserve?: boolean): void;
    selectAll(from?: string, to?: string): void;
    unselect(id?: string): void;
    unselectAll(): void;
  }
  var SelectionModel: SelectionModel;
  interface Settings {
    define(
      property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
      value?: any
    ): void;
    config: obj;
    name: string;
  }
  var Settings: Settings;
  interface SingleRender {
    customize(obj: WebixItemType): void;
    render(id?: string | number, data?: obj, type?: string): void;
    sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
    type: WebixItemType;
  }
  var SingleRender: SingleRender;
  interface Sparklines {
    getTemplate(config?: string | WebixSparklineOptions): WebixCallback;
    paddingX: number;
    paddingY: number;
    radius: number;
    types: WebixSparklines;
  }
  var Sparklines: Sparklines;
  interface TablePaste {}
  var TablePaste: TablePaste;
  interface TooltipControl {
    addTooltip(target: string | HTMLElement, config: string | obj): void;
    getMaster(target: HTMLElement): obj;
    getTooltip(): webix.ui.baseview;
    removeTooltip(target: string | HTMLElement): void;
    $tooltipIn(target: HTMLElement, event: Event): void;
    $tooltipMove(target: HTMLElement, event: Event, text: string): void;
    $tooltipOut(previousTarget: HTMLElement, target: HTMLElement, event: Event): void;
    delay: number;
    overflow: boolean;
  }
  var TooltipControl: TooltipControl;
  interface Touch {
    disable(): void;
    enable(): void;
    limit(mode: boolean): void;
    scrollTo(node: HTMLElement, x: number, y: number, speed: string): void;
    config: WebixTouchConfig;
  }
  var Touch: Touch;
  interface TreeAPI {
    close(id: string | number): void;
    closeAll(): void;
    getOpenItems(): any[];
    getState(): WebixTreeState;
    isBranchOpen(id: string | number): boolean;
    open(id: string | number, show?: boolean): void;
    openAll(): void;
    setState(state: WebixTreeState): void;
  }
  var TreeAPI: TreeAPI;
  interface TreeClick {
    webix_tree_checkbox(event: Event, id: string | number): void;
    webix_tree_close(event: Event, id: string | number): void;
    webix_tree_open(event: Event, id: string | number): void;
  }
  var TreeClick: TreeClick;
  interface TreeCollection {
    add(obj: obj, index?: number, parentId?: string): string;
    addBind(source: WebixBindSource, rule: string, format: string): void;
    attachEvent(
      type: TreeCollectionEventName,
      functor: WebixCallback,
      id?: string
    ): string | number;
    bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
    blockEvent(): void;
    callEvent(name: string, params: any[]): boolean;
    clearAll(soft?: boolean): void;
    clearValidation(): void;
    copy(
      sid: string | number,
      tindex: number,
      tobj?: WebixDataMoveTarget,
      details?: WebixDataMoveOptions
    ): void;
    count(): number;
    define(
      property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
      value?: any
    ): void;
    destructor(): void;
    detachEvent(id: string): void;
    exists(id: number | string): boolean;
    filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;
    find(criterion: WebixCallback, first?: boolean): any;
    getBindData(key: string | number, update?: boolean): void;
    getBranchIndex(id: string | number): number;
    getCursor(): number;
    getFirstChildId(id: string | number): string;
    getFirstId(): number | string;
    getIdByIndex(index: number | string): string | number;
    getIndexById(id: number | string): number;
    getItem(id: number | string): obj;
    getLastId(): number | string;
    getNextId(id: number | string, step?: number): string | number;
    getNextSiblingId(id: string | number): string | number;
    getParentId(id: string | number): string | number;
    getPrevId(id: number | string, step?: number): string | number;
    getPrevSiblingId(id: string | number): string | number;
    hasEvent(name: string): boolean;
    isBranch(id: string | number): boolean;
    isVisible(): boolean;
    load(
      url: string | WebixCallback | WebixProxy,
      type?: string,
      callback?: WebixCallback,
      clear?: boolean
    ): Promise<any>;
    loadBranch(id: string | number, callback: WebixCallback, url: string): Promise<any>;
    loadNext(
      count: number,
      start: number,
      callback: WebixCallback,
      url: string,
      now: boolean,
      clear?: boolean
    ): Promise<any>;
    mapEvent(map: WebixEventMap): void;
    move(
      sid: string | number,
      tindex: number,
      tobj?: WebixDataMoveTarget,
      details?: WebixTreeDataMoveOptions
    ): string | number;
    moveBottom(id: string | number, parentId: string | number): void;
    moveTop(id: string | number, parentId: string | number): void;
    parse(data: string | any[] | obj, type?: string, clear?: boolean): void;
    refresh(id?: number | string): void;
    refreshCursor(): void;
    remove(id: string | number | any[]): void;
    removeBind(source: WebixBindSource): void;
    saveBatch(handler: WebixCallback): void;
    serialize(all?: boolean): any[];
    setBindData(data: obj, key: string | number): void;
    setCursor(cursor: string | number): void;
    sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
    sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
    unbind(): void;
    unblockEvent(): void;
    updateItem(id: number | string, data: obj): void;
    validate(id?: string): boolean;
    waitSave(handler: WebixCallback): Promise<any>;
    config: TreeCollectionConfig;
    data: DataStore;
    name: string;
    waitData: Promise<any>;
  }
  interface TreeCollectionConfig {
    view?: string;
    data?: string | any[] | obj;
    datathrottle?: number;
    datatype?: string;
    defaultData?: obj;
    externalData?: WebixCallback;
    filterMode?: WebixTreeFilterMode;
    id?: string | number;
    map?: WebixDataMap;
    on?: EventHash;
    ready?: WebixCallback;
    removeMissed?: boolean;
    rules?: WebixValidationRules;
    save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
    scheme?: WebixDataScheme;
    url?: string | WebixCallback | WebixProxy;
  }
  type TreeCollectionEventName =
    | 'onAfterAdd'
    | 'onAfterCursorChange'
    | 'onAfterDelete'
    | 'onAfterLoad'
    | 'onAfterSort'
    | 'onBeforeAdd'
    | 'onBeforeCursorChange'
    | 'onBeforeDelete'
    | 'onBeforeLoad'
    | 'onBeforeSort'
    | 'onBindRequest'
    | 'onBindUpdate'
    | 'onDataRequest'
    | 'onDataUpdate'
    | 'onDestruct'
    | 'onLoadError'
    | 'onValidationError'
    | 'onValidationSuccess';
  interface TreeCollectionFactory {
    new (config?: TreeCollectionConfig): TreeCollection;
  }
  var TreeCollection: TreeCollectionFactory;
  interface TreeDataLoader {
    loadBranch(id: string | number, callback: WebixCallback, url: string): Promise<any>;
  }
  var TreeDataLoader: TreeDataLoader;
  interface TreeDataMove {
    copy(
      sid: string | number,
      tindex: number,
      tobj?: WebixDataMoveTarget,
      details?: WebixTreeDataMoveOptions
    ): number;
    move(
      sid: string | number,
      tindex: number,
      tobj?: WebixDataMoveTarget,
      details?: WebixTreeDataMoveOptions
    ): string | number;
    moveBottom(id: string | number, parentId: string | number): void;
    moveDown(id: string | number, step: number): void;
    moveTop(id: string | number, parentId: string | number): void;
    moveUp(id: string | number, step: number): void;
    $dropAllow: WebixCallback;
  }
  var TreeDataMove: TreeDataMove;
  interface TreeRenderStack {
    getItemNode(id: string | number): HTMLElement;
    render(id: string | number, data: obj, type: WebixTreeRenderType): void;
  }
  var TreeRenderStack: TreeRenderStack;
  interface TreeStateCheckbox {
    checkAll(id?: string | number): void;
    checkItem(id: string): void;
    getChecked(): any[];
    isChecked(id: string | number): boolean;
    uncheckAll(id?: string | number): void;
    uncheckItem(id: string): void;
  }
  var TreeStateCheckbox: TreeStateCheckbox;
  interface TreeStore {
    add(obj: obj, index?: number, parentId?: string): string;
    changeId(old: string | number, newid: string | number): void;
    clearAll(soft?: boolean): void;
    count(): number;
    each(code: WebixCallback, master: obj, all: boolean, pid: string): void;
    eachChild(pid: string, code: WebixCallback, master?: obj, all?: boolean): void;
    eachLeaf(pid: string, code: WebixCallback): void;
    eachOpen(code: WebixCallback, master?: obj, pid?: string): void;
    eachSubItem(pid: string, code: WebixCallback): void;
    getBranch(id: string): any[];
    getBranchIndex(id: string | number): number;
    getFirstChildId(id: string | number): string;
    getNextSiblingId(id: string | number): string | number;
    getParentId(id: string | number): string | number;
    getPrevSiblingId(id: string | number): string | number;
    getTopRange(): any[];
    isBranch(id: string | number): boolean;
    provideApi(target: obj, eventable: boolean): void;
    remove(id: string | number | any[]): void;
    serialize(all?: boolean): any[];
    name: string;
  }
  var TreeStore: TreeStore;
  interface TreeTablePaste {
    insert(data: any[]): void;
  }
  var TreeTablePaste: TreeTablePaste;
  interface TreeType {
    checkbox(obj: obj, common: obj): string;
    folder(obj: obj, common: obj): string;
    icon(obj: obj, common: obj): string;
    space(obj: obj, common: obj): string;
  }
  var TreeType: TreeType;
  interface UIManager {
    addHotKey(key: string, handler: WebixCallback, view?: webix.ui.baseview | string): void;
    applyChanges(): void;
    canFocus(id: string | number): boolean;
    destructor(): void;
    getFocus(): webix.ui.baseview;
    getNext(view: webix.ui.baseview): webix.ui.baseview;
    getPrev(view: webix.ui.baseview): webix.ui.baseview;
    getState(id: string, children: boolean): obj;
    getTop(view: string | number | webix.ui.baseview): webix.ui.baseview;
    hasFocus(id: string | number): boolean;
    removeHotKey(key: string, handler?: WebixCallback, view?: webix.ui.baseview | string): void;
    setFocus(id: string | number): void;
    setState(state: obj): void;
  }
  var UIManager: UIManager;
  interface Undo {
    ignoreUndo(functor: WebixCallback): void;
    removeUndo(id: string): void;
    undo(id: string): void;
  }
  var Undo: Undo;
  interface UploadDriver {
    fileDialog(content?: obj): void;
    send(id: number | string | WebixCallback): void;
    stopUpload(id: string | number): void;
    $drop: WebixCallback;
    $render: any;
  }
  var UploadDriver: UploadDriver;
  interface VRenderStack {
    getItemNode(id: string | number): HTMLElement;
    render(id: string | number, data: obj, type: WebixRenderType): void;
    showItem(id: string | number): void;
    $dragDestroy: WebixCallback;
    $setSize(x: number, y: number): boolean;
  }
  var VRenderStack: VRenderStack;
  interface ValidateCollection {
    clearValidation(): void;
    validate(id?: string): boolean;
  }
  var ValidateCollection: ValidateCollection;
  interface ValidateData {
    clearValidation(): void;
    validate(mode?: WebixFieldParams): boolean;
  }
  var ValidateData: ValidateData;
  interface ValueBind {}
  var ValueBind: ValueBind;
  interface Values {
    clear(): void;
    focus(item: string): void;
    getCleanValues(): obj;
    getDirtyValues(): obj;
    getValues(details?: WebixFieldParams | WebixCallback): obj;
    isDirty(): boolean;
    markInvalid(name: string, state?: boolean | string): void;
    setDirty(mark?: boolean): void;
    setValues(values: obj, update?: boolean, config?: any): void;
  }
  var Values: Values;
  interface VirtualRenderStack {
    getItemNode(id: string | number): HTMLElement;
    render(id: string | number, data: obj, type: WebixRenderType): void;
    showItem(id: string | number): void;
  }
  var VirtualRenderStack: VirtualRenderStack;

  namespace ui {
    interface WebixFilter {
      getValue(node: HTMLElement): any;
      setValue(node: HTMLElement, value: any): any;
      refresh(master: webix.ui.baseview, node: HTMLElement, value: any): void;
      render(master: webix.ui.baseview, config: { [name: string]: any }): string;
    }

    class textFilter implements WebixFilter {
      getValue(node: HTMLElement): any;
      setValue(node: HTMLElement, value: any): any;
      refresh(master: webix.ui.baseview, node: HTMLElement, value: any): void;
      render(master: webix.ui.baseview, config: { [name: string]: any }): string;
      getInputNode(node: HTMLElement): HTMLElement;
    }

    class selectFilter extends textFilter {}
    class serverFilter extends textFilter {}
    class serverSelectFilter extends textFilter {}
    class numberFilter extends textFilter {}
    class dateFilter extends textFilter {}
    class multiSelectFilter extends textFilter {}
    class serverMultiSelectFilter extends textFilter {}
    class multiComboFilter extends textFilter {}
    class datepickerFilter extends textFilter {}
    class dateRangeFilter extends textFilter {}

    class summColumn extends textFilter {}
    class masterCheckbox extends textFilter {}
    class columnGroup extends textFilter {}

    const datafilter: {
      textFilter: textFilter;
      selectFilter: selectFilter;
      serverFilter: serverFilter;
      serverSelectFilter: serverSelectFilter;
      numberFilter: numberFilter;
      dateFilter: dateFilter;
      multiSelectFilter: multiSelectFilter;
      serverMultiSelectFilter: serverMultiSelectFilter;
      multiComboFilter: multiComboFilter;
      datepickerFilter: datepickerFilter;
      dateRangeFilter: dateRangeFilter;
      summColumn: summColumn;
      masterCheckbox: masterCheckbox;
      columnGroup: columnGroup;
      [index: string]: WebixFilter;
    };

    function fullScreen(): void;
    function hasMethod(name: string, method_name: string): boolean;
    function resize(): void;
    function zIndex(): number;

    interface baselayoutConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      cols?: any[];
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      responsive?: string;
      rows?: any[];
      visibleBatch?: string;
      width?: number;
    }
    type baselayoutEventName = 'onBindRequest' | 'onDestruct' | 'onViewShow';
    class baselayout implements webix.ui.baseview {
      addView(
        view: webix.ui.baseview | (webix.ui.baseviewConfig & { [key: string]: any }),
        index?: number
      ): string | number;
      adjust(): void;
      attachEvent(type: baselayoutEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      index(obj: webix.ui.baseview): number;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      reconstruct(): void;
      removeView(id: string | number | webix.ui.baseview): void;
      resize(): void;
      resizeChildren(): void;
      restore(state: obj, factory?: WebixCallback): void;
      serialize(serializer?: WebixCallback): obj;
      show(force?: boolean, animation?: boolean): void;
      showBatch(name: string, mode?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: baselayoutConfig;
      name: string;
    }
    interface baseviewConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      width?: number;
    }
    type baseviewEventName = 'onBindRequest' | 'onDestruct' | 'onViewShow';
    interface baseview {
      adjust(): void;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: baseviewConfig;
      name: string;
    }
    interface jetappConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      body?: webix.ui.baseviewConfig & { [key: string]: any };
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      locale?: WebixLocaleConfig;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      override?: any[];
      width?: number;
    }
    type jetappEventName =
      | 'onAfterScroll'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onInit'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class jetapp implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: jetappEventName, functor: WebixCallback, id?: string): string | number;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unblockEvent(): void;

      bind(target: any, rule?: WebixCallback, format?: string): void;
      unbind(): void;
      $app: WebixJetAppWrapper;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: jetappConfig;
      name: string;
    }
    interface protoConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      click?: string | WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datathrottle?: number;
      datatype?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      item?: WebixItemType | string;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      pager?: string | WebixPagerConfig;
      ready?: WebixCallback;
      removeMissed?: boolean;
      rules?: WebixValidationRules;
      save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
      scheme?: WebixDataScheme;
      template?: string | WebixCallback;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: WebixItemType | string;
      url?: string | WebixCallback | WebixProxy;
      width?: number;
    }
    type protoEventName =
      | 'onAfterAdd'
      | 'onAfterDelete'
      | 'onAfterLoad'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onAfterSort'
      | 'onBeforeAdd'
      | 'onBeforeDelete'
      | 'onBeforeLoad'
      | 'onBeforeRender'
      | 'onBeforeSort'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDataRequest'
      | 'onDataUpdate'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemRender'
      | 'onKeyPress'
      | 'onLoadError'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTabFocus'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onValidationError'
      | 'onValidationSuccess'
      | 'onViewResize'
      | 'onViewShow';
    class proto implements webix.ui.baseview {
      add(obj: obj, index?: number): string | number;
      addCss(id: string | number, css: string, silent?: boolean): void;
      adjust(): void;
      attachEvent(type: protoEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(soft?: boolean): void;
      clearCss(css: string, silent?: boolean): void;
      clearValidation(): void;
      count(): number;
      customize(obj: WebixItemType): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      exists(id: number | string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value?: string,
        preserve?: boolean
      ): void;
      find(criterion: WebixCallback, first?: boolean): any;
      getChildViews(): webix.ui.baseview[];
      getFirstId(): number | string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number | string): string | number;
      getIndexById(id: number | string): number;
      getItem(id: number | string): obj;
      getItemNode(id: string | number): HTMLElement;
      getLastId(): number | string;
      getNextId(id: number | string, step?: number): string | number;
      getNode(): HTMLElement;
      getPage(): number;
      getPager(): webix.ui.pager;
      getParentView(): webix.ui.baseview;
      getPrevId(id: number | string, step?: number): string | number;
      getTopParentView(): webix.ui.baseview;
      hasCss(id: string | number, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
        clear?: boolean
      ): Promise<any>;
      locate(e: Event): string | number;
      mapEvent(map: WebixEventMap): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: number | string): void;
      remove(id: string | number | any[]): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      render(id: string | number, data: obj, type: WebixRenderType): void;
      resize(): void;
      serialize(all?: boolean): any[];
      setPage(page: number): void;
      show(force?: boolean, animation?: boolean): void;
      showItem(id: string | number): void;
      sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      updateItem(id: number | string, data: obj): void;
      validate(id?: string): boolean;
      waitSave(handler: WebixCallback): Promise<any>;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: protoConfig;
      data: DataStore;
      name: string;
      type: WebixItemType;
      types: WebixItemTypes;
      waitData: Promise<any>;
    }
    interface resizeareaConfig {
      view?: string;
      border?: boolean;
      container?: string | HTMLElement;
      cursor?: string;
      dir?: string;
      eventPos?: number;
      height?: number;
      id?: string | number;
      on?: EventHash;
      start?: number;
      width?: number;
    }
    type resizeareaEventName = 'onResize' | 'onResizeEnd';
    interface resizearea {
      attachEvent(type: resizeareaEventName, functor: WebixCallback, id?: string): string | number;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      detachEvent(id: string): void;
      hasEvent(name: string): boolean;
      mapEvent(map: WebixEventMap): void;
      unblockEvent(): void;

      config: resizeareaConfig;
      name: string;
    }
    interface viewConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      width?: number;
    }
    type viewEventName =
      | 'onAfterScroll'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTabFocus'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class view implements webix.ui.baseview {
      adjust(): void;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: viewConfig;
      name: string;
    }
    interface vscrollConfig {
      view?: string;
      container?: string | HTMLElement;
      id?: string | number;
      on?: EventHash;
      scroll?: string;
      scrollHeight?: number;
      scrollPos?: number;
      scrollSize?: number;
      scrollStep?: number;
      scrollVisible?: boolean;
      scrollWidth?: number;
      zoom?: number;
    }
    type vscrollEventName = 'onScroll';
    interface vscroll {
      activeArea(node: HTMLElement): void;
      attachEvent(type: vscrollEventName, functor: WebixCallback, id?: string): string | number;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      detachEvent(id: string): void;
      getScroll(): number;
      getSize(): number;
      hasEvent(name: string): boolean;
      mapEvent(map: WebixEventMap): void;
      reset(): void;
      scrollTo(pos: number): void;
      sizeTo(size: number): void;
      unblockEvent(): void;

      $skin: WebixCallback;
      config: vscrollConfig;
      name: string;
    }
    interface abslayoutConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      cells?: any[];
      cols?: any[];
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      responsive?: string;
      rows?: any[];
      visibleBatch?: string;
      width?: number;
    }
    type abslayoutEventName = 'onBindRequest' | 'onDestruct' | 'onViewShow';
    class abslayout implements webix.ui.baseview {
      addView(
        view: webix.ui.baseview | (webix.ui.baseviewConfig & { [key: string]: any }),
        index?: number
      ): string | number;
      adjust(): void;
      attachEvent(type: abslayoutEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      index(obj: webix.ui.baseview): number;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      reconstruct(): void;
      removeView(id: string | number | webix.ui.baseview): void;
      resize(): void;
      resizeChildren(): void;
      show(force?: boolean, animation?: boolean): void;
      showBatch(name: string, mode?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: abslayoutConfig;
      name: string;
    }
    interface accordionConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      collapsed?: boolean;
      cols?: any[];
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      isolate?: boolean;
      margin?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      multi?: boolean | string;
      on?: EventHash;
      padding?: number | WebixPaddingConfig;
      paddingX?: number;
      paddingY?: number;
      panelClass?: string;
      responsive?: string;
      rows?: any[];
      type?: string;
      visibleBatch?: string;
      width?: number;
    }
    type accordionEventName =
      | 'onAfterCollapse'
      | 'onAfterExpand'
      | 'onBindRequest'
      | 'onDestruct'
      | 'onViewShow';
    class accordion implements webix.ui.baseview {
      addView(
        view: webix.ui.baseview | (webix.ui.baseviewConfig & { [key: string]: any }),
        index?: number
      ): string | number;
      adjust(): void;
      attachEvent(type: accordionEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      index(obj: webix.ui.baseview): number;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      reconstruct(): void;
      removeView(id: string | number | webix.ui.baseview): void;
      resize(): void;
      resizeChildren(): void;
      restore(state: obj, factory?: WebixCallback): void;
      serialize(serializer?: WebixCallback): obj;
      show(force?: boolean, animation?: boolean): void;
      showBatch(name: string, mode?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: accordionConfig;
      name: string;
    }
    interface accordionitemConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      body?: string | WebixTemplate | (webix.ui.baseviewConfig & { [key: string]: any });
      borderless?: boolean;
      collapsed?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      header?: boolean | string | WebixCallback;
      headerAlt?: string | WebixCallback;
      headerAltHeight?: number;
      headerHeight?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      on?: EventHash;
      onClick?: EventHash;
      onContext?: EventHash;
      onDblClick?: EventHash;
      onMouseMove?: EventHash;
      width?: number;
    }
    type accordionitemEventName =
      | 'onAfterContextMenu'
      | 'onAfterScroll'
      | 'onBeforeContextMenu'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onItemDblClick'
      | 'onItemSingleClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onMouseMove'
      | 'onMouseMoving'
      | 'onMouseOut'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class accordionitem implements webix.ui.baseview {
      adjust(): void;
      attachEvent(
        type: accordionitemEventName,
        functor: WebixCallback,
        id?: string
      ): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      collapse(): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      expand(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: accordionitemConfig;
      name: string;
      on_click: EventHash;
      on_context: EventHash;
      on_dblclick: EventHash;
      on_mouse_move: EventHash;
    }
    interface alignConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      body?: webix.ui.baseviewConfig & { [key: string]: any };
      borderless?: boolean;
      bottom?: number;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      left?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      right?: number;
      top?: number;
      width?: number;
    }
    type alignEventName =
      | 'onAfterScroll'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class align implements webix.ui.baseview {
      adjust(): void;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      disable(): void;
      enable(): void;
      getBody(): webix.ui.baseview;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: alignConfig;
      name: string;
    }
    interface barcodeConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      ariaLabel?: string;
      borderless?: boolean;
      color?: string;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      paddingX?: number;
      paddingY?: number;
      textHeight?: number;
      type?: string;
      value?: string;
      width?: number;
    }
    type barcodeEventName =
      | 'onAfterScroll'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class barcode implements webix.ui.baseview {
      adjust(): void;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      render(): void;
      resize(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: barcodeConfig;
      name: string;
      types: any[];
    }
    interface bulletConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      bands?: any[];
      barWidth?: number;
      borderless?: boolean;
      color?: string | WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      flowTime?: number;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      label?: string;
      labelHeight?: number;
      labelWidth?: number;
      layout?: string;
      marker?: number | boolean;
      markerColor?: string;
      maxHeight?: number;
      maxRange?: number;
      maxWidth?: number;
      minBarHeight?: number;
      minHeight?: number;
      minRange?: number;
      minWidth?: number;
      origin?: number;
      placeholder?: any;
      scale?: WebixBulletScaleConfig | boolean;
      smoothFlow?: boolean;
      stroke?: number;
      tickSize?: number;
      value?: number;
      width?: number;
    }
    type bulletEventName =
      | 'onAfterScroll'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class bullet implements webix.ui.baseview {
      adjust(): void;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(bullet_value: number): void;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      resize(): void;
      setValue(new_value: number): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: bulletConfig;
      name: string;
    }
    interface buttonConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      autowidth?: boolean;
      badge?: number | string;
      borderless?: boolean;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      icon?: string;
      id?: string | number;
      image?: string;
      inputHeight?: number;
      inputWidth?: number;
      keyPressTimeout?: number;
      label?: string;
      labelPosition?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: EventHash;
      placeholder?: string;
      popup?: string;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: string;
      value?: string | number;
      width?: number;
    }
    type buttonEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class button implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: buttonEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setValue(value: string, config?: any): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $compareValue: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $prepareValue: WebixCallback;
      $renderInput(config: webix.ui.buttonConfig & { [key: string]: any }): HTMLElement;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: buttonConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface calendarConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      blockDates?: WebixCallback;
      blockTime?: WebixCallback;
      borderless?: boolean;
      calendarHeader?: string;
      calendarTime?: string;
      calendarWeekHeader?: string;
      cellHeight?: number | string;
      container?: string | HTMLElement;
      css?: string | obj;
      date?: Date | string;
      dayTemplate?: WebixCallback;
      disabled?: boolean;
      events?: WebixCallback;
      gravity?: number;
      headerHeight?: number;
      height?: number;
      hidden?: boolean;
      icons?: boolean | WebixCalendarIconConfig;
      id?: string | number;
      keyPressTimeout?: number;
      maxDate?: Date | string;
      maxHeight?: number;
      maxTime?: string;
      maxWidth?: number;
      minDate?: Date | string;
      minHeight?: number;
      minTime?: string;
      minWidth?: number;
      minuteStep?: number;
      monthHeader?: boolean;
      monthSelect?: boolean;
      mouseEventDelay?: number;
      multiselect?: boolean | string;
      navigation?: boolean;
      on?: EventHash;
      onClick?: EventHash;
      onContext?: EventHash;
      onDblClick?: EventHash;
      onMouseMove?: EventHash;
      skipEmptyWeeks?: boolean;
      timeIcon?: string;
      timepicker?: boolean;
      timepickerHeight?: number;
      type?: string;
      weekHeader?: boolean;
      weekNumber?: boolean;
      width?: number;
    }
    type calendarEventName =
      | 'onAfterContextMenu'
      | 'onAfterDateSelect'
      | 'onAfterMonthChange'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onAfterZoom'
      | 'onBeforeContextMenu'
      | 'onBeforeDateSelect'
      | 'onBeforeMonthChange'
      | 'onBeforeRender'
      | 'onBeforeZoom'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDateClear'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemSingleClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onMouseMove'
      | 'onMouseMoving'
      | 'onMouseOut'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTodaySet'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class calendar implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: calendarEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getSelectedDate(first?: boolean): Date;
      getTopParentView(): webix.ui.baseview;
      getValue(format?: string): Date | string;
      getVisibleDate(): Date;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      locate(e: Event): string | number;
      mapEvent(map: WebixEventMap): void;
      moveSelection(direction: string): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id: string | number, data: obj, type: string): void;
      resize(): void;
      selectDate(date: string | Date, mode?: boolean, multiple?: boolean): void;
      setValue(date: string | Date, config?: any): void;
      show(force?: boolean, animation?: boolean): void;
      showCalendar(date: string | Date): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: calendarConfig;
      name: string;
      on_click: EventHash;
      on_context: EventHash;
      on_dblclick: EventHash;
      on_mouse_move: EventHash;
    }
    interface carouselConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      cols?: any[];
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      navigation?: WebixNavigationConfig;
      on?: EventHash;
      rows?: any[];
      scrollSpeed?: string;
      type?: string;
      width?: number;
    }
    type carouselEventName =
      | 'onAfterScroll'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onShow'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class carousel implements webix.ui.baseview {
      addView(
        view: webix.ui.baseview | (webix.ui.baseviewConfig & { [key: string]: any }),
        index?: number
      ): string | number;
      adjust(): void;
      adjustScroll(): void;
      attachEvent(type: carouselEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getActiveId(): string;
      getActiveIndex(): number;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getLayout(): webix.ui.layout;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      removeView(view: string | number | webix.ui.baseview): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      setActive(id: string): void;
      setActiveIndex(index: number): void;
      show(force?: boolean, animation?: boolean): void;
      showNext(): void;
      showPrev(): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: carouselConfig;
      name: string;
    }
    interface chartConfig {
      view?: string;
      alpha?: number;
      animate?: boolean | WebixAnimate;
      animateDuration?: number;
      ariaLabel?: string;
      barOffset?: number;
      barWidth?: number;
      border?: boolean;
      borderColor?: string;
      borderWidth?: number;
      borderless?: boolean;
      cant?: number;
      cellWidth?: number;
      color?: string | WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datathrottle?: number;
      datatype?: string;
      disableLines?: boolean;
      disabled?: boolean;
      donutInnerText?: string | WebixCallback;
      dynamic?: boolean;
      eventRadius?: number;
      fill?: string;
      fixOverflow?: boolean;
      gradient?: boolean | string | WebixCallback;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      item?: WebixChartItemConfig;
      keyPressTimeout?: number;
      label?: string | WebixCallback;
      labelOffset?: number;
      legend?: WebixChartLegendConfig;
      line?: WebixChartLineConfig;
      lineColor?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      multilevel?: boolean;
      offset?: boolean;
      on?: EventHash;
      onClick?: EventHash;
      onContext?: EventHash;
      onDblClick?: EventHash;
      onMouseMove?: EventHash;
      origin?: number | string;
      padding?: string | WebixPaddingConfig;
      pieHeight?: number;
      pieInnerText?: string | WebixCallback;
      preset?: WebixChartPreset;
      radius?: number;
      ready?: WebixCallback;
      removeMissed?: boolean;
      save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
      scale?: string;
      scheme?: WebixDataScheme;
      series?: WebixChartSeriesConfig;
      shadow?: boolean;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: string;
      url?: string | WebixCallback | WebixProxy;
      value?: string | WebixTemplate;
      width?: number;
      x?: number;
      xAxis?: WebixChartXAxisConfig;
      xValue?: string;
      y?: number;
      yAxis?: WebixChartYAxisConfig;
      yValue?: string;
    }
    type chartEventName =
      | 'onAfterAdd'
      | 'onAfterContextMenu'
      | 'onAfterDelete'
      | 'onAfterLoad'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onAfterSort'
      | 'onBeforeAdd'
      | 'onBeforeContextMenu'
      | 'onBeforeDelete'
      | 'onBeforeLoad'
      | 'onBeforeRender'
      | 'onBeforeSort'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDataRequest'
      | 'onDataUpdate'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onItemDblClick'
      | 'onItemSingleClick'
      | 'onKeyPress'
      | 'onLegendClick'
      | 'onLoadError'
      | 'onLongTouch'
      | 'onMouseMove'
      | 'onMouseMoving'
      | 'onMouseOut'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTabFocus'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class chart implements webix.ui.baseview {
      add(obj: obj, index?: number): string | number;
      addSeries(obj: webix.ui.chartConfig & { [key: string]: any }): void;
      adjust(): void;
      attachEvent(type: chartEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(soft?: boolean): void;
      clearCanvas(): void;
      count(): number;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      exists(id: number | string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value?: string,
        preserve?: boolean
      ): void;
      find(criterion: WebixCallback, first?: boolean): any;
      getChildViews(): webix.ui.baseview[];
      getFirstId(): number | string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number | string): string | number;
      getIndexById(id: number | string): number;
      getItem(id: number | string): obj;
      getLastId(): number | string;
      getNextId(id: number | string, step?: number): string | number;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getPrevId(id: number | string, step?: number): string | number;
      getTopParentView(): webix.ui.baseview;
      group(config: WebixGroupConfig, target?: string | number): void;
      hasEvent(name: string): boolean;
      hide(): void;
      hideSeries(index: number): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
        clear?: boolean
      ): Promise<any>;
      locate(e: Event): string | number;
      mapEvent(map: WebixEventMap): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: number | string): void;
      remove(id: string | number | any[]): void;
      removeAllSeries(): void;
      render(id: string | number, data: obj, type: string): void;
      resize(): void;
      serialize(all?: boolean): any[];
      show(force?: boolean, animation?: boolean): void;
      showSeries(index: number): void;
      sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      ungroup(mode: boolean): void;
      updateItem(id: number | string, data: obj): void;
      waitSave(handler: WebixCallback): Promise<any>;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      colormap: WebixChartColormap;
      config: chartConfig;
      data: DataStore;
      name: string;
      on_click: EventHash;
      on_context: EventHash;
      on_dblclick: EventHash;
      on_mouse_move: EventHash;
      presets: WebixChartPresets;
      waitData: Promise<any>;
    }
    interface chatConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      calls?: boolean | WebixChatCallsConfig;
      chatId?: number;
      chatType?: string;
      compact?: boolean;
      compactWidth?: number;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      emojis?: boolean;
      files?: boolean;
      gravity?: number;
      grouping?: boolean;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      locale?: WebixLocaleConfig;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mode?: string;
      on?: EventHash;
      override?: any[];
      reactions?: boolean;
      search?: string;
      token?: string;
      url?: string;
      userId?: number;
      voiceMessages?: boolean;
      width?: number;
    }
    type chatEventName =
      | 'onAfterScroll'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onInit'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class chat implements webix.ui.baseview {
      adjust(): void;
      app(app: WebixJetAppWrapper): void;
      attachEvent(type: chatEventName, functor: WebixCallback, id?: string): string | number;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getService(service: string): obj;
      getState(): obj;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unblockEvent(): void;

      bind(target: any, rule?: WebixCallback, format?: string): void;
      unbind(): void;
      $app: WebixJetAppWrapper;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: chatConfig;
      name: string;
    }
    interface checkboxConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      attributes?: obj;
      borderless?: boolean;
      bottomLabel?: string;
      bottomPadding?: number;
      checkValue?: string;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      customCheckbox?: boolean;
      disabled?: boolean;
      format?: string | WebixFormatConfig;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string | number;
      inputAlign?: string;
      inputHeight?: number;
      inputWidth?: number;
      invalidMessage?: string;
      keyPressTimeout?: number;
      label?: string;
      labelAlign?: string;
      labelPosition?: string;
      labelRight?: string;
      labelWidth?: number | string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: EventHash;
      popup?: string;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      suggest?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      uncheckValue?: string;
      validate?: WebixCallback;
      validateEvent?: string;
      value?: string | number | boolean;
      width?: number;
    }
    type checkboxEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class checkbox implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: checkboxEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): number;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setBottomText(text: string): void;
      setValue(value: number | boolean, config?: any): void;
      setValueHere(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      toggle(): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $prepareValue: WebixCallback;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(
        obj: webix.ui.textConfig & { [key: string]: any },
        html: string,
        id: string | number
      ): string;
      $renderLabel(
        config: webix.ui.textConfig & { [key: string]: any },
        id: string | number
      ): string;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: checkboxConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface checksuggestConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autofit?: boolean;
      autofocus?: boolean;
      body?: string | (webix.ui.baseviewConfig & { [key: string]: any });
      borderless?: boolean;
      button?: boolean;
      buttonText?: string;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[];
      disabled?: boolean;
      escHide?: boolean;
      filter?: WebixCallback;
      fitMaster?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      input?: HTMLElement | string;
      keyPressTimeout?: number;
      left?: number;
      master?: webix.ui.baseview;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      modal?: boolean;
      on?: EventHash;
      padding?: number;
      point?: boolean;
      position?: string | WebixCallback;
      relative?: string;
      resize?: boolean;
      selectAll?: boolean;
      separator?: string;
      template?: string | WebixTemplate;
      textValue?: string;
      toFront?: boolean;
      top?: number;
      type?: string;
      url?: string;
      value?: string | number;
      width?: number;
      zIndex?: number;
    }
    type checksuggestEventName =
      | 'onAfterScroll'
      | 'onBeforeShow'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onHide'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onShow'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onValueSuggest'
      | 'onViewMove'
      | 'onViewMoveEnd'
      | 'onViewResize'
      | 'onViewShow';
    class checksuggest implements webix.ui.baseview {
      adjust(): void;
      attachEvent(
        type: checksuggestEventName,
        functor: WebixCallback,
        id?: string
      ): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getBody(): webix.ui.baseview;
      getButton(): webix.ui.baseview;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getItemId(text: string): string | number;
      getItemText(id: string | number): string;
      getList(): webix.ui.baseview;
      getMasterValue(): any;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getSuggestion(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): string | number;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      linkInput(input: HTMLElement): void;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      resizeChildren(): void;
      setMasterValue(value: any, refresh: boolean): void;
      setPosition(x: number, y: number): void;
      setValue(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $dragCreate(source: HTMLElement, event: Event, pointer: string): HTMLElement;
      $dragDestroy: WebixCallback;
      $dragPos: WebixCallback;
      $enterKey: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: checksuggestConfig;
      name: string;
    }
    interface colorboardConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      cols?: number;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      grayScale?: boolean;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxLightness?: number;
      maxWidth?: number;
      minHeight?: number;
      minLightness?: number;
      minWidth?: number;
      navigation?: boolean;
      on?: EventHash;
      palette?: any[];
      rows?: number;
      template?: WebixCallback;
      type?: string;
      value?: string;
      width?: number;
    }
    type colorboardEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSelect'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class colorboard implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: colorboardEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      moveSelection(direction: string): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id: string | number, data: obj, type: string): void;
      resize(): void;
      setValue(value: string, config?: any): string;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $prepareValue: WebixCallback;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: colorboardConfig;
      name: string;
    }
    interface colorpickerConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      attributes?: obj;
      autowidth?: boolean;
      borderless?: boolean;
      bottomLabel?: string;
      bottomPadding?: number;
      clear?: boolean | string | number;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      editable?: boolean;
      format?: string;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      icons?: boolean;
      id?: string | number;
      inputAlign?: string;
      inputHeight?: number;
      inputWidth?: number;
      invalid?: boolean;
      invalidMessage?: string;
      keyPressTimeout?: number;
      label?: string;
      labelAlign?: string;
      labelPosition?: string;
      labelWidth?: number | string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: EventHash;
      placeholder?: string;
      point?: boolean;
      popup?: string;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      stringResult?: boolean;
      suggest?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      validate?: WebixCallback;
      validateEvent?: string;
      value?: string | number;
      width?: number;
    }
    type colorpickerEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class colorpicker implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: colorpickerEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getPopup(): webix.ui.baseview;
      getText(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setBottomText(text: string): void;
      setValue(value: string, config?: any): void;
      setValueHere(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $onBlur: WebixCallback;
      $prepareValue: WebixCallback;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(
        obj: webix.ui.textConfig & { [key: string]: any },
        html: string,
        id: string | number
      ): string;
      $renderLabel(
        config: webix.ui.textConfig & { [key: string]: any },
        id: string | number
      ): string;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: colorpickerConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface colorselectConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      button?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      value?: string;
      width?: number;
    }
    type colorselectEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onColorSelect'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTabFocus'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class colorselect implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: colorselectEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      moveSelection(direction: string): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: number | string): void;
      render(): void;
      resize(): void;
      setValue(value: string, config?: any): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $prepareValue: WebixCallback;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: colorselectConfig;
      name: string;
    }
    interface commentsConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      currentUser?: number;
      data?: string | any[] | obj;
      datatype?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      highlight?: boolean | string;
      id?: string | number;
      keepButtonVisible?: boolean;
      listItem?: WebixCommentsItemConfig;
      maxHeight?: number;
      maxInputHeight?: number;
      maxWidth?: number;
      mentions?: boolean;
      minHeight?: number;
      minInputHeight?: any;
      minWidth?: number;
      mode?: string;
      moreButton?: string | WebixCallback;
      on?: EventHash;
      padding?: number | WebixPaddingConfig;
      paddingX?: number;
      paddingY?: number;
      readonly?: boolean;
      scheme?: WebixCommentsDataScheme;
      sendAction?: string;
      type?: string;
      url?: string | WebixCallback | WebixProxy;
      users?: any[] | string | DataCollection;
      width?: number;
    }
    type commentsEventName =
      | 'onAfterAdd'
      | 'onAfterDelete'
      | 'onAfterEditStart'
      | 'onAfterLoad'
      | 'onBeforeAdd'
      | 'onBeforeDelete'
      | 'onBeforeEditStart'
      | 'onBeforeLoad'
      | 'onBeforeMenuAction'
      | 'onBindRequest'
      | 'onDestruct'
      | 'onLoadError'
      | 'onTransitionEnd'
      | 'onUserMentioned'
      | 'onViewShow';
    class comments implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: commentsEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      edit(id: number | string): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getMenu(): webix.ui.contextmenu;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getUsers(): DataCollection;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      mapEvent(map: WebixEventMap): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      setCurrentUser(id: number | string): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $configForm: WebixCallback;
      $configList: WebixCallback;
      $exportView(): webix.ui.baseview;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $onLoad: WebixCallback;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: commentsConfig;
      name: string;
    }
    interface comboConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      attributes?: obj;
      borderless?: boolean;
      bottomLabel?: string;
      bottomPadding?: number;
      clear?: boolean | string | number;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      format?: string | WebixFormatConfig;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string | number;
      inputAlign?: string;
      inputHeight?: number;
      inputWidth?: number;
      invalid?: boolean;
      invalidMessage?: string;
      keyPressTimeout?: number;
      label?: string;
      labelAlign?: string;
      labelPosition?: string;
      labelWidth?: number | string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      newValues?: boolean;
      on?: EventHash;
      options?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      placeholder?: string;
      popup?: string;
      popupWidth?: number;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      suggest?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      validate?: WebixCallback;
      validateEvent?: string;
      value?: string;
      width?: number;
    }
    type comboEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class combo implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: comboEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getList(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getPopup(): webix.ui.baseview;
      getText(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setBottomText(text: string): void;
      setValue(value: string, config?: any): void;
      setValueHere(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $onBlur: WebixCallback;
      $prepareValue: WebixCallback;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(
        obj: webix.ui.textConfig & { [key: string]: any },
        html: string,
        id: string | number
      ): string;
      $renderLabel(
        config: webix.ui.textConfig & { [key: string]: any },
        id: string | number
      ): string;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: comboConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface contextConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autofit?: boolean;
      autofocus?: boolean;
      body?: string | (webix.ui.baseviewConfig & { [key: string]: any });
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      escHide?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      left?: number;
      master?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      modal?: boolean;
      on?: EventHash;
      padding?: number;
      point?: boolean;
      position?: string | WebixCallback;
      relative?: string;
      resize?: boolean;
      toFront?: boolean;
      top?: number;
      width?: number;
      zIndex?: number;
    }
    type contextEventName =
      | 'onAfterScroll'
      | 'onBeforeShow'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onHide'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onShow'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewMove'
      | 'onViewMoveEnd'
      | 'onViewResize'
      | 'onViewShow';
    class context implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: contextEventName, functor: WebixCallback, id?: string): string | number;
      attachTo(target: webix.ui.baseview | HTMLElement): void;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getBody(): webix.ui.baseview;
      getChildViews(): webix.ui.baseview[];
      getContext(): WebixContext;
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      resizeChildren(): void;
      setContext(context: WebixContext): void;
      setPosition(x: number, y: number): void;
      show(node?: HTMLElement, position?: WebixWindowPosConfig, point?: string): void;
      unbind(): void;
      unblockEvent(): void;
      show(force: boolean, animation: boolean): void;
      $dragCreate(source: HTMLElement, event: Event, pointer: string): HTMLElement;
      $dragDestroy: WebixCallback;
      $dragPos: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: contextConfig;
      name: string;
    }
    interface contextmenuConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autofit?: boolean;
      autofocus?: boolean;
      autoheight?: boolean;
      autowidth?: boolean;
      body?: string | (webix.ui.baseviewConfig & { [key: string]: any });
      borderless?: boolean;
      click?: string | WebixCallback;
      clipboard?: boolean | string;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datathrottle?: number;
      datatype?: string;
      delimiter?: WebixDelimiterConfig;
      disabled?: boolean;
      drag?: boolean | string;
      dragscroll?: boolean | string;
      escHide?: boolean;
      externalData?: WebixCallback;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      item?: WebixItemType | string;
      keyPressTimeout?: number;
      layout?: string;
      left?: number;
      master?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      modal?: boolean;
      mouseEventDelay?: number;
      multiselect?: string | boolean;
      navigation?: boolean;
      on?: EventHash;
      onClick?: EventHash;
      onContext?: EventHash;
      onDblClick?: EventHash;
      onMouseMove?: EventHash;
      openAction?: string;
      padding?: number;
      pager?: string | WebixPagerConfig;
      point?: boolean;
      position?: string | WebixCallback;
      prerender?: boolean;
      ready?: WebixCallback;
      relative?: string;
      removeMissed?: boolean;
      resize?: boolean;
      rules?: WebixValidationRules;
      save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
      scheme?: WebixDataScheme;
      scroll?: boolean | string;
      scrollSpeed?: string;
      select?: boolean | string;
      subMenuPos?: string;
      submenuConfig?: webix.ui.submenuConfig & { [key: string]: any };
      template?: string | WebixCallback;
      templateCopy?: WebixCallback;
      toFront?: boolean;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      top?: number;
      type?: WebixItemType | string;
      url?: string | WebixCallback | WebixProxy;
      width?: number;
      xCount?: number;
      yCount?: number;
      zIndex?: number;
    }
    type contextmenuEventName =
      | 'onAfterAdd'
      | 'onAfterContextMenu'
      | 'onAfterDelete'
      | 'onAfterDrop'
      | 'onAfterLoad'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onAfterSelect'
      | 'onAfterSort'
      | 'onBeforeAdd'
      | 'onBeforeContextMenu'
      | 'onBeforeDelete'
      | 'onBeforeDrag'
      | 'onBeforeDragIn'
      | 'onBeforeDrop'
      | 'onBeforeDropOut'
      | 'onBeforeLoad'
      | 'onBeforeRender'
      | 'onBeforeSelect'
      | 'onBeforeShow'
      | 'onBeforeSort'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDataRequest'
      | 'onDataUpdate'
      | 'onDestruct'
      | 'onDragOut'
      | 'onEnter'
      | 'onFocus'
      | 'onHide'
      | 'onItemClick'
      | 'onItemDblClick'
      | 'onItemRender'
      | 'onItemSingleClick'
      | 'onKeyPress'
      | 'onLoadError'
      | 'onLongTouch'
      | 'onMenuItemClick'
      | 'onMouseMove'
      | 'onMouseMoving'
      | 'onMouseOut'
      | 'onPaste'
      | 'onSelectChange'
      | 'onShow'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTabFocus'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onValidationError'
      | 'onValidationSuccess'
      | 'onViewMove'
      | 'onViewMoveEnd'
      | 'onViewResize'
      | 'onViewShow';
    class contextmenu implements webix.ui.baseview {
      add(obj: obj, index?: number): string | number;
      addCss(id: string | number, css: string, silent?: boolean): void;
      adjust(): void;
      attachEvent(type: contextmenuEventName, functor: WebixCallback, id?: string): string | number;
      attachTo(target: webix.ui.baseview | HTMLElement): void;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(soft?: boolean): void;
      clearCss(css: string, silent?: boolean): void;
      clearValidation(): void;
      copy(
        sid: string | number,
        tindex: number,
        tobj?: WebixDataMoveTarget,
        details?: WebixDataMoveOptions
      ): void;
      count(): number;
      customize(obj: WebixItemType): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      disableItem(id: string | number): void;
      enable(): void;
      enableItem(id: string | number): void;
      exists(id: number | string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value?: string,
        preserve?: boolean
      ): void;
      find(criterion: WebixCallback, first?: boolean): any;
      getBody(): webix.ui.baseview;
      getChildViews(): webix.ui.baseview[];
      getContext(): WebixContext;
      getFirstId(): number | string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number | string): string | number;
      getIndexById(id: number | string): number;
      getItem(id: number | string): obj;
      getItemNode(id: string | number): HTMLElement;
      getLastId(): number | string;
      getMenu(id: string | number): webix.ui.menu | webix.ui.submenu;
      getMenuItem(id: string | number): obj;
      getNextId(id: number | string, step?: number): string | number;
      getNode(): HTMLElement;
      getPage(): number;
      getPager(): webix.ui.pager;
      getParentView(): webix.ui.baseview;
      getPrevId(id: number | string, step?: number): string | number;
      getScrollState(): WebixScrollState;
      getSelectedId(as_array?: boolean): any;
      getSelectedItem(as_array?: boolean): obj;
      getSubMenu(id: string | number): webix.ui.menu | webix.ui.submenu;
      getTopMenu(): webix.ui.menu | webix.ui.submenu;
      getTopParentView(): webix.ui.baseview;
      getVisibleCount(): number;
      hasCss(id: string | number, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      hideMenuItem(id: string | number): void;
      isEnabled(): boolean;
      isItemEnabled(): boolean;
      isSelected(id: string | number): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
        clear?: boolean
      ): Promise<any>;
      locate(e: Event): string | number;
      mapEvent(map: WebixEventMap): void;
      moveBottom(id: string | number): void;
      moveDown(id: string | number, step: number): void;
      moveSelection(direction: string): void;
      moveTop(id: string | number): void;
      moveUp(id: string | number, step: number): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: number | string): void;
      remove(id: string | number | any[]): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      render(id: string | number, data: obj, type: WebixRenderType): void;
      resize(): void;
      resizeChildren(): void;
      scrollTo(x: number, y: number): void;
      select(id: string | any[], preserve?: boolean): void;
      selectAll(from?: string, to?: string): void;
      serialize(all?: boolean): any[];
      setContext(context: WebixContext): void;
      setPage(page: number): void;
      setPosition(x: number, y: number): void;
      show(node?: HTMLElement, position?: WebixWindowPosConfig, point?: string): void;
      showItem(id: string | number): void;
      showMenuItem(id: string | number): void;
      sizeToContent(): void;
      sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      unselect(id?: string): void;
      unselectAll(): void;
      updateItem(id: number | string, data: obj): void;
      validate(id?: string): boolean;
      waitSave(handler: WebixCallback): Promise<any>;
      show(force: boolean, animation: boolean): void;
      $customPrint: WebixCallback;
      $drag(source: HTMLElement, ev: Event, pointer: string): string;
      $dragCreate(source: HTMLElement, event: Event, pointer: string): HTMLElement;
      $dragDestroy: WebixCallback;
      $dragHTML: WebixCallback;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragMark(context: WebixDnDContext, ev: Event): boolean;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event
      ): void;
      $dragPos: WebixCallback;
      $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;
      $dropAllow: WebixCallback;
      $dropHTML: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: contextmenuConfig;
      data: DataStore;
      name: string;
      on_click: EventHash;
      on_context: EventHash;
      on_dblclick: EventHash;
      on_mouse_move: EventHash;
      type: WebixItemType;
      types: WebixItemTypes;
      waitData: Promise<any>;
    }
    interface counterConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      attributes?: obj;
      borderless?: boolean;
      bottomLabel?: string;
      bottomPadding?: number;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      format?: string | WebixFormatConfig;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string | number;
      inputAlign?: string;
      inputHeight?: number;
      inputWidth?: number;
      invalidMessage?: string;
      keyPressTimeout?: number;
      label?: string;
      labelAlign?: string;
      labelPosition?: string;
      labelWidth?: number | string;
      max?: number;
      maxHeight?: number;
      maxWidth?: number;
      min?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: EventHash;
      popup?: string;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      step?: number;
      suggest?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      validate?: WebixCallback;
      validateEvent?: string;
      value?: string | number;
      width?: number;
    }
    type counterEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class counter implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: counterEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): number;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      next(step?: number): void;
      prev(step?: number): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setBottomText(text: string): void;
      setValue(value: number, config?: any): void;
      setValueHere(value: string | number): void;
      shift(value?: number): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $prepareValue: WebixCallback;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(
        obj: webix.ui.textConfig & { [key: string]: any },
        html: string,
        id: string | number
      ): string;
      $renderLabel(
        config: webix.ui.textConfig & { [key: string]: any },
        id: string | number
      ): string;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: counterConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface dashboardConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autoplace?: boolean;
      borderless?: boolean;
      cellHeight?: number;
      cellWidth?: number;
      cells?: any[];
      cols?: any[];
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      factory?: WebixCallback;
      gravity?: number;
      gridColumns?: number;
      gridRows?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      margin?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      padding?: number;
      paddingX?: number;
      paddingY?: number;
      responsive?: string;
      rows?: any[];
      visibleBatch?: string;
      width?: number;
    }
    type dashboardEventName =
      | 'onAfterDrop'
      | 'onBeforeDrag'
      | 'onBeforeDragIn'
      | 'onBeforeDrop'
      | 'onBindRequest'
      | 'onChange'
      | 'onDestruct'
      | 'onDragOut'
      | 'onViewShow';
    class dashboard implements webix.ui.baseview {
      addView(
        view: webix.ui.baseview | (webix.ui.baseviewConfig & { [key: string]: any }),
        index?: number
      ): string | number;
      adjust(): void;
      attachEvent(type: dashboardEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      index(obj: webix.ui.baseview): number;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      moveView(id: string | number, pos: WebixGridlayoutPosConfig): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      reconstruct(): void;
      removeView(id: string | number | webix.ui.baseview): void;
      resize(): void;
      resizeChildren(): void;
      restore(state: obj, factory?: WebixCallback): void;
      serialize(serializer?: WebixCallback): any[];
      show(force?: boolean, animation?: boolean): void;
      showBatch(name: string, mode?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $dragCreate(source: HTMLElement, event: Event): HTMLElement;
      $dragDestroy(target: HTMLElement, html: HTMLElement, e: Event): void;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event
      ): void;
      $dragPos: WebixCallback;
      $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: dashboardConfig;
      name: string;
    }
    interface datalayoutConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      cols?: any[];
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datathrottle?: number;
      datatype?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      isolate?: boolean;
      margin?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      padding?: number | WebixPaddingConfig;
      paddingX?: number;
      paddingY?: number;
      ready?: WebixCallback;
      removeMissed?: boolean;
      responsive?: string;
      rows?: any[];
      save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
      scheme?: WebixDataScheme;
      type?: string;
      url?: string | WebixCallback | WebixProxy;
      visibleBatch?: string;
      width?: number;
    }
    type datalayoutEventName =
      | 'onAfterAdd'
      | 'onAfterDelete'
      | 'onAfterLoad'
      | 'onAfterSort'
      | 'onBeforeAdd'
      | 'onBeforeDelete'
      | 'onBeforeLoad'
      | 'onBeforeSort'
      | 'onBindRequest'
      | 'onDataRequest'
      | 'onDataUpdate'
      | 'onDestruct'
      | 'onLoadError'
      | 'onViewShow';
    class datalayout implements webix.ui.baseview {
      add(obj: obj, index?: number): string | number;
      addView(
        view: webix.ui.baseviewConfig & { [key: string]: any },
        index?: number
      ): string | number;
      adjust(): void;
      attachEvent(type: datalayoutEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(soft?: boolean): void;
      count(): number;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      exists(id: number | string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value?: string,
        preserve?: boolean
      ): void;
      find(criterion: WebixCallback, first?: boolean): any;
      getChildViews(): webix.ui.baseview[];
      getFirstId(): number | string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number | string): string | number;
      getIndexById(id: number | string): number;
      getItem(id: number | string): obj;
      getLastId(): number | string;
      getNextId(id: number | string, step?: number): string | number;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getPrevId(id: number | string, step?: number): string | number;
      getTopParentView(): webix.ui.baseview;
      getValue(): any[];
      hasEvent(name: string): boolean;
      hide(): void;
      index(obj: webix.ui.baseview): number;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
        clear?: boolean
      ): Promise<any>;
      mapEvent(map: WebixEventMap): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      reconstruct(): void;
      refresh(id?: number | string): void;
      remove(id: string | number | any[]): void;
      removeView(id: string | number | webix.ui.baseview): void;
      render(id: string | number, obj: obj, mode: string): void;
      resize(): void;
      resizeChildren(): void;
      setValue(values: any[]): void;
      show(force?: boolean, animation?: boolean): void;
      showBatch(name: string, mode?: boolean): void;
      sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      updateItem(id: number | string, data: obj): void;
      waitSave(handler: WebixCallback): Promise<any>;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: datalayoutConfig;
      data: DataStore;
      name: string;
      waitData: Promise<any>;
    }
    interface datasuggestConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autofit?: boolean;
      autofocus?: boolean;
      body?: string | (webix.ui.baseviewConfig & { [key: string]: any });
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[];
      disabled?: boolean;
      escHide?: boolean;
      filter?: WebixCallback;
      fitMaster?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      input?: HTMLElement | string;
      keyPressTimeout?: number;
      left?: number;
      master?: webix.ui.baseview;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      modal?: boolean;
      on?: EventHash;
      padding?: number;
      point?: boolean;
      position?: string | WebixCallback;
      relative?: string;
      resize?: boolean;
      template?: string | WebixTemplate;
      textValue?: string;
      toFront?: boolean;
      top?: number;
      type?: string;
      url?: string;
      width?: number;
      zIndex?: number;
    }
    type datasuggestEventName =
      | 'onAfterScroll'
      | 'onBeforeShow'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onHide'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onShow'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onValueSuggest'
      | 'onViewMove'
      | 'onViewMoveEnd'
      | 'onViewResize'
      | 'onViewShow';
    class datasuggest implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: datasuggestEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getBody(): webix.ui.baseview;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getItemId(text: string): string | number;
      getItemText(id: string | number): string;
      getList(): webix.ui.baseview;
      getMasterValue(): any;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getSuggestion(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): string | number;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      linkInput(input: HTMLElement): void;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      resizeChildren(): void;
      setMasterValue(value: any, refresh: boolean): void;
      setPosition(x: number, y: number): void;
      setValue(value: string | number): void;
      show(node: HTMLElement, position?: WebixWindowPosConfig, point?: string): void;
      unbind(): void;
      unblockEvent(): void;
      show(force: boolean, animation: boolean): void;
      $dragCreate(source: HTMLElement, event: Event, pointer: string): HTMLElement;
      $dragDestroy: WebixCallback;
      $dragPos: WebixCallback;
      $enterKey: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: datasuggestConfig;
      name: string;
    }
    interface datatableConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      areaselect?: boolean;
      autoConfig?: boolean;
      autoheight?: boolean;
      autowidth?: boolean;
      blockselect?: boolean | string;
      borderless?: boolean;
      checkboxRefresh?: boolean;
      clipboard?: boolean | string;
      columnWidth?: number;
      columns?: WebixDatatableColumn[];
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      dataFeed?: string | WebixProxy | WebixCallback;
      datafetch?: number;
      datathrottle?: number;
      datatype?: string;
      delimiter?: WebixDelimiterConfig;
      disabled?: boolean;
      drag?: boolean | string;
      dragColumn?: boolean | string;
      dragscroll?: boolean | string;
      editMath?: boolean;
      editValue?: string;
      editable?: boolean;
      editaction?: string;
      externalData?: WebixCallback;
      filterMode?: WebixTreeFilterMode;
      fixedRowHeight?: boolean;
      footer?: boolean;
      form?: string;
      gravity?: number;
      header?: boolean;
      headerRowHeight?: number;
      headermenu?: boolean | WebixHeaderMenuConfig;
      height?: number;
      hidden?: boolean;
      hover?: string;
      id?: string | number;
      keyPressTimeout?: number;
      leftSplit?: number;
      liveValidation?: boolean;
      loadahead?: number;
      map?: WebixDataMap;
      math?: boolean;
      maxColumnWidth?: number;
      maxHeight?: number;
      maxRowHeight?: number;
      maxWidth?: number;
      minColumnWidth?: number;
      minHeight?: number;
      minRowHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      multiselect?: boolean;
      navigation?: boolean;
      on?: EventHash;
      onClick?: EventHash;
      onContext?: EventHash;
      onDblClick?: EventHash;
      onMouseMove?: EventHash;
      pager?: string | WebixPagerConfig;
      prerender?: boolean;
      ready?: WebixCallback;
      removeMissed?: boolean;
      resizeColumn?: boolean | WebixResizeRowColConfig;
      resizeRow?: boolean | WebixResizeRowColConfig;
      rightSplit?: number;
      rowHeight?: number;
      rowLineHeight?: number;
      rules?: WebixValidationRules;
      save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
      scheme?: WebixDataScheme;
      scroll?: boolean | string;
      scrollAlignY?: boolean;
      scrollX?: boolean;
      scrollY?: boolean;
      select?: boolean | string;
      sort?: boolean | string;
      spans?: any[];
      subRowHeight?: string;
      subrow?: string | WebixTemplate;
      subview?: webix.ui.baseview | WebixCallback;
      templateCopy?: WebixCallback;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      topSplit?: number;
      type?: WebixDatatableType;
      undo?: boolean;
      undoLimit?: number;
      url?: string | WebixCallback | WebixProxy;
      width?: number;
      yCount?: number;
    }
    type datatableEventName =
      | 'onAfterAdd'
      | 'onAfterAreaAdd'
      | 'onAfterAreaRemove'
      | 'onAfterBlockSelect'
      | 'onAfterColumnDrop'
      | 'onAfterColumnDropOrder'
      | 'onAfterColumnHide'
      | 'onAfterColumnShow'
      | 'onAfterContextMenu'
      | 'onAfterDelete'
      | 'onAfterDrop'
      | 'onAfterEditStart'
      | 'onAfterEditStop'
      | 'onAfterFilter'
      | 'onAfterLoad'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onAfterSelect'
      | 'onAfterSort'
      | 'onAfterUnSelect'
      | 'onAreaDrag'
      | 'onBeforeAdd'
      | 'onBeforeAreaAdd'
      | 'onBeforeAreaRemove'
      | 'onBeforeBlockSelect'
      | 'onBeforeColumnDrag'
      | 'onBeforeColumnDrop'
      | 'onBeforeColumnDropOrder'
      | 'onBeforeColumnHide'
      | 'onBeforeColumnShow'
      | 'onBeforeContextMenu'
      | 'onBeforeDelete'
      | 'onBeforeDrag'
      | 'onBeforeDragIn'
      | 'onBeforeDrop'
      | 'onBeforeDropOut'
      | 'onBeforeEditStart'
      | 'onBeforeEditStop'
      | 'onBeforeFilter'
      | 'onBeforeLoad'
      | 'onBeforeRender'
      | 'onBeforeSelect'
      | 'onBeforeSort'
      | 'onBeforeUnSelect'
      | 'onBindRequest'
      | 'onBlur'
      | 'onCheck'
      | 'onCollectValues'
      | 'onColumnGroupCollapse'
      | 'onColumnResize'
      | 'onDataRequest'
      | 'onDataUpdate'
      | 'onDestruct'
      | 'onDragOut'
      | 'onEditorChange'
      | 'onEnter'
      | 'onFocus'
      | 'onHeaderClick'
      | 'onItemClick'
      | 'onItemDblClick'
      | 'onItemSingleClick'
      | 'onKeyPress'
      | 'onLiveEdit'
      | 'onLoadError'
      | 'onLongTouch'
      | 'onMouseMove'
      | 'onMouseMoving'
      | 'onMouseOut'
      | 'onPaste'
      | 'onResize'
      | 'onRowResize'
      | 'onScrollX'
      | 'onScrollY'
      | 'onSelectChange'
      | 'onStructureLoad'
      | 'onStructureUpdate'
      | 'onSubViewClose'
      | 'onSubViewCreate'
      | 'onSubViewOpen'
      | 'onSubViewRender'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onSyncScroll'
      | 'onTabFocus'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onValidationError'
      | 'onValidationSuccess'
      | 'onViewResize'
      | 'onViewShow';
    class datatable implements webix.ui.baseview {
      add(obj: obj, index?: number): string | number;
      addCellCss(id: string, name: string, css: string, silent: boolean): void;
      addCss(id: string | number, css: string, silent?: boolean): void;
      addRowCss(id: string, css: string): void;
      addSelectArea(
        start: WebixCellObject,
        end: WebixCellObject,
        preserve: boolean,
        area_name?: string,
        css?: string,
        handle?: boolean
      ): void;
      addSpan(
        id: number | string | WebixSpanConfig,
        column?: string,
        width?: number,
        height?: number,
        value?: string,
        css?: string
      ): void;
      adjust(): void;
      adjustColumn(id: string | number, mode?: string): void;
      adjustRowHeight(columnId?: string, silent?: boolean): void;
      attachEvent(type: datatableEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(soft?: boolean): void;
      clearCss(css: string, silent?: boolean): void;
      clearSelection(): void;
      clearValidation(): void;
      closeSub(id: string | number): void;
      collectValues(id: string | number, mode?: WebixDatatableCollectValuesConfig): any[];
      columnId(index: number): string | number;
      copy(
        sid: string | number,
        tindex: number,
        tobj?: WebixDataMoveTarget,
        details?: WebixDataMoveOptions
      ): void;
      count(): number;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      eachColumn(handler: WebixCallback, all?: boolean): void;
      eachRow(handler: WebixCallback, all?: boolean): void;
      edit(id: WebixCellObject): void;
      editCancel(): void;
      editCell(
        row: string | number,
        col: string | number,
        preserve?: boolean,
        show?: boolean
      ): void;
      editColumn(id: string): void;
      editNext(): void;
      editRow(id: string): void;
      editStop(): void;
      enable(): void;
      exists(id: number | string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value?: string,
        preserve?: boolean
      ): void;
      filterByAll(): void;
      find(criterion: WebixCallback, first?: boolean): any;
      focusEditor(id: WebixCellObject): void;
      freezeRow(id: number | string, state: boolean): void;
      getAllSelectAreas(): WebixDatatableSelectAreas;
      getChildViews(): webix.ui.baseview[];
      getColumnConfig(id: string): WebixDatatableColumn;
      getColumnIndex(id: string | number): number;
      getColumns(all?: boolean): WebixDatatableColumn[];
      getCss(rowId: string | number, columnId: string | number): string;
      getEditState(): WebixEditorObject;
      getEditor(
        row: string | number | WebixCellObject,
        column?: string | number
      ): WebixEditorObject;
      getEditorValue(): string;
      getFilter(columnID: string | number): any;
      getFirstId(): number | string;
      getFooterNode(columnId: string, rowIndex?: number): HTMLElement;
      getFormView(): webix.ui.baseview;
      getHeaderContent(id: string | number): any;
      getHeaderNode(columnId: string, rowIndex?: number): HTMLElement;
      getIdByIndex(index: number | string): string | number;
      getIndexById(id: number | string): number;
      getItem(id: number | string): obj;
      getItemNode(id: string | number): HTMLElement;
      getLastId(): number | string;
      getNextId(id: number | string, step?: number): string | number;
      getNode(): HTMLElement;
      getPage(): number;
      getPager(): webix.ui.pager;
      getParentView(): webix.ui.baseview;
      getPrevId(id: number | string, step?: number): string | number;
      getScrollState(): WebixScrollState;
      getSelectArea(area_name?: string): WebixDatatableAreaSelection;
      getSelectedId(asArray?: boolean, asString?: boolean): any;
      getSelectedItem(as_array?: boolean): obj;
      getSpan(): any[];
      getSpanNode(id: WebixCellObject): HTMLElement;
      getState(): obj;
      getSubView(id: string | number): webix.ui.baseview;
      getText(rowid: string | number, colid: string | number): string;
      getTopParentView(): webix.ui.baseview;
      getVisibleCount(): number;
      group(config: WebixGroupConfig, target?: string | number): void;
      hasCss(id: string | number, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      hideColumn(
        id: string | number,
        options?: WebixDatatableHideColumnConfig,
        silent?: boolean,
        mode?: boolean
      ): void;
      hideOverlay(): void;
      ignoreUndo(functor: WebixCallback): void;
      isColumnVisible(id: string | number): boolean;
      isEnabled(): boolean;
      isSelected(id: string | number): void;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
        clear?: boolean
      ): Promise<any>;
      locate(node: HTMLElement | Event): WebixDatatableCellPos;
      mapCells(
        startrow: number,
        startcol: string,
        numrows: number,
        numcols: number,
        callback: WebixCallback,
        getOnly: boolean
      ): void;
      mapEvent(map: WebixEventMap): void;
      mapSelection(callback: WebixCallback): void;
      markSorting(column_id?: string, direction?: string, preserve?: boolean): void;
      move(
        sid: string,
        tindex: number,
        tobj?: WebixDataMoveTarget,
        details?: WebixDataMoveOptions
      ): string;
      moveBottom(id: string | number): void;
      moveColumn(id: string, index: number): void;
      moveDown(id: string | number, step: number): void;
      moveSelection(direction: string): void;
      moveTop(id: string | number): void;
      moveUp(id: string | number, step: number): void;
      openSub(id: string | number): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: number | string): void;
      refreshColumns(config?: any[]): void;
      refreshFilter(id: string | number): void;
      refreshSelectArea(): void;
      registerFilter(
        object: HTMLElement | webix.ui.baseview,
        config: WebixDatatableFilterConfig,
        controller: WebixDatatableFilterController
      ): void;
      remove(id: string | number | any[]): void;
      removeCellCss(id: string, name: string, css_name: string, silent: boolean): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      removeRowCss(id: string, css_name: string): void;
      removeSelectArea(area_name: string): void;
      removeSpan(id: string | number, column: string): void;
      removeUndo(id: string): void;
      render(id: string | number, data: obj, operation: string): void;
      resize(): void;
      resizeSubView(id: string | number): void;
      scrollTo(x: number, y: number): void;
      select(row_id: string | number, preserve: boolean): void;
      selectAll(): void;
      selectRange(row_id: string | number, end_row_id: string | number, preserve?: boolean): void;
      serialize(all?: boolean): any[];
      setColumnWidth(id: string | number, width: number): void;
      setPage(page: number): void;
      setRowHeight(id: string | number, height: number): void;
      setState(state: obj): void;
      show(force?: boolean, animation?: boolean): void;
      showCell(row: string, column: string): void;
      showColumn(id: string | number, options?: WebixShowColumnConfig, silent?: boolean): void;
      showColumnBatch(batch: string | number, preserve: boolean): void;
      showItem(id: string | number): void;
      showItemByIndex(index: number): void;
      showOverlay(message: string): void;
      sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      undo(id: string): void;
      ungroup(mode: boolean): void;
      unselect(row_id: string | number): void;
      unselectAll(): void;
      updateItem(id: number | string, data: obj): void;
      validate(id?: string): boolean;
      validateEditor(id?: string | number): boolean;
      waitSave(handler: WebixCallback): Promise<any>;

      $customPrint: WebixCallback;
      $drag(source: HTMLElement, ev: Event, pointer: string): string;
      $dragHTML: WebixCallback;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragMark(context: WebixDnDContext, ev: Event): boolean;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event
      ): void;
      $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;
      $dropAllow: WebixCallback;
      $dropHTML: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $touch: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: datatableConfig;
      data: DataStore;
      headerContent: obj;
      name: string;
      on_click: EventHash;
      on_context: EventHash;
      on_dblclick: EventHash;
      on_mouse_move: EventHash;
      waitData: Promise<any>;
    }
    interface dataviewConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autoheight?: boolean;
      borderless?: boolean;
      click?: string | WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datafetch?: number;
      datathrottle?: number;
      datatype?: string;
      disabled?: boolean;
      drag?: boolean | string;
      dragscroll?: boolean | string;
      externalData?: WebixCallback;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      item?: WebixItemType | string;
      keyPressTimeout?: number;
      loadahead?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      multiselect?: string | boolean;
      navigation?: boolean;
      on?: EventHash;
      onClick?: EventHash;
      onContext?: EventHash;
      onDblClick?: EventHash;
      onMouseMove?: EventHash;
      pager?: string | WebixPagerConfig;
      prerender?: boolean;
      ready?: WebixCallback;
      removeMissed?: boolean;
      rules?: WebixValidationRules;
      save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
      scheme?: WebixDataScheme;
      scroll?: boolean | string;
      scrollSpeed?: string;
      select?: boolean | string;
      sizeToContent?: boolean;
      template?: string | WebixCallback;
      templateLoading?: string;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: WebixItemType | string;
      url?: string | WebixCallback | WebixProxy;
      width?: number;
      xCount?: number;
      yCount?: number;
    }
    type dataviewEventName =
      | 'onAfterAdd'
      | 'onAfterContextMenu'
      | 'onAfterDelete'
      | 'onAfterDrop'
      | 'onAfterLoad'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onAfterSelect'
      | 'onAfterSort'
      | 'onBeforeAdd'
      | 'onBeforeContextMenu'
      | 'onBeforeDelete'
      | 'onBeforeDrag'
      | 'onBeforeDragIn'
      | 'onBeforeDrop'
      | 'onBeforeDropOut'
      | 'onBeforeLoad'
      | 'onBeforeRender'
      | 'onBeforeSelect'
      | 'onBeforeSort'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDataRequest'
      | 'onDataUpdate'
      | 'onDestruct'
      | 'onDragOut'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onItemDblClick'
      | 'onItemRender'
      | 'onItemSingleClick'
      | 'onKeyPress'
      | 'onLoadError'
      | 'onLongTouch'
      | 'onMouseMove'
      | 'onMouseMoving'
      | 'onMouseOut'
      | 'onSelectChange'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTabFocus'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onValidationError'
      | 'onValidationSuccess'
      | 'onViewResize'
      | 'onViewShow';
    class dataview implements webix.ui.baseview {
      add(obj: obj, index?: number): string | number;
      addCss(id: string | number, css: string, silent?: boolean): void;
      adjust(): void;
      attachEvent(type: dataviewEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(soft?: boolean): void;
      clearCss(css: string, silent?: boolean): void;
      clearValidation(): void;
      copy(
        sid: string | number,
        tindex: number,
        tobj?: WebixDataMoveTarget,
        details?: WebixDataMoveOptions
      ): void;
      count(): number;
      customize(obj: WebixItemType): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      exists(id: number | string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value?: string,
        preserve?: boolean
      ): void;
      find(criterion: WebixCallback, first?: boolean): any;
      getChildViews(): webix.ui.baseview[];
      getFirstId(): number | string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number | string): string | number;
      getIndexById(id: number | string): number;
      getItem(id: number | string): obj;
      getItemNode(id: string | number): HTMLElement;
      getLastId(): number | string;
      getNextId(id: number | string, step?: number): string | number;
      getNode(): HTMLElement;
      getPage(): number;
      getPager(): webix.ui.pager;
      getParentView(): webix.ui.baseview;
      getPrevId(id: number | string, step?: number): string | number;
      getScrollState(): WebixScrollState;
      getSelectedId(as_array?: boolean): any;
      getSelectedItem(as_array?: boolean): obj;
      getTopParentView(): webix.ui.baseview;
      hasCss(id: string | number, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isSelected(id: string | number): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
        clear?: boolean
      ): Promise<any>;
      locate(e: Event): string | number;
      mapEvent(map: WebixEventMap): void;
      move(
        sid: string,
        tindex: number,
        tobj?: webix.ui.baseview,
        details?: WebixDataMoveOptions
      ): string;
      moveBottom(id: string | number): void;
      moveDown(id: string | number, step: number): void;
      moveSelection(direction: string): void;
      moveTop(id: string | number): void;
      moveUp(id: string | number, step: number): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: number | string): void;
      remove(id: string | number | any[]): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      render(id: string | number, data: obj, type: WebixRenderType): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      select(id: string | any[], preserve?: boolean): void;
      selectAll(from?: string, to?: string): void;
      serialize(all?: boolean): any[];
      setPage(page: number): void;
      show(force?: boolean, animation?: boolean): void;
      showItem(id: string | number): void;
      sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      unselect(id?: string): void;
      unselectAll(): void;
      updateItem(id: number | string, data: obj): void;
      validate(id?: string): boolean;
      waitSave(handler: WebixCallback): Promise<any>;

      $customPrint: WebixCallback;
      $drag(source: HTMLElement, ev: Event, pointer: string): string;
      $dragHTML: WebixCallback;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragMark(context: WebixDnDContext, ev: Event): boolean;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event
      ): void;
      $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;
      $dropAllow: WebixCallback;
      $dropHTML: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: dataviewConfig;
      data: DataStore;
      name: string;
      on_click: EventHash;
      on_context: EventHash;
      on_dblclick: EventHash;
      on_mouse_move: EventHash;
      type: WebixItemType;
      types: WebixItemTypes;
      waitData: Promise<any>;
    }
    interface daterangeConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      button?: boolean;
      calendar?: webix.ui.calendar & { [key: string]: any };
      calendarCount?: number;
      calendarHeight?: number;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      icons?: boolean | WebixCalendarIconConfig;
      id?: string | number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      padding?: number | WebixPaddingConfig;
      paddingX?: number;
      paddingY?: number;
      timepicker?: boolean;
      type?: string;
      value?: WebixDaterangeValue;
      width?: number;
    }
    type daterangeEventName =
      | 'onAfterDateSelect'
      | 'onBeforeDateSelect'
      | 'onBindRequest'
      | 'onChange'
      | 'onDateClear'
      | 'onDestruct'
      | 'onTodaySet'
      | 'onViewShow';
    class daterange implements webix.ui.baseview {
      addToRange(dates: string | Date): void;
      adjust(): void;
      attachEvent(type: daterangeEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(format: string): WebixDaterangeValue;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      resize(): void;
      setValue(range: WebixDaterangeValue, config?: any): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $prepareValue: WebixCallback;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: daterangeConfig;
      name: string;
    }
    interface daterangepickerConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      attributes?: obj;
      borderless?: boolean;
      bottomLabel?: string;
      bottomPadding?: number;
      clear?: boolean | string | number;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      editable?: boolean;
      format?: string;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      icon?: string;
      icons?: boolean;
      id?: string | number;
      inputAlign?: string;
      inputHeight?: number;
      inputWidth?: number;
      invalid?: boolean;
      invalidMessage?: string;
      keyPressTimeout?: number;
      label?: string;
      labelAlign?: string;
      labelPosition?: string;
      labelWidth?: number | string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: EventHash;
      pattern?: WebixTextPattern | string;
      placeholder?: string;
      point?: boolean;
      popup?: string;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      separator?: string;
      stringResult?: boolean;
      suggest?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      timeIcon?: string;
      timepicker?: boolean;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      validate?: WebixCallback;
      validateEvent?: string;
      value?: WebixDaterangeValue;
      width?: number;
    }
    type daterangepickerEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class daterangepicker implements webix.ui.baseview {
      adjust(): void;
      attachEvent(
        type: daterangepickerEventName,
        functor: WebixCallback,
        id?: string
      ): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getPopup(): webix.ui.baseview;
      getText(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): WebixDaterangeValue;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setBottomText(text: string): void;
      setValue(value: WebixDaterangeValue): void;
      setValueHere(value: WebixDaterangeValue): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $cssName: string;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $onBlur: WebixCallback;
      $prepareValue: WebixCallback;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(config: webix.ui.buttonConfig & { [key: string]: any }): HTMLElement;
      $renderLabel(
        config: webix.ui.textConfig & { [key: string]: any },
        id: string | number
      ): string;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: daterangepickerConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface daterangesuggestConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autofit?: boolean;
      autofocus?: boolean;
      body?: string | (webix.ui.baseviewConfig & { [key: string]: any });
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[];
      disabled?: boolean;
      escHide?: boolean;
      filter?: WebixCallback;
      fitMaster?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      input?: HTMLElement | string;
      keyPressTimeout?: number;
      left?: number;
      master?: webix.ui.baseview;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      modal?: boolean;
      on?: EventHash;
      padding?: number;
      point?: boolean;
      position?: string | WebixCallback;
      relative?: string;
      resize?: boolean;
      template?: string | WebixTemplate;
      textValue?: string;
      toFront?: boolean;
      top?: number;
      type?: string;
      url?: string;
      width?: number;
      zIndex?: number;
    }
    type daterangesuggestEventName =
      | 'onAfterScroll'
      | 'onBeforeShow'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onHide'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onShow'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onValueSuggest'
      | 'onViewMove'
      | 'onViewMoveEnd'
      | 'onViewResize'
      | 'onViewShow';
    class daterangesuggest implements webix.ui.baseview {
      adjust(): void;
      attachEvent(
        type: daterangesuggestEventName,
        functor: WebixCallback,
        id?: string
      ): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getBody(): webix.ui.baseview;
      getButton(): webix.ui.baseview;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getItemId(text: string): string | number;
      getItemText(id: string | number): string;
      getList(): webix.ui.baseview;
      getMasterValue(): any;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getRange(): webix.ui.baseview;
      getSuggestion(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): string | number;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      linkInput(input: HTMLElement): void;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      resizeChildren(): void;
      setMasterValue(value: any, refresh: boolean): void;
      setPosition(x: number, y: number): void;
      setValue(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $dragCreate(source: HTMLElement, event: Event, pointer: string): HTMLElement;
      $dragDestroy: WebixCallback;
      $dragPos: WebixCallback;
      $enterKey: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: daterangesuggestConfig;
      name: string;
    }
    interface datepickerConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      attributes?: obj;
      borderless?: boolean;
      bottomLabel?: string;
      bottomPadding?: number;
      clear?: boolean | string | number;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      editable?: boolean;
      format?: string | WebixCallback;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      icon?: string;
      icons?: boolean;
      id?: string | number;
      inputAlign?: string;
      inputHeight?: number;
      inputWidth?: number;
      invalid?: boolean;
      invalidMessage?: string;
      keyPressTimeout?: number;
      label?: string;
      labelAlign?: string;
      labelPosition?: string;
      labelWidth?: number | string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      multiselect?: boolean | string;
      name?: string;
      on?: EventHash;
      placeholder?: string;
      point?: boolean;
      popup?: string;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      separator?: string;
      stringResult?: boolean;
      suggest?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      timeIcon?: string;
      timepicker?: boolean;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: string;
      validate?: WebixCallback;
      validateEvent?: string;
      value?: Date | string;
      width?: number;
    }
    type datepickerEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class datepicker implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: datepickerEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getPopup(): webix.ui.baseview;
      getText(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): Date | string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setBottomText(text: string): void;
      setValue(value: Date | string, config?: any): void;
      setValueHere(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $onBlur: WebixCallback;
      $prepareValue: WebixCallback;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(
        obj: webix.ui.textConfig & { [key: string]: any },
        html: string,
        id: string | number
      ): string;
      $renderLabel(
        config: webix.ui.textConfig & { [key: string]: any },
        id: string | number
      ): string;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: datepickerConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface dbllistConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      buttons?: string | boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datatype?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      labelBottomLeft?: string;
      labelBottomRight?: string;
      labelLeft?: string;
      labelRight?: string;
      list?: webix.ui.listConfig & { [key: string]: any };
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      padding?: number | WebixPaddingConfig;
      paddingX?: number;
      paddingY?: number;
      type?: string;
      url?: string | WebixCallback | WebixProxy;
      value?: string | any[];
      width?: number;
    }
    type dbllistEventName =
      | 'onAfterLoad'
      | 'onBeforeLoad'
      | 'onBindRequest'
      | 'onChange'
      | 'onDestruct'
      | 'onLoadError'
      | 'onViewShow';
    class dbllist implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: dbllistEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      innerId(id: number | string): number | string;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      mapEvent(map: WebixEventMap): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      select(id: string | any[], mode: boolean): void;
      setValue(ids: string | any[]): void;
      show(force?: boolean, animation?: boolean): void;
      ui<T extends webix.ui.baseview>(view: webix.ui.baseviewConfig & { [key: string]: any }): T;
      unbind(): void;
      unblockEvent(): void;

      $$: webix.ui.baseview;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $onLoad: WebixCallback;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: dbllistConfig;
      name: string;
    }
    interface desktopConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      appIconPath?: string;
      apps?: any[];
      barPosition?: string;
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      grid?: boolean;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      locale?: WebixLocaleConfig;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      override?: any[];
      systemParams?: obj;
      tileAlign?: string;
      tileLayout?: string;
      width?: number;
    }
    type desktopEventName =
      | 'onAfterScroll'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onInit'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class desktop implements webix.ui.baseview {
      addApp(app: obj): void;
      adjust(): void;
      app(app: obj): void;
      attachEvent(type: desktopEventName, functor: WebixCallback, id?: string): string | number;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getService(service: string): obj;
      getState(): obj;
      getStateData(): any[];
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      setStateData(apps: any[]): void;
      show(force?: boolean, animation?: boolean): void;
      unblockEvent(): void;

      bind(target: any, rule?: WebixCallback, format?: string): void;
      unbind(): void;
      $app: WebixJetAppWrapper;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: desktopConfig;
      name: string;
    }
    interface diagramConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      ariaLabel?: string;
      autoplace?: boolean;
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[];
      datathrottle?: number;
      datatype?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      item?: WebixDiagramItemType | string;
      linkItem?: WebixDiagramLinkItemType;
      linkType?: any;
      links?: any[] | string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      multiselect?: string | boolean;
      on?: EventHash;
      onClick?: EventHash;
      onContext?: EventHash;
      onDblClick?: EventHash;
      onMouseMove?: EventHash;
      padding?: number;
      ready?: WebixCallback;
      removeMissed?: boolean;
      root?: string;
      save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
      scheme?: WebixDataScheme;
      scroll?: boolean | string;
      scrollSpeed?: string;
      select?: boolean | string;
      shapes?: any[];
      template?: string | WebixCallback;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      treePadding?: number;
      type?: WebixDiagramItemType | string;
      url?: string | WebixCallback | WebixProxy;
      width?: number;
      zoom?: number;
    }
    type diagramEventName =
      | 'onAfterAdd'
      | 'onAfterContextMenu'
      | 'onAfterDelete'
      | 'onAfterLoad'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onAfterSelect'
      | 'onAfterSort'
      | 'onBeforeAdd'
      | 'onBeforeContextMenu'
      | 'onBeforeDelete'
      | 'onBeforeLoad'
      | 'onBeforeRender'
      | 'onBeforeSelect'
      | 'onBeforeSort'
      | 'onBindRequest'
      | 'onDataRequest'
      | 'onDataUpdate'
      | 'onDestruct'
      | 'onItemClick'
      | 'onItemDblClick'
      | 'onItemRender'
      | 'onItemSingleClick'
      | 'onLoadError'
      | 'onMouseMove'
      | 'onMouseMoving'
      | 'onMouseOut'
      | 'onSelectChange'
      | 'onViewShow';
    class diagram implements webix.ui.baseview {
      add(obj: obj, index?: number): string | number;
      addCss(id: string | number, css: string, silent?: boolean): void;
      addShape(id: string, obj: obj): void;
      adjust(): void;
      adjustItem(id: string | number, mode: string): void;
      attachEvent(type: diagramEventName, functor: WebixCallback, id?: string): string | number;
      autoPlace(root?: string): void;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(soft?: boolean): void;
      clearCss(css: string, silent?: boolean): void;
      count(): number;
      customize(obj: WebixDiagramItemType): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      exists(id: number | string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value?: string,
        preserve?: boolean
      ): void;
      find(criterion: WebixCallback, first?: boolean): any;
      getChildViews(): webix.ui.baseview[];
      getFirstId(): number | string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number | string): string | number;
      getIndexById(id: number | string): number;
      getItem(id: number | string): obj;
      getItemNode(id: string | number): HTMLElement;
      getItemValue(id: number | string, field: string): string;
      getLastId(): number | string;
      getLinkItemNode(id: string | number): HTMLElement;
      getLinks(): DataCollection;
      getNextId(id: number | string, step?: number): string | number;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getPrevId(id: number | string, step?: number): string | number;
      getScrollState(): WebixScrollState;
      getSelectedId(as_array?: boolean): any;
      getSelectedItem(as_array?: boolean): obj;
      getShape(id: string): void;
      getShapes(): void;
      getTopParentView(): webix.ui.baseview;
      hasCss(id: string | number, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      isCurveLink(link: obj): boolean;
      isEnabled(): boolean;
      isSelected(id: string | number): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
        clear?: boolean
      ): Promise<any>;
      locate(e: Event): string | number;
      mapEvent(map: WebixEventMap): void;
      parse(data: Promise<any> | string | any[] | obj): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: number | string): void;
      remove(id: string | number | any[]): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      render(id: string | number, data: obj, type: string): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      select(id: string | any[], preserve?: boolean): void;
      selectAll(from?: string, to?: string): void;
      serialize(all?: boolean): any[];
      setShape(id: string, obj: obj): void;
      show(force?: boolean, animation?: boolean): void;
      sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      unselect(id?: string): void;
      unselectAll(): void;
      updateItem(id: number | string, data: obj): void;
      waitSave(handler: WebixCallback): Promise<any>;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $onLoad: any;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: diagramConfig;
      data: DataStore;
      name: string;
      on_click: EventHash;
      on_context: EventHash;
      on_dblclick: EventHash;
      on_mouse_move: EventHash;
      waitData: Promise<any>;
    }
    interface diagramEditorConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[];
      disabled?: boolean;
      gravity?: number;
      gridStep?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      links?: any[] | string;
      locale?: WebixLocaleConfig;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minItemHeight?: number;
      minItemWidth?: number;
      minWidth?: number;
      on?: EventHash;
      override?: any[];
      save?: WebixCallback;
      shapes?: any[];
      template?: string | WebixCallback;
      width?: number;
      zoom?: number;
    }
    type diagramEditorEventName =
      | 'onAfterScroll'
      | 'onBeforeDrag'
      | 'onBeforeDrop'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onInit'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class diagramEditor implements webix.ui.baseview {
      adjust(): void;
      app(app: obj): void;
      attachEvent(
        type: diagramEditorEventName,
        functor: WebixCallback,
        id?: string
      ): string | number;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getService(service: string): obj;
      getState(): obj;
      getTopParentView(): webix.ui.baseview;
      getValues(): WebixDiagramValues;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      setValues(data: WebixDiagramValues): void;
      show(force?: boolean, animation?: boolean): void;
      unblockEvent(): void;

      bind(target: any, rule?: WebixCallback, format?: string): void;
      unbind(): void;
      $app: WebixJetAppWrapper;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: diagramEditorConfig;
      name: string;
    }
    interface docmanagerConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      clipboard?: WebixDocManagerClipboard;
      compact?: boolean;
      compactWidth?: number;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      editor?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      locale?: WebixLocaleConfig;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mode?: string;
      on?: EventHash;
      override?: any[];
      path?: string;
      player?: boolean;
      search?: string;
      selectedItem?: any[];
      source?: string;
      url?: string;
      width?: number;
    }
    type docmanagerEventName =
      | 'onAfterScroll'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onInit'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class docmanager implements webix.ui.baseview {
      adjust(): void;
      app(app: obj): void;
      attachEvent(type: docmanagerEventName, functor: WebixCallback, id?: string): string | number;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getService(service: string): obj;
      getState(): obj;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unblockEvent(): void;

      bind(target: any, rule?: WebixCallback, format?: string): void;
      unbind(): void;
      $app: WebixJetAppWrapper;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: docmanagerConfig;
      name: string;
    }
    interface excelviewerConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      areaselect?: boolean;
      autoConfig?: boolean;
      autoheight?: boolean;
      autowidth?: boolean;
      blockselect?: boolean | string;
      borderless?: boolean;
      checkboxRefresh?: boolean;
      clipboard?: boolean | string;
      columnWidth?: number;
      columns?: WebixDatatableColumn[];
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datafetch?: number;
      datathrottle?: number;
      datatype?: string;
      delimiter?: WebixDelimiterConfig;
      disabled?: boolean;
      drag?: boolean | string;
      dragColumn?: boolean | string;
      dragscroll?: boolean | string;
      editMath?: boolean;
      editValue?: string;
      editable?: boolean;
      editaction?: string;
      excelHeader?: boolean;
      externalData?: WebixCallback;
      filterMode?: WebixTreeFilterMode;
      fixedRowHeight?: boolean;
      footer?: boolean;
      form?: string;
      gravity?: number;
      header?: boolean;
      headerRowHeight?: number;
      headermenu?: boolean | WebixHeaderMenuConfig;
      height?: number;
      hidden?: boolean;
      hover?: string;
      id?: string | number;
      keyPressTimeout?: number;
      leftSplit?: number;
      liveValidation?: boolean;
      loadahead?: number;
      map?: WebixDataMap;
      math?: boolean;
      maxColumnWidth?: number;
      maxHeight?: number;
      maxRowHeight?: number;
      maxWidth?: number;
      minColumnWidth?: number;
      minHeight?: number;
      minRowHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      multiselect?: boolean;
      navigation?: boolean;
      on?: EventHash;
      onClick?: EventHash;
      onContext?: EventHash;
      onDblClick?: EventHash;
      onMouseMove?: EventHash;
      pager?: string | WebixPagerConfig;
      prerender?: boolean;
      ready?: WebixCallback;
      removeMissed?: boolean;
      resizeColumn?: boolean | WebixResizeRowColConfig;
      resizeRow?: boolean | WebixResizeRowColConfig;
      rightSplit?: number;
      rowHeight?: number;
      rowLineHeight?: number;
      rules?: WebixValidationRules;
      save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
      scheme?: WebixDataScheme;
      scroll?: boolean | string;
      scrollAlignY?: boolean;
      scrollX?: boolean;
      scrollY?: boolean;
      select?: boolean | string;
      sort?: boolean | string;
      spans?: any[];
      subRowHeight?: string;
      subrow?: string | WebixTemplate;
      subview?: webix.ui.baseview | WebixCallback;
      templateCopy?: WebixCallback;
      toolbar?: string;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      topSplit?: number;
      type?: WebixDatatableType;
      undo?: boolean;
      url?: string | WebixCallback | WebixProxy;
      width?: number;
      yCount?: number;
    }
    type excelviewerEventName =
      | 'onAfterAdd'
      | 'onAfterAreaAdd'
      | 'onAfterAreaRemove'
      | 'onAfterBlockSelect'
      | 'onAfterColumnDrop'
      | 'onAfterColumnDropOrder'
      | 'onAfterColumnHide'
      | 'onAfterColumnShow'
      | 'onAfterContextMenu'
      | 'onAfterDelete'
      | 'onAfterDrop'
      | 'onAfterEditStart'
      | 'onAfterEditStop'
      | 'onAfterFilter'
      | 'onAfterLoad'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onAfterSelect'
      | 'onAfterSort'
      | 'onAfterUnSelect'
      | 'onAreaDrag'
      | 'onBeforeAdd'
      | 'onBeforeAreaAdd'
      | 'onBeforeAreaRemove'
      | 'onBeforeBlockSelect'
      | 'onBeforeColumnDrag'
      | 'onBeforeColumnDrop'
      | 'onBeforeColumnDropOrder'
      | 'onBeforeColumnHide'
      | 'onBeforeColumnShow'
      | 'onBeforeContextMenu'
      | 'onBeforeDelete'
      | 'onBeforeDrag'
      | 'onBeforeDragIn'
      | 'onBeforeDrop'
      | 'onBeforeDropOut'
      | 'onBeforeEditStart'
      | 'onBeforeEditStop'
      | 'onBeforeFilter'
      | 'onBeforeLoad'
      | 'onBeforeRender'
      | 'onBeforeSelect'
      | 'onBeforeSort'
      | 'onBeforeUnSelect'
      | 'onBindRequest'
      | 'onBlur'
      | 'onCheck'
      | 'onCollectValues'
      | 'onColumnResize'
      | 'onDataRequest'
      | 'onDataUpdate'
      | 'onDestruct'
      | 'onDragOut'
      | 'onEditorChange'
      | 'onEnter'
      | 'onFocus'
      | 'onHeaderClick'
      | 'onItemClick'
      | 'onItemDblClick'
      | 'onItemSingleClick'
      | 'onKeyPress'
      | 'onLiveEdit'
      | 'onLoadError'
      | 'onLongTouch'
      | 'onMouseMove'
      | 'onMouseMoving'
      | 'onMouseOut'
      | 'onPaste'
      | 'onResize'
      | 'onRowResize'
      | 'onScrollX'
      | 'onScrollY'
      | 'onSelectChange'
      | 'onStructureLoad'
      | 'onStructureUpdate'
      | 'onSubViewClose'
      | 'onSubViewCreate'
      | 'onSubViewOpen'
      | 'onSubViewRender'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onSyncScroll'
      | 'onTabFocus'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onValidationError'
      | 'onValidationSuccess'
      | 'onViewResize'
      | 'onViewShow';
    class excelviewer implements webix.ui.baseview {
      add(obj: obj, index?: number): string | number;
      addCellCss(id: string, name: string, css: string, silent: boolean): void;
      addCss(id: string | number, css: string, silent?: boolean): void;
      addRowCss(id: string, css: string): void;
      addSelectArea(
        start: WebixCellObject,
        end: WebixCellObject,
        preserve: boolean,
        area_name?: string,
        css?: string,
        handle?: boolean
      ): void;
      addSpan(
        id: number | string | WebixSpanConfig,
        column?: string,
        width?: number,
        height?: number,
        value?: string,
        css?: string
      ): void;
      adjust(): void;
      adjustColumn(id: string | number, mode?: string): void;
      adjustRowHeight(columnId?: string, silent?: boolean): void;
      attachEvent(type: excelviewerEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(soft?: boolean): void;
      clearCss(css: string, silent?: boolean): void;
      clearValidation(): void;
      closeSub(id: string | number): void;
      collectValues(id: string | number, mode?: WebixDatatableCollectValuesConfig): any[];
      columnId(index: number): string | number;
      copy(
        sid: string | number,
        tindex: number,
        tobj?: WebixDataMoveTarget,
        details?: WebixDataMoveOptions
      ): void;
      count(): number;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      eachColumn(handler: WebixCallback, all?: boolean): void;
      eachRow(handler: WebixCallback, all?: boolean): void;
      edit(id: WebixCellObject): void;
      editCancel(): void;
      editCell(
        row: string | number,
        col: string | number,
        preserve?: boolean,
        show?: boolean
      ): void;
      editColumn(id: string): void;
      editNext(): void;
      editRow(id: string): void;
      editStop(): void;
      enable(): void;
      exists(id: number | string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value?: string,
        preserve?: boolean
      ): void;
      filterByAll(): void;
      find(criterion: WebixCallback, first?: boolean): any;
      focusEditor(id: WebixCellObject): void;
      freezeRow(id: number | string, state: boolean): void;
      getAllSelectAreas(): WebixDatatableSelectAreas;
      getChildViews(): webix.ui.baseview[];
      getColumnConfig(id: string): WebixDatatableColumn;
      getColumnIndex(id: string | number): number;
      getColumns(all?: boolean): WebixDatatableColumn[];
      getCss(rowId: string | number, columnId: string | number): string;
      getEditState(): WebixEditorObject;
      getEditor(id?: string): WebixEditorObject;
      getEditorValue(): string;
      getFilter(columnID: string | number): any;
      getFirstId(): number | string;
      getFooterNode(columnId: string, rowIndex?: number): HTMLElement;
      getFormView(): webix.ui.baseview;
      getHeaderContent(id: string | number): any;
      getHeaderNode(columnId: string, rowIndex?: number): HTMLElement;
      getIdByIndex(index: number | string): string | number;
      getIndexById(id: number | string): number;
      getItem(id: number | string): obj;
      getItemNode(id: string | number): HTMLElement;
      getLastId(): number | string;
      getNextId(id: number | string, step?: number): string | number;
      getNode(): HTMLElement;
      getPage(): number;
      getPager(): webix.ui.pager;
      getParentView(): webix.ui.baseview;
      getPrevId(id: number | string, step?: number): string | number;
      getScrollState(): WebixScrollState;
      getSelectArea(area_name?: string): WebixDatatableAreaSelection;
      getSelectedId(asArray?: boolean, asString?: boolean): any;
      getSelectedItem(as_array?: boolean): obj;
      getSheets(): any[];
      getSpan(): any[];
      getSpanNode(id: WebixCellObject): HTMLElement;
      getState(): obj;
      getSubView(id: string | number): webix.ui.baseview;
      getText(rowid: string | number, colid: string | number): string;
      getTopParentView(): webix.ui.baseview;
      getVisibleCount(): number;
      group(config: WebixGroupConfig, target?: string | number): void;
      hasCss(id: string | number, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      hideColumn(
        id: string | number,
        options?: WebixDatatableHideColumnConfig,
        silent?: boolean,
        mode?: boolean
      ): void;
      hideOverlay(): void;
      isColumnVisible(id: string | number): boolean;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
        clear?: boolean
      ): Promise<any>;
      locate(node: HTMLElement | Event): WebixDatatableCellPos;
      mapCells(
        startrow: number,
        startcol: string,
        numrows: number,
        numcols: number,
        callback: WebixCallback,
        getOnly: boolean
      ): void;
      mapEvent(map: WebixEventMap): void;
      markSorting(column_id?: string, direction?: string, preserve?: boolean): void;
      move(
        sid: string,
        tindex: number,
        tobj?: WebixDataMoveTarget,
        details?: WebixDataMoveOptions
      ): string;
      moveBottom(id: string | number): void;
      moveColumn(id: string, index: number): void;
      moveDown(id: string | number, step: number): void;
      moveSelection(direction: string): void;
      moveTop(id: string | number): void;
      moveUp(id: string | number, step: number): void;
      openSub(id: string | number): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: number | string): void;
      refreshColumns(config?: any[]): void;
      refreshFilter(id: string | number): void;
      refreshSelectArea(): void;
      registerFilter(
        object: HTMLElement | webix.ui.baseview,
        config: WebixDatatableFilterConfig,
        controller: WebixDatatableFilterController
      ): void;
      remove(id: string | number | any[]): void;
      removeCellCss(id: string, name: string, css_name: string, silent: boolean): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      removeRowCss(id: string, css_name: string): void;
      removeSelectArea(area_name: string): void;
      removeSpan(id: string | number, column: string): void;
      render(id: string | number, data: obj, operation: string): void;
      resize(): void;
      resizeSubView(id: string | number): void;
      scrollTo(x: number, y: number): void;
      serialize(all?: boolean): any[];
      setColumnWidth(id: string | number, width: number): void;
      setPage(page: number): void;
      setRowHeight(id: string | number, height: number): void;
      setState(state: obj): void;
      show(force?: boolean, animation?: boolean): void;
      showCell(row: string, column: string): void;
      showColumn(id: string | number, options?: WebixShowColumnConfig, silent?: boolean): void;
      showColumnBatch(batch: string | number, preserve: boolean): void;
      showItem(id: string | number): void;
      showItemByIndex(index: number): void;
      showOverlay(message: string): void;
      showSheet(name: string): void;
      sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      ungroup(mode: boolean): void;
      updateItem(id: number | string, data: obj): void;
      validate(id?: string): boolean;
      validateEditor(id?: string | number): boolean;
      waitSave(handler: WebixCallback): Promise<any>;

      $customPrint: WebixCallback;
      $drag(source: HTMLElement, ev: Event, pointer: string): string;
      $dragHTML: WebixCallback;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragMark(context: WebixDnDContext, ev: Event): boolean;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event
      ): void;
      $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;
      $dropAllow: WebixCallback;
      $dropHTML: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $hasYScroll: any;
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $touch: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: excelviewerConfig;
      data: DataStore;
      headerContent: obj;
      name: string;
      on_click: EventHash;
      on_context: EventHash;
      on_dblclick: EventHash;
      on_mouse_move: EventHash;
      waitData: Promise<any>;
    }
    interface fieldsetConfig {
      view?: string;
      $cssName?: string;
      animate?: boolean | WebixAnimate;
      body?: webix.ui.baseviewConfig & { [key: string]: any };
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      label?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      paddingX?: number;
      paddingY?: number;
      width?: number;
    }
    type fieldsetEventName =
      | 'onAfterScroll'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class fieldset implements webix.ui.baseview {
      adjust(): void;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      disable(): void;
      enable(): void;
      getBody(): webix.ui.baseview;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      resizeChildren(): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: fieldsetConfig;
      name: string;
    }
    interface filemanagerConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      clipboard?: WebixFileManagerClipboard;
      compact?: boolean;
      compactWidth?: number;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      editor?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      locale?: WebixLocaleConfig;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mode?: string;
      on?: EventHash;
      override?: any[];
      path?: string;
      player?: boolean;
      search?: string;
      selectedItem?: any[];
      url?: string;
      width?: number;
    }
    type filemanagerEventName =
      | 'onAfterScroll'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onInit'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class filemanager implements webix.ui.baseview {
      adjust(): void;
      app(app: obj): void;
      attachEvent(type: filemanagerEventName, functor: WebixCallback, id?: string): string | number;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getService(service: string): obj;
      getState(): obj;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unblockEvent(): void;

      bind(target: any, rule?: WebixCallback, format?: string): void;
      unbind(): void;
      $app: WebixJetAppWrapper;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: filemanagerConfig;
      name: string;
    }
    interface filterConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      conditions?: any[];
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datatype?: string;
      disabled?: boolean;
      field?: string;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      inputs?: any[];
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mode?: any;
      on?: EventHash;
      padding?: number | WebixPaddingConfig;
      paddingX?: number;
      paddingY?: number;
      template?: string | WebixCallback;
      type?: string;
      url?: string | WebixCallback | WebixProxy;
      value?: WebixFilterValue;
      width?: number;
    }
    type filterEventName =
      | 'onAfterLoad'
      | 'onBeforeLoad'
      | 'onBindRequest'
      | 'onChange'
      | 'onDestruct'
      | 'onLoadError'
      | 'onViewShow';
    class filter implements webix.ui.baseview {
      adjust(): void;
      applyFilter(): void;
      attachEvent(type: filterEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFilterFunction(): WebixCallback;
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): WebixFilterValue;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      mapEvent(map: WebixEventMap): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      setValue(value: WebixFilterValue, config?: any): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $compareValue: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $onLoad: WebixCallback;
      $prepareValue: WebixCallback;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue: any;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: filterConfig;
      name: string;
    }
    interface formConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autoheight?: boolean;
      borderless?: boolean;
      cols?: any[];
      complexData?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      dataFeed?: string | WebixProxy | WebixCallback;
      datatype?: string;
      disabled?: boolean;
      elements?: any[];
      elementsConfig?: webix.ui.baseviewConfig & { [key: string]: any };
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      isolate?: boolean;
      margin?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      padding?: number | WebixPaddingConfig;
      paddingX?: number;
      paddingY?: number;
      responsive?: string;
      rows?: any[];
      rules?: obj;
      scroll?: boolean | string;
      scrollSpeed?: string;
      type?: string;
      url?: string | WebixCallback | WebixProxy;
      visibleBatch?: string;
      width?: number;
    }
    type formEventName =
      | 'onAfterLoad'
      | 'onAfterScroll'
      | 'onAfterValidation'
      | 'onBeforeLoad'
      | 'onBeforeValidate'
      | 'onBindRequest'
      | 'onChange'
      | 'onDestruct'
      | 'onLoadError'
      | 'onSubmit'
      | 'onValidationError'
      | 'onValidationSuccess'
      | 'onValues'
      | 'onViewShow';
    class form implements webix.ui.baseview {
      addView(
        view: webix.ui.baseview | (webix.ui.baseviewConfig & { [key: string]: any }),
        index?: number
      ): string | number;
      adjust(): void;
      attachEvent(type: formEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clear(config?: any): void;
      clearValidation(): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(item: string): void;
      getChildViews(): webix.ui.baseview[];
      getCleanValues(): obj;
      getDirtyValues(): obj;
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getScrollState(): WebixScrollState;
      getTopParentView(): webix.ui.baseview;
      getValues(details?: WebixFieldParams | WebixCallback): obj;
      hasEvent(name: string): boolean;
      hide(): void;
      index(obj: webix.ui.baseview): number;
      isDirty(): boolean;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      mapEvent(map: WebixEventMap): void;
      markInvalid(name: string, state?: boolean | string): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      reconstruct(): void;
      refresh(): void;
      removeView(id: string | number | webix.ui.baseview): void;
      render(id: string | number, data: obj, type: WebixRenderType): void;
      resize(): void;
      resizeChildren(): void;
      restore(state: obj, factory?: WebixCallback): void;
      scrollTo(x: number, y: number): void;
      serialize(serializer?: WebixCallback): obj;
      setDirty(mark?: boolean): void;
      setValues(values: obj, update?: boolean, config?: any): void;
      show(force?: boolean, animation?: boolean): void;
      showBatch(name: string, mode?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(mode?: WebixFieldParams): boolean;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: formConfig;
      elements: obj;
      name: string;
    }
    interface forminputConfig {
      view?: string;
      $cssName?: string;
      animate?: boolean | WebixAnimate;
      body?: webix.ui.baseview;
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      label?: string;
      labelAlign?: string;
      labelWidth?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      value?: any;
      width?: number;
    }
    type forminputEventName =
      | 'onAfterScroll'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class forminput implements webix.ui.baseview {
      adjust(): void;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getBody(): webix.ui.baseview;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      resizeChildren(): void;
      setBottomText(text: string): void;
      setValue(value: any): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: forminputConfig;
      name: string;
    }
    interface gageConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      color?: string | WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      format?: WebixCallback;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      label?: string;
      maxHeight?: number;
      maxRange?: number;
      maxWidth?: number;
      minHeight?: number;
      minRange?: number;
      minWidth?: number;
      on?: EventHash;
      placeholder?: string;
      scale?: number;
      smoothFlow?: boolean;
      stroke?: number;
      value?: number;
      width?: number;
    }
    type gageEventName =
      | 'onAfterScroll'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class gage implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: gageEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): number;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      resize(): void;
      setValue(new_value: number): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: gageConfig;
      name: string;
    }
    interface ganttConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      baseline?: boolean;
      borderless?: boolean;
      compact?: boolean;
      compactWidth?: number;
      container?: string | HTMLElement;
      criticalPath?: boolean;
      css?: string | obj;
      disabled?: boolean;
      display?: string;
      excludeHolidays?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      isHoliday?: WebixCallback;
      links?: any;
      locale?: WebixLocaleConfig;
      markers?: any[] | boolean;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      override?: any[];
      preciseTimeUnit?: boolean;
      projects?: boolean;
      readonly?: boolean;
      resourceCalendars?: boolean;
      resources?: boolean;
      resourcesDiagram?: boolean;
      scaleCellWidth?: number;
      scaleEnd?: Date;
      scaleStart?: Date;
      scales?: any[];
      serverUTC?: boolean;
      split?: boolean;
      treeWidth?: number;
      url?: string;
      width?: number;
    }
    type ganttEventName =
      | 'onAfterScroll'
      | 'onBeforeDrag'
      | 'onBeforeDrop'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onInit'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class gantt implements webix.ui.baseview {
      adjust(): void;
      app(app: obj): void;
      attachEvent(type: ganttEventName, functor: WebixCallback, id?: string): string | number;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getService(service: string): obj;
      getState(): obj;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      reload(): void;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unblockEvent(): void;

      bind(target: any, rule?: WebixCallback, format?: string): void;
      unbind(): void;
      $app: WebixJetAppWrapper;
      $exportView: any;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: ganttConfig;
      name: string;
    }
    interface geochartConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      chart?: WebixGeochartInnerConfig;
      columns?: any[];
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datathrottle?: number;
      datatype?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      key?: string;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      ready?: WebixCallback;
      removeMissed?: boolean;
      save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
      scheme?: WebixDataScheme;
      tooltip?: string | WebixCallback;
      url?: string | WebixCallback | WebixProxy;
      width?: number;
    }
    type geochartEventName =
      | 'onAfterAdd'
      | 'onAfterDelete'
      | 'onAfterLoad'
      | 'onAfterScroll'
      | 'onAfterSort'
      | 'onBeforeAdd'
      | 'onBeforeDelete'
      | 'onBeforeLoad'
      | 'onBeforeSort'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDataRequest'
      | 'onDataUpdate'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLoadError'
      | 'onLongTouch'
      | 'onMapError'
      | 'onMapReady'
      | 'onRegionClick'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTabFocus'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class geochart implements webix.ui.baseview {
      add(obj: obj, index?: number): string | number;
      adjust(): void;
      attachEvent(type: geochartEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(): void;
      count(): number;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      exists(id: number | string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value?: string,
        preserve?: boolean
      ): void;
      find(criterion: WebixCallback, first?: boolean): any;
      getChildViews(): webix.ui.baseview[];
      getFirstId(): number | string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number | string): string | number;
      getIndexById(id: number | string): number;
      getItem(id: number | string): obj;
      getLastId(): number | string;
      getMap(): any;
      getNextId(id: number | string, step?: number): string | number;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getPrevId(id: number | string, step?: number): string | number;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
        clear?: boolean
      ): Promise<any>;
      mapEvent(map: WebixEventMap): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: number | string): void;
      remove(id: string | number | any[]): void;
      render(): void;
      resize(): void;
      serialize(all?: boolean): any[];
      setDisplayMode(mode: string): void;
      setRegion(region: string): void;
      show(force?: boolean, animation?: boolean): void;
      sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      updateItem(id: number | string, data: obj): void;
      waitSave(handler: WebixCallback): Promise<any>;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: geochartConfig;
      data: DataStore;
      name: string;
      waitData: Promise<any>;
    }
    interface googleMapConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      center?: any[];
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      dataFeed?: string | WebixProxy | WebixCallback;
      datathrottle?: number;
      datatype?: string;
      disabled?: boolean;
      gravity?: number;
      heatmapConfig?: WebixGoogleMapHeatmapLayerConfig;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      layerType?: string;
      mapType?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      ready?: WebixCallback;
      removeMissed?: boolean;
      save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
      scheme?: WebixDataScheme;
      url?: string | WebixCallback | WebixProxy;
      width?: number;
      zoom?: number;
    }
    type googleMapEventName =
      | 'onAfterAdd'
      | 'onAfterDelete'
      | 'onAfterLoad'
      | 'onAfterScroll'
      | 'onAfterSort'
      | 'onBeforeAdd'
      | 'onBeforeDelete'
      | 'onBeforeLoad'
      | 'onBeforeSort'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDataRequest'
      | 'onDataUpdate'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onHeatMapRender'
      | 'onKeyPress'
      | 'onLoadError'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTabFocus'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class googleMap implements webix.ui.baseview {
      add(obj: obj, index?: number): string | number;
      adjust(): void;
      attachEvent(type: googleMapEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(soft?: boolean): void;
      count(): number;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      exists(id: number | string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value?: string,
        preserve?: boolean
      ): void;
      find(criterion: WebixCallback, first?: boolean): any;
      getChildViews(): webix.ui.baseview[];
      getFirstId(): number | string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number | string): string | number;
      getIndexById(id: number | string): number;
      getItem(id: number | string): obj;
      getLastId(): number | string;
      getMap(waitMap?: boolean): obj;
      getNextId(id: number | string, step?: number): string | number;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getPrevId(id: number | string, step?: number): string | number;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
        clear?: boolean
      ): Promise<any>;
      mapEvent(map: WebixEventMap): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: number | string): void;
      remove(id: string | number | any[]): void;
      render(): void;
      resize(): void;
      serialize(all?: boolean): any[];
      show(force?: boolean, animation?: boolean): void;
      sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      updateItem(id: number | string, data: obj): void;
      waitSave(handler: WebixCallback): Promise<any>;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $onLoad: WebixCallback;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: googleMapConfig;
      data: DataStore;
      name: string;
      waitData: Promise<any>;
    }
    interface gridlayoutConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autoplace?: boolean;
      borderless?: boolean;
      cellHeight?: number;
      cellWidth?: number;
      cells?: any[];
      cols?: any[];
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      factory?: WebixCallback;
      gravity?: number;
      gridColumns?: number;
      gridRows?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      margin?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      padding?: number;
      paddingX?: number;
      paddingY?: number;
      responsive?: string;
      rows?: any[];
      visibleBatch?: string;
      width?: number;
    }
    type gridlayoutEventName = 'onBindRequest' | 'onChange' | 'onDestruct' | 'onViewShow';
    class gridlayout implements webix.ui.baseview {
      addView(
        view: webix.ui.baseview | (webix.ui.baseviewConfig & { [key: string]: any }),
        index?: number
      ): string | number;
      adjust(): void;
      attachEvent(type: gridlayoutEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      index(obj: webix.ui.baseview): number;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      moveView(id: string | number, pos: WebixGridlayoutPosConfig): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      reconstruct(): void;
      removeView(id: string | number | webix.ui.baseview): void;
      resize(): void;
      resizeChildren(): void;
      restore(state: obj, factory?: WebixCallback): void;
      serialize(serializer?: WebixCallback): any[];
      show(force?: boolean, animation?: boolean): void;
      showBatch(name: string, mode?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: gridlayoutConfig;
      name: string;
    }
    interface gridsuggestConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autofit?: boolean;
      autofocus?: boolean;
      body?: string | (webix.ui.baseviewConfig & { [key: string]: any });
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[];
      disabled?: boolean;
      escHide?: boolean;
      filter?: WebixCallback;
      fitMaster?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      input?: HTMLElement | string;
      keyPressTimeout?: number;
      left?: number;
      master?: webix.ui.baseview;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      modal?: boolean;
      on?: EventHash;
      padding?: number;
      point?: boolean;
      position?: string | WebixCallback;
      relative?: string;
      resize?: boolean;
      template?: string | WebixTemplate;
      textValue?: string;
      toFront?: boolean;
      top?: number;
      type?: string;
      url?: string;
      width?: number;
      zIndex?: number;
    }
    type gridsuggestEventName =
      | 'onAfterScroll'
      | 'onBeforeShow'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onHide'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onShow'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onValueSuggest'
      | 'onViewMove'
      | 'onViewMoveEnd'
      | 'onViewResize'
      | 'onViewShow';
    class gridsuggest implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: gridsuggestEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getBody(): webix.ui.baseview;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getItemId(text: string): string | number;
      getItemText(id: string | number): string;
      getList(): webix.ui.baseview;
      getMasterValue(): any;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getSuggestion(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): string | number;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      linkInput(input: HTMLElement): void;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      resizeChildren(): void;
      setMasterValue(value: any, refresh: boolean): void;
      setPosition(x: number, y: number): void;
      setValue(value: string | number): void;
      show(node: HTMLElement, position?: WebixWindowPosConfig, point?: string): void;
      unbind(): void;
      unblockEvent(): void;
      show(force: boolean, animation: boolean): void;
      $dragCreate(source: HTMLElement, event: Event, pointer: string): HTMLElement;
      $dragDestroy: WebixCallback;
      $dragPos: WebixCallback;
      $enterKey: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: gridsuggestConfig;
      name: string;
    }
    interface grouplistConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autoheight?: boolean;
      autowidth?: boolean;
      borderless?: boolean;
      click?: string | WebixCallback;
      clipboard?: boolean | string;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datathrottle?: number;
      datatype?: string;
      delimiter?: WebixDelimiterConfig;
      disabled?: boolean;
      drag?: boolean | string;
      dragscroll?: boolean | string;
      externalData?: WebixCallback;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      item?: WebixItemType | string;
      keyPressTimeout?: number;
      layout?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      multiselect?: string | boolean;
      navigation?: boolean;
      on?: EventHash;
      onClick?: EventHash;
      onContext?: EventHash;
      onDblClick?: EventHash;
      onMouseMove?: EventHash;
      pager?: string | WebixPagerConfig;
      prerender?: boolean;
      ready?: WebixCallback;
      removeMissed?: boolean;
      rules?: WebixValidationRules;
      save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
      scheme?: WebixDataScheme;
      scroll?: boolean | string;
      scrollSpeed?: string;
      select?: boolean | string;
      template?: string | WebixCallback;
      templateBack?: string | WebixCallback;
      templateCopy?: WebixCallback;
      templateGroup?: string | WebixCallback;
      templateItem?: string | WebixCallback;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: WebixItemType | string;
      url?: string | WebixCallback | WebixProxy;
      width?: number;
      xCount?: number;
      yCount?: number;
    }
    type grouplistEventName =
      | 'onAfterAdd'
      | 'onAfterContextMenu'
      | 'onAfterDelete'
      | 'onAfterDrop'
      | 'onAfterLoad'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onAfterSelect'
      | 'onAfterSort'
      | 'onBeforeAdd'
      | 'onBeforeContextMenu'
      | 'onBeforeDelete'
      | 'onBeforeDrag'
      | 'onBeforeDragIn'
      | 'onBeforeDrop'
      | 'onBeforeDropOut'
      | 'onBeforeLoad'
      | 'onBeforeRender'
      | 'onBeforeSelect'
      | 'onBeforeSort'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDataRequest'
      | 'onDataUpdate'
      | 'onDestruct'
      | 'onDragOut'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onItemDblClick'
      | 'onItemRender'
      | 'onItemSingleClick'
      | 'onKeyPress'
      | 'onLoadError'
      | 'onLongTouch'
      | 'onMouseMove'
      | 'onMouseMoving'
      | 'onMouseOut'
      | 'onPaste'
      | 'onSelectChange'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTabFocus'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onValidationError'
      | 'onValidationSuccess'
      | 'onViewResize'
      | 'onViewShow';
    class grouplist implements webix.ui.baseview {
      add(obj: obj, index?: number, parentId?: string): string;
      addCss(id: string | number, css: string, silent?: boolean): void;
      adjust(): void;
      attachEvent(type: grouplistEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(soft?: boolean): void;
      clearCss(css: string, silent?: boolean): void;
      clearValidation(): void;
      copy(
        sid: string | number,
        tindex: number,
        tobj?: WebixDataMoveTarget,
        details?: WebixDataMoveOptions
      ): void;
      count(): number;
      customize(obj: WebixItemType): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      disableItem(id: string | number): void;
      enable(): void;
      enableItem(id: string | number): void;
      exists(id: number | string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value?: string,
        preserve?: boolean
      ): void;
      find(criterion: WebixCallback, first?: boolean): any;
      getChildViews(): webix.ui.baseview[];
      getFirstId(): number | string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number | string): string | number;
      getIndexById(id: number | string): number;
      getItem(id: number | string): obj;
      getItemNode(id: string | number): HTMLElement;
      getLastId(): number | string;
      getNextId(id: number | string, step?: number): string | number;
      getNode(): HTMLElement;
      getOpenState(): WebixGrouplistOpenState;
      getPage(): number;
      getPager(): webix.ui.pager;
      getParentView(): webix.ui.baseview;
      getPrevId(id: number | string, step?: number): string | number;
      getScrollState(): WebixScrollState;
      getSelectedId(as_array?: boolean): any;
      getSelectedItem(as_array?: boolean): obj;
      getTopParentView(): webix.ui.baseview;
      getVisibleCount(): number;
      group(config: WebixGroupConfig, target?: string | number): void;
      hasCss(id: string | number, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isItemEnabled(): boolean;
      isSelected(id: string | number): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
        clear?: boolean
      ): Promise<any>;
      locate(e: Event): string | number;
      mapEvent(map: WebixEventMap): void;
      move(
        sid: string,
        tindex: number,
        tobj?: webix.ui.baseview,
        details?: WebixDataMoveOptions
      ): string;
      moveBottom(id: string | number): void;
      moveDown(id: string | number, step: number): void;
      moveSelection(direction: string): void;
      moveTop(id: string | number): void;
      moveUp(id: string | number, step: number): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: number | string): void;
      remove(id: string | number | any[]): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      render(id: string | number, data: obj, type: WebixRenderType): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      select(id: string | any[], preserve?: boolean): void;
      selectAll(from?: string, to?: string): void;
      serialize(all?: boolean): any[];
      setOpenState(id: string | number): void;
      setPage(page: number): void;
      show(force?: boolean, animation?: boolean): void;
      showItem(id: string | number): void;
      sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      ungroup(mode: boolean): void;
      unselect(id?: string): void;
      unselectAll(): void;
      updateItem(id: number | string, data: obj): void;
      validate(id?: string): boolean;
      waitSave(handler: WebixCallback): Promise<any>;

      $customPrint: WebixCallback;
      $drag(source: HTMLElement, ev: Event, pointer: string): string;
      $dragHTML: WebixCallback;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragMark(context: WebixDnDContext, ev: Event): boolean;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event
      ): void;
      $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;
      $dropAllow: WebixCallback;
      $dropHTML: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: grouplistConfig;
      data: DataStore;
      name: string;
      on_click: EventHash;
      on_context: EventHash;
      on_dblclick: EventHash;
      on_mouse_move: EventHash;
      type: WebixItemType;
      types: WebixItemTypes;
      waitData: Promise<any>;
    }
    interface headerlayoutConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      collapsed?: boolean;
      cols?: any[];
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      isolate?: boolean;
      margin?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      multi?: boolean | string;
      on?: EventHash;
      padding?: number | WebixPaddingConfig;
      paddingX?: number;
      paddingY?: number;
      panelClass?: string;
      responsive?: string;
      rows?: any[];
      type?: string;
      visibleBatch?: string;
      width?: number;
    }
    type headerlayoutEventName =
      | 'onAfterCollapse'
      | 'onAfterExpand'
      | 'onBindRequest'
      | 'onDestruct'
      | 'onViewShow';
    class headerlayout implements webix.ui.baseview {
      addView(
        view: webix.ui.baseview | (webix.ui.baseviewConfig & { [key: string]: any }),
        index?: number
      ): string | number;
      adjust(): void;
      attachEvent(
        type: headerlayoutEventName,
        functor: WebixCallback,
        id?: string
      ): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      index(obj: webix.ui.baseview): number;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      reconstruct(): void;
      removeView(id: string | number | webix.ui.baseview): void;
      resize(): void;
      resizeChildren(): void;
      restore(state: obj, factory?: WebixCallback): void;
      serialize(serializer?: WebixCallback): obj;
      show(force?: boolean, animation?: boolean): void;
      showBatch(name: string, mode?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: headerlayoutConfig;
      name: string;
    }
    interface hintConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      left?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      nextButton?: boolean | string;
      on?: EventHash;
      prevButton?: boolean | string;
      stepTimeout?: number;
      steps?: any[];
      top?: number;
      width?: number;
    }
    type hintEventName =
      | 'onAfterScroll'
      | 'onAfterStart'
      | 'onBeforeStart'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnd'
      | 'onEnter'
      | 'onFocus'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onNext'
      | 'onPrevious'
      | 'onSkip'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class hint implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: hintEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      end(): void;
      getChildViews(): webix.ui.baseview[];
      getCurrentStep(): number;
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getSteps(): any[];
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      resume(stepNumber?: number): void;
      setSteps(steps: any[]): void;
      show(force?: boolean, animation?: boolean): void;
      start(): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: hintConfig;
      name: string;
    }
    interface htmlformConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autoheight?: boolean;
      borderless?: boolean;
      complexData?: boolean;
      container?: string | HTMLElement;
      content?: string | number | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datatype?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      onClick?: EventHash;
      scroll?: boolean | string;
      scrollSpeed?: string;
      src?: string;
      template?: string | WebixCallback;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      url?: string | WebixCallback | WebixProxy;
      width?: number;
    }
    type htmlformEventName =
      | 'onAfterLoad'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeLoad'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onKeyPress'
      | 'onLoadError'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onValues'
      | 'onViewResize'
      | 'onViewShow';
    class htmlform implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: htmlformEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      clear(all?: boolean): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(item: string): void;
      getChildViews(): webix.ui.baseview[];
      getCleanValues(): obj;
      getDirtyValues(): obj;
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getScrollState(): WebixScrollState;
      getTopParentView(): webix.ui.baseview;
      getValues(details?: WebixFieldParams | WebixCallback): obj;
      hasEvent(name: string): boolean;
      hide(): void;
      isDirty(): boolean;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      mapEvent(map: WebixEventMap): void;
      markInvalid(name: string, state?: boolean | string): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      setContent(node: any): void;
      setDirty(mark?: boolean): void;
      setHTML(html: string): void;
      setValues(values: obj, update?: boolean, config?: any): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: htmlformConfig;
      name: string;
    }
    interface iconConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      autowidth?: boolean;
      borderless?: boolean;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      icon?: string;
      id?: string | number;
      inputHeight?: number;
      inputWidth?: number;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: EventHash;
      popup?: string;
      tooltip?: string | WebixCallback | WebixAutoTooltipConfig;
      value?: string | number;
      width?: number;
    }
    type iconEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class icon implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: iconEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setValue(value: string, config?: any): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $compareValue: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $prepareValue: WebixCallback;
      $renderInput(config: webix.ui.buttonConfig & { [key: string]: any }): HTMLElement;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: iconConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface iframeConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      src?: string;
      width?: number;
    }
    type iframeEventName =
      | 'onAfterLoad'
      | 'onAfterScroll'
      | 'onBeforeLoad'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class iframe implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: iframeEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getIframe(): HTMLElement;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getWindow(): HTMLElement;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(value: string): void;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: iframeConfig;
      name: string;
    }
    interface kanbanConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      attachments?: string;
      borderless?: boolean;
      cardActions?: boolean | any[];
      collapsed?: boolean;
      colors?: any[] | string;
      cols?: any[];
      comments?: boolean | (webix.ui.commentsConfig & { [key: string]: any });
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datathrottle?: number;
      datatype?: string;
      delimiter?: string;
      disabled?: boolean;
      editor?:
        | boolean
        | (webix.ui.baseviewConfig & { [key: string]: any }[])
        | WebixKanbanEditorConfig;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      isolate?: boolean;
      listFilter?: WebixCallback;
      margin?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      multi?: boolean | string;
      on?: EventHash;
      padding?: number | WebixPaddingConfig;
      paddingX?: number;
      paddingY?: number;
      panelClass?: string;
      ready?: WebixCallback;
      removeMissed?: boolean;
      responsive?: string;
      rows?: any[];
      save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
      scheme?: WebixDataScheme;
      tags?: any[] | string;
      type?: string;
      url?: string | WebixCallback | WebixProxy;
      userList?: boolean | (webix.ui.listConfig & { [key: string]: any });
      users?: any[] | string;
      visibleBatch?: string;
      width?: number;
    }
    type kanbanEventName =
      | 'onAfterAdd'
      | 'onAfterCollapse'
      | 'onAfterCopy'
      | 'onAfterDelete'
      | 'onAfterEditorShow'
      | 'onAfterExpand'
      | 'onAfterLoad'
      | 'onAfterSort'
      | 'onAfterStatusChange'
      | 'onAvatarClick'
      | 'onBeforeAdd'
      | 'onBeforeCopy'
      | 'onBeforeDelete'
      | 'onBeforeEditorAction'
      | 'onBeforeEditorShow'
      | 'onBeforeLoad'
      | 'onBeforeSort'
      | 'onBeforeStatusChange'
      | 'onBindRequest'
      | 'onDataRequest'
      | 'onDataUpdate'
      | 'onDestruct'
      | 'onListAfterContextMenu'
      | 'onListAfterDrop'
      | 'onListAfterSelect'
      | 'onListBeforeContextMenu'
      | 'onListBeforeDrag'
      | 'onListBeforeDragIn'
      | 'onListBeforeDrop'
      | 'onListBeforeSelect'
      | 'onListDragOut'
      | 'onListIconClick'
      | 'onListItemClick'
      | 'onListItemDblClick'
      | 'onLoadError'
      | 'onViewShow';
    class kanban implements webix.ui.baseview {
      add(obj: obj, index?: number): string | number;
      addView(
        view: webix.ui.baseview | (webix.ui.baseviewConfig & { [key: string]: any }),
        index?: number
      ): string | number;
      adjust(): void;
      attachEvent(type: kanbanEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(soft?: boolean): void;
      copy(id: number | string): void;
      count(): number;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      eachList(func: WebixCallback): void;
      enable(): void;
      exists(id: number | string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value?: string,
        preserve?: boolean
      ): void;
      find(criterion: WebixCallback, first?: boolean): any;
      getChildViews(): webix.ui.baseview[];
      getColors(): DataCollection;
      getComments(): webix.ui.baseview;
      getEditor(): webix.ui.baseview;
      getFirstId(): number | string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number | string): string | number;
      getIndexById(id: number | string): number;
      getItem(id: number | string): obj;
      getLastId(): number | string;
      getMenu(): webix.ui.baseview;
      getNextId(id: number | string, step?: number): string | number;
      getNode(): HTMLElement;
      getOwnerList(itemId: string | number): webix.ui.list;
      getParentView(): webix.ui.baseview;
      getPrevId(id: number | string, step?: number): string | number;
      getSelectedId(): string | number;
      getStatuses(): any[];
      getTags(): DataCollection;
      getTopParentView(): webix.ui.baseview;
      getUserList(): webix.ui.baseview;
      getUsers(): DataCollection;
      hasEvent(name: string): boolean;
      hide(): void;
      index(obj: webix.ui.baseview): number;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
        clear?: boolean
      ): Promise<any>;
      mapEvent(map: WebixEventMap): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      reconstruct(): void;
      refresh(id?: number | string): void;
      remove(id: string | number | any[]): void;
      removeView(id: string | number | webix.ui.baseview): void;
      resize(): void;
      resizeChildren(): void;
      restore(state: obj, factory?: WebixCallback): void;
      select(id: string | number): void;
      serialize(all?: boolean): any[];
      show(force?: boolean, animation?: boolean): void;
      showBatch(name: string, mode?: boolean): void;
      showEditor(obj?: obj): void;
      sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      updateItem(id: number | string, data: obj): void;
      waitSave(handler: WebixCallback): Promise<any>;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: kanbanConfig;
      data: DataStore;
      name: string;
      waitData: Promise<any>;
    }
    interface labelConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      autowidth?: boolean;
      borderless?: boolean;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      icon?: string;
      id?: string | number;
      inputHeight?: number;
      inputWidth?: number;
      keyPressTimeout?: number;
      label?: string;
      labelPosition?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: EventHash;
      popup?: string;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      value?: string | number;
      width?: number;
    }
    type labelEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class label implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: labelEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setHTML(html: string): void;
      setValue(value: string, config?: any): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $compareValue: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $prepareValue: WebixCallback;
      $render: WebixCallback;
      $renderInput(config: webix.ui.buttonConfig & { [key: string]: any }): HTMLElement;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: labelConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface layoutConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      cols?: any[];
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      isolate?: boolean;
      margin?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      padding?: number | WebixPaddingConfig;
      paddingX?: number;
      paddingY?: number;
      responsive?: string;
      rows?: any[];
      type?: string;
      visibleBatch?: string;
      width?: number;
    }
    type layoutEventName = 'onBindRequest' | 'onDestruct' | 'onViewShow';
    class layout implements webix.ui.baseview {
      addView(
        view: webix.ui.baseview | (webix.ui.baseviewConfig & { [key: string]: any }),
        index?: number
      ): string | number;
      adjust(): void;
      attachEvent(type: layoutEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      index(obj: webix.ui.baseview): number;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      reconstruct(): void;
      removeView(id: string | number | webix.ui.baseview): void;
      resize(): void;
      resizeChildren(): void;
      restore(state: obj, factory: WebixCallback, configOnly?: boolean): void;
      serialize(serializer?: WebixCallback): obj;
      show(force?: boolean, animation?: boolean): void;
      showBatch(name: string, mode?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: layoutConfig;
      name: string;
    }
    interface listConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autoheight?: boolean;
      autowidth?: boolean;
      borderless?: boolean;
      click?: string | WebixCallback;
      clipboard?: boolean | string;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datafetch?: number;
      datathrottle?: number;
      datatype?: string;
      delimiter?: WebixDelimiterConfig;
      disabled?: boolean;
      drag?: boolean | string;
      dragscroll?: boolean | string;
      dynamic?: boolean;
      externalData?: WebixCallback;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      item?: WebixItemType | string;
      keyPressTimeout?: number;
      layout?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      multiselect?: string | boolean;
      navigation?: boolean;
      on?: EventHash;
      onClick?: EventHash;
      onContext?: EventHash;
      onDblClick?: EventHash;
      onMouseMove?: EventHash;
      pager?: string | WebixPagerConfig;
      prerender?: boolean;
      ready?: WebixCallback;
      removeMissed?: boolean;
      rules?: WebixValidationRules;
      save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
      scheme?: WebixDataScheme;
      scroll?: boolean | string;
      scrollSpeed?: string;
      select?: boolean | string;
      template?: string | WebixCallback;
      templateCopy?: WebixCallback;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: WebixItemType | string;
      url?: string | WebixCallback | WebixProxy;
      width?: number;
      xCount?: number;
      yCount?: number;
    }
    type listEventName =
      | 'onAfterAdd'
      | 'onAfterContextMenu'
      | 'onAfterDelete'
      | 'onAfterDrop'
      | 'onAfterLoad'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onAfterSelect'
      | 'onAfterSort'
      | 'onBeforeAdd'
      | 'onBeforeContextMenu'
      | 'onBeforeDelete'
      | 'onBeforeDrag'
      | 'onBeforeDragIn'
      | 'onBeforeDrop'
      | 'onBeforeDropOut'
      | 'onBeforeLoad'
      | 'onBeforeRender'
      | 'onBeforeSelect'
      | 'onBeforeSort'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDataRequest'
      | 'onDataUpdate'
      | 'onDestruct'
      | 'onDragOut'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onItemDblClick'
      | 'onItemRender'
      | 'onItemSingleClick'
      | 'onKeyPress'
      | 'onLoadError'
      | 'onLongTouch'
      | 'onMouseMove'
      | 'onMouseMoving'
      | 'onMouseOut'
      | 'onPaste'
      | 'onSelectChange'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTabFocus'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onValidationError'
      | 'onValidationSuccess'
      | 'onViewResize'
      | 'onViewShow';
    class list implements webix.ui.baseview {
      add(obj: obj, index?: number): string | number;
      addCss(id: string | number, css: string, silent?: boolean): void;
      adjust(): void;
      attachEvent(type: listEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(soft?: boolean): void;
      clearCss(css: string, silent?: boolean): void;
      clearValidation(): void;
      copy(
        sid: string | number,
        tindex: number,
        tobj?: WebixDataMoveTarget,
        details?: WebixDataMoveOptions
      ): void;
      count(): number;
      customize(obj: WebixItemType): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      disableItem(id: string | number): void;
      enable(): void;
      enableItem(id: string | number): void;
      exists(id: number | string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value?: string,
        preserve?: boolean
      ): void;
      find(criterion: WebixCallback, first?: boolean): any;
      getChildViews(): webix.ui.baseview[];
      getFirstId(): number | string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number | string): string | number;
      getIndexById(id: number | string): number;
      getItem(id: number | string): obj;
      getItemNode(id: string | number): HTMLElement;
      getLastId(): number | string;
      getNextId(id: number | string, step?: number): string | number;
      getNode(): HTMLElement;
      getPage(): number;
      getPager(): webix.ui.pager;
      getParentView(): webix.ui.baseview;
      getPrevId(id: number | string, step?: number): string | number;
      getScrollState(): WebixScrollState;
      getSelectedId(as_array?: boolean): any;
      getSelectedItem(as_array?: boolean): obj;
      getTopParentView(): webix.ui.baseview;
      getVisibleCount(): number;
      hasCss(id: string | number, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isItemEnabled(): boolean;
      isSelected(id: string | number): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
        clear?: boolean
      ): Promise<any>;
      locate(e: Event): string | number;
      mapEvent(map: WebixEventMap): void;
      move(
        sid: string,
        tindex: number,
        tobj?: webix.ui.baseview,
        details?: WebixDataMoveOptions
      ): string;
      moveBottom(id: string | number): void;
      moveDown(id: string | number, step: number): void;
      moveSelection(direction: string): void;
      moveTop(id: string | number): void;
      moveUp(id: string | number, step: number): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: number | string): void;
      remove(id: string | number | any[]): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      render(id: string | number, data: obj, type: WebixRenderType): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      select(id: string | any[], preserve?: boolean): void;
      selectAll(from?: string, to?: string): void;
      serialize(all?: boolean): any[];
      setPage(page: number): void;
      show(force?: boolean, animation?: boolean): void;
      showItem(id: string | number): void;
      sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      unselect(id?: string): void;
      unselectAll(): void;
      updateItem(id: number | string, data: obj): void;
      validate(id?: string): boolean;
      waitSave(handler: WebixCallback): Promise<any>;

      $customPrint: WebixCallback;
      $drag(source: HTMLElement, ev: Event, pointer: string): string;
      $dragHTML: WebixCallback;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragMark(context: WebixDnDContext, ev: Event): boolean;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event
      ): void;
      $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;
      $dropAllow: WebixCallback;
      $dropHTML: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $longTouchLimit: boolean;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: listConfig;
      data: DataStore;
      name: string;
      on_click: EventHash;
      on_context: EventHash;
      on_dblclick: EventHash;
      on_mouse_move: EventHash;
      type: WebixItemType;
      types: WebixItemTypes;
      waitData: Promise<any>;
    }
    interface mentionsuggestConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autofit?: boolean;
      autofocus?: boolean;
      body?: string | (webix.ui.baseviewConfig & { [key: string]: any });
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[];
      disabled?: boolean;
      escHide?: boolean;
      filter?: WebixCallback;
      fitMaster?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      input?: HTMLElement | string;
      keyPressTimeout?: number;
      left?: number;
      master?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      modal?: boolean;
      on?: EventHash;
      padding?: number;
      point?: boolean;
      position?: string | WebixCallback;
      relative?: string;
      resize?: boolean;
      symbol?: string;
      template?: string | WebixTemplate;
      textValue?: string;
      toFront?: boolean;
      top?: number;
      type?: string;
      url?: string;
      width?: number;
      zIndex?: number;
    }
    type mentionsuggestEventName =
      | 'onAfterScroll'
      | 'onBeforeShow'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onHide'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onShow'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onValueSuggest'
      | 'onViewMove'
      | 'onViewMoveEnd'
      | 'onViewResize'
      | 'onViewShow';
    class mentionsuggest implements webix.ui.baseview {
      adjust(): void;
      attachEvent(
        type: mentionsuggestEventName,
        functor: WebixCallback,
        id?: string
      ): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getBody(): webix.ui.baseview;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getItemId(text: string): string | number;
      getItemText(id: string | number): string;
      getList(): webix.ui.baseview;
      getMasterValue(): any;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getSuggestion(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): string | number;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      linkInput(input: HTMLElement): void;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      resizeChildren(): void;
      setMasterValue(value: any, refresh: boolean): void;
      setPosition(x: number, y: number): void;
      setValue(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $dragCreate(source: HTMLElement, event: Event, pointer: string): HTMLElement;
      $dragDestroy: WebixCallback;
      $dragPos: WebixCallback;
      $enterKey: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: mentionsuggestConfig;
      name: string;
    }
    interface menuConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autoheight?: boolean;
      autowidth?: boolean;
      borderless?: boolean;
      click?: string | WebixCallback;
      clipboard?: boolean | string;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datathrottle?: number;
      datatype?: string;
      delimiter?: WebixDelimiterConfig;
      disabled?: boolean;
      drag?: boolean | string;
      dragscroll?: boolean | string;
      externalData?: WebixCallback;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      item?: WebixItemType | string;
      keyPressTimeout?: number;
      layout?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      multiselect?: string | boolean;
      navigation?: boolean;
      on?: EventHash;
      onClick?: EventHash;
      onContext?: EventHash;
      onDblClick?: EventHash;
      onMouseMove?: EventHash;
      openAction?: string;
      pager?: string | WebixPagerConfig;
      prerender?: boolean;
      ready?: WebixCallback;
      removeMissed?: boolean;
      rules?: WebixValidationRules;
      save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
      scheme?: WebixDataScheme;
      scroll?: boolean | string;
      scrollSpeed?: string;
      select?: boolean | string;
      subMenuPos?: string;
      submenuConfig?: webix.ui.submenuConfig & { [key: string]: any };
      template?: string | WebixCallback;
      templateCopy?: WebixCallback;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: WebixItemType | string;
      url?: string | WebixCallback | WebixProxy;
      width?: number;
      xCount?: number;
      yCount?: number;
    }
    type menuEventName =
      | 'onAfterAdd'
      | 'onAfterContextMenu'
      | 'onAfterDelete'
      | 'onAfterDrop'
      | 'onAfterLoad'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onAfterSelect'
      | 'onAfterSort'
      | 'onBeforeAdd'
      | 'onBeforeContextMenu'
      | 'onBeforeDelete'
      | 'onBeforeDrag'
      | 'onBeforeDragIn'
      | 'onBeforeDrop'
      | 'onBeforeDropOut'
      | 'onBeforeLoad'
      | 'onBeforeRender'
      | 'onBeforeSelect'
      | 'onBeforeSort'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDataRequest'
      | 'onDataUpdate'
      | 'onDestruct'
      | 'onDragOut'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onItemDblClick'
      | 'onItemRender'
      | 'onItemSingleClick'
      | 'onKeyPress'
      | 'onLoadError'
      | 'onLongTouch'
      | 'onMenuItemClick'
      | 'onMouseMove'
      | 'onMouseMoving'
      | 'onMouseOut'
      | 'onPaste'
      | 'onSelectChange'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTabFocus'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onValidationError'
      | 'onValidationSuccess'
      | 'onViewResize'
      | 'onViewShow';
    class menu implements webix.ui.baseview {
      add(obj: obj, index?: number): string | number;
      addCss(id: string | number, css: string, silent?: boolean): void;
      adjust(): void;
      attachEvent(type: menuEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(soft?: boolean): void;
      clearCss(css: string, silent?: boolean): void;
      clearValidation(): void;
      copy(
        sid: string | number,
        tindex: number,
        tobj?: WebixDataMoveTarget,
        details?: WebixDataMoveOptions
      ): void;
      count(): number;
      customize(obj: WebixItemType): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      disableItem(id: string | number): void;
      enable(): void;
      enableItem(id: string | number): void;
      exists(id: number | string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value?: string,
        preserve?: boolean
      ): void;
      find(criterion: WebixCallback, first?: boolean): any;
      getChildViews(): webix.ui.baseview[];
      getFirstId(): number | string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number | string): string | number;
      getIndexById(id: number | string): number;
      getItem(id: number | string): obj;
      getItemNode(id: string | number): HTMLElement;
      getLastId(): number | string;
      getMenu(id: string | number): webix.ui.menu | webix.ui.submenu;
      getMenuItem(id: string | number): obj;
      getNextId(id: number | string, step?: number): string | number;
      getNode(): HTMLElement;
      getPage(): number;
      getPager(): webix.ui.pager;
      getParentView(): webix.ui.baseview;
      getPrevId(id: number | string, step?: number): string | number;
      getScrollState(): WebixScrollState;
      getSelectedId(as_array?: boolean): any;
      getSelectedItem(as_array?: boolean): obj;
      getSubMenu(id: string | number): webix.ui.menu | webix.ui.submenu;
      getTopMenu(): webix.ui.menu | webix.ui.submenu;
      getTopParentView(): webix.ui.baseview;
      getVisibleCount(): number;
      hasCss(id: string | number, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      hideMenuItem(id: string | number): void;
      isEnabled(): boolean;
      isItemEnabled(): boolean;
      isSelected(id: string | number): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
        clear?: boolean
      ): Promise<any>;
      locate(e: Event): string | number;
      mapEvent(map: WebixEventMap): void;
      move(
        sid: string,
        tindex: number,
        tobj?: webix.ui.baseview,
        details?: WebixDataMoveOptions
      ): string;
      moveBottom(id: string | number): void;
      moveDown(id: string | number, step: number): void;
      moveSelection(direction: string): void;
      moveTop(id: string | number): void;
      moveUp(id: string | number, step: number): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: number | string): void;
      remove(id: string | number | any[]): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      render(id: string | number, data: obj, type: WebixRenderType): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      select(id: string | any[], preserve?: boolean): void;
      selectAll(from?: string, to?: string): void;
      serialize(all?: boolean): any[];
      setPage(page: number): void;
      show(force?: boolean, animation?: boolean): void;
      showItem(id: string | number): void;
      showMenuItem(id: string | number): void;
      sizeToContent(): void;
      sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      unselect(id?: string): void;
      unselectAll(): void;
      updateItem(id: number | string, data: obj): void;
      validate(id?: string): boolean;
      waitSave(handler: WebixCallback): Promise<any>;

      $customPrint: WebixCallback;
      $drag(source: HTMLElement, ev: Event, pointer: string): string;
      $dragHTML: WebixCallback;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragMark(context: WebixDnDContext, ev: Event): boolean;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event
      ): void;
      $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;
      $dropAllow: WebixCallback;
      $dropHTML: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: menuConfig;
      data: DataStore;
      name: string;
      on_click: EventHash;
      on_context: EventHash;
      on_dblclick: EventHash;
      on_mouse_move: EventHash;
      type: WebixItemType;
      types: WebixItemTypes;
      waitData: Promise<any>;
    }
    interface multicomboConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      attributes?: obj;
      borderless?: boolean;
      bottomLabel?: string;
      bottomPadding?: number;
      button?: boolean;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      format?: string | WebixFormatConfig;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string | number;
      inputAlign?: string;
      inputHeight?: number;
      inputWidth?: number;
      invalid?: boolean;
      invalidMessage?: string;
      keepText?: boolean;
      keyPressTimeout?: number;
      label?: string;
      labelAlign?: string;
      labelPosition?: string;
      labelWidth?: number | string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      newValues?: boolean;
      on?: EventHash;
      optionWidth?: number;
      options?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      placeholder?: string;
      popup?: string;
      popupWidth?: number;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      separator?: string;
      stringResult?: boolean;
      suggest?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      tagMode?: boolean;
      tagTemplate?: WebixCallback;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      validate?: WebixCallback;
      validateEvent?: string;
      value?: number | string | any[];
      width?: number;
    }
    type multicomboEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class multicombo implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: multicomboEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getList(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getPopup(): webix.ui.baseview;
      getText(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(config?: WebixMulticomboValueConfig): any;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setBottomText(text: string): void;
      setValue(value: string | any[], config?: any): void;
      setValueHere(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $cssName: string;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $onBlur: WebixCallback;
      $prepareValue: WebixCallback;
      $render: WebixCallback;
      $renderInput(
        obj: webix.ui.textConfig & { [key: string]: any },
        html: string,
        id: string | number
      ): string;
      $renderLabel(
        config: webix.ui.textConfig & { [key: string]: any },
        id: string | number
      ): string;
      $renderTag(text: string, width: number, height: number, value: string): string;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: multicomboConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface multiselectConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      attributes?: obj;
      borderless?: boolean;
      bottomLabel?: string;
      bottomPadding?: number;
      clear?: boolean | string | number;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      format?: string | WebixFormatConfig;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string | number;
      inputAlign?: string;
      inputHeight?: number;
      inputWidth?: number;
      invalid?: boolean;
      invalidMessage?: string;
      keyPressTimeout?: number;
      label?: string;
      labelAlign?: string;
      labelPosition?: string;
      labelWidth?: number | string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: EventHash;
      optionWidth?: number;
      options?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      placeholder?: string;
      popup?: string;
      popupWidth?: number;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      separator?: string;
      stringResult?: boolean;
      suggest?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      validate?: WebixCallback;
      validateEvent?: string;
      value?: string | number | any[];
      width?: number;
    }
    type multiselectEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class multiselect implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: multiselectEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getList(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getPopup(): webix.ui.baseview;
      getText(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): any;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setBottomText(text: string): void;
      setValue(value: string | any[], config?: any): void;
      setValueHere(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $cssName: string;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $onBlur: WebixCallback;
      $prepareValue: WebixCallback;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(
        obj: webix.ui.textConfig & { [key: string]: any },
        html: string,
        id: string | number
      ): string;
      $renderLabel(
        config: webix.ui.textConfig & { [key: string]: any },
        id: string | number
      ): string;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: multiselectConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface multisuggestConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autofit?: boolean;
      autofocus?: boolean;
      body?: string | (webix.ui.baseviewConfig & { [key: string]: any });
      borderless?: boolean;
      button?: boolean;
      buttonText?: string;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[];
      disabled?: boolean;
      escHide?: boolean;
      filter?: WebixCallback;
      fitMaster?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      input?: HTMLElement | string;
      keyPressTimeout?: number;
      left?: number;
      master?: webix.ui.baseview;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      modal?: boolean;
      on?: EventHash;
      padding?: number;
      point?: boolean;
      position?: string | WebixCallback;
      relative?: string;
      resize?: boolean;
      separator?: string;
      template?: string | WebixTemplate;
      textValue?: string;
      toFront?: boolean;
      top?: number;
      type?: string;
      url?: string;
      value?: string | number;
      width?: number;
      zIndex?: number;
    }
    type multisuggestEventName =
      | 'onAfterScroll'
      | 'onBeforeShow'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onHide'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onShow'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onValueSuggest'
      | 'onViewMove'
      | 'onViewMoveEnd'
      | 'onViewResize'
      | 'onViewShow';
    class multisuggest implements webix.ui.baseview {
      adjust(): void;
      attachEvent(
        type: multisuggestEventName,
        functor: WebixCallback,
        id?: string
      ): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getBody(): webix.ui.baseview;
      getButton(): webix.ui.baseview;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getItemId(text: string): string | number;
      getItemText(id: string | number): string;
      getList(): webix.ui.baseview;
      getMasterValue(): any;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getSuggestion(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): string | number;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      linkInput(input: HTMLElement): void;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      resizeChildren(): void;
      setMasterValue(value: any, refresh: boolean): void;
      setPosition(x: number, y: number): void;
      setValue(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $dragCreate(source: HTMLElement, event: Event, pointer: string): HTMLElement;
      $dragDestroy: WebixCallback;
      $dragPos: WebixCallback;
      $enterKey: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: multisuggestConfig;
      name: string;
    }
    interface multitextConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      attributes?: obj;
      borderless?: boolean;
      bottomLabel?: string;
      bottomPadding?: number;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      format?: string | WebixFormatConfig;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      icon?: string;
      iconWidth?: string;
      id?: string | number;
      inputAlign?: string;
      inputHeight?: number;
      inputWidth?: number;
      invalid?: boolean;
      invalidMessage?: string;
      keyPressTimeout?: number;
      label?: string;
      labelAlign?: string;
      labelPosition?: string;
      labelWidth?: number | string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: EventHash;
      placeholder?: string;
      popup?: string;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      separator?: string;
      subConfig?: WebixMultitextSubConfig;
      suggest?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      validate?: WebixCallback;
      validateEvent?: string;
      value?: string | number;
      width?: number;
    }
    type multitextEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSectionAdd'
      | 'onSectionRemove'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class multitext implements webix.ui.baseview {
      addSection(text?: string): string | number;
      adjust(): void;
      attachEvent(type: multitextEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      getValueHere(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      removeSection(id?: string | number): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setBottomText(text: string): void;
      setValue(value: string, config?: any): void;
      setValueHere(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $cssName: string;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $prepareValue: WebixCallback;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(
        obj: webix.ui.textConfig & { [key: string]: any },
        html: string,
        id: string | number
      ): string;
      $renderLabel(
        config: webix.ui.textConfig & { [key: string]: any },
        id: string | number
      ): string;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: multitextConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface multiviewConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      cells?: webix.ui.baseview[];
      cols?: any[];
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      fitBiggest?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keepViews?: boolean;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      responsive?: string;
      rows?: any[];
      visibleBatch?: string;
      width?: number;
    }
    type multiviewEventName =
      | 'onBeforeBack'
      | 'onBindRequest'
      | 'onDestruct'
      | 'onViewChange'
      | 'onViewShow';
    class multiview implements webix.ui.baseview {
      addView(
        view: webix.ui.baseview | (webix.ui.baseviewConfig & { [key: string]: any }),
        index?: number
      ): string | number;
      adjust(): void;
      attachEvent(type: multiviewEventName, functor: WebixCallback, id?: string): string | number;
      back(step: number): void;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getActiveId(): string;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): string | number;
      hasEvent(name: string): boolean;
      hide(): void;
      index(obj: webix.ui.baseview): number;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      reconstruct(): void;
      removeView(id: string | number | webix.ui.baseview): void;
      resize(): void;
      resizeChildren(): void;
      setValue(id: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      showBatch(name: string, mode?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: multiviewConfig;
      name: string;
    }
    interface pagerConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      apiOnly?: boolean;
      borderless?: boolean;
      container?: string | HTMLElement;
      count?: number;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      group?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      level?: number;
      limit?: number;
      master?: boolean;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      on?: EventHash;
      onClick?: EventHash;
      onContext?: EventHash;
      onDblClick?: EventHash;
      onMouseMove?: EventHash;
      page?: number;
      size?: number;
      template?: string | WebixCallback;
      width?: number;
    }
    type pagerEventName =
      | 'onAfterContextMenu'
      | 'onAfterPageChange'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeContextMenu'
      | 'onBeforePageChange'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onItemDblClick'
      | 'onItemSingleClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onMouseMove'
      | 'onMouseMoving'
      | 'onMouseOut'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class pager implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: pagerEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clone(config: WebixPagerConfig): void;
      customize(obj: WebixItemType): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: string | number): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      select(page: number): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: pagerConfig;
      name: string;
      on_click: EventHash;
      on_context: EventHash;
      on_dblclick: EventHash;
      on_mouse_move: EventHash;
      type: WebixItemType;
    }
    interface panelConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      body?: string | (webix.ui.baseviewConfig & { [key: string]: any });
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      header?: string | (webix.ui.baseviewConfig & { [key: string]: any });
      height?: number;
      hidden?: boolean;
      icon?: string | boolean;
      id?: string | number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      padding?: number | WebixPaddingConfig;
      paddingX?: number;
      paddingY?: number;
      resize?: boolean;
      type?: string;
      width?: number;
    }
    type panelEventName = 'onBindRequest' | 'onDestruct' | 'onViewResize' | 'onViewShow';
    class panel implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: panelEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $resizeEnd(pos: WebixPanelResizeEndPos): void;
      $resizeMove(pos: WebixPanelResizeMovePos): void;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: panelConfig;
      name: string;
    }
    interface pdfviewerConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datatype?: string;
      disabled?: boolean;
      downloadName?: string;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      scale?: string | number;
      toolbar?: string;
      url?: string | WebixCallback | WebixProxy;
      width?: number;
    }
    type pdfviewerEventName =
      | 'onAfterLoad'
      | 'onAfterScroll'
      | 'onBeforeLoad'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onDocumentReady'
      | 'onEnter'
      | 'onFocus'
      | 'onKeyPress'
      | 'onLoadError'
      | 'onLongTouch'
      | 'onPageRender'
      | 'onScaleChange'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class pdfviewer implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: pdfviewerEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clear(): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      download(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getPopup(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(url: string, type?: string, callback?: WebixCallback): Promise<any>;
      mapEvent(map: WebixEventMap): void;
      nextPage(): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      prevPage(): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      renderPage(page: number): void;
      resize(): void;
      setScale(scale: string | number, update: boolean): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      zoomIn(): void;
      zoomOut(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $numPages: number;
      $onLoad: WebixCallback;
      $pageNum: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: pdfviewerConfig;
      name: string;
    }
    interface pivotConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      chart?: webix.ui.chartConfig & { [key: string]: any };
      compact?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      datatable?: webix.ui.datatableConfig & { [key: string]: any };
      defaultOperation?: string;
      disabled?: boolean;
      externalProcessing?: boolean;
      fields?: any[];
      freezeColumns?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      locale?: WebixLocaleConfig;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mode?: string;
      on?: EventHash;
      operations?: WebixPivotOperationsConfig;
      override?: any[];
      predicates?: obj;
      readonly?: boolean;
      structure?: WebixPivotStructure;
      totalOperations?: WebixPivotTotalOperationsConfig;
      url?: string;
      width?: number;
    }
    type pivotEventName =
      | 'onAfterScroll'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFilterChange'
      | 'onFocus'
      | 'onInit'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class pivot implements webix.ui.baseview {
      adjust(): void;
      app(app: obj): void;
      attachEvent(type: pivotEventName, functor: WebixCallback, id?: string): string | number;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getService(service: string): obj;
      getState(): obj;
      getStructure(): WebixPivotStructure;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      setStructure(config: WebixPivotStructure): void;
      show(force?: boolean, animation?: boolean): void;
      unblockEvent(): void;

      bind(target: any, rule?: WebixCallback, format?: string): void;
      unbind(): void;
      $app: WebixJetAppWrapper;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: pivotConfig;
      name: string;
    }
    interface popupConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autofit?: boolean;
      autofocus?: boolean;
      body?: string | (webix.ui.baseviewConfig & { [key: string]: any });
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      escHide?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      left?: number;
      master?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      modal?: boolean;
      on?: EventHash;
      padding?: number;
      point?: boolean;
      position?: string | WebixCallback;
      relative?: string;
      resize?: boolean;
      toFront?: boolean;
      top?: number;
      width?: number;
      zIndex?: number;
    }
    type popupEventName =
      | 'onAfterScroll'
      | 'onBeforeShow'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onHide'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onShow'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewMove'
      | 'onViewMoveEnd'
      | 'onViewResize'
      | 'onViewShow';
    class popup implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: popupEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getBody(): webix.ui.baseview;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      resizeChildren(): void;
      setPosition(x: number, y: number): void;
      show(node?: HTMLElement, position?: WebixWindowPosConfig, point?: string): void;
      unbind(): void;
      unblockEvent(): void;
      show(force: boolean, animation: boolean): void;
      $dragCreate(source: HTMLElement, event: Event, pointer: string): HTMLElement;
      $dragDestroy: WebixCallback;
      $dragPos: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: popupConfig;
      name: string;
    }
    interface portletConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      body?: string | (webix.ui.baseviewConfig & { [key: string]: any });
      borderless?: boolean;
      cols?: any[];
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      icon?: boolean | string;
      id?: string | number;
      isolate?: boolean;
      layoutType?: string;
      margin?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mode?: string;
      on?: EventHash;
      padding?: number | WebixPaddingConfig;
      paddingX?: number;
      paddingY?: number;
      responsive?: string;
      rows?: any[];
      type?: string;
      visibleBatch?: string;
      width?: number;
    }
    type portletEventName =
      | 'onAfterPortletMove'
      | 'onBeforePortletMove'
      | 'onBindRequest'
      | 'onDestruct'
      | 'onViewShow';
    class portlet implements webix.ui.baseview {
      addView(
        view: webix.ui.baseview | (webix.ui.baseviewConfig & { [key: string]: any }),
        index?: number
      ): string | number;
      adjust(): void;
      attachEvent(type: portletEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      index(obj: webix.ui.baseview): number;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      markDropArea(target: string, mode: string): void;
      movePortlet(target: string, mode: string): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      reconstruct(): void;
      removeView(id: string | number | webix.ui.baseview): void;
      resize(): void;
      resizeChildren(): void;
      restore(state: obj, factory: WebixCallback): void;
      serialize(serializer?: WebixCallback): obj;
      show(force?: boolean, animation?: boolean): void;
      showBatch(name: string, mode?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $drag(source: HTMLElement, ev: Event, pointer: string): string;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: portletConfig;
      name: string;
    }
    interface propertyConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autoheight?: boolean;
      borderless?: boolean;
      complexData?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datatype?: string;
      disabled?: boolean;
      editValue?: string;
      editable?: boolean;
      editaction?: string;
      elements?: WebixPropertyElementsConfig;
      form?: string;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      map?: WebixDataMap;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      nameWidth?: number;
      on?: EventHash;
      onClick?: EventHash;
      onContext?: EventHash;
      onDblClick?: EventHash;
      onMouseMove?: EventHash;
      scroll?: boolean | string;
      scrollSpeed?: string;
      template?: string | WebixCallback;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      url?: string | WebixCallback | WebixProxy;
      width?: number;
    }
    type propertyEventName =
      | 'onAfterContextMenu'
      | 'onAfterEditStart'
      | 'onAfterEditStop'
      | 'onAfterLoad'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeContextMenu'
      | 'onBeforeEditStart'
      | 'onBeforeEditStop'
      | 'onBeforeLoad'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onCheck'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onItemDblClick'
      | 'onItemSingleClick'
      | 'onKeyPress'
      | 'onLiveEdit'
      | 'onLoadError'
      | 'onLongTouch'
      | 'onMouseMove'
      | 'onMouseMoving'
      | 'onMouseOut'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class property implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: propertyEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clear(): void;
      customize(obj: WebixItemType): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      edit(id: WebixCellObject): void;
      editCancel(): void;
      editNext(): void;
      editStop(): void;
      enable(): void;
      focusEditor(id: WebixCellObject): void;
      getChildViews(): webix.ui.baseview[];
      getEditState(): WebixEditorObject;
      getEditor(id?: string): WebixEditorObject;
      getEditorValue(): string;
      getFormView(): webix.ui.baseview;
      getItem(id: string): obj;
      getItemNode(id: string | number): HTMLElement;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getScrollState(): WebixScrollState;
      getTopParentView(): webix.ui.baseview;
      getValues(): obj;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      locate(e: Event): string | number;
      mapEvent(map: WebixEventMap): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: string | number): void;
      registerType(name: string, data: obj): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      setValues(values: obj, update?: boolean, config?: any): void;
      show(force?: boolean, animation?: boolean): void;
      showItem(id: string | number): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      updateItem(): void;
      validateEditor(id?: string | number): boolean;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: propertyConfig;
      name: string;
      on_click: EventHash;
      on_context: EventHash;
      on_dblclick: EventHash;
      on_edit: obj;
      on_mouse_move: EventHash;
      on_render: obj;
      type: WebixItemType;
    }
    interface proxyConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      body?: webix.ui.baseviewConfig & { [key: string]: any };
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      width?: number;
    }
    type proxyEventName =
      | 'onAfterScroll'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class proxy implements webix.ui.baseview {
      adjust(): void;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: proxyConfig;
      name: string;
    }
    interface queryConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: any[] | WebixCallback;
      disabled?: boolean;
      fields?: any[];
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      locale?: WebixLocaleConfig;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      override?: any[];
      simple?: boolean;
      value?: WebixQueryValue;
      width?: number;
    }
    type queryEventName =
      | 'onAfterScroll'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onInit'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class query implements webix.ui.baseview {
      adjust(): void;
      app(app: obj): void;
      attachEvent(type: queryEventName, functor: WebixCallback, id?: string): string | number;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFilterFunction(): WebixCallback;
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getService(service: string): obj;
      getState(): obj;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unblockEvent(): void;

      bind(target: any, rule?: WebixCallback, format?: string): void;
      unbind(): void;
      $app: WebixJetAppWrapper;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: queryConfig;
      name: string;
    }
    interface radioConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      attributes?: obj;
      autoheight?: boolean;
      autowidth?: boolean;
      borderless?: boolean;
      bottomLabel?: string;
      bottomPadding?: number;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      customRadio?: boolean;
      disabled?: boolean;
      format?: string | WebixFormatConfig;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string | number;
      inputAlign?: string;
      inputHeight?: number;
      inputWidth?: number;
      invalidMessage?: string;
      keyPressTimeout?: number;
      label?: string;
      labelAlign?: string;
      labelPosition?: string;
      labelWidth?: number | string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      newline?: boolean;
      on?: EventHash;
      optionHeight?: number;
      options?: any[];
      popup?: string;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      suggest?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      validate?: WebixCallback;
      validateEvent?: string;
      value?: string | number;
      vertical?: boolean;
      width?: number;
    }
    type radioEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onOptionAdd'
      | 'onOptionRemove'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class radio implements webix.ui.baseview {
      addOption(id: string | number, value: any, show?: boolean, index?: number): void;
      adjust(): void;
      attachEvent(type: radioEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      disableOption(id: string | number): void;
      enable(): void;
      enableOption(id: string | number): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getOption(id: string | number): obj;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      hideOption(id: string | number): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      optionIndex(ID: string | number): number;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      removeOption(id: string | number): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setBottomText(text: string): void;
      setValue(value: number | string, config?: any): void;
      setValueHere(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      showOption(id: string | number): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $prepareValue: WebixCallback;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(
        obj: webix.ui.textConfig & { [key: string]: any },
        html: string,
        id: string | number
      ): string;
      $renderLabel(
        config: webix.ui.textConfig & { [key: string]: any },
        id: string | number
      ): string;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: radioConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface rangechartConfig {
      view?: string;
      alpha?: number;
      animate?: boolean | WebixAnimate;
      ariaLabel?: string;
      barOffset?: number;
      barWidth?: number;
      border?: boolean;
      borderColor?: string;
      borderWidth?: number;
      borderless?: boolean;
      cant?: number;
      color?: string | WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datathrottle?: number;
      datatype?: string;
      disableLines?: boolean;
      disabled?: boolean;
      donutInnerText?: string | WebixCallback;
      eventRadius?: number;
      fill?: string;
      fixOverflow?: boolean;
      frameId?: string;
      gradient?: boolean | string | WebixCallback;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      item?: WebixChartItemConfig;
      keyPressTimeout?: number;
      label?: string | WebixCallback;
      labelOffset?: number;
      legend?: WebixChartLegendConfig;
      line?: WebixChartLineConfig;
      lineColor?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      offset?: boolean;
      on?: EventHash;
      onClick?: EventHash;
      onContext?: EventHash;
      onDblClick?: EventHash;
      onMouseMove?: EventHash;
      origin?: number | string;
      padding?: string | WebixPaddingConfig;
      pieInnerText?: string | WebixCallback;
      preset?: WebixChartPreset;
      radius?: number;
      range?: WebixRangechartRange;
      ready?: WebixCallback;
      removeMissed?: boolean;
      save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
      scale?: string;
      scheme?: WebixDataScheme;
      series?: WebixChartSeriesConfig;
      shadow?: boolean;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: string;
      url?: string | WebixCallback | WebixProxy;
      value?: string | WebixTemplate;
      width?: number;
      x?: number;
      xAxis?: WebixChartXAxisConfig;
      xValue?: string;
      y?: number;
      yAxis?: WebixChartYAxisConfig;
      yValue?: string;
    }
    type rangechartEventName =
      | 'onAfterAdd'
      | 'onAfterContextMenu'
      | 'onAfterDelete'
      | 'onAfterLoad'
      | 'onAfterRangeChange'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onAfterSort'
      | 'onBeforeAdd'
      | 'onBeforeContextMenu'
      | 'onBeforeDelete'
      | 'onBeforeLoad'
      | 'onBeforeRender'
      | 'onBeforeSort'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDataRequest'
      | 'onDataUpdate'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onItemDblClick'
      | 'onItemSingleClick'
      | 'onKeyPress'
      | 'onLegendClick'
      | 'onLoadError'
      | 'onLongTouch'
      | 'onMouseMove'
      | 'onMouseMoving'
      | 'onMouseOut'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTabFocus'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class rangechart implements webix.ui.baseview {
      add(obj: obj, index?: number): string | number;
      addSeries(obj: webix.ui.chartConfig & { [key: string]: any }): void;
      adjust(): void;
      attachEvent(type: rangechartEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(soft?: boolean): void;
      clearCanvas(): void;
      count(): number;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      exists(id: number | string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value?: string,
        preserve?: boolean
      ): void;
      find(criterion: WebixCallback, first?: boolean): any;
      getChildViews(): webix.ui.baseview[];
      getFirstId(): number | string;
      getFormView(): webix.ui.baseview;
      getFrameData(): any[];
      getFrameRange(): WebixRangechartRange;
      getIdByIndex(index: number | string): string | number;
      getIndexById(id: number | string): number;
      getItem(id: number | string): obj;
      getLastId(): number | string;
      getNextId(id: number | string, step?: number): string | number;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getPrevId(id: number | string, step?: number): string | number;
      getTopParentView(): webix.ui.baseview;
      group(config: WebixGroupConfig, target?: string | number): void;
      hasEvent(name: string): boolean;
      hide(): void;
      hideSeries(index: number): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
        clear?: boolean
      ): Promise<any>;
      locate(e: Event): string | number;
      mapEvent(map: WebixEventMap): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: number | string): void;
      remove(id: string | number | any[]): void;
      removeAllSeries(): void;
      render(id: string | number, data: obj, type: string): void;
      resize(): void;
      serialize(all?: boolean): any[];
      setFrameRange(range: WebixRangechartRange): void;
      show(force?: boolean, animation?: boolean): void;
      showSeries(index: number): void;
      sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      ungroup(mode: boolean): void;
      updateItem(id: number | string, data: obj): void;
      waitSave(handler: WebixCallback): Promise<any>;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      colormap: WebixChartColormap;
      config: rangechartConfig;
      data: DataStore;
      name: string;
      on_click: EventHash;
      on_context: EventHash;
      on_dblclick: EventHash;
      on_mouse_move: EventHash;
      presets: WebixChartPresets;
      waitData: Promise<any>;
    }
    interface rangesliderConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      attributes?: obj;
      borderless?: boolean;
      bottomLabel?: string;
      bottomPadding?: number;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      format?: string | WebixFormatConfig;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string | number;
      inputAlign?: string;
      inputHeight?: number;
      inputWidth?: number;
      invalidMessage?: string;
      keyPressTimeout?: number;
      label?: string;
      labelAlign?: string;
      labelPosition?: string;
      labelWidth?: number | string;
      max?: number;
      maxHeight?: number;
      maxWidth?: number;
      min?: number;
      minHeight?: number;
      minWidth?: number;
      moveTitle?: boolean;
      name?: string;
      on?: EventHash;
      popup?: string;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      separator?: string;
      step?: number;
      stringResult?: boolean;
      title?: string | WebixCallback;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: string;
      validate?: WebixCallback;
      validateEvent?: string;
      value?: string | any[];
      vertical?: boolean;
      width?: number;
    }
    type rangesliderEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSliderDrag'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class rangeslider implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: rangesliderEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): any;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setBottomText(text: string): void;
      setValue(value: string | any[]): void;
      setValueHere(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $cssName: string;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $prepareValue: WebixCallback;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(
        obj: webix.ui.textConfig & { [key: string]: any },
        html: string,
        id: string | number
      ): string;
      $renderLabel(
        config: webix.ui.textConfig & { [key: string]: any },
        id: string | number
      ): string;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $touchCapture: boolean;
      $view: HTMLElement;
      $width: number;
      config: rangesliderConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface resizerConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      onContext?: EventHash;
      width?: number;
    }
    type resizerEventName = 'onItemSingleClick' | 'onViewShow';
    class resizer implements webix.ui.baseview {
      adjust(): void;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: resizerConfig;
      name: string;
      on_click: EventHash;
      on_context: EventHash;
      on_dblclick: EventHash;
      on_mouse_move: EventHash;
    }
    interface reportsConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      locale?: WebixLocaleConfig;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mode?: string;
      moduleId?: string;
      on?: EventHash;
      override?: any[];
      readonly?: boolean;
      toolbar?: boolean;
      url?: string;
      width?: number;
    }
    type reportsEventName =
      | 'onAfterScroll'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onInit'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class reports implements webix.ui.baseview {
      adjust(): void;
      app(app: obj): void;
      attachEvent(type: reportsEventName, functor: WebixCallback, id?: string): string | number;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getService(service: string): obj;
      getState(): obj;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unblockEvent(): void;

      bind(target: any, rule?: WebixCallback, format?: string): void;
      unbind(): void;
      $app: WebixJetAppWrapper;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: reportsConfig;
      name: string;
    }
    interface richselectConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      attributes?: obj;
      borderless?: boolean;
      bottomLabel?: string;
      bottomPadding?: number;
      clear?: boolean | string | number;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      format?: string | WebixFormatConfig;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      icon?: string;
      id?: string | number;
      inputAlign?: string;
      inputHeight?: number;
      inputWidth?: number;
      invalid?: boolean;
      invalidMessage?: string;
      keyPressTimeout?: number;
      label?: string;
      labelAlign?: string;
      labelPosition?: string;
      labelWidth?: number | string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: EventHash;
      options?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      placeholder?: string;
      popup?: string;
      popupWidth?: number;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      suggest?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      validate?: WebixCallback;
      validateEvent?: string;
      value?: string | number;
      width?: number;
    }
    type richselectEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class richselect implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: richselectEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getList(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getPopup(): webix.ui.baseview;
      getText(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setBottomText(text: string): void;
      setValue(value: string, config?: any): void;
      setValueHere(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $onBlur: WebixCallback;
      $prepareValue: WebixCallback;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(
        obj: webix.ui.textConfig & { [key: string]: any },
        html: string,
        id: string | number
      ): string;
      $renderLabel(
        config: webix.ui.textConfig & { [key: string]: any },
        id: string | number
      ): string;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: richselectConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface richtextConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      label?: string;
      labelPosition?: string;
      labelWidth?: number | string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      padding?: number | WebixPaddingConfig;
      paddingX?: number;
      paddingY?: number;
      type?: string;
      value?: string | number;
      width?: number;
    }
    type richtextEventName = 'onBindRequest' | 'onChange' | 'onDestruct' | 'onViewShow';
    class richtext implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: richtextEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      innerId(id: number | string): number | string;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      resize(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      ui<T extends webix.ui.baseview>(view: webix.ui.baseviewConfig & { [key: string]: any }): T;
      unbind(): void;
      unblockEvent(): void;

      $$: webix.ui.baseview;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $prepareValue: WebixCallback;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: richtextConfig;
      name: string;
    }
    interface scrollviewConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      body?: webix.ui.baseviewConfig & { [key: string]: any };
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      scroll?: boolean | string;
      scrollSpeed?: string;
      width?: number;
    }
    type scrollviewEventName =
      | 'onAfterScroll'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class scrollview implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: scrollviewEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getBody(): webix.ui.baseview;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getScrollState(): WebixScrollState;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      resizeChildren(): void;
      scrollTo(x: number, y: number): void;
      show(force?: boolean, animation?: boolean): void;
      showView(id: string | number): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: scrollviewConfig;
      name: string;
    }
    interface searchConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      attributes?: obj;
      autowidth?: boolean;
      borderless?: boolean;
      bottomLabel?: string;
      bottomPadding?: number;
      clear?: boolean | string | number;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      format?: string | WebixFormatConfig;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      icon?: string;
      id?: string | number;
      inputAlign?: string;
      inputHeight?: number;
      inputWidth?: number;
      invalid?: boolean;
      invalidMessage?: string;
      keyPressTimeout?: number;
      label?: string;
      labelAlign?: string;
      labelPosition?: string;
      labelWidth?: number | string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: EventHash;
      pattern?: WebixTextPattern | string;
      placeholder?: string;
      popup?: string;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      suggest?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: string;
      validate?: WebixCallback;
      validateEvent?: string;
      value?: string | number;
      width?: number;
    }
    type searchEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSearchIconClick'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class search implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: searchEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setBottomText(text: string): void;
      setValue(value: string, config?: any): void;
      setValueHere(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $prepareValue: WebixCallback;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(
        obj: webix.ui.textConfig & { [key: string]: any },
        html: string,
        id: string | number
      ): string;
      $renderLabel(
        config: webix.ui.textConfig & { [key: string]: any },
        id: string | number
      ): string;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: searchConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface segmentedConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      attributes?: obj;
      borderless?: boolean;
      bottomLabel?: string;
      bottomPadding?: number;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      format?: string | WebixFormatConfig;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string | number;
      inputAlign?: string;
      inputHeight?: number;
      inputWidth?: number;
      invalidMessage?: string;
      keyPressTimeout?: number;
      label?: string;
      labelAlign?: string;
      labelPosition?: string;
      labelWidth?: number | string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      multiview?: boolean;
      name?: string;
      on?: EventHash;
      optionWidth?: number;
      options?: any[];
      popup?: string;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      suggest?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      validate?: WebixCallback;
      validateEvent?: string;
      value?: string;
      width?: number;
    }
    type segmentedEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onAfterTabClick'
      | 'onBeforeRender'
      | 'onBeforeTabClick'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onOptionAdd'
      | 'onOptionRemove'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class segmented implements webix.ui.baseview {
      addOption(id: string | number, value: any, show?: boolean, index?: number): void;
      adjust(): void;
      attachEvent(type: segmentedEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      disableOption(id: string | number): void;
      enable(): void;
      enableOption(id: string | number): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getOption(id: string | number): obj;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      hideOption(id: string | number): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      optionIndex(ID: string | number): number;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      removeOption(id: string | number): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setBottomText(text: string): void;
      setValue(value: string, config?: any): void;
      setValueHere(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      showOption(id: string | number): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $prepareValue: WebixCallback;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(
        obj: webix.ui.textConfig & { [key: string]: any },
        html: string,
        id: string | number
      ): string;
      $renderLabel(
        config: webix.ui.textConfig & { [key: string]: any },
        id: string | number
      ): string;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: segmentedConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface selectConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      attributes?: obj;
      borderless?: boolean;
      bottomLabel?: string;
      bottomPadding?: number;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      format?: string | WebixFormatConfig;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string | number;
      inputAlign?: string;
      inputHeight?: number;
      inputWidth?: number;
      invalid?: boolean;
      invalidMessage?: string;
      keyPressTimeout?: number;
      label?: string;
      labelAlign?: string;
      labelPosition?: string;
      labelWidth?: number | string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: EventHash;
      options?: any[] | string;
      placeholder?: string;
      popup?: string;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      suggest?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      validate?: WebixCallback;
      validateEvent?: string;
      value?: string | number;
      width?: number;
    }
    type selectEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class select implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: selectEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setBottomText(text: string): void;
      setValue(value: number | string): void;
      setValueHere(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $prepareValue: WebixCallback;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(
        obj: webix.ui.textConfig & { [key: string]: any },
        html: string,
        id: string | number
      ): string;
      $renderLabel(
        config: webix.ui.textConfig & { [key: string]: any },
        id: string | number
      ): string;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: selectConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface sidebarConfig {
      view?: string;
      activeTitle?: boolean;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      click?: string | WebixCallback;
      clipboard?: boolean | string;
      collapsed?: boolean;
      collapsedWidth?: number;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datathrottle?: number;
      datatype?: string;
      delimiter?: WebixDelimiterConfig;
      disabled?: boolean;
      drag?: boolean | string;
      dragscroll?: boolean | string;
      filterMode?: WebixTreeFilterMode;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      item?: WebixItemType | string;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      multipleOpen?: boolean;
      navigation?: boolean;
      on?: EventHash;
      onClick?: EventHash;
      onContext?: EventHash;
      onDblClick?: EventHash;
      onMouseMove?: EventHash;
      pager?: string | WebixPagerConfig;
      position?: string;
      prerender?: boolean;
      ready?: WebixCallback;
      removeMissed?: boolean;
      rules?: WebixValidationRules;
      save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
      scheme?: WebixDataScheme;
      scroll?: boolean | string;
      scrollSpeed?: string;
      select?: boolean | string;
      template?: string | WebixCallback;
      templateCopy?: WebixCallback;
      threeState?: boolean;
      titleHeight?: number;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: WebixItemType | string;
      url?: string | WebixCallback | WebixProxy;
      width?: number;
    }
    type sidebarEventName =
      | 'onAfterAdd'
      | 'onAfterClose'
      | 'onAfterContextMenu'
      | 'onAfterDelete'
      | 'onAfterDrop'
      | 'onAfterLoad'
      | 'onAfterOpen'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onAfterSelect'
      | 'onAfterSort'
      | 'onBeforeAdd'
      | 'onBeforeClose'
      | 'onBeforeContextMenu'
      | 'onBeforeDelete'
      | 'onBeforeDrag'
      | 'onBeforeDragIn'
      | 'onBeforeDrop'
      | 'onBeforeDropOut'
      | 'onBeforeLoad'
      | 'onBeforeOpen'
      | 'onBeforeRender'
      | 'onBeforeSelect'
      | 'onBeforeSort'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDataRequest'
      | 'onDataUpdate'
      | 'onDestruct'
      | 'onDragOut'
      | 'onEnter'
      | 'onFocus'
      | 'onItemCheck'
      | 'onItemClick'
      | 'onItemDblClick'
      | 'onItemRender'
      | 'onItemSingleClick'
      | 'onKeyPress'
      | 'onLoadError'
      | 'onLongTouch'
      | 'onMouseMove'
      | 'onMouseMoving'
      | 'onMouseOut'
      | 'onPartialRender'
      | 'onPaste'
      | 'onSelectChange'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTabFocus'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onValidationError'
      | 'onValidationSuccess'
      | 'onViewResize'
      | 'onViewShow';
    class sidebar implements webix.ui.baseview {
      add(obj: obj, index?: number): string | number;
      addCss(id: string | number, css: string, silent?: boolean): void;
      adjust(): void;
      attachEvent(type: sidebarEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      checkAll(id?: string | number): void;
      checkItem(id: string): void;
      clearAll(soft?: boolean): void;
      clearCss(css: string, silent?: boolean): void;
      clearValidation(): void;
      close(id: string | number): void;
      closeAll(): void;
      collapse(): void;
      copy(
        sid: string | number,
        tindex: number,
        tobj?: WebixDataMoveTarget,
        details?: WebixTreeDataMoveOptions
      ): number;
      count(): number;
      customize(obj: WebixItemType): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      exists(id: number | string): boolean;
      expand(): void;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value?: string,
        preserve?: boolean
      ): void;
      find(criterion: WebixCallback, first?: boolean): any;
      getBranchIndex(id: string | number): number;
      getChecked(): any[];
      getChildViews(): webix.ui.baseview[];
      getFirstChildId(id: string | number): string;
      getFirstId(): number | string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number | string): string | number;
      getIndexById(id: number | string): number;
      getItem(id: number | string): obj;
      getItemNode(id: string | number): HTMLElement;
      getLastId(): number | string;
      getNextId(id: number | string, step?: number): string | number;
      getNextSiblingId(id: string | number): string | number;
      getNode(): HTMLElement;
      getOpenItems(): any[];
      getPage(): number;
      getPager(): webix.ui.pager;
      getParentId(id: string | number): string | number;
      getParentView(): webix.ui.baseview;
      getPopup(): webix.ui.popup;
      getPrevId(id: number | string, step?: number): string | number;
      getPrevSiblingId(id: string | number): string | number;
      getScrollState(): WebixScrollState;
      getSelectedId(as_array?: boolean): any;
      getSelectedItem(as_array?: boolean): obj;
      getState(): WebixTreeState;
      getTopParentView(): webix.ui.baseview;
      group(config: WebixGroupConfig, target?: string | number): void;
      hasCss(id: string | number, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      isBranch(id: string | number): boolean;
      isBranchOpen(id: string | number): boolean;
      isChecked(id: string | number): boolean;
      isEnabled(): boolean;
      isSelected(id: string | number): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      loadBranch(id: string | number, callback: WebixCallback, url: string): Promise<any>;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
        clear?: boolean
      ): Promise<any>;
      locate(e: Event): string | number;
      mapEvent(map: WebixEventMap): void;
      move(
        sid: string,
        tindex: number,
        tobj?: webix.ui.baseview,
        details?: WebixDataMoveOptions
      ): string;
      moveBottom(id: string | number, parentId: string | number): void;
      moveDown(id: string | number, step: number): void;
      moveSelection(direction: string): void;
      moveTop(id: string | number, parentId: string | number): void;
      moveUp(id: string | number, step: number): void;
      open(id: string | number, show?: boolean): void;
      openAll(): void;
      parse(data: string | any[] | obj, type: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: number | string): void;
      remove(id: string | number | any[]): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      render(id: string | number, data: obj, type: WebixRenderType): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      select(id: string): void;
      serialize(all?: boolean): any[];
      setPage(page: number): void;
      setState(state: WebixTreeState): void;
      show(force?: boolean, animation?: boolean): void;
      showItem(id: string | number): void;
      sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      toggle(): void;
      unbind(): void;
      unblockEvent(): void;
      uncheckAll(id?: string | number): void;
      uncheckItem(id: string): void;
      ungroup(mode: boolean): void;
      unselect(id?: string): void;
      unselectAll(): void;
      updateItem(id: number | string, data: obj): void;
      validate(id?: string): boolean;
      waitSave(handler: WebixCallback): Promise<any>;

      $drag(source: HTMLElement, ev: Event, pointer: string): string;
      $dragHTML: WebixCallback;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragMark(context: WebixDnDContext, ev: Event): boolean;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event
      ): void;
      $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;
      $dropAllow: WebixCallback;
      $dropHTML: WebixCallback;
      $fixEditor: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: sidebarConfig;
      data: DataStore;
      name: string;
      on_click: EventHash;
      on_context: EventHash;
      on_dblclick: EventHash;
      on_mouse_move: EventHash;
      type: WebixItemType;
      types: WebixItemTypes;
      waitData: Promise<any>;
    }
    interface sidemenuConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autofit?: boolean;
      autofocus?: boolean;
      body?: string | (webix.ui.baseviewConfig & { [key: string]: any });
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      escHide?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      left?: number;
      master?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      modal?: boolean;
      on?: EventHash;
      padding?: number;
      point?: boolean;
      position?: string | WebixCallback;
      relative?: string;
      resize?: boolean;
      state?: WebixCallback;
      toFront?: boolean;
      top?: number;
      width?: number;
      zIndex?: number;
    }
    type sidemenuEventName =
      | 'onAfterScroll'
      | 'onBeforeShow'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onHide'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onShow'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTabFocus'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewMove'
      | 'onViewMoveEnd'
      | 'onViewResize'
      | 'onViewShow';
    class sidemenu implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: sidemenuEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getBody(): webix.ui.baseview;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      resizeChildren(): void;
      setPosition(x: number, y: number): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $dragCreate(source: HTMLElement, event: Event, pointer: string): HTMLElement;
      $dragDestroy: WebixCallback;
      $dragPos: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: sidemenuConfig;
      name: string;
    }
    interface schedulerConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      calendars?: boolean;
      compact?: boolean;
      compactWidth?: any;
      container?: string | HTMLElement;
      copypaste?: boolean;
      css?: string | obj;
      date?: Date;
      dimPastEvents?: boolean;
      disabled?: boolean;
      dragCreate?: boolean;
      dynamic?: string;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      locale?: WebixLocaleConfig;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mode?: string;
      on?: EventHash;
      override?: any[];
      readonly?: boolean;
      recurring?: boolean;
      serverUTC?: boolean;
      timeline?: boolean;
      timelineMode?: string;
      units?: boolean;
      url?: string;
      width?: number;
    }
    type schedulerEventName =
      | 'onAfterScroll'
      | 'onBeforeEventDrag'
      | 'onBeforeEventDrop'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onInit'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class scheduler implements webix.ui.baseview {
      adjust(): void;
      app(app: obj): void;
      attachEvent(type: schedulerEventName, functor: WebixCallback, id?: string): string | number;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getService(service: string): obj;
      getState(): obj;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unblockEvent(): void;

      bind(target: any, rule?: WebixCallback, format?: string): void;
      unbind(): void;
      $app: WebixJetAppWrapper;
      $exportView: any;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: schedulerConfig;
      name: string;
    }
    interface sliderConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      attributes?: obj;
      borderless?: boolean;
      bottomLabel?: string;
      bottomPadding?: number;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      format?: string | WebixFormatConfig;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string | number;
      inputAlign?: string;
      inputHeight?: number;
      inputWidth?: number;
      invalidMessage?: string;
      keyPressTimeout?: number;
      label?: string;
      labelAlign?: string;
      labelPosition?: string;
      labelWidth?: number | string;
      max?: number;
      maxHeight?: number;
      maxWidth?: number;
      min?: number;
      minHeight?: number;
      minWidth?: number;
      moveTitle?: boolean;
      name?: string;
      on?: EventHash;
      popup?: string;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      step?: number;
      title?: string | WebixCallback;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: string;
      validate?: WebixCallback;
      validateEvent?: string;
      value?: string | number;
      vertical?: boolean;
      width?: number;
    }
    type sliderEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSliderDrag'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class slider implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: sliderEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): number;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setBottomText(text: string): void;
      setValue(value: string | number, config?: any): void;
      setValueHere(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $prepareValue: WebixCallback;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(
        obj: webix.ui.textConfig & { [key: string]: any },
        html: string,
        id: string | number
      ): string;
      $renderLabel(
        config: webix.ui.textConfig & { [key: string]: any },
        id: string | number
      ): string;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $touchCapture: boolean;
      $view: HTMLElement;
      $width: number;
      config: sliderConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface spacerConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      width?: number;
    }
    type spacerEventName =
      | 'onAfterScroll'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class spacer implements webix.ui.baseview {
      adjust(): void;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: spacerConfig;
      name: string;
    }
    interface spreadsheetConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      bottombar?: boolean;
      buttons?: WebixSpreadsheetButtonConfig;
      clipboard?: boolean;
      clipboardDecimalDelimiter?: string;
      clipboardNumberFormat?: WebixNumberFormat;
      columnCount?: number;
      columnWidth?: number;
      conditionStyle?: any[];
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datatype?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      liveEditor?: boolean;
      maxHeight?: number;
      maxWidth?: number;
      menu?: boolean | any[];
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      padding?: number | WebixPaddingConfig;
      paddingX?: number;
      paddingY?: number;
      prepareData?: boolean;
      readonly?: boolean;
      resizeCell?: boolean;
      rowCount?: number;
      rowHeight?: number;
      save?: string | obj;
      sheetStubs?: boolean;
      sheetTabWidth?: number;
      strict?: boolean;
      subbar?: webix.ui.baseviewConfig & { [key: string]: any };
      toolbar?: string | boolean;
      type?: string;
      url?: string | WebixCallback | WebixProxy;
      width?: number;
    }
    type spreadsheetEventName =
      | 'onAfterConditionSet'
      | 'onAfterLoad'
      | 'onAfterRangeSet'
      | 'onAfterSelect'
      | 'onAfterSheetShow'
      | 'onAfterSpan'
      | 'onAfterSplit'
      | 'onBeforeCommentShow'
      | 'onBeforeConditionSet'
      | 'onBeforeFormatChange'
      | 'onBeforeLoad'
      | 'onBeforeSheetShow'
      | 'onBeforeSpan'
      | 'onBeforeSplit'
      | 'onBeforeValueChange'
      | 'onBindRequest'
      | 'onCellChange'
      | 'onChange'
      | 'onColumnOperation'
      | 'onCommand'
      | 'onCommentHide'
      | 'onComponentInit'
      | 'onContextMenuConfig'
      | 'onDataParse'
      | 'onDataSerialize'
      | 'onDestruct'
      | 'onFormatChange'
      | 'onLoadError'
      | 'onMathRefresh'
      | 'onReset'
      | 'onRowOperation'
      | 'onSheetAdd'
      | 'onSheetRemove'
      | 'onSheetRename'
      | 'onStyleSet'
      | 'onUIEditStart'
      | 'onUIEditStop'
      | 'onViewInit'
      | 'onViewShow';
    class spreadsheet implements webix.ui.baseview {
      addImage(rowId: number, columnId: number, url: string): void;
      addSheet(content?: WebixSpreadsheetSheetContent, name?: string, show?: boolean): void;
      addSparkline(rowId: number, columnId: number, config: WebixSpreadsheetSparklineConfig): void;
      addStyle(styleProps: WebixSpreadsheetStyleProps, baseStyle: WebixSpreadsheetStyle): void;
      adjust(): void;
      alert(config: WebixSpreadsheetAlertConfig): Promise<any>;
      attachEvent(type: spreadsheetEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      changeDecimals(row: number, column: number, change: number): void;
      clearRange(rangeStr?: string, type?: WebixSpreadsheetRangeClearConfig): void;
      clearSheet(): void;
      combineCells(range?: WebixSpreadsheetCellRangeConfig): void;
      compactStyles(): void;
      confirm(config: WebixSpreadsheetConfirmConfig): Promise<any>;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      deleteColumn(columnId: number | any[]): void;
      deleteRow(rowId: number | any[]): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      eachSelectedCell(handler: WebixCallback): void;
      editSheet(name: string): void;
      enable(): void;
      filterSpreadSheet(): void;
      freezeColumns(columns: number): void;
      freezeRows(rows: number): void;
      getActiveSheet(): string;
      getCellEditor(row: number, column: number): WebixSpreadsheetCellEditorConfig;
      getCellFilter(row: number, column: number): WebixSpreadsheetCellFilterExtendedConfig;
      getCellValue(row: number, column: number, math: boolean, page: string): string;
      getChildViews(): webix.ui.baseview[];
      getColumn(id: string): WebixDatatableColumn;
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getRangeValue(range: string, page: string): any[];
      getRow(id: string): obj;
      getSelectedId(asArray: boolean): any;
      getSelectedRange(): string;
      getSheetData(sheet_name: string): void;
      getSheetState(name: string): string;
      getStyle(row: number, column: number): obj;
      getTopParentView(): webix.ui.baseview;
      groupUndo(func: WebixCallback): void;
      hasEvent(name: string): boolean;
      hide(): void;
      hideColumn(columnId: number, state: boolean): void;
      hideGridlines(state: boolean | string): void;
      hideHeaders(state: boolean | string): void;
      hideRow(rowId: number, state: boolean): void;
      ignoreUndo(func: WebixCallback): void;
      innerId(id: number | string): number | string;
      insertColumn(columnId: number | any[]): void;
      insertRow(rowId: number | any[]): void;
      isCellLocked(rowId: number, columnId: number): boolean;
      isColumnVisible(columnId: number): boolean;
      isEnabled(): boolean;
      isRowVisible(rowId: number): boolean;
      isVisible(): boolean;
      load(url: string, type?: string, callback?: WebixCallback): Promise<any>;
      lockCell(
        row: number | WebixCellObject,
        column: number | WebixCellObject,
        state?: boolean
      ): void;
      mapEvent(map: WebixEventMap): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      recalculate(): void;
      redo(): void;
      refresh(): void;
      registerMathMethod(name: string, handler: WebixCallback): void;
      removeFilters(): void;
      removeSheet(name: string): void;
      renameSheet(name: string, newName: string): void;
      reset(): void;
      resetUndo(): void;
      resize(): void;
      saveCell(row: number, column: number): void;
      serialize(options?: WebixSpreadsheetSerializeConfig): obj;
      setCellEditor(
        rowId: number,
        columnId: number,
        editorObject: WebixSpreadsheetCellEditorConfig
      ): void;
      setCellFilter(
        rowId: number,
        columnId: number,
        filterObject: WebixSpreadsheetCellFilterConfig
      ): void;
      setCellValue(row: number, column: number, value: string, page: string): void;
      setColumnWidth(id: string | number | any[], width: number | string): void;
      setFormat(rowId: number, columnId: number, format: string): void;
      setPlaceholder(placeholder: obj | string, value?: number | string): void;
      setRangeStyle(rangeStr: string, style: WebixSpreadsheetStyle): void;
      setRangeValue(range: string, value: any, page: string): void;
      setRowHeight(id: string | number | any[], height: number | string): void;
      setSheetState(name: string, state: string): void;
      setStyle(row: number, column: number, style: WebixSpreadsheetStyle): void;
      show(force?: boolean, animation?: boolean): void;
      showCell(ref: string, silent: boolean): void;
      showFormulas(state: boolean | string): void;
      showPrintBorders(state: boolean | string): void;
      showSheet(name: string): void;
      sortRange(range?: string, dir?: string): void;
      splitCell(row: number, column: number): void;
      ui<T extends webix.ui.baseview>(view: webix.ui.baseviewConfig & { [key: string]: any }): T;
      unbind(): void;
      unblockEvent(): void;
      undo(id: string): void;
      zoom(scale: number): void;

      $$: webix.ui.baseview;
      $getSize(dx?: number, dy?: number): any[];
      $handleSelection: any;
      $height: number;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      comments: WebixSpreadsheetComments;
      conditions: obj;
      config: spreadsheetConfig;
      name: string;
      ranges: obj;
      views: obj;
    }
    interface submenuConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autofit?: boolean;
      autofocus?: boolean;
      autoheight?: boolean;
      autowidth?: boolean;
      body?: string | (webix.ui.baseviewConfig & { [key: string]: any });
      borderless?: boolean;
      click?: string | WebixCallback;
      clipboard?: boolean | string;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datathrottle?: number;
      datatype?: string;
      delimiter?: WebixDelimiterConfig;
      disabled?: boolean;
      drag?: boolean | string;
      dragscroll?: boolean | string;
      escHide?: boolean;
      externalData?: WebixCallback;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      item?: WebixItemType | string;
      keyPressTimeout?: number;
      layout?: string;
      left?: number;
      master?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      modal?: boolean;
      mouseEventDelay?: number;
      multiselect?: string | boolean;
      navigation?: boolean;
      on?: EventHash;
      onClick?: EventHash;
      onContext?: EventHash;
      onDblClick?: EventHash;
      onMouseMove?: EventHash;
      openAction?: string;
      padding?: number;
      pager?: string | WebixPagerConfig;
      point?: boolean;
      position?: string | WebixCallback;
      prerender?: boolean;
      ready?: WebixCallback;
      relative?: string;
      removeMissed?: boolean;
      resize?: boolean;
      rules?: WebixValidationRules;
      save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
      scheme?: WebixDataScheme;
      scroll?: boolean | string;
      scrollSpeed?: string;
      select?: boolean | string;
      subMenuPos?: string;
      submenuConfig?: webix.ui.submenuConfig & { [key: string]: any };
      template?: string | WebixCallback;
      templateCopy?: WebixCallback;
      toFront?: boolean;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      top?: number;
      type?: WebixItemType | string;
      url?: string | WebixCallback | WebixProxy;
      width?: number;
      xCount?: number;
      yCount?: number;
      zIndex?: number;
    }
    type submenuEventName =
      | 'onAfterAdd'
      | 'onAfterContextMenu'
      | 'onAfterDelete'
      | 'onAfterDrop'
      | 'onAfterLoad'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onAfterSelect'
      | 'onAfterSort'
      | 'onBeforeAdd'
      | 'onBeforeContextMenu'
      | 'onBeforeDelete'
      | 'onBeforeDrag'
      | 'onBeforeDragIn'
      | 'onBeforeDrop'
      | 'onBeforeDropOut'
      | 'onBeforeLoad'
      | 'onBeforeRender'
      | 'onBeforeSelect'
      | 'onBeforeShow'
      | 'onBeforeSort'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDataRequest'
      | 'onDataUpdate'
      | 'onDestruct'
      | 'onDragOut'
      | 'onEnter'
      | 'onFocus'
      | 'onHide'
      | 'onItemClick'
      | 'onItemDblClick'
      | 'onItemRender'
      | 'onItemSingleClick'
      | 'onKeyPress'
      | 'onLoadError'
      | 'onLongTouch'
      | 'onMenuItemClick'
      | 'onMouseMove'
      | 'onMouseMoving'
      | 'onMouseOut'
      | 'onPaste'
      | 'onSelectChange'
      | 'onShow'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTabFocus'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onValidationError'
      | 'onValidationSuccess'
      | 'onViewMove'
      | 'onViewMoveEnd'
      | 'onViewResize'
      | 'onViewShow';
    class submenu implements webix.ui.baseview {
      add(obj: obj, index?: number): string | number;
      addCss(id: string | number, css: string, silent?: boolean): void;
      adjust(): void;
      attachEvent(type: submenuEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(soft?: boolean): void;
      clearCss(css: string, silent?: boolean): void;
      clearValidation(): void;
      copy(
        sid: string | number,
        tindex: number,
        tobj?: WebixDataMoveTarget,
        details?: WebixDataMoveOptions
      ): void;
      count(): number;
      customize(obj: WebixItemType): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      disableItem(id: string | number): void;
      enable(): void;
      enableItem(id: string | number): void;
      exists(id: number | string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value?: string,
        preserve?: boolean
      ): void;
      find(criterion: WebixCallback, first?: boolean): any;
      getBody(): webix.ui.baseview;
      getChildViews(): webix.ui.baseview[];
      getFirstId(): number | string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number | string): string | number;
      getIndexById(id: number | string): number;
      getItem(id: number | string): obj;
      getItemNode(id: string | number): HTMLElement;
      getLastId(): number | string;
      getMenu(id: string | number): webix.ui.menu | webix.ui.submenu;
      getMenuItem(id: string | number): obj;
      getNextId(id: number | string, step?: number): string | number;
      getNode(): HTMLElement;
      getPage(): number;
      getPager(): webix.ui.pager;
      getParentView(): webix.ui.baseview;
      getPrevId(id: number | string, step?: number): string | number;
      getScrollState(): WebixScrollState;
      getSelectedId(as_array?: boolean): any;
      getSelectedItem(as_array?: boolean): obj;
      getSubMenu(id: string | number): webix.ui.menu | webix.ui.submenu;
      getTopMenu(): webix.ui.menu | webix.ui.submenu;
      getTopParentView(): webix.ui.baseview;
      getVisibleCount(): number;
      hasCss(id: string | number, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      hideMenuItem(id: string | number): void;
      isEnabled(): boolean;
      isItemEnabled(): boolean;
      isSelected(id: string | number): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
        clear?: boolean
      ): Promise<any>;
      locate(e: Event): string | number;
      mapEvent(map: WebixEventMap): void;
      moveBottom(id: string | number): void;
      moveDown(id: string | number, step: number): void;
      moveSelection(direction: string): void;
      moveTop(id: string | number): void;
      moveUp(id: string | number, step: number): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: number | string): void;
      remove(id: string | number | any[]): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      render(id: string | number, data: obj, type: WebixRenderType): void;
      resize(): void;
      resizeChildren(): void;
      scrollTo(x: number, y: number): void;
      select(id: string | any[], preserve?: boolean): void;
      selectAll(from?: string, to?: string): void;
      serialize(all?: boolean): any[];
      setPage(page: number): void;
      setPosition(x: number, y: number): void;
      show(node?: HTMLElement, position?: WebixWindowPosConfig, point?: string): void;
      showItem(id: string | number): void;
      showMenuItem(id: string | number): void;
      sizeToContent(): void;
      sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      unselect(id?: string): void;
      unselectAll(): void;
      updateItem(id: number | string, data: obj): void;
      validate(id?: string): boolean;
      waitSave(handler: WebixCallback): Promise<any>;
      show(force: boolean, animation: boolean): void;
      $customPrint: WebixCallback;
      $drag(source: HTMLElement, ev: Event, pointer: string): string;
      $dragCreate(source: HTMLElement, event: Event, pointer: string): HTMLElement;
      $dragDestroy: WebixCallback;
      $dragHTML: WebixCallback;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragMark(context: WebixDnDContext, ev: Event): boolean;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event
      ): void;
      $dragPos: WebixCallback;
      $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;
      $dropAllow: WebixCallback;
      $dropHTML: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: submenuConfig;
      data: DataStore;
      name: string;
      on_click: EventHash;
      on_context: EventHash;
      on_dblclick: EventHash;
      on_mouse_move: EventHash;
      type: WebixItemType;
      types: WebixItemTypes;
      waitData: Promise<any>;
    }
    interface suggestConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autofit?: boolean;
      autofocus?: boolean;
      body?: string | (webix.ui.baseviewConfig & { [key: string]: any });
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[];
      disabled?: boolean;
      escHide?: boolean;
      filter?: WebixCallback;
      fitMaster?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      input?: HTMLElement | string;
      keyPressTimeout?: number;
      left?: number;
      master?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      modal?: boolean;
      on?: EventHash;
      padding?: number;
      point?: boolean;
      position?: string | WebixCallback;
      relative?: string;
      resize?: boolean;
      template?: string | WebixTemplate;
      textValue?: string;
      toFront?: boolean;
      top?: number;
      type?: string;
      url?: string;
      width?: number;
      zIndex?: number;
    }
    type suggestEventName =
      | 'onAfterScroll'
      | 'onBeforeShow'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onHide'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onShow'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onValueSuggest'
      | 'onViewMove'
      | 'onViewMoveEnd'
      | 'onViewResize'
      | 'onViewShow';
    class suggest implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: suggestEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getBody(): webix.ui.baseview;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getItemId(text: string): string | number;
      getItemText(id: string | number): string;
      getList(): webix.ui.baseview;
      getMasterValue(): any;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getSuggestion(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): string | number;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      linkInput(input: HTMLElement): void;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      resizeChildren(): void;
      setMasterValue(value: any, refresh: boolean): void;
      setPosition(x: number, y: number): void;
      setValue(value: string | number): void;
      show(node: HTMLElement, position?: WebixWindowPosConfig, point?: string): void;
      unbind(): void;
      unblockEvent(): void;
      show(force: boolean, animation: boolean): void;
      $dragCreate(source: HTMLElement, event: Event, pointer: string): HTMLElement;
      $dragDestroy: WebixCallback;
      $dragPos: WebixCallback;
      $enterKey: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: suggestConfig;
      name: string;
    }
    interface switchButtonConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      attributes?: obj;
      badge?: number | string;
      borderless?: boolean;
      bottomLabel?: string;
      bottomPadding?: number;
      checkValue?: string;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      customCheckbox?: boolean;
      disabled?: boolean;
      format?: string | WebixFormatConfig;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      icon?: string;
      id?: string | number;
      inputAlign?: string;
      inputHeight?: number;
      inputWidth?: number;
      invalid?: boolean;
      invalidMessage?: string;
      keyPressTimeout?: number;
      label?: string;
      labelAlign?: string;
      labelPosition?: string;
      labelRight?: string;
      labelWidth?: number | string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      offLabel?: string;
      on?: EventHash;
      onLabel?: string;
      pattern?: WebixTextPattern | string;
      placeholder?: string;
      popup?: string;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      suggest?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: string;
      uncheckValue?: string;
      validate?: WebixCallback;
      validateEvent?: string;
      value?: string | number | boolean;
      width?: number;
    }
    type switchButtonEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class switchButton implements webix.ui.baseview {
      adjust(): void;
      attachEvent(
        type: switchButtonEventName,
        functor: WebixCallback,
        id?: string
      ): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): number;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setBottomText(text: string): void;
      setValue(value: number | string | boolean, config?: any): void;
      setValueHere(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      toggle(): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $prepareValue: WebixCallback;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(config: webix.ui.buttonConfig & { [key: string]: any }): HTMLElement;
      $renderLabel(
        config: webix.ui.textConfig & { [key: string]: any },
        id: string | number
      ): string;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: switchButtonConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface tabbarConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      attributes?: obj;
      borderless?: boolean;
      bottomLabel?: string;
      bottomOffset?: number;
      bottomPadding?: number;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      format?: string | WebixFormatConfig;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string | number;
      inputAlign?: string;
      inputHeight?: number;
      inputWidth?: number;
      invalid?: boolean;
      invalidMessage?: string;
      keyPressTimeout?: number;
      label?: string;
      labelAlign?: string;
      labelPosition?: string;
      labelWidth?: number | string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      moreTemplate?: WebixCallback;
      multiview?: boolean;
      name?: string;
      on?: EventHash;
      optionWidth?: number;
      options?: any[];
      placeholder?: string;
      popup?: string;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      suggest?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      tabMargin?: number;
      tabMinWidth?: number;
      tabMoreWidth?: number;
      tabOffset?: number;
      tabbarPopup?: string | (webix.ui.popupConfig & { [key: string]: any }) | webix.ui.baseview;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      topOffset?: number;
      type?: string;
      validate?: WebixCallback;
      validateEvent?: string;
      value?: string | number;
      width?: number;
    }
    type tabbarEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onAfterTabClick'
      | 'onBeforeRender'
      | 'onBeforeTabClick'
      | 'onBeforeTabClose'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onOptionAdd'
      | 'onOptionRemove'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class tabbar implements webix.ui.baseview {
      addOption(id: string | number, value: any, show?: boolean, index?: number): void;
      adjust(): void;
      attachEvent(type: tabbarEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      disableOption(id: string | number): void;
      enable(): void;
      enableOption(id: string | number): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getOption(id: string | number): obj;
      getParentView(): webix.ui.baseview;
      getPopup(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      hideOption(id: string | number): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      optionIndex(ID: string | number): number;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      removeOption(id: string | number): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setBottomText(text: string): void;
      setValue(value: string, config?: any): void;
      setValueHere(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      showOption(id: string | number): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $prepareValue: WebixCallback;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(
        obj: webix.ui.textConfig & { [key: string]: any },
        html: string,
        id: string | number
      ): string;
      $renderLabel(
        config: webix.ui.textConfig & { [key: string]: any },
        id: string | number
      ): string;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: tabbarConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface tabviewConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      cells?: any[];
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      multiview?: webix.ui.multiviewConfig & { [key: string]: any };
      on?: EventHash;
      padding?: number | WebixPaddingConfig;
      paddingX?: number;
      paddingY?: number;
      tabbar?: webix.ui.tabbarConfig & { [key: string]: any };
      type?: string;
      width?: number;
    }
    type tabviewEventName = 'onBindRequest' | 'onDestruct' | 'onViewShow';
    class tabview implements webix.ui.baseview {
      addView(obj: WebixTabviewCellConfig): void;
      adjust(): void;
      attachEvent(type: tabviewEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getMultiview(): webix.ui.multiview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTabbar(): webix.ui.tabbar;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      removeView(view: string | number | webix.ui.baseview): void;
      resize(): void;
      setValue(value: string, config?: any): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: tabviewConfig;
      name: string;
    }
    interface templateConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autoheight?: boolean;
      borderless?: boolean;
      container?: string | HTMLElement;
      content?: string | number | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datatype?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      onClick?: EventHash;
      scroll?: boolean | string;
      scrollSpeed?: string;
      src?: string;
      template?: string | WebixCallback;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: string;
      url?: string | WebixCallback | WebixProxy;
      width?: number;
    }
    type templateEventName =
      | 'onAfterLoad'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeLoad'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onKeyPress'
      | 'onLoadError'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class template implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: templateEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getScrollState(): WebixScrollState;
      getTopParentView(): webix.ui.baseview;
      getValues(): void;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      mapEvent(map: WebixEventMap): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      setContent(node: any): void;
      setHTML(html: string): void;
      setValues(obj: obj, update?: boolean): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: templateConfig;
      name: string;
    }
    interface textConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      attributes?: obj;
      borderless?: boolean;
      bottomLabel?: string;
      bottomPadding?: number;
      clear?: boolean | string | number;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      format?: string | WebixFormatConfig;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      icon?: string;
      id?: string | number;
      inputAlign?: string;
      inputHeight?: number;
      inputWidth?: number;
      invalid?: boolean;
      invalidMessage?: string;
      keyPressTimeout?: number;
      label?: string;
      labelAlign?: string;
      labelPosition?: string;
      labelWidth?: number | string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: EventHash;
      pattern?: WebixTextPattern | string;
      placeholder?: string;
      popup?: string;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      suggest?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: string;
      validate?: WebixCallback;
      validateEvent?: string;
      value?: string | number;
      width?: number;
    }
    type textEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class text implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: textEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setBottomText(text: string): void;
      setValue(value: string, config?: any): void;
      setValueHere(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $prepareValue: WebixCallback;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(config: webix.ui.buttonConfig & { [key: string]: any }): HTMLElement;
      $renderLabel(
        config: webix.ui.textConfig & { [key: string]: any },
        id: string | number
      ): string;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: textConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface textareaConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      attributes?: obj;
      borderless?: boolean;
      bottomLabel?: string;
      bottomPadding?: number;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      format?: string | WebixFormatConfig;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string | number;
      inputAlign?: string;
      inputHeight?: number;
      inputWidth?: number;
      invalid?: boolean;
      invalidMessage?: string;
      keyPressTimeout?: number;
      label?: string;
      labelAlign?: string;
      labelPosition?: string;
      labelWidth?: number | string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: EventHash;
      pattern?: WebixTextPattern | string;
      placeholder?: string;
      popup?: string;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      suggest?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      tooltip?: string | WebixCallback | WebixAutoTooltipConfig;
      validate?: WebixCallback;
      validateEvent?: string;
      value?: string | number;
      width?: number;
    }
    type textareaEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class textarea implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: textareaEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setBottomText(text: string): void;
      setValue(value: string, config?: any): void;
      setValueHere(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $prepareValue: WebixCallback;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(
        obj: webix.ui.textConfig & { [key: string]: any },
        html: string,
        id: string | number
      ): string;
      $renderLabel(
        config: webix.ui.textConfig & { [key: string]: any },
        id: string | number
      ): string;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: textareaConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface texthighlightConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      attributes?: obj;
      autowidth?: boolean;
      badge?: number | string;
      borderless?: boolean;
      bottomLabel?: string;
      bottomPadding?: number;
      clear?: boolean | string | number;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      format?: string | WebixFormatConfig;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      highlight?: WebixCallback;
      hotkey?: string;
      icon?: string;
      id?: string | number;
      inputAlign?: string;
      inputHeight?: number;
      inputWidth?: number;
      invalid?: boolean;
      invalidMessage?: string;
      keyPressTimeout?: number;
      label?: string;
      labelAlign?: string;
      labelPosition?: string;
      labelWidth?: number | string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: EventHash;
      pattern?: WebixTextPattern | string;
      placeholder?: string;
      popup?: string;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      suggest?:
        | string
        | any[]
        | webix.ui.baseview
        | WebixDataStorage
        | (webix.ui.suggestConfig & { [key: string]: any });
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: string;
      validate?: WebixCallback;
      validateEvent?: string;
      value?: string | number;
      width?: number;
    }
    type texthighlightEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTabFocus'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class texthighlight implements webix.ui.baseview {
      adjust(): void;
      attachEvent(
        type: texthighlightEventName,
        functor: WebixCallback,
        id?: string
      ): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setBottomText(text: string): void;
      setValue(value: string, config?: any): void;
      setValueHere(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $prepareValue: WebixCallback;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(config: webix.ui.buttonConfig & { [key: string]: any }): HTMLElement;
      $renderLabel(
        config: webix.ui.textConfig & { [key: string]: any },
        id: string | number
      ): string;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: texthighlightConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface timeboardConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      button?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hours?: boolean;
      id?: string | number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      minutes?: boolean;
      on?: EventHash;
      padding?: number | WebixPaddingConfig;
      paddingX?: number;
      paddingY?: number;
      seconds?: boolean;
      stringResult?: boolean;
      twelve?: boolean;
      type?: string;
      value?: string | Date;
      width?: number;
    }
    type timeboardEventName =
      | 'onBindRequest'
      | 'onChange'
      | 'onDestruct'
      | 'onTimeSelect'
      | 'onViewShow';
    class timeboard implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: timeboardEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): string | Date;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      setValue(value: string | Date, config?: any): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string | WebixTimeboardValue;
      $height: number;
      $prepareValue: WebixCallback;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: timeboardConfig;
      name: string;
    }
    interface timelineConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      click?: string | WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      dataFeed?: string | WebixProxy | WebixCallback;
      datathrottle?: number;
      datatype?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      item?: WebixItemType | string;
      layout?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      on?: EventHash;
      onClick?: EventHash;
      onContext?: EventHash;
      onDblClick?: EventHash;
      onMouseMove?: EventHash;
      ready?: WebixCallback;
      removeMissed?: boolean;
      save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
      scheme?: WebixDataScheme;
      scroll?: boolean | string;
      scrollSpeed?: string;
      template?: string | WebixCallback;
      templateDate?: string | WebixCallback;
      templateDetails?: string | WebixCallback;
      templateValue?: string | WebixCallback;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: WebixItemType | string;
      url?: string | WebixCallback | WebixProxy;
      width?: number;
    }
    type timelineEventName =
      | 'onAfterAdd'
      | 'onAfterContextMenu'
      | 'onAfterDelete'
      | 'onAfterLoad'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onAfterSort'
      | 'onBeforeAdd'
      | 'onBeforeContextMenu'
      | 'onBeforeDelete'
      | 'onBeforeLoad'
      | 'onBeforeRender'
      | 'onBeforeSort'
      | 'onBindRequest'
      | 'onDataRequest'
      | 'onDataUpdate'
      | 'onDestruct'
      | 'onItemClick'
      | 'onItemDblClick'
      | 'onItemRender'
      | 'onItemSingleClick'
      | 'onLoadError'
      | 'onMouseMove'
      | 'onMouseMoving'
      | 'onMouseOut'
      | 'onViewShow';
    class timeline implements webix.ui.baseview {
      add(obj: obj, index?: number): string | number;
      adjust(): void;
      attachEvent(type: timelineEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(soft?: boolean): void;
      count(): number;
      customize(obj: WebixItemType): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      exists(id: number | string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value?: string,
        preserve?: boolean
      ): void;
      find(criterion: WebixCallback, first?: boolean): any;
      getChildViews(): webix.ui.baseview[];
      getFirstId(): number | string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number | string): string | number;
      getIndexById(id: number | string): number;
      getItem(id: number | string): obj;
      getItemNode(id: string | number): HTMLElement;
      getLastId(): number | string;
      getNextId(id: number | string, step?: number): string | number;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getPrevId(id: number | string, step?: number): string | number;
      getScrollState(): WebixScrollState;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
        clear?: boolean
      ): Promise<any>;
      locate(e: Event): string | number;
      mapEvent(map: WebixEventMap): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: number | string): void;
      remove(id: string | number | any[]): void;
      render(id: string | number, data: obj, type: WebixRenderType): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      serialize(all?: boolean): any[];
      show(force?: boolean, animation?: boolean): void;
      showItem(id: string | number): void;
      sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      updateItem(id: number | string, data: obj): void;
      waitSave(handler: WebixCallback): Promise<any>;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: timelineConfig;
      data: DataStore;
      name: string;
      on_click: EventHash;
      on_context: EventHash;
      on_dblclick: EventHash;
      on_mouse_move: EventHash;
      type: WebixItemType;
      types: WebixItemTypes;
      waitData: Promise<any>;
    }
    interface todoConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: any[];
      disabled?: boolean;
      drag?: boolean;
      gravity?: number;
      hashtags?: boolean;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      locale?: WebixLocaleConfig;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      override?: any[];
      projects?: any[];
      readonly?: boolean;
      url?: string;
      users?: any[];
      width?: number;
    }
    type todoEventName =
      | 'onAfterScroll'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onInit'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class todo implements webix.ui.baseview {
      adjust(): void;
      app(app: obj): void;
      attachEvent(type: todoEventName, functor: WebixCallback, id?: string): string | number;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getService(service: string): obj;
      getState(): obj;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      reload(url: string): void;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unblockEvent(): void;

      bind(target: any, rule?: WebixCallback, format?: string): void;
      unbind(): void;
      $app: WebixJetAppWrapper;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: todoConfig;
      name: string;
    }
    interface toggleConfig {
      view?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      autowidth?: boolean;
      borderless?: boolean;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      icon?: string;
      id?: string | number;
      inputHeight?: number;
      inputWidth?: number;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      offIcon?: string;
      offLabel?: string;
      on?: EventHash;
      onIcon?: string;
      onLabel?: string;
      popup?: string;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: string;
      value?: string | number | boolean;
      width?: number;
    }
    type toggleEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onChange'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class toggle implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: toggleEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): number;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      setValue(value: string | number | boolean, config?: any): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      toggle(): void;
      unbind(): void;
      unblockEvent(): void;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $prepareValue: WebixCallback;
      $renderInput(config: webix.ui.buttonConfig & { [key: string]: any }): HTMLElement;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: toggleConfig;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface toolbarConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      cols?: any[];
      complexData?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      dataFeed?: string | WebixProxy | WebixCallback;
      datatype?: string;
      disabled?: boolean;
      elements?: any[];
      elementsConfig?: webix.ui.baseviewConfig & { [key: string]: any };
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      isolate?: boolean;
      margin?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      padding?: number | WebixPaddingConfig;
      paddingX?: number;
      paddingY?: number;
      responsive?: string;
      rows?: any[];
      rules?: obj;
      scroll?: boolean | string;
      scrollSpeed?: string;
      type?: string;
      url?: string | WebixCallback | WebixProxy;
      visibleBatch?: string;
      width?: number;
    }
    type toolbarEventName =
      | 'onAfterLoad'
      | 'onAfterScroll'
      | 'onAfterValidation'
      | 'onBeforeLoad'
      | 'onBeforeValidate'
      | 'onBindRequest'
      | 'onChange'
      | 'onDestruct'
      | 'onLoadError'
      | 'onValidationError'
      | 'onValidationSuccess'
      | 'onValues'
      | 'onViewShow';
    class toolbar implements webix.ui.baseview {
      addView(
        view: webix.ui.baseview | (webix.ui.baseviewConfig & { [key: string]: any }),
        index?: number
      ): string | number;
      adjust(): void;
      attachEvent(type: toolbarEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clear(): void;
      clearValidation(): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(item: string): void;
      getChildViews(): webix.ui.baseview[];
      getCleanValues(): obj;
      getDirtyValues(): obj;
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getScrollState(): WebixScrollState;
      getTopParentView(): webix.ui.baseview;
      getValues(details?: WebixFieldParams | WebixCallback): obj;
      hasEvent(name: string): boolean;
      hide(): void;
      index(obj: webix.ui.baseview): number;
      isDirty(): boolean;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      mapEvent(map: WebixEventMap): void;
      markInvalid(name: string, state?: boolean | string): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      reconstruct(): void;
      refresh(): void;
      removeView(id: string | number | webix.ui.baseview): void;
      render(id: string | number, data: obj, type: WebixRenderType): void;
      resize(): void;
      resizeChildren(): void;
      restore(state: obj, factory?: WebixCallback): void;
      scrollTo(x: number, y: number): void;
      serialize(serializer?: WebixCallback): obj;
      setDirty(mark?: boolean): void;
      setValues(values: obj, update?: boolean, config?: any): void;
      show(force?: boolean, animation?: boolean): void;
      showBatch(name: string, mode?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(mode?: WebixFieldParams): boolean;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: toolbarConfig;
      name: string;
    }
    interface tooltipConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      dx?: number;
      dy?: number;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      template?: string | WebixCallback;
      width?: number;
    }
    type tooltipEventName =
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    interface tooltip {
      adjust(): void;
      attachEvent(type: tooltipEventName, functor: WebixCallback, id?: string): string | number;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      customize(obj: WebixItemType): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      show(data: WebixTooltipDataItem, position: PositionInfo): void;
      unblockEvent(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: tooltipConfig;
      name: string;
      type: WebixItemType;
    }
    interface treeConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      click?: string | WebixCallback;
      clipboard?: boolean | string;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datathrottle?: number;
      datatype?: string;
      delimiter?: WebixDelimiterConfig;
      disabled?: boolean;
      drag?: boolean | string;
      dragscroll?: boolean | string;
      filterMode?: WebixTreeFilterMode;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      item?: WebixItemType | string;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      multiselect?: boolean | string;
      navigation?: boolean;
      on?: EventHash;
      onClick?: EventHash;
      onContext?: EventHash;
      onDblClick?: EventHash;
      onMouseMove?: EventHash;
      prerender?: boolean;
      ready?: WebixCallback;
      removeMissed?: boolean;
      rules?: WebixValidationRules;
      save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
      scheme?: WebixDataScheme;
      scroll?: boolean | string;
      scrollSpeed?: string;
      select?: boolean;
      template?: string | WebixCallback;
      templateCopy?: WebixCallback;
      threeState?: boolean;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: WebixItemType | string;
      url?: string | WebixCallback | WebixProxy;
      width?: number;
    }
    type treeEventName =
      | 'onAfterAdd'
      | 'onAfterClose'
      | 'onAfterContextMenu'
      | 'onAfterDelete'
      | 'onAfterDrop'
      | 'onAfterLoad'
      | 'onAfterOpen'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onAfterSelect'
      | 'onAfterSort'
      | 'onBeforeAdd'
      | 'onBeforeClose'
      | 'onBeforeContextMenu'
      | 'onBeforeDelete'
      | 'onBeforeDrag'
      | 'onBeforeDragIn'
      | 'onBeforeDrop'
      | 'onBeforeDropOut'
      | 'onBeforeLoad'
      | 'onBeforeOpen'
      | 'onBeforeRender'
      | 'onBeforeSelect'
      | 'onBeforeSort'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDataRequest'
      | 'onDataUpdate'
      | 'onDestruct'
      | 'onDragOut'
      | 'onEnter'
      | 'onFocus'
      | 'onItemCheck'
      | 'onItemClick'
      | 'onItemDblClick'
      | 'onItemRender'
      | 'onItemSingleClick'
      | 'onKeyPress'
      | 'onLoadError'
      | 'onLongTouch'
      | 'onMouseMove'
      | 'onMouseMoving'
      | 'onMouseOut'
      | 'onPartialRender'
      | 'onPaste'
      | 'onSelectChange'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTabFocus'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onValidationError'
      | 'onValidationSuccess'
      | 'onViewResize'
      | 'onViewShow';
    class tree implements webix.ui.baseview {
      add(obj: obj, index?: number, parentId?: string): string;
      addCss(id: string | number, css: string, silent?: boolean): void;
      adjust(): void;
      attachEvent(type: treeEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      checkAll(id?: string | number): void;
      checkItem(id: string): void;
      clearAll(soft?: boolean): void;
      clearCss(css: string, silent?: boolean): void;
      clearValidation(): void;
      close(id: string | number): void;
      closeAll(): void;
      copy(
        sid: string | number,
        tindex: number,
        tobj?: WebixDataMoveTarget,
        details?: WebixTreeDataMoveOptions
      ): number;
      count(): number;
      customize(obj: WebixItemType): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      exists(id: number | string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value?: string,
        preserve?: boolean
      ): void;
      find(criterion: WebixCallback, first?: boolean): any;
      getBranchIndex(id: string | number): number;
      getChecked(): any[];
      getChildViews(): webix.ui.baseview[];
      getFirstChildId(id: string | number): string;
      getFirstId(): number | string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number | string): string | number;
      getIndexById(id: number | string): number;
      getItem(id: number | string): obj;
      getItemNode(id: string | number): HTMLElement;
      getLastId(): number | string;
      getNextId(id: number | string, step?: number): string | number;
      getNextSiblingId(id: string | number): string | number;
      getNode(): HTMLElement;
      getOpenItems(): any[];
      getParentId(id: string | number): string | number;
      getParentView(): webix.ui.baseview;
      getPrevId(id: number | string, step?: number): string | number;
      getPrevSiblingId(id: string | number): string | number;
      getScrollState(): WebixScrollState;
      getSelectedId(as_array?: boolean): any;
      getSelectedItem(as_array?: boolean): obj;
      getState(): WebixTreeState;
      getTopParentView(): webix.ui.baseview;
      group(config: WebixGroupConfig, target?: string | number): void;
      hasCss(id: string | number, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      isBranch(id: string | number): boolean;
      isBranchOpen(id: string | number): boolean;
      isChecked(id: string | number): boolean;
      isEnabled(): boolean;
      isSelected(id: string | number): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      loadBranch(id: string | number, callback: WebixCallback, url: string): Promise<any>;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
        clear?: boolean
      ): Promise<any>;
      locate(e: Event): string | number;
      mapEvent(map: WebixEventMap): void;
      move(
        sid: string,
        tindex: number,
        tobj?: webix.ui.baseview,
        details?: WebixDataMoveOptions
      ): string;
      moveBottom(id: string | number, parentId: string | number): void;
      moveDown(id: string | number, step: number): void;
      moveSelection(direction: string): void;
      moveTop(id: string | number, parentId: string | number): void;
      moveUp(id: string | number, step: number): void;
      open(id: string | number, show?: boolean): void;
      openAll(): void;
      parse(data: string | any[] | obj, type: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: number | string): void;
      remove(id: string | number | any[]): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      render(id: string | number, data: obj, type: WebixRenderType): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      select(id: string | any[], preserve?: boolean): void;
      selectAll(from?: string, to?: string): void;
      serialize(rootId: string | number, all: boolean): any[];
      setState(state: WebixTreeState): void;
      show(force?: boolean, animation?: boolean): void;
      showItem(id: string | number): void;
      sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      uncheckAll(id?: string | number): void;
      uncheckItem(id: string): void;
      ungroup(mode: boolean): void;
      unselect(id?: string): void;
      unselectAll(): void;
      updateItem(id: number | string, data: obj): void;
      validate(id?: string): boolean;
      waitSave(handler: WebixCallback): Promise<any>;

      $drag(source: HTMLElement, ev: Event, pointer: string): string;
      $dragHTML: WebixCallback;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragMark(context: WebixDnDContext, ev: Event): boolean;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event
      ): void;
      $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;
      $dropAllow: WebixCallback;
      $dropHTML: WebixCallback;
      $fixEditor: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: treeConfig;
      data: DataStore;
      name: string;
      on_click: EventHash;
      on_context: EventHash;
      on_dblclick: EventHash;
      on_mouse_move: EventHash;
      type: WebixItemType;
      types: WebixItemTypes;
      waitData: Promise<any>;
    }
    interface treemapConfig {
      view?: string;
      activeItem?: boolean;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      branch?: string;
      click?: string | WebixCallback;
      clipboard?: boolean | string;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      dataFeed?: string | WebixProxy | WebixCallback;
      datathrottle?: number;
      datatype?: string;
      delimiter?: WebixDelimiterConfig;
      disabled?: boolean;
      filterMode?: WebixTreeFilterMode;
      gravity?: number;
      header?: boolean;
      headerHeight?: number;
      headerTemplate?: string | WebixCallback;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      item?: WebixItemType | string;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      multiselect?: string | boolean;
      navigation?: boolean;
      on?: EventHash;
      onClick?: EventHash;
      onContext?: EventHash;
      onDblClick?: EventHash;
      onMouseMove?: EventHash;
      pager?: string | WebixPagerConfig;
      ready?: WebixCallback;
      removeMissed?: boolean;
      rules?: WebixValidationRules;
      save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
      scheme?: WebixDataScheme;
      scroll?: boolean | string;
      scrollSpeed?: string;
      select?: boolean | string;
      subRender?: boolean;
      template?: string | WebixCallback;
      templateCopy?: WebixCallback;
      threeState?: boolean;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: WebixItemType | string;
      url?: string | WebixCallback | WebixProxy;
      value?: string | WebixCallback;
      width?: number;
    }
    type treemapEventName =
      | 'onAfterAdd'
      | 'onAfterClose'
      | 'onAfterContextMenu'
      | 'onAfterDelete'
      | 'onAfterLoad'
      | 'onAfterOpen'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onAfterSelect'
      | 'onAfterSort'
      | 'onBeforeAdd'
      | 'onBeforeClose'
      | 'onBeforeContextMenu'
      | 'onBeforeDelete'
      | 'onBeforeLoad'
      | 'onBeforeOpen'
      | 'onBeforeRender'
      | 'onBeforeSelect'
      | 'onBeforeSort'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDataRequest'
      | 'onDataUpdate'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onItemCheck'
      | 'onItemClick'
      | 'onItemDblClick'
      | 'onItemRender'
      | 'onItemSingleClick'
      | 'onKeyPress'
      | 'onLoadError'
      | 'onLongTouch'
      | 'onMouseMove'
      | 'onMouseMoving'
      | 'onMouseOut'
      | 'onPartialRender'
      | 'onPaste'
      | 'onSelectChange'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTabFocus'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onValidationError'
      | 'onValidationSuccess'
      | 'onViewResize'
      | 'onViewShow';
    class treemap implements webix.ui.baseview {
      add(obj: obj, index?: number): string | number;
      addCss(id: string | number, css: string, silent?: boolean): void;
      adjust(): void;
      attachEvent(type: treemapEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(soft?: boolean): void;
      clearCss(css: string, silent?: boolean): void;
      clearValidation(): void;
      close(id: string | number): void;
      closeAll(): void;
      count(): number;
      customize(obj: WebixItemType): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      exists(id: number | string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value?: string,
        preserve?: boolean
      ): void;
      find(criterion: WebixCallback, first?: boolean): any;
      getBranchIndex(id: string | number): number;
      getChildViews(): webix.ui.baseview[];
      getFirstChildId(id: string | number): string;
      getFirstId(): number | string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number | string): string | number;
      getIndexById(id: number | string): number;
      getItem(id: number | string): obj;
      getItemNode(id: string | number): HTMLElement;
      getLastId(): number | string;
      getNextId(id: number | string, step?: number): string | number;
      getNextSiblingId(id: string | number): string | number;
      getNode(): HTMLElement;
      getOpenItems(): any[];
      getPage(): number;
      getPager(): webix.ui.pager;
      getParentId(id: string | number): string | number;
      getParentView(): webix.ui.baseview;
      getPrevId(id: number | string, step?: number): string | number;
      getPrevSiblingId(id: string | number): string | number;
      getScrollState(): WebixScrollState;
      getSelectedId(as_array?: boolean): any;
      getSelectedItem(as_array?: boolean): obj;
      getState(): WebixTreeState;
      getTopParentView(): webix.ui.baseview;
      group(config: WebixGroupConfig, target?: string | number): void;
      hasCss(id: string | number, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      isBranch(id: string | number): boolean;
      isBranchOpen(id: string | number): boolean;
      isEnabled(): boolean;
      isSelected(id: string | number): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      loadBranch(id: string | number, callback: WebixCallback, url: string): Promise<any>;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
        clear?: boolean
      ): Promise<any>;
      locate(e: Event): string | number;
      mapEvent(map: WebixEventMap): void;
      moveSelection(direction: string): void;
      open(id: string | number, show?: boolean): void;
      openAll(): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: number | string): void;
      remove(id: string | number | any[]): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      render(id: string | number, data: obj, type: WebixRenderType): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      select(id: string | any[], preserve?: boolean): void;
      selectAll(from?: string, to?: string): void;
      serialize(all?: boolean): any[];
      setPage(page: number): void;
      setState(state: WebixTreeState): void;
      show(force?: boolean, animation?: boolean): void;
      showBranch(branchId: string | number): void;
      showItem(id: string | number): void;
      sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      ungroup(mode: boolean): void;
      unselect(id?: string): void;
      unselectAll(): void;
      updateItem(id: number | string, data: obj): void;
      validate(id?: string): boolean;
      waitSave(handler: WebixCallback): Promise<any>;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: treemapConfig;
      data: DataStore;
      name: string;
      on_click: EventHash;
      on_context: EventHash;
      on_dblclick: EventHash;
      on_mouse_move: EventHash;
      type: WebixItemType;
      types: WebixItemTypes;
      waitData: Promise<any>;
    }
    interface treetableConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      areaselect?: boolean;
      autoConfig?: boolean;
      autoheight?: boolean;
      autowidth?: boolean;
      blockselect?: boolean | string;
      borderless?: boolean;
      checkboxRefresh?: boolean;
      clipboard?: boolean | string;
      columnWidth?: number;
      columns?: WebixDatatableColumn[];
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datafetch?: number;
      datathrottle?: number;
      datatype?: string;
      delimiter?: WebixDelimiterConfig;
      disabled?: boolean;
      drag?: boolean | string;
      dragColumn?: boolean | string;
      dragscroll?: boolean | string;
      editMath?: boolean;
      editValue?: string;
      editable?: boolean;
      editaction?: string;
      externalData?: WebixCallback;
      filterMode?: WebixTreeFilterMode;
      fixedRowHeight?: boolean;
      footer?: boolean;
      form?: string;
      gravity?: number;
      header?: boolean;
      headerRowHeight?: number;
      headermenu?: boolean | WebixHeaderMenuConfig;
      height?: number;
      hidden?: boolean;
      hover?: string;
      id?: string | number;
      keyPressTimeout?: number;
      leftSplit?: number;
      liveValidation?: boolean;
      loadahead?: number;
      map?: WebixDataMap;
      math?: boolean;
      maxColumnWidth?: number;
      maxHeight?: number;
      maxRowHeight?: number;
      maxWidth?: number;
      minColumnWidth?: number;
      minHeight?: number;
      minRowHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      multiselect?: boolean;
      navigation?: boolean;
      on?: EventHash;
      onClick?: EventHash;
      onContext?: EventHash;
      onDblClick?: EventHash;
      onMouseMove?: EventHash;
      pager?: string | WebixPagerConfig;
      prerender?: boolean;
      ready?: WebixCallback;
      removeMissed?: boolean;
      resizeColumn?: boolean | WebixResizeRowColConfig;
      resizeRow?: boolean | WebixResizeRowColConfig;
      rightSplit?: number;
      rowHeight?: number;
      rowLineHeight?: number;
      rules?: WebixValidationRules;
      save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
      scheme?: WebixDataScheme;
      scroll?: boolean | string;
      scrollAlignY?: boolean;
      scrollX?: boolean;
      scrollY?: boolean;
      select?: boolean | string;
      sort?: boolean | string;
      spans?: any[];
      subRowHeight?: string | number;
      subrow?: string | WebixTemplate;
      subview?: webix.ui.baseview | WebixCallback;
      templateCopy?: WebixCallback;
      threeState?: boolean;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: WebixDatatableType;
      undo?: boolean;
      undoLimit?: number;
      url?: string | WebixCallback | WebixProxy;
      width?: number;
      yCount?: number;
    }
    type treetableEventName =
      | 'onAfterAdd'
      | 'onAfterAreaAdd'
      | 'onAfterAreaRemove'
      | 'onAfterBlockSelect'
      | 'onAfterClose'
      | 'onAfterColumnDrop'
      | 'onAfterColumnDropOrder'
      | 'onAfterColumnHide'
      | 'onAfterColumnShow'
      | 'onAfterContextMenu'
      | 'onAfterDelete'
      | 'onAfterDrop'
      | 'onAfterEditStart'
      | 'onAfterEditStop'
      | 'onAfterFilter'
      | 'onAfterLoad'
      | 'onAfterOpen'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onAfterSelect'
      | 'onAfterSort'
      | 'onAfterUnSelect'
      | 'onAreaDrag'
      | 'onBeforeAdd'
      | 'onBeforeAreaAdd'
      | 'onBeforeAreaRemove'
      | 'onBeforeBlockSelect'
      | 'onBeforeClose'
      | 'onBeforeColumnDrag'
      | 'onBeforeColumnDrop'
      | 'onBeforeColumnDropOrder'
      | 'onBeforeColumnHide'
      | 'onBeforeColumnShow'
      | 'onBeforeContextMenu'
      | 'onBeforeDelete'
      | 'onBeforeDrag'
      | 'onBeforeDragIn'
      | 'onBeforeDrop'
      | 'onBeforeDropOut'
      | 'onBeforeEditStart'
      | 'onBeforeEditStop'
      | 'onBeforeFilter'
      | 'onBeforeLoad'
      | 'onBeforeOpen'
      | 'onBeforeRender'
      | 'onBeforeSelect'
      | 'onBeforeSort'
      | 'onBeforeUnSelect'
      | 'onBindRequest'
      | 'onBlur'
      | 'onCheck'
      | 'onCollectValues'
      | 'onColumnGroupCollapse'
      | 'onColumnResize'
      | 'onDataRequest'
      | 'onDataUpdate'
      | 'onDestruct'
      | 'onDragOut'
      | 'onEditorChange'
      | 'onEnter'
      | 'onFocus'
      | 'onHeaderClick'
      | 'onItemCheck'
      | 'onItemClick'
      | 'onItemDblClick'
      | 'onItemSingleClick'
      | 'onKeyPress'
      | 'onLiveEdit'
      | 'onLoadError'
      | 'onLongTouch'
      | 'onMouseMove'
      | 'onMouseMoving'
      | 'onMouseOut'
      | 'onPaste'
      | 'onResize'
      | 'onRowResize'
      | 'onScrollX'
      | 'onScrollY'
      | 'onSelectChange'
      | 'onStructureLoad'
      | 'onStructureUpdate'
      | 'onSubViewClose'
      | 'onSubViewCreate'
      | 'onSubViewOpen'
      | 'onSubViewRender'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onSyncScroll'
      | 'onTabFocus'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onValidationError'
      | 'onValidationSuccess'
      | 'onViewResize'
      | 'onViewShow';
    class treetable implements webix.ui.baseview {
      add(obj: obj, index?: number, parentId?: string): string;
      addCellCss(id: string, name: string, css: string, silent: boolean): void;
      addCss(id: string | number, css: string, silent?: boolean): void;
      addRowCss(id: string, css: string): void;
      addSelectArea(
        start: WebixCellObject,
        end: WebixCellObject,
        preserve: boolean,
        area_name?: string,
        css?: string,
        handle?: boolean
      ): void;
      addSpan(
        id: number | string | WebixSpanConfig,
        column?: string,
        width?: number,
        height?: number,
        value?: string,
        css?: string
      ): void;
      adjust(): void;
      adjustColumn(id: string | number, mode?: string): void;
      adjustRowHeight(columnId?: string, silent?: boolean): void;
      attachEvent(type: treetableEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      checkAll(id?: string | number): void;
      checkItem(id: string): void;
      clearAll(soft?: boolean): void;
      clearCss(css: string, silent?: boolean): void;
      clearSelection(): void;
      clearValidation(): void;
      close(id: string | number): void;
      closeAll(): void;
      closeSub(id: string | number): void;
      collectValues(id: string | number, mode?: WebixDatatableCollectValuesConfig): any[];
      columnId(index: number): string | number;
      copy(
        sid: string | number,
        tindex: number,
        tobj?: WebixDataMoveTarget,
        details?: WebixTreeDataMoveOptions
      ): number;
      count(): number;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      eachColumn(handler: WebixCallback, all?: boolean): void;
      eachRow(handler: WebixCallback): void;
      edit(id: WebixCellObject): void;
      editCancel(): void;
      editCell(
        row: string | number,
        col: string | number,
        preserve?: boolean,
        show?: boolean
      ): void;
      editColumn(id: string): void;
      editNext(): void;
      editRow(id: string): void;
      editStop(): void;
      enable(): void;
      exists(id: number | string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value?: string,
        preserve?: boolean
      ): void;
      filterByAll(): void;
      find(criterion: WebixCallback, first?: boolean): any;
      focusEditor(id: WebixCellObject): void;
      getAllSelectAreas(): WebixDatatableSelectAreas;
      getBranchIndex(id: string | number): number;
      getChecked(): any[];
      getChildViews(): webix.ui.baseview[];
      getColumnConfig(id: string): WebixDatatableColumn;
      getColumnIndex(id: string | number): number;
      getColumns(all?: boolean): WebixDatatableColumn[];
      getCss(rowId: string | number, columnId: string | number): string;
      getEditState(): WebixEditorObject;
      getEditor(row?: string | number | obj, column?: string | number): WebixEditorObject;
      getEditorValue(): string;
      getFilter(columnID: string | number): any;
      getFirstChildId(id: string | number): string;
      getFirstId(): number | string;
      getFooterNode(columnId: string, rowIndex?: number): HTMLElement;
      getFormView(): webix.ui.baseview;
      getHeaderContent(id: string | number): any;
      getHeaderNode(columnId: string, rowIndex?: number): HTMLElement;
      getIdByIndex(index: number | string): string | number;
      getIndexById(id: number | string): number;
      getItem(id: number | string): obj;
      getItemNode(id: string | number): HTMLElement;
      getLastId(): number | string;
      getNextId(id: number | string, step?: number): string | number;
      getNextSiblingId(id: string | number): string | number;
      getNode(): HTMLElement;
      getOpenItems(): any[];
      getPage(): number;
      getPager(): webix.ui.pager;
      getParentId(id: string | number): string | number;
      getParentView(): webix.ui.baseview;
      getPrevId(id: number | string, step?: number): string | number;
      getPrevSiblingId(id: string | number): string | number;
      getScrollState(): WebixScrollState;
      getSelectArea(area_name?: string): WebixDatatableAreaSelection;
      getSelectedId(asArray?: boolean, asString?: boolean): any;
      getSelectedItem(as_array?: boolean): obj;
      getSpan(): any[];
      getSpanNode(id: WebixCellObject): HTMLElement;
      getState(): obj;
      getSubView(id: string | number): webix.ui.baseview;
      getText(rowid: string | number, colid: string | number): string;
      getTopParentView(): webix.ui.baseview;
      getVisibleCount(): number;
      group(config: WebixGroupConfig, target?: string | number): void;
      hasCss(id: string | number, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      hideColumn(
        id: string | number,
        options?: WebixDatatableHideColumnConfig,
        silent?: boolean,
        mode?: boolean
      ): void;
      hideOverlay(): void;
      ignoreUndo(functor: WebixCallback): void;
      isBranch(id: string | number): boolean;
      isBranchOpen(id: string | number): boolean;
      isChecked(id: string | number): boolean;
      isColumnVisible(id: string | number): boolean;
      isEnabled(): boolean;
      isSelected(id: string | number): void;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      loadBranch(id: string | number, callback: WebixCallback, url: string): Promise<any>;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
        clear?: boolean
      ): Promise<any>;
      locate(node: HTMLElement | Event): WebixDatatableCellPos;
      mapCells(
        startrow: number,
        startcol: string,
        numrows: number,
        numcols: number,
        callback: WebixCallback,
        getOnly: boolean
      ): void;
      mapEvent(map: WebixEventMap): void;
      mapSelection(callback: WebixCallback): void;
      markSorting(column_id?: string, direction?: string, preserve?: boolean): void;
      move(
        sid: string | number,
        tindex: number,
        tobj?: WebixDataMoveTarget,
        details?: WebixTreeDataMoveOptions
      ): string | number;
      moveBottom(id: string | number, parentId: string | number): void;
      moveColumn(id: string, index: number): void;
      moveDown(id: string | number, step: number): void;
      moveSelection(direction: string): void;
      moveTop(id: string | number, parentId: string | number): void;
      moveUp(id: string | number, step: number): void;
      open(id: string | number, show?: boolean): void;
      openAll(): void;
      openSub(id: string | number): void;
      parse(data: string | any[] | obj, type: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: number | string): void;
      refreshColumns(config?: any[]): void;
      refreshFilter(id: string | number): void;
      refreshSelectArea(): void;
      registerFilter(
        object: HTMLElement | webix.ui.baseview,
        config: WebixDatatableFilterConfig,
        controller: WebixDatatableFilterController
      ): void;
      remove(id: string | number | any[]): void;
      removeCellCss(id: string, name: string, css_name: string, silent: boolean): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      removeRowCss(id: string, css_name: string): void;
      removeSelectArea(area_name: string): void;
      removeSpan(id: string | number, column: string): void;
      removeUndo(id: string): void;
      render(id: string | number, data: obj, operation: string): void;
      resize(): void;
      resizeSubView(id: string | number): void;
      scrollTo(x: number, y: number): void;
      select(row_id: string | number, preserve: boolean): void;
      selectAll(): void;
      selectRange(row_id: string | number, end_row_id: string | number, preserve?: boolean): void;
      serialize(id?: string | number, all?: boolean): any[];
      setColumnWidth(id: string | number, width: number): void;
      setPage(page: number): void;
      setRowHeight(id: string | number, height: number): void;
      setState(state: obj): void;
      show(force?: boolean, animation?: boolean): void;
      showCell(row: string, column: string): void;
      showColumn(id: string | number, options?: WebixShowColumnConfig, silent?: boolean): void;
      showColumnBatch(batch: string | number, preserve: boolean): void;
      showItem(id: string | number): void;
      showItemByIndex(index: number): void;
      showOverlay(message: string): void;
      sort(by: string | WebixSortConfig, dir?: string, as?: string): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      uncheckAll(id?: string | number): void;
      uncheckItem(id: string): void;
      undo(id: string): void;
      ungroup(mode: boolean): void;
      unselect(row_id: string | number): void;
      unselectAll(): void;
      updateItem(id: number | string, data: obj): void;
      validate(id?: string): boolean;
      validateEditor(id?: string | number): boolean;
      waitSave(handler: WebixCallback): Promise<any>;

      $customPrint: WebixCallback;
      $drag(source: HTMLElement, ev: Event, pointer: string): string;
      $dragHTML: WebixCallback;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragMark(context: WebixDnDContext, ev: Event): boolean;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event
      ): void;
      $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;
      $dropAllow: WebixCallback;
      $dropHTML: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $touch: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: treetableConfig;
      data: DataStore;
      headerContent: obj;
      name: string;
      on_click: EventHash;
      on_context: EventHash;
      on_dblclick: EventHash;
      on_mouse_move: EventHash;
      waitData: Promise<any>;
    }
    interface unitlistConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autoheight?: boolean;
      autowidth?: boolean;
      borderless?: boolean;
      click?: string | WebixCallback;
      clipboard?: boolean | string;
      container?: string | HTMLElement;
      css?: string | obj;
      data?: string | any[] | obj;
      datathrottle?: number;
      datatype?: string;
      delimiter?: WebixDelimiterConfig;
      disabled?: boolean;
      drag?: boolean | string;
      dragscroll?: boolean | string;
      externalData?: WebixCallback;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      item?: WebixItemType | string;
      keyPressTimeout?: number;
      layout?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      multiselect?: string | boolean;
      navigation?: boolean;
      on?: EventHash;
      onClick?: EventHash;
      onContext?: EventHash;
      onDblClick?: EventHash;
      onMouseMove?: EventHash;
      pager?: string | WebixPagerConfig;
      prerender?: boolean;
      ready?: WebixCallback;
      removeMissed?: boolean;
      rules?: WebixValidationRules;
      save?: string | boolean | WebixDataProcessorConfig | WebixCallback;
      scheme?: WebixDataScheme;
      scroll?: boolean | string;
      scrollSpeed?: string;
      select?: boolean | string;
      template?: string | WebixCallback;
      templateCopy?: WebixCallback;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: WebixItemType | string;
      uniteBy?: WebixCallback;
      url?: string | WebixCallback | WebixProxy;
      width?: number;
      xCount?: number;
      yCount?: number;
    }
    type unitlistEventName =
      | 'onAfterAdd'
      | 'onAfterContextMenu'
      | 'onAfterDelete'
      | 'onAfterDrop'
      | 'onAfterLoad'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onAfterSelect'
      | 'onAfterSort'
      | 'onBeforeAdd'
      | 'onBeforeContextMenu'
      | 'onBeforeDelete'
      | 'onBeforeDrag'
      | 'onBeforeDragIn'
      | 'onBeforeDrop'
      | 'onBeforeDropOut'
      | 'onBeforeLoad'
      | 'onBeforeRender'
      | 'onBeforeSelect'
      | 'onBeforeSort'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDataRequest'
      | 'onDataUpdate'
      | 'onDestruct'
      | 'onDragOut'
      | 'onEnter'
      | 'onFocus'
      | 'onItemClick'
      | 'onItemDblClick'
      | 'onItemRender'
      | 'onItemSingleClick'
      | 'onKeyPress'
      | 'onLoadError'
      | 'onLongTouch'
      | 'onMouseMove'
      | 'onMouseMoving'
      | 'onMouseOut'
      | 'onPaste'
      | 'onSelectChange'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTabFocus'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onUnits'
      | 'onValidationError'
      | 'onValidationSuccess'
      | 'onViewResize'
      | 'onViewShow';
    class unitlist implements webix.ui.baseview {
      add(obj: obj, index?: number): string | number;
      addCss(id: string | number, css: string, silent?: boolean): void;
      adjust(): void;
      attachEvent(type: unitlistEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(soft?: boolean): void;
      clearCss(css: string, silent?: boolean): void;
      clearValidation(): void;
      copy(
        sid: string | number,
        tindex: number,
        tobj?: WebixDataMoveTarget,
        details?: WebixDataMoveOptions
      ): void;
      count(): number;
      customize(obj: WebixItemType): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      disableItem(id: string | number): void;
      enable(): void;
      enableItem(id: string | number): void;
      exists(id: number | string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value?: string,
        preserve?: boolean
      ): void;
      find(criterion: WebixCallback, first?: boolean): any;
      getChildViews(): webix.ui.baseview[];
      getFirstId(): number | string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number | string): string | number;
      getIndexById(id: number | string): number;
      getItem(id: number | string): obj;
      getItemNode(id: string | number): HTMLElement;
      getLastId(): number | string;
      getNextId(id: number | string, step?: number): string | number;
      getNode(): HTMLElement;
      getPage(): number;
      getPager(): webix.ui.pager;
      getParentView(): webix.ui.baseview;
      getPrevId(id: number | string, step?: number): string | number;
      getScrollState(): WebixScrollState;
      getSelectedId(as_array?: boolean): any;
      getSelectedItem(as_array?: boolean): obj;
      getTopParentView(): webix.ui.baseview;
      getUnitList(name: string): any[];
      getUnits(): any[];
      getVisibleCount(): number;
      hasCss(id: string | number, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isItemEnabled(): boolean;
      isSelected(id: string | number): boolean;
      isVisible(): boolean;
      load(
        url: string | WebixCallback | WebixProxy,
        type?: string,
        callback?: WebixCallback,
        clear?: boolean
      ): Promise<any>;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
        clear?: boolean
      ): Promise<any>;
      locate(e: Event): string | number;
      mapEvent(map: WebixEventMap): void;
      move(
        sid: string,
        tindex: number,
        tobj?: webix.ui.baseview,
        details?: WebixDataMoveOptions
      ): string;
      moveBottom(id: string | number): void;
      moveDown(id: string | number, step: number): void;
      moveSelection(direction: string): void;
      moveTop(id: string | number): void;
      moveUp(id: string | number, step: number): void;
      parse(data: Promise<any> | string | any[] | obj, type?: string, clear?: boolean): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(id?: number | string): void;
      remove(id: string | number | any[]): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      render(id: string | number, data: obj, type: WebixRenderType): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      select(id: string | any[], preserve?: boolean): void;
      selectAll(from?: string, to?: string): void;
      serialize(all?: boolean): any[];
      setPage(page: number): void;
      show(force?: boolean, animation?: boolean): void;
      showItem(id: string | number): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      unselect(id?: string): void;
      unselectAll(): void;
      updateItem(id: number | string, data: obj): void;
      validate(id?: string): boolean;
      waitSave(handler: WebixCallback): Promise<any>;

      $customPrint: WebixCallback;
      $drag(source: HTMLElement, ev: Event, pointer: string): string;
      $dragHTML: WebixCallback;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragMark(context: WebixDnDContext, ev: Event): boolean;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event
      ): void;
      $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;
      $dropAllow: WebixCallback;
      $dropHTML: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $longTouchLimit: boolean;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $view: HTMLElement;
      $width: number;
      config: unitlistConfig;
      data: DataStore;
      name: string;
      on_click: EventHash;
      on_context: EventHash;
      on_dblclick: EventHash;
      on_mouse_move: EventHash;
      type: WebixItemType;
      types: WebixItemTypes;
      waitData: Promise<any>;
    }
    interface uploaderConfig {
      view?: string;
      accept?: string;
      align?: string;
      animate?: boolean | WebixAnimate;
      apiOnly?: boolean;
      autosend?: boolean;
      autowidth?: boolean;
      borderless?: boolean;
      click?: WebixCallback;
      container?: string | HTMLElement;
      css?: string | obj;
      datatype?: string;
      directory?: string;
      disabled?: boolean;
      formData?: obj | WebixCallback;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      icon?: string;
      id?: string | number;
      inputHeight?: number;
      inputName?: string;
      inputWidth?: number;
      keyPressTimeout?: number;
      label?: string;
      link?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      multiple?: boolean;
      name?: string;
      on?: EventHash;
      popup?: string;
      tooltip?: string | boolean | WebixCallback | WebixAutoTooltipConfig;
      type?: string;
      upload?: string;
      urlData?: obj;
      value?: string | number;
      width?: number;
    }
    type uploaderEventName =
      | 'onAfterFileAdd'
      | 'onAfterRender'
      | 'onAfterScroll'
      | 'onBeforeFileAdd'
      | 'onBeforeRender'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFileUpload'
      | 'onFileUploadError'
      | 'onFocus'
      | 'onItemClick'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onUploadComplete'
      | 'onViewResize'
      | 'onViewShow';
    class uploader implements webix.ui.baseview {
      addDropZone(element: HTMLElement): void;
      addFile(name: string | WebixFileObject, size?: number, type?: string): void;
      adjust(): void;
      attachEvent(type: uploaderEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      fileDialog(context?: obj): void;
      focus(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isUploaded(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      refresh(): void;
      render(id?: string | number, data?: obj, type?: string): void;
      resize(): void;
      send(id: number | string | WebixCallback): void;
      setValue(value: string, config?: any): void;
      show(force?: boolean, animation?: boolean): void;
      stopUpload(id: string | number): void;
      sync(source: WebixBindSource, filter?: WebixCallback, silent?: boolean): void;
      unbind(): void;
      unblockEvent(): void;

      $allowsClear: boolean;
      $compareValue: WebixCallback;
      $cssName: string;
      $getSize(dx?: number, dy?: number): any[];
      $getValue(): string;
      $height: number;
      $prepareValue: WebixCallback;
      $renderInput(config: webix.ui.buttonConfig & { [key: string]: any }): HTMLElement;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: WebixCallback;
      $tooltipIn(node: HTMLElement): HTMLElement;
      $tooltipMove(t: HTMLElement, e: Event, text: string): void;
      $tooltipOut(): void;
      $updateProgress: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: uploaderConfig;
      files: DataCollection;
      name: string;
      on_click: WebixCallback;
      touchable: boolean;
    }
    interface usermanagerConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      compact?: boolean;
      compactWidth?: number;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      locale?: WebixLocaleConfig;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: EventHash;
      override?: any[];
      roles?: boolean;
      url?: string;
      width?: number;
    }
    type usermanagerEventName =
      | 'onAfterScroll'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onInit'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class usermanager implements webix.ui.baseview {
      adjust(): void;
      app(app: obj): void;
      attachEvent(type: usermanagerEventName, functor: WebixCallback, id?: string): string | number;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getService(service: string): obj;
      getState(): obj;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unblockEvent(): void;

      bind(target: any, rule?: WebixCallback, format?: string): void;
      unbind(): void;
      $app: WebixJetAppWrapper;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: usermanagerConfig;
      name: string;
    }
    interface videoConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      borderless?: boolean;
      container?: string | HTMLElement;
      controls?: boolean;
      css?: string | obj;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      src?: string | any[];
      width?: number;
    }
    type videoEventName =
      | 'onAfterScroll'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewResize'
      | 'onViewShow';
    class video implements webix.ui.baseview {
      adjust(): void;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      disable(): void;
      enable(): void;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getVideo(): void;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;

      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: videoConfig;
      name: string;
    }
    interface windowConfig {
      view?: string;
      animate?: boolean | WebixAnimate;
      autofit?: boolean;
      autofocus?: boolean;
      body?: string | (webix.ui.baseviewConfig & { [key: string]: any });
      borderless?: boolean;
      close?: boolean;
      container?: string | HTMLElement;
      css?: string | obj;
      disabled?: boolean;
      escHide?: boolean;
      fullscreen?: boolean;
      gravity?: number;
      head?: (webix.ui.baseviewConfig & { [key: string]: any }) | string | false;
      headHeight?: number;
      height?: number;
      hidden?: boolean;
      id?: string | number;
      keyPressTimeout?: number;
      left?: number;
      master?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      modal?: boolean;
      move?: boolean;
      on?: EventHash;
      padding?: number;
      point?: boolean;
      position?: string | WebixCallback;
      relative?: string;
      resize?: boolean;
      toFront?: boolean;
      top?: number;
      width?: number;
      zIndex?: number;
    }
    type windowEventName =
      | 'onAfterScroll'
      | 'onBeforeShow'
      | 'onBindRequest'
      | 'onBlur'
      | 'onDestruct'
      | 'onEnter'
      | 'onFocus'
      | 'onHide'
      | 'onKeyPress'
      | 'onLongTouch'
      | 'onShow'
      | 'onSwipeX'
      | 'onSwipeY'
      | 'onTimedKeyPress'
      | 'onTouchEnd'
      | 'onTouchMove'
      | 'onTouchStart'
      | 'onViewMove'
      | 'onViewMoveEnd'
      | 'onViewResize'
      | 'onViewShow';
    class window implements webix.ui.baseview {
      adjust(): void;
      attachEvent(type: windowEventName, functor: WebixCallback, id?: string): string | number;
      bind(source: WebixBindSource, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      close(): void;
      define(
        property: string | (webix.ui.baseviewConfig & { [key: string]: any }),
        value?: any
      ): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getBody(): webix.ui.baseview;
      getChildViews(): webix.ui.baseview[];
      getFormView(): webix.ui.baseview;
      getHead(): webix.ui.baseview;
      getNode(): HTMLElement;
      getParentView(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: WebixEventMap): void;
      queryView(
        config: (webix.ui.baseviewConfig & { [key: string]: any }) | WebixCallback | string,
        mode?: string
      ): any;
      resize(): void;
      resizeChildren(): void;
      setPosition(x: number, y: number): void;
      show(node?: HTMLElement, position?: WebixWindowPosConfig, point?: string): void;
      unbind(): void;
      unblockEvent(): void;
      show(force: boolean, animation: boolean): void;
      $dragCreate(source: HTMLElement, event: Event, pointer: string): HTMLElement;
      $dragDestroy: WebixCallback;
      $dragPos: WebixCallback;
      $getSize(dx?: number, dy?: number): any[];
      $height: number;
      $scope: obj;
      $setNode: any;
      $setSize(x: number, y: number): boolean;
      $skin: WebixCallback;
      $view: HTMLElement;
      $width: number;
      config: windowConfig;
      name: string;
    }
  }
}

declare function $$<T extends webix.ui.baseview>(id: string | Event | HTMLElement): T;
