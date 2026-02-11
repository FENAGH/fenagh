import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Content, Constrain } from "../components/globals"
import Hero from "../components/hero"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "objectives.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      sectorImages: allFile(
        filter: {extension: {regex: "/(webp)/"}, relativeDirectory: {eq: "sectors"}}
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      },
    }
  `)
  const handleSelectedImage = sector => {
    return data.sectorImages.edges.filter(image => image.node.base.split(".")[0] === sector)
  }
  return(
    <Layout>
      <SEO title="Sectores Representados" />
      <Hero
        sources={data.bgImage.childImageSharp.fluid}
        className="hero-default hero-alignBottom hero-alignLeft"
        headline="Sectores Representados"
        section="Institución"
      />
      <Constrain>
        <Content>
          
          <h2 id="lacteo">Sector Lácteo</h2>

      
          <div className="content-pull content-pull--right">
            <div className="content-media">
              <div className="content-media-item" >
                 
                <Img fluid={handleSelectedImage("lacteo")[0]?.node.childImageSharp.fluid} alt="Sector Lácteo"/>
              
            </div>
          </div>
        </div> 
        
    
             <p>El sector lácteo de Honduras está representado por la <strong>Cámara Hondureña de la Leche (CAHLE)</strong> organización afiliada a la FENAGH.</p>
             <p ><strong>CAHLE</strong> es la entidad líder que representa, promueve y fomenta el desarrollo sostenible de la producción, procesamiento y comercialización de la leche y sus derivados en Honduras.</p>

             <p>La leche es uno de los productos agrícolas más producidos en el mundo. En el 2013 se produjeron 770 mil millones de litros de leche, la leche clasificó en tercer lugar por tonelaje de producción y fue el principal producto agrícola en términos de valor por todo el mundo.</p>
             <p>
              <strong>Sitio web: {" "}</strong>
              <a className="external-link" href="https://www.cahle.org/acerca-de-cahle" rel="noopener noreferrer" target="_blank">www.cahle.org</a>
              </p>
   
      

          <h2 id="acuicola">Sector Acuicola</h2>

          <div className="content-pull content-pull--left">
            <div className="content-media">
              <div className="content-media-item">
                <Img fluid={handleSelectedImage("acuicola")[0]?.node.childImageSharp.fluid} alt="Sector Lácteo"/>
              </div>
            </div>
          </div>

    
          <p >El sector acuícola de Honduras está representado por la <strong>Asociación Nacional de Acuicultores de Honduras (ANDAH)</strong> organización afiliada a la FENAGH.</p>
          <p><strong>ANDAH</strong> cuenta con más de 300 miembros, entre empresas, productores individuales, cooperativas y agrupaciones de camarón cultivado y laboratorios larvarios; integrándose periódicamente, otros acuicultores a nivel nacional, así como plantas procesadoras y empresas de insumos y servicios relacionados directamente con la acuicultura del país.</p>
          
        
          <p>Honduras tiene una industria constituida por aproximadamente 420 proyectos de camarón cultivado, con una área aproximada de 24,500 hectáreas en producción. Estas unidades productivas generan un promedio anual de 65 millones de libras exportables y 150,000 empleos directos e indirectos de los cuales un 52% son mano de obra femenina, beneficiando alrededor de 500,000 personas.</p>
          <p>
            <strong>Sitio web: {" "}</strong>  
            <a className="external-link" href="https://andah.hn/andah/" rel="noopener noreferrer" target="_blank">andah.hn</a>
          </p>
         
      
     

          <h2 id="embutidos">Sector Embutidos</h2>

          <div className="content-pull content-pull--right">
            <div className="content-media">
              <div className="content-media-item">
                <Img fluid={handleSelectedImage("embutidos")[0]?.node.childImageSharp.fluid} alt="Sector Lácteo"/>
              </div>
            </div>
          </div>

    
          <p>El sector de embutidos de Honduras está representado por la <strong>Asociación Hondureña de Productores de Embutidos (AHPROEM)</strong> organización afiliada a la FENAGH.</p>
          <p><strong>AHPROEM</strong> se ha dinamizado en los últimos años, estableciendo alianzas estratégicas con asociaciones nacionales e internacionales que vienen a fomentar la productividad de las empresas, garantizar la calidad de los productos con charlas técnicas y talleres prácticos.</p>
          
          <p>Con el propósito de ser un motor de la industria cárnica en particular y del comercio en general, se han incorporado varios cambios que permiten ampliar la perspectiva de solo embutidos, a procesadores de carnes e incorporar a las empresas proveedoras de materias primas e instituciones educativas de nivel superior.</p>
          <p>
            <strong>Sitio web: {" "}</strong>
            <a className="external-link" href="http://www.ahproem.com/" rel="noopener noreferrer" target="_blank">www.ahproem.com</a>
          </p>
     

          <h2 id="avicola">Sector Avicola</h2>

          <div className="content-pull content-pull--left">
            <div className="content-media">
              <div className="content-media-item">
                <Img fluid={handleSelectedImage("avicola")[0]?.node.childImageSharp.fluid} alt="Sector Lácteo"/>
              </div>
            </div>
          </div>

     
          <p>El sector avícola de Honduras está representado por la <strong>Asociación Nacional de Avicultores de Honduras (ANAVIH)</strong> y por los <strong>Productores Avícolas de Honduras (PROAVIH)</strong> ambas instituciones están afiliadas a la FENAGH.</p>
          <p>La industria avícola produce unas 350 millones de libras de carne al año e invierte unos 400 millones de lempiras al año.</p>
          <p>La producción de huevo y pollo registró un crecimiento del 4 y 2.7% respectivamente. Ese crecimiento se traduce en 20 millones de libras de carne de pollo y 300,000 unidades de huevo al día.</p>
          <p>
            <strong>Sitio web PROAVIH: {" "}</strong>
            <a className="external-link" href="https://proavih.com/" rel="noopener noreferrer" target="_blank">proavih.com</a>
          </p>
          <p>
            <strong>Facebook de ANAVIH: {" "}</strong>
            <a className="external-link" href="https://www.facebook.com/anavih.hn/" rel="noopener noreferrer" target="_blank">anavih.hn</a>
          </p>
       

          <h2 id="cafe">Sector Café</h2>

          <div className="content-pull content-pull--right">
            <div className="content-media">
              <div className="content-media-item">
                <Img fluid={handleSelectedImage("cafe")[0]?.node.childImageSharp.fluid} alt="Sector Lácteo"/>
              </div>
            </div>
          </div>

   

          <p>El sector productor de café de Honduras está representado por La <strong>Asociación Hondureña de Productores de Café (AHPROCAFE)</strong> organización afiliada a la FENAGH.</p>
          <p><strong>AHPROCAFE</strong> es una organización gremial sin fines de lucro, creada mediante personalidad jurídica número 17, emitida el 03 de agosto de 1967 al servicio de los productores y productoras de café de Honduras. Cuenta con una membresía de más de 110,252 afiliados, diseminados en 210 municipios de 298 y en 15 de los 18 departamentos que conforman el territorio hondureño.</p>

          <ul>
            <li>Honduras es el primer país productor de Café en Centro América</li>
            <li>Honduras es el primer país exportador de Café en Centro América</li>
            <li>Honduras es el quinto país exportador de café en el mundo</li>
            <li>El sector Café aporta el 5% del producto interno bruto nacional</li>
            <li>El sector Café aporta el 30% del producto interno bruto agrícola</li>
          </ul>

          <p>
            <strong>Sitio web: {" "}</strong>
            <a className="external-link" href="http://www.ahprocafe.hn/" rel="noopener noreferrer" target="_blank">www.ahprocafe.hn</a>
          </p>
   

          <h2 id="carne">Sector Carne</h2>

          <div className="content-pull content-pull--left">
            <div className="content-media">
              <div className="content-media-item">
                <Img fluid={handleSelectedImage("carne")[0]?.node.childImageSharp.fluid} alt="Sector Lácteo"/>
              </div>
            </div>
          </div>

     
          <p>El sector cárnico de Honduras está representado por la <strong>Cámara de Fomento Ganadero de Honduras (CAFOGAH)</strong> organización afiliada a la FENAGH.</p>
          <p><strong>CAFOGAH</strong> tiene como objetivo fomentar la competitividad y sostenibilidad del Rubro de la Carne Bovina.</p>
          <p>El sector de producción de carne bovina en Honduras está representado por ocho diferentes eslabones que son los criadores, engordadores o repastadores, empacadoras o procesador industrial, los mataderos municipales y rurales, los intermediarios, distribuidores, mayoristas y consumidores (Reyes Puerto et al., 2013).</p>
          <p>En el sector primario podemos encontrar a los criadores y los engordadores o repastadores. Los criadores están clasificados en criador puro y criador comercial. Los últimos se diferencian de los primeros ya que producen animales encastados principalmente de razas cebuinas.</p>
          <p>Por otro lado, los criadores puros se caracterizan por la producción de razas cebuinas y europeas. Algunos de estos productores pasan sus animales a los repastadores sirviendo estos como enlaces con las plantas procesadoras, aunque también están aquellos criadores que lo hacen directamente con las plantas.</p>
          <p>Para el año 2011, en Honduras se estimaba un total de 8,696 explotaciones que realizaban prácticas exclusivas de cría y engorde de los cuales 100 eran criadores puros y el resto criadores comerciales <strong>(OIRSA, 2011)</strong>.</p>
          
          <p>
          <strong>Facebook: {" "}</strong>
            <a className="external-link" href="https://www.facebook.com/pg/camarafomentoganaderodehonduras/" rel="noopener noreferrer" target="_blank">camarafomentoganaderodehonduras</a>
          </p>
          <p>
          <strong>Sitio web: {" "}</strong>
              <a className="external-link" href="http://www.cafogah.com" rel="noopener noreferrer" target="_blank">www.cafogah.com</a>
              </p>

          <h2 id="palma_africana">Sector Palma Africana</h2>

          <div className="content-pull content-pull--right">
            <div className="content-media">
              <div className="content-media-item">
                <Img fluid={handleSelectedImage("palma africana")[0]?.node.childImageSharp.fluid} alt="Sector Lácteo"/>
              </div>
            </div>
          </div>

    
          <p>Según cifras de la <a className="external-link" href="https://sag.gob.hn/" rel="noopener noreferrer" target="_blank">Secretaría de Agricultura y Ganadería (SAG)</a> indican que el área cultivada con palma africana creció de 147,000 a 190,000 hectáreas sembradas. El incremento es de 43,000 hectáreas o 29.2 puntos porcentuales.</p>
          <p>La siembra se concentra en <strong>Colón, Cortés, Atlántida y Yoro</strong>. Asimismo, la producción de fruta es de 2.4 millones de toneladas y 480,000 toneladas de aceite.</p>
          <p>Las empresas <strong>AGROPALMA y JAREMAR</strong> son organizaciones afiliadas a la FENAGH.</p>
          <p><strong>AGROPALMA</strong> es una empresa que se instala en el valle del aguan en el año 1992, contando con una trayectoria de más 20 años produciendo aceite de palma para el mundo.</p>

          <p>Cifras: </p>
          <ul>
            <li>Producción de 20 toneladas por hectárea</li>
            <li>La planta extractora con capacidad de 150 mil toneladas de fruta al año <b>(80% en producción propia)</b></li>
            <li>La estructura de exportación en Trujillo permite exportar 95% de la producción a mercados en Latinoamérica y Europa</li>
          </ul>
          <p>
            <strong>Sitio web: {" "}</strong>
            <a className="external-link" href="https://www.mapa-solidaridad.org/agropalma/" rel="noopener noreferrer" target="_blank">www.mapa-solidaridad.org/agropalma</a>
          </p>
          <p><strong>Grupo Jaremar</strong> y sus empresas filiales que lo conforman, son empresas dedicadas al cultivo de palma aceitera, extracción, procesamiento y comercialización de todos sus derivados reconociendo que es un rubro que beneficia el desarrollo socioeconómico , permite la diversificación de productos ,la producción de biocombustibles la generación de energía renovable, entre otros, mismos que pueden desencadenar en prácticas como la deforestación, explotación y otras prácticas no sostenible con consecuencias adversas a la biodiversidad y medio ambiente. Grupo Jaremar mediante esta política se compromete a trabajar conjuntamente con los proveedores de fruta-productores, procesadores, ONG, bancos y otras partes interesadas para contribuir a la transformación de la industria con prácticas de beneficio social y ambiental para la región.</p>
          <p>
            <strong>Sitio web: {" "}</strong>
            <a className="external-link" href="https://jaremar.com/" rel="noopener noreferrer" target="_blank">jaremar.com</a>
          </p>
      

          <h2 id="porcino">Sector Porcino</h2>

          <div className="content-media">
            <div className="content-media-item">
              <Img fluid={handleSelectedImage("porcino")[0]?.node.childImageSharp.fluid} alt="Sector Lácteo"/>
            </div>
          </div>
     
          <p>El sector porcino de Honduras está representado por la <strong>Asociación Nacional de Porcicultores de Honduras (ANAPOH)</strong> organización afiliada a la FENAGH. Honduras produce 35 millones de libras de carne de cerdo al año y se consumen 116 millones de libras por que se tienen que importar el 70% para satisfacer la demanda nacional.</p>

   

          <h2 id="sal">Sector Sal</h2>

          <div className="content-media">
            <div className="content-media-item">
              <Img fluid={handleSelectedImage("sal")[0]?.node.childImageSharp.fluid} alt="Sector Lácteo"/>
            </div>
          </div>

    
          <p>El sector sal en Honduras está representado por la <strong>Asociación de Productores de Sal de Honduras (ASOPROSALH)</strong> organización afiliada a la FENAGH.</p>
          <p>La producción de sal a nivel nacional es de un millón de quintales, este rubro genera más de 15 mil empleos directos.</p>
    

          <h2 id="granos">Sector Granos Básicos</h2>

          <div className="content-media">
            <div className="content-media-item">
              <Img data-aos="fade-down" fluid={handleSelectedImage("granos")[0]?.node.childImageSharp.fluid} alt="Sector Lácteo"/>
            </div>
          </div>

    
          <p>El sector de granos básicos de Honduras está representado por la <strong>Asociación Nacional de Agricultores y Productores de Granos Básicos de Honduras (PROGRANO)</strong> organización afiliada a la FENAGH.</p>
          <p>En la reciente cosecha de maíz 2021-2021 Honduras alcanzó producir 12 millones de quintales de maíz.</p>
      
        </Content>
      </Constrain>
    </Layout>
  )
}

export default ProjectsPage