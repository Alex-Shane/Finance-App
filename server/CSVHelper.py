#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Jun 12 11:55:07 2023

@author: Alex
"""

import pandas as pd
import yfinance as yf
#from Scraper import Scraper 

def updateIndustriesInCSV(file_name):
    """
    Update the 'Industry' column of a CSV file to match the industries stored in stocks on Yahoo Finance.

    Args:
       csv_file (str): The path or file object of the CSV file to be updated.
                       The CSV file should have a column header named 'Symbol' representing the stock tickers.
   """
    df = pd.read_csv(file_name)
    tickers = df['Symbol'].tolist()
    index = 0
    for ticker in tickers:
        try:
            industry = yf.Ticker(ticker).info['industry']
            df.loc[index, 'Industry'] = industry
        except:
            print(ticker)
            pass
        index = index + 1
    df.to_csv(file_name, index = False)

def sortByIndustry(file_name, industry):
    df = pd.read_csv(file_name)
    #df = df[df.Industry == industry]
    filtered_df = df[df['Industry'].str.contains(industry, case=False, na=False)]
    return filtered_df['Symbol'].tolist()

def cleanCSV(file_name):
    """
    Clean a CSV file by deleting all stocks with '^' character in their ticker and updating discrepancies in tickers
    to match the tickers on Yahoo Finance.

    Args:
        csv_file (str): The path or file object of the CSV file to be cleaned.
                    The CSV file should have a column header named 'Symbol' representing the stock tickers.
    """
    df = pd.read_csv(file_name)
    df = df[~df.Symbol.str.contains('\^')]
    tickers = df['Symbol'].tolist()
    df = df.reset_index(drop = True)
    index = 0
    for ticker in tickers:
        if '/' in ticker:
            ticker = ticker.replace('/', '-')
            df.loc[index, 'Symbol'] = ticker
        index = index + 1
    df.to_csv(file_name, index = False)
    
def getIndustriesInCSV(file_name):
    df = pd.read_csv(file_name)['Industry'].tolist()
    industries = []
    [industries.append(x) for x in df if x not in industries]
    return industries

    
# =============================================================================
# def makeCSV(exchange):
#     """
#     Create a CSV file for storing stocks from a specific exchange.
# 
#     Args:
#         exchange (str): The name of the exchange for which the CSV file is being created.
#     """
#     df = pd.DataFrame()
#     if exchange == 'SP500':
#         tickers = Scraper.getSP500Tickers()
#         file_name = 'SP500_stocks.csv'
#     elif exchange == 'Dow':
#         tickers = Scraper.getDOWTickers()
#         file_name = 'Dow_Jones_stocks.csv'
#     else:
#         tickers = Scraper.getNASDAQTickers()
#         file_name = 'NASDAQ_100_stocks.csv'
#     df['Symbol'] = tickers
#     industries = list()
#     for ticker in tickers:
#         try:
#             industries.append(yf.Ticker(ticker).info['industry'])
#         except:
#             industries.append('Miscellaneous')
#     df['Industry'] = industries
#     df.to_csv(file_name, index = False)
# =============================================================================
