/* Purpose: Display all ways to enter new bill
 * Params: None
 * Errors: TODO
 */

// TODO: put entry method in context provider and back arrow as component in photo and manual entry?

import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BillEntryMethod from './BillEntryMethod';
import ManualEntry from './ManualEntry';
import PhotoEntry from './PhotoEntry';

function NewBillEntry() {
  const [manualEntry, setManualEntry] = useState(false);
  const [photoEntry, setPhotoEntry] = useState(false);

  return (
    <div>
      <div className="new-bill-container">
        <div className="header">
          <h3>ADD NEW BILL</h3>
        </div>
        {(photoEntry || manualEntry)
          ?
            <button
              className={"back-button"}
              onClick={() => {
                setManualEntry(false);
                setPhotoEntry(false);
              }}
            >
              <ArrowBackIcon />
              <p> BACK </p>
            </button>
          :
            <BillEntryMethod
              manualEntry={manualEntry}
              setManualEntry={setManualEntry}
              photoEntry={photoEntry}
              setPhotoEntry={setPhotoEntry}
            />
        }
        {manualEntry && <ManualEntry />}
        {photoEntry && <PhotoEntry />}
      </div>
</div>
  )
}

export default NewBillEntry