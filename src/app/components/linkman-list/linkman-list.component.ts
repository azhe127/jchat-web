import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';

const avatarErrorIcon = '../../../assets/images/single-avatar.svg';

@Component({
    selector: 'linkman-list-component',
    templateUrl: './linkman-list.component.html',
    styleUrls: ['./linkman-list.component.scss']
})

export class LinkmanListComponent implements OnInit, DoCheck {
    @Input()
        private friendList;
    @Output()
        private selectLinkmanItemEmit: EventEmitter<any> = new EventEmitter();
    private isEmpty = false;
    constructor() {
        // pass
    }
    public ngOnInit() {
        // pass
    }
    public ngDoCheck() {
        let flag = true;
        for (let item of this.friendList) {
            if (item.data.length > 0) {
                this.isEmpty = true;
                flag = false;
                break;
            }
        }
        if (flag) {
            this.isEmpty = false;
        }
    }
    private avatarErrorIcon(event) {
        event.target.src = avatarErrorIcon;
    }
    private selectLinkmanItem(item) {
        item.type = 3;
        this.selectLinkmanItemEmit.emit(item);
    }
    private avatarLoad(event) {
        if (event.target.naturalHeight >= event.target.naturalWidth) {
            event.target.style.width = '100%';
            event.target.style.height = 'auto';
        } else {
            event.target.style.height = '100%';
            event.target.style.width = 'auto';
        }
    }
}
