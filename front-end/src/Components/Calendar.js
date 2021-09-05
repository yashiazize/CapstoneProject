import { useState } from 'react'
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, Input, Page, setOptions } from '@mobiscroll/react';

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

const Calendar = () => {
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);

    return (
        <Page>
            <Datepicker
                controls={['calendar', 'time']}
                select="range"
                display="inline"
            />
            
            <Datepicker
                controls={['calendar', 'timegrid']}
                select="range"
                display="inline"
            />
            
            <Datepicker
                controls={['datetime']}
                select="range"
                display="inline"
            />
            
            <Datepicker
                controls={['datetime']}
                select="range"
                inputProps={{
                    label: 'Range',
                    labelStyle: 'stacked',
                    inputStyle: 'outline',
                    placeholder: 'Please Select...'
                }}
            />
            
            <Datepicker
                controls={['datetime']}
                select="range"
                startInput={start}
                endInput={end}
            />
            <div className="mbsc-grid mbsc-no-padding">
                <div className="mbsc-row">
                    <div className="mbsc-col-6">
                        <Input
                            ref={setStart}
                            label="Start"
                            labelStyle="stacked"
                            inputStyle="outline"
                            placeholder="Please Select...">
                        </Input>
                    </div>
                    <div className="mbsc-col-6">
                        <Input
                            ref={setEnd}
                            label="End"
                            labelStyle="stacked"
                            inputStyle="outline"
                            placeholder="Please Select...">
                        </Input>
                    </div>
                </div>
            </div>
        </Page>
    ); 
}


export default Calendar;
