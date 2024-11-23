export class DateFormat {
    static format(date: Date): string {
        const pad = (n: number) => n < 10 ? `0${n}` : n;

        const defaultDate = date ?? new Date();
        const year = defaultDate.getFullYear();
        const month = pad(defaultDate.getMonth() + 1);
        const day = pad(defaultDate.getDate());
        const hours = pad(defaultDate.getHours());
        const minutes = pad(defaultDate.getMinutes());

        return `${year}-${month}-${day}T${hours}:${minutes}`;

    }

    static parse(date: string): Date {
        const [datePart, timePart] = date.split('T');

        const [year, month, day] = datePart.split('-').map(Number);
        const [hours, minutes] = timePart.split(':').map(Number);

        return new Date(year, month - 1, day, hours, minutes);
    }
}
