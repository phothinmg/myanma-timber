export type OutputFormat = 'number' | 'string';
/**
 * @typedef {'number' | 'string'} OutputFormat
 */
export class Lumber {
    static toString(): string[];
    /**
     * Calculates the feet per ton of lumber.
     *
     * @param {number} x - The width of the lumber in inches.
     * @param {number} y - The thickness of the lumber in inches.
     * @param {OutputFormat} t - The type of the lumber (0 for number, 1 for string).
     * @returns {string | number} - The feet per ton of lumber.
     */
    static feetPerTon(x: number, y: number, t: OutputFormat): string | number;
    /**
     * Calculate the volume of a lumber in cubic feet.
     *
     * @param {number} x -The width of the lumber in inches..
     * @param {number} y - The thickness of the lumber in inches.
     * @param {number} l - The length of the lumber in feet.
     * @param {OutputFormat} t - The type of the result, either "number" or "string".
     *
     * @returns {number|string} - The volume of the lumber in cubic feet.
     */
    static cubicFeet(x: number, y: number, l: number, t: OutputFormat): number | string;
    /**
     * Calculates the tonnage based on the given dimensions of lumber .
     *
     * @param {number} x -The width of the lumber in inches..
     * @param {number} y - The thickness of the lumber in inches.
     * @param {number} l - The length of the lumber in feet.
     * @param {OutputFormat} t - The type of output format. Can be either 'number' or 'string'.
     * @returns {number | string} - The calculated tonnage in either number or string format.
     */
    static ton(x: number, y: number, l: number, t: OutputFormat): number | string;
}
export class TimberLog {
    static toString(): string[];
    /**
     * Calculation for Hoppus Cubic Feet of a timber log.
     *
     * @param {number} mgf - Vealue of Middle Girth of a timber log in feet.
     * @param {number} mgi - Vealue of Middle Girth of a timber log in inches that after getting mgf and not more than 12 inches
     * @param {number} l - Length of a timber log in feet.
     * @param {OutputFormat} t - The type of output format. Can be either 'number' or 'string'.
     *  @returns {number | string} -The calculated Hoppus Cube.
     */
    static hoppusCube(mgf: number, mgi: number, l: number, t: OutputFormat): number | string;
    /**
     * Calculation for Hoppus Ton  of a timber log.
     *
     * @param {number} mgf - Vealue of Middle Girth of a timber log in feet.
     * @param {number} mgi - Vealue of Middle Girth of a timber log in inches that after getting mgf and not more than 12 inches
     * @param {number} l - Length of a timber log in feet.
     * @param {OutputFormat} t - The type of output format. Can be either 'number' or 'string'.
     *  @returns {number | string} -The calculated Hoppus Ton.
     */
    static hoppusTon(mgf: number, mgi: number, l: number, t: OutputFormat): number | string;
}
/**
 * Translates the given content to the specified language.
 *
 * @param {string | number} content - The content to be translated.
 * @returns {string | number} The translated content.
 */
export function mmTranslate(content: string | number): string | number;
/**
 * Calculate the cash value based on the given ton, price, and type.
 *
 * @param {number} ton - The ton value.
 * @param {number} price - The price value.
 * @param {OutputFormat} t - The type value. If it's a number, it will be treated as 0. If it's a string, it will be treated as 1.
 * @returns {string} - The cash value based on the given ton, price, and type.
 */
export function cashValue(ton: number, price: number, t: OutputFormat): string;
//# sourceMappingURL=index.d.ts.map