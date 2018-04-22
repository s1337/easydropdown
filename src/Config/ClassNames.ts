import IClassNames from './Interfaces/IClassNames';

class ClassNames implements IClassNames {
    public root:           string = 'edd';
    public rootOpen:       string = 'edd-open';
    public rootOpenAbove:  string = 'edd-open-above';
    public rootOpenBelow:  string = 'edd-open-below';
    public rootDisabled:   string = 'edd-disabled';
    public rootInvalid:    string = 'edd-invalid';
    public rootFocused:    string = 'edd-focused';
    public rootHasValue:   string = 'edd-has-value';
    public head:           string = 'edd-head';
    public label:          string = 'edd-label';
    public arrow:          string = 'edd-arrow';
    public body:           string = 'edd-body';
    public bodyScrollable: string = 'edd-body-scrollable';
    public bodyAtTop:      string = 'edd-body-at-top';
    public bodyAtBottom:   string = 'edd-body-at-bottom';
    public itemsList:      string = 'edd-items-list';
    public group:          string = 'edd-group';
    public groupDisabled:  string = 'edd-group-disabled';
    public groupHasLabel:  string = 'edd-group-has-label';
    public groupLabel:     string = 'edd-group-label';
    public option:         string = 'edd-option';
    public optionDisabled: string = 'edd-option-disabled';
    public optionFocused:  string = 'edd-option-focused';
    public optionSelected: string = 'edd-option-selected';

    constructor() {
        Object.seal(this);
    }
}

export default ClassNames;