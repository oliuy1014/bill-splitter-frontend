type BillEntryMethodProps = {
  manualEntry: boolean,
  photoEntry: boolean;
  setManualEntry: (value: React.SetStateAction<boolean>) => void;
  setPhotoEntry: (value: React.SetStateAction<boolean>) => void;
}

export default function BillEntryMethod({
  manualEntry,
  setManualEntry,
  photoEntry,
  setPhotoEntry
}: BillEntryMethodProps) {
  return (
    <div className={`entry-options ${(manualEntry || photoEntry) ? "no-display" : ""}`}>
      <button
        className="entry-method"
        onClick={() => setManualEntry(true)}
      > Enter Manually </button>
      <button
        className="entry-method"
        onClick={() => setPhotoEntry(true)}
      > Take a Photo </button>
    </div>
  )
}
