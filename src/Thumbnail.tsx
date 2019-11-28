import React, {useState, useEffect} from 'react';

interface IProps {
  file: File;
}

export const Thumbnail: React.FC<IProps> = (props: IProps) => {

  const {file} = props;

  const [thumb, setThumb] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setThumb(reader.result as any);
      setLoading(false);
    };

    setLoading(true);
    reader.readAsDataURL(file);
  }, [file]);

  return (
    <div className='mt-2 mb-2'>
      { loading
        ?
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        :
          <img
            src={thumb}
            alt={file.name}
            className="img-thumbnail"
            height={200}
            width={200}
          />
      }
    </div>
  );
};
