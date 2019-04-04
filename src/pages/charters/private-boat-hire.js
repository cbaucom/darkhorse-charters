import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Container from "../../components/styles/container"

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1.25rem;
  line-height: 2;
  margin: 0 0 1.5em;
  width: 100%;
  td {
    border-bottom: 2px solid rgba(0, 0, 0, 0.05);
    padding: 0.5rem 0.5rem 0.5rem 0;
  }
  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`

export default () => (
  <Layout>
    <SEO title="Private Boat Hire" />
    <Container>
      <div className="pricing-table">
        <h2>Private Boat Hire</h2>

        <Table>
          <tbody>
            <tr>
              <td>
                <strong>20% Deposit Required for All Charters</strong>
              </td>
              <td />
            </tr>
            <tr>
              <td>
                <strong>Ground Fish Charters</strong>
                <br /> 7-9 hours <br />
              </td>
              <td>$1300</td>
            </tr>
            <tr>
              <td>
                <strong>Bass Charters</strong>
                <br /> 5-8 hours <br />
              </td>
              <td>$800 - $1000</td>
            </tr>
            <tr>
              <td>
                <strong>Commercial Tuna Charters</strong>
                <br /> 1-2 days <br />
              </td>
              <td>$1600 - $2500</td>
            </tr>
            <tr>
              <td>
                <strong>Private Boat Hire</strong>
                <br /> 1 day <br />
              </td>
              <td>$2000</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="images" />
    </Container>
  </Layout>
)
