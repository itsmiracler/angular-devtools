export class GraphUtils {
  addText(svg: any, x: number, y: number, text: string, maxChars: number = 0, clickFn?: () => void) {
    const fittedText = maxChars > 0 && text.length > maxChars ? `${text.slice(0, maxChars - 3)}...` : text;
    svg
      .append('text')
      .attr('x', x)
      .attr('y', y)
      .text(fittedText)
      .on('click', clickFn ? clickFn : () => null);
  }

  addCircle(svg: any, x: number, y: number, r: number, clazz: string, clickFn?: () => void) {
    svg
      .append('circle')
      .attr('cx', x)
      .attr('cy', y)
      .attr('r', r)
      .attr('stroke-width', 1)
      .attr('class', clazz)
      .on('click', clickFn ? clickFn : () => null);
  }

  addLine(svg: any, x1: number, y1: number, x2: number, y2: number, clazz: string) {
    svg
      .append('line')
      .attr('x1', x1)
      .attr('y1', y1)
      .attr('x2', x2)
      .attr('y2', y2)
      .attr('class', 'link ' + (clazz || ''));
  }
}
