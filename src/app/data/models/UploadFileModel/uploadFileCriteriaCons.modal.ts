export class UploadFileCriteriaConsModal {

  private static image = {
    filemaxsize: 10,
    fileformat: ['png', 'jpeg', 'jpg']
  }
  ;
  private static video = {
    filemaxsize: 250,
    fileformat: ['mp4', 'mpeg', 'wmv']
  };

  public static convert(Byte: number): number {
    return Byte / 1000000;
  }

  public static UploadFileCriteria(type: string): any {
    return (type === 'image' ? UploadFileCriteriaConsModal.image : UploadFileCriteriaConsModal.video);
  }

  public static uploadSizes(sizes: any[], file) {}
}
