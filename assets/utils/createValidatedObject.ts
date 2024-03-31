type CreateDTOType<Output, Source> = (data: Source) => Output;

type ValidateFieldsType<DataType> = (id: string, data: DataType) => void;

export default function createValidatedObject<T, Z>(
  id: string,
  fileData: string,
  createDTO: CreateDTOType<T, Z>,
  validateFields: ValidateFieldsType<T>,
): T[] {
  let lines = fileData.split('\n');

  const data = lines.map((line) => {
    const trimmedLine = line.trim();
    const unformattedData = JSON.parse(trimmedLine);
    const formattedData = createDTO(unformattedData);
    validateFields(id, formattedData);

    return formattedData;
  });

  return data;
}
