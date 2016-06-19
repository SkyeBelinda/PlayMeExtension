import { Component, OnInit } from '@angular/core';

import {
	IQueuedTrack,
	IPagedResult
} from '../models';
import {
	AudioZoneService,
	IAudioZone,
	UserInfoService,
	SignalRService,
	QueueService
} from '../api';
import {
	UserListComponent,
	SearchBarComponent,
	QueuedTrackComponent,
	BreadcrumbsComponent
} from '../shared';

import {ZoneSelectorComponent} from '../now-playing/zone-selector/zone-selector.component';
import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
	moduleId: module.id,
	selector: 'app-queue',
	templateUrl: 'queue.component.html',
	styleUrls: ['queue.component.css'],
	directives: [
		SearchBarComponent,
		ZoneSelectorComponent,
		TAB_DIRECTIVES,
		QueuedTrackComponent,
		UserListComponent,
		BreadcrumbsComponent
	]
})
export class QueueComponent implements OnInit {
	queuedTracks: IQueuedTrack[];

	constructor(private _queueService: QueueService) { }

	ngOnInit() {
		this._queueService.getAllQueuedTracks().then(tracks =>{
		    this.queuedTracks = tracks;
		})
	}
}
