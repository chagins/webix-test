import { Button } from 'antd';
import { useSheet } from 'entities/sheet';
import { useEffect, useState } from 'react';
import { LoadTemplatesProps } from '../lib';

export const LoadTemplates = ({ className }: LoadTemplatesProps) => {
  const { fetchTemplateList, sheetInstance } = useSheet();
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (!sheetInstance) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [sheetInstance]);

  const onLoad = async () => {
    setIsLoading(true);
    if (sheetInstance) {
      sheetInstance.disable();
    }

    await fetchTemplateList();

    if (sheetInstance) {
      sheetInstance.enable();
    }
    setIsLoading(false);
  };

  return (
    <Button
      className={className}
      type="primary"
      loading={isLoading}
      onClick={onLoad}
      disabled={isDisabled || isLoading}
    >
      Load templates
    </Button>
  );
};
