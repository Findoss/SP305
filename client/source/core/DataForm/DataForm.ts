type TCallback = (e: Event) => void;
type TNames = string[];
interface IData {
  [input: string]: FormDataEntryValue;
}
interface IInputs {
  [id: string]: Element;
}

export class DataForm {
  private $form: HTMLFormElement | null;
  private inputs?: IInputs;

  constructor(selector: string, names?: TNames) {
    this.$form = document.querySelector(selector);

    if (names !== undefined) {
      this.findInputs(names);
    }
  }

  private submitHandler(e: Event): void {
    e.stopPropagation();
    e.preventDefault();
    console.log(this.getData());
  }

  private findInputs(names: TNames): void {
    const inputs: IInputs = {};
    names.forEach((name) => {
      const input = this.$form?.querySelector(`[name=${name}]`);
      if (input) {
        inputs[name] = input;
      }
    });
    this.inputs = inputs;
  }

  public addHandlerToSubmit(callback?: TCallback): void {
    this.$form?.addEventListener('submit', (e) => {
      if (callback === undefined) {
        this.submitHandler(e);
      } else {
        callback(e);
      }
    });
  }

  public getData(): IData {
    const data: IData = {};
    if (this.$form) {
      const form = new FormData(this.$form);
      for (let [key, value] of form.entries()) data[key] = value;
    }
    return data;
  }

  public getInputs(): IInputs | undefined {
    return this.inputs;
  }
}
