import { Router } from 'express';
import {  totalVentasPorDia } from '../controllers/estadisticas.cotroller.js';

const router = Router();

import {  totalVentasPorAño } from '../controllers/estadisticas.cotroller.js';
import { totalComprasPorClienteMes, totalVentasPorMes } from '../controllers/estadisticas.controller.js';
import { totalVentasPorEmpleado } from '../controllers/estadisticas.controller.js';
import { cantidadVentasPorEmpleado} from '../controllers/estadisticas.controller.js';
import { analisisVentasPorCliente } from '../controllers/estadisticas.controller.js';
import { cantidadComprasPorCliente } from '../controllers/estadisticas.controller.js';

import { producosVendidosPorCantidad } from '../controllers/estadisticas.controller.js';
import { producosVendidosPorValorTotal } from '../controllers/estadisticas.controller.js';
import { ventasProductosPorMes } from '../controllers/estadisticas.controller.js';
import { totalVentasPorCategoria } from '../controllers/estadisticas.controller.js';
import { totalVentasPorCategoriaMes } from '../controllers/estadisticas.controller.js';
import { productosBajoStock } from '../controllers/estadisticas.controller.js';
import { stockPorCategoria } from '../controllers/estadisticas.controller.js';
import { ventasPorClienteEmpleadoMes } from '../controllers/estadisticas.controller.js';
import { ventasPorCategoriaEmpleadoMes } from '../controllers/estadisticas.controller.js';
import { ventasPorClienteCategoriaMes } from '../controllers/estadisticas.controller.js';
import { promedioVentaPorEmpleado } from '../controllers/estadisticas.controller.js';
import { promedioVentaPorEmpleadoMes } from '../controllers/estadisticas.controller.js';
import { clientesCompranFrecuentemente } from '../controllers/estadisticas.controller.js';
import { clientesFrecuentesPorMes } from '../controllers/estadisticas.controller.js';
import { productosCompradosPorClientes } from '../controllers/estadisticas.controller.js';
import { categoriasCompradasPorCliente } from '../controllers/estadisticas.controller.js';
import { totalVentasPorDiasSemanas } from '../controllers/estadisticas.controller.js';
import { ventasCategoriaYSemana } from '../controllers/estadisticas.controller.js';
import { productosMayorRotacion } from '../controllers/estadisticas.controller.js';
import { categoriasMayorRotacion } from '../controllers/estadisticas.controller.js';

// Ruta para obtener todos los empleados
router.get('/totalventaspordia', totalVentasPorDia);
router.get('/totalventasporaño', totalVentasPorAño);
router.get('/totalventaspormes', totalVentasPorMes);
router.get('/totalventasporempleado', totalVentasPorEmpleado);
router.get('/cantidadventasporempleado', cantidadVentasPorEmpleado);
router.get('/analisisventasporclientes', analisisVentasPorCliente);
router.get('/cantidadcomprasporcliente', cantidadComprasPorCliente);
router.get('/totalcomprasporclientemes', totalComprasPorClienteMes);
router.get('/producosvendidosporcantidad', producosVendidosPorCantidad);
router.get('/producosvendidosporvalortotal', producosVendidosPorValorTotal);
router.get('/ventasproductospormes', ventasProductosPorMes);
router.get('/totalventasporcategoria', totalVentasPorCategoria);
router.get('/totalventasporcategoriames', totalVentasPorCategoriaMes);
router.get('/productosbajostock', productosBajoStock);
router.get('/stockporcategoria', stockPorCategoria);
router.get('/ventasporclienteempleadomes', ventasPorClienteEmpleadoMes);
router.get('/ventasporcategoriaempleadomes', ventasPorCategoriaEmpleadoMes);
router.get('/ventasporclientecategoriames', ventasPorClienteCategoriaMes);
router.get('/promedioventaporempleado', promedioVentaPorEmpleado);
router.get('/promedioventaporempleadomes', promedioVentaPorEmpleadoMes);
router.get('/clientescompranfrecuentemente', clientesCompranFrecuentemente);
router.get('/clientesfrecuentespormes', clientesFrecuentesPorMes);
router.get('/productoscompradosporcliente', productosCompradosPorClientes);
router.get('/categoriascompradasporclientes', categoriasCompradasPorCliente);
router.get('/totalventaspordiassemanas', totalVentasPorDiasSemanas);
router.get('/ventascategoriaysemana', ventasCategoriaYSemana);
router.get('/productosmayorrotacion', productosMayorRotacion);
router.get('/categoriasmayorrotacion', categoriasMayorRotacion);





export default router;
