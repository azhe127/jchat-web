import { Component, Input, Output, EventEmitter, ElementRef,
    AfterViewInit, OnInit } from '@angular/core';

@Component({
    selector: 'create-single-chat-component',
    templateUrl: './create-single-chat.component.html',
    styleUrls: ['./create-single-chat.component.scss']
})

export class CreateSingleChatComponent implements OnInit, AfterViewInit {
    @Input()
        private info;
    @Input()
        private createSingleOption;
    private singleName = '';
    @Output()
        private createSingleChat: EventEmitter<any> = new EventEmitter();
    @Output()
        private emptySingleChatTip: EventEmitter<any> = new EventEmitter();
    constructor(
        private elementRef: ElementRef
    ) {

    }
    public ngOnInit() {
        // pass
    }
    public ngAfterViewInit() {
        this.elementRef.nativeElement.querySelector('#singleChatInput').focus();
    }
    private createSingleChatEmit(singleName) {
        let type = '';
        if (this.createSingleOption.title === '添加好友') {
            type = 'addFriend';
        } else if (this.createSingleOption.title === '发起单聊') {
            type = 'createSingleChat';
        }
        if (singleName || singleName === '') {
            this.createSingleChat.emit({
                singleName,
                type
            });
        } else {
            this.createSingleChat.emit();
        }
    }
    private emptyTip() {
        if (this.info !== '') {
            this.emptySingleChatTip.emit();
        }
    }
}
