
import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { constants } from '../utilities/constant/constant';

@Injectable({
    providedIn: 'root'
})
export class AmbientLightSensorService {
    private illuminance: ReplaySubject<number> = new ReplaySubject<number>(1);
    illuminance$: Observable<number> = this.illuminance.asObservable();
    constructor(private window: Window) {
        try {
            if (constants.SENSOR_NAME in window) {
                this.startReading();
            } else {
                this.illuminance.error(constants.ERROR_MESSAGES.UNSUPPORTED_FEATURE);
            }
        } catch (error) {
            // Handle construction errors.
            if (error.name === constants.ERROR_TYPES.SECURITY) {
                this.illuminance.error(constants.ERROR_MESSAGES.BLOCKED_BY_FEATURE_POLICY);
            } else if (error.name === constants.ERROR_TYPES.REFERENCE) {
                this.illuminance.error(constants.ERROR_MESSAGES.NOT_SUPPORTED_BY_USER_AGENT);
            } else {
                this.illuminance.error(`${error.name}: ${error.message}`);
            }
        }
    }
    private startReading() {
        // const sensor = new AmbientLightSensor();
        // sensor.onreading = () => this.illuminance.next(sensor.illuminance);
        // sensor.onerror = async event => {
        //     // Handle runtime errors.
        //     if (event.error.name === constants.ERROR_TYPES.NOT_ALLOWED) {
        //         // Branch to code for requesting permission.
        //         const result = await navigator.permissions.query({
        //             name: constants.SENSOR_POLICY_NAME
        //         });
        //         if (result.state === constants.ACCESS_DENIED) {
        //             this.illuminance.error(constants.ERROR_MESSAGES.PREMISSION_DENIED);
        //             return;
        //         }
        //         this.startReading();
        //     } else if (event.error.name === constants.ERROR_TYPES.NOT_READABLE) {
        //         this.illuminance.error(constants.ERROR_MESSAGES.CANNOT_CONNECT);
        //     }
        // };
        // sensor.start();
    }

}
